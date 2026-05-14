import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { load } from 'cheerio';
import prisma from '../../../lib/db';
import { sanitizeUrl } from '../../../server/sanitize';

const RSS_URL = 'https://luciferdonghua.in/feed';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await scrapeRssAndEpisodes();
    return res.status(200).json({ message: 'Scrape completed' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function scrapeRssAndEpisodes() {
  const res = await axios.get(RSS_URL, { timeout: 15000 });
  const parser = new XMLParser({ ignoreAttributes: false });
  const json = parser.parse(res.data);

  const items = json.rss?.channel?.item || [];

  for (const item of items) {
    const title = item.title as string;
    const link = sanitizeUrl(item.link as string);
    let image: string | null = null;

    if (item['media:thumbnail']?.['@_url']) {
      image = sanitizeUrl(item['media:thumbnail']['@_url'] as string);
    } else if (item.description) {
      const $ = load(item.description as string);
      const imgSrc = $('img').first().attr('src');
      if (imgSrc) image = sanitizeUrl(imgSrc);
    }

    if (!link) continue;

    const anime = await prisma.anime.upsert({
      where: { sourceUrl: link },
      update: { name: title, image: image || undefined },
      create: { name: title, image: image || undefined, sourceUrl: link }
    });

    try {
      const episodePageRes = await axios.get(link, { timeout: 15000 });
      const $ = load(episodePageRes.data as string);

      const episodeLinks: { title: string; url: string | null }[] = [];
      $('a').each((_, el) => {
        const href = $(el).attr('href');
        const text = $(el).text().trim();
        if (href && /episode|ep\s*\d+/i.test(text)) {
          episodeLinks.push({ title: text || 'Episode', url: sanitizeUrl(href) });
        }
      });

      for (const ep of episodeLinks) {
        const streamUrl = ep.url;
        if (!streamUrl) continue;

        await prisma.episode.upsert({
          where: {
            animeId_episodeTitle: {
              animeId: anime.id,
              episodeTitle: ep.title
            }
          },
          update: { streamUrl },
          create: {
            animeId: anime.id,
            episodeTitle: ep.title,
            streamUrl
          }
        });
      }
    } catch (err: any) {
      console.error('Error scraping episodes for', link, err.message);
    }
  }
}
