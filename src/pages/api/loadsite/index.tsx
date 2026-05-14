import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as cheerio from 'cheerio';
import prisma from '../../../lib/db';

type BsxItem = {
	index: number;
	href: string;
	imgSrc: string;
	title: string;
	sources?: { value: string; label: string | null }[];
};

type Data = {
	success: boolean;
	count?: number;
	items?: BsxItem[];
	error?: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method !== 'GET') {
		return res.status(405).json({ success: false, error: 'Method Not Allowed' });
	}

	try {
		const pageParam = req.query.page;
		const pageNumber = parseInt(pageParam as string, 10);
		const url =
			!pageParam || Number.isNaN(pageNumber) || pageNumber <= 1
				? 'https://luciferdonghua.in/'
				: `https://luciferdonghua.in/page/${pageNumber}/`;

		const response = await axios.get(url, {
			// Spoof a browser user agent; some sites block default Node UA
			headers: {
				'User-Agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
				Accept:
					'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
			},
			// Follow redirects if any
			maxRedirects: 5,
		});

		const html = response.data as string;
		const $ = cheerio.load(html);

		// Narrow down to cards inside div.excstf with class "bsx"
		const cards = $('div.excstf .bsx');

		if (!cards.length) {
			return res.status(200).json({
				success: true,
				count: 0,
				items: [],
			});
		}

		const items: BsxItem[] = [];

		cards.each((i, el) => {
			const element = $(el);

			// Anchor that likely wraps the card
			const anchor = element.find('a').first();
			const img = element.find('img').first();
			const heading = element.find('h2').first();

			const href = anchor.attr('href') || '';
			// Some sites use data-src for lazy-loaded images; fall back to that.
			const imgSrc = img.attr('src') || img.attr('data-src') || '';
			const title = heading.text().trim();

			items.push({
				index: i,
				href,
				imgSrc,
				title,
			});
		});

		// For each scraped card:
		// 1) Upsert the Anime row (by sourceUrl = href).
		// 2) Load the href page, find div.mobius > select[name="mirror"] > option.
		// 3) For each option, upsert a Source row tied to all episodes of that anime.
		for (const item of items) {
			if (!item.href) continue;

			// Ensure Anime exists / is updated
			const anime = await prisma.anime.upsert({
				where: {
					// sourceUrl is unique in the schema
					sourceUrl: item.href,
				},
				update: {
					name: item.title || item.href,
					image: item.imgSrc || null,
				},
				create: {
					name: item.title || 'Untitled',
					image: item.imgSrc || null,
					sourceUrl: item.href,
				},
			});

			try {
				// Load the detail page referenced by href
				const detailRes = await axios.get(item.href, {
					headers: {
						'User-Agent':
							'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
						Accept:
							'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
					},
					maxRedirects: 5,
				});

				const detailHtml = detailRes.data as string;
				const $$ = cheerio.load(detailHtml);

				const options = $$('div.mobius select[name="mirror"] option');
				if (!options.length) {
					continue;
				}

				const sources: { value: string; label: string | null }[] = [];
				options.each((_, el) => {
					const opt = $$(el);
					const value = (opt.attr('value') || '').trim();
					if (!value) return;
					const label = opt.text().trim() || null;
					sources.push({ value, label });
				});

				if (!sources.length) {
					continue;
				}

				// Attach the collected sources to the in-memory item so
				// the client can see which mirrors were discovered.
				item.sources = sources;
				console.log(`Found ${sources.length} sources for anime ID ${anime.id}`);
				console.log(sources);
				// Attach sources to all episodes of this anime.
				const episodes = await prisma.episode.findMany({
					where: { animeId: anime.id },
				});

				if (!episodes.length) {
					continue;
				}

				await Promise.all(
					episodes.flatMap((episode) =>
						sources.map((src) =>
							prisma.source.upsert({
								where: {
									episodeId_value: {
										episodeId: episode.id,
										value: src.value,
									},
								},
								update: {
									label: src.label || null,
								},
								create: {
									episodeId: episode.id,
									value: src.value,
									label: src.label || null,
								},
							})
						)
					)
				);
			} catch (innerErr: any) {
				console.error(
					'Error fetching or parsing detail page for href',
					item.href,
					innerErr?.message || innerErr
				);
			}
		}

		return res.status(200).json({
			success: true,
			count: items.length,
			items,
		});
	} catch (error: any) {
		console.error('Error fetching luciferdonghua.in:', error?.message || error);
		return res.status(500).json({
			success: false,
			error: 'Failed to fetch or parse remote HTML',
		});
	}
}

