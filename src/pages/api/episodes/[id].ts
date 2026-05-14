import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { id } = req.query;
    const episodeId = parseInt(id as string, 10);
    if (Number.isNaN(episodeId)) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    const episode = await prisma.episode.findUnique({
      where: { id: episodeId },
      include: { anime: true, sources: true }
    });

    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }

    return res.status(200).json(episode);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
