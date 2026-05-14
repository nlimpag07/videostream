import axios from 'axios';

// In Next.js we call our own API routes, so baseURL can be empty (relative).
const client = axios.create({
  baseURL: ''
});

export async function listAnimes(page: number, pageSize: number) {
  const res = await client.get('/api/animes', { params: { page, pageSize } });
  return res.data;
}

export async function getAnime(id: number) {
  const res = await client.get(`/api/animes/${id}`);
  return res.data;
}

export async function getEpisode(id: number) {
  const res = await client.get(`/api/episodes/${id}`);
  return res.data;
}

export async function triggerScrape() {
  const res = await client.post('/api/scrape');
  return res.data;
}
