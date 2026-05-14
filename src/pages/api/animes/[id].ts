import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { id } = req.query;
    const animeId = parseInt(id as string, 10);
    if (Number.isNaN(animeId)) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    const anime = await prisma.anime.findUnique({
      where: { id: animeId },
      include: { episodes: { orderBy: { createdAt: 'asc' } } }
    });

    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' });
    }

    return res.status(200).json(anime);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
