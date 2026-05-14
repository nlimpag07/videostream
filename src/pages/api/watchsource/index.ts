import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface ApiResponse {
  success: boolean;
  html?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const { src } = req.query;

  if (!src || typeof src !== 'string') {
    return res.status(400).json({ success: false, error: 'Missing or invalid src parameter' });
  }

  try {
    const response = await axios.get(src, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      },
      maxRedirects: 5,
    });

    const html = response.data as string;

    return res.status(200).json({ success: true, html });
  } catch (error: any) {
    console.error('Error fetching source URL:', src, error?.message || error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch source HTML',
    });
  }
}
