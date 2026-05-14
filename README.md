# VideoStream

An anime streaming web app built with Next.js, React, TypeScript, and PostgreSQL. It scrapes an RSS feed to populate an anime and episode catalogue, then streams episodes via embedded video players.

## Tech Stack

- **Next.js 16** — Full-stack framework (pages router, API routes)
- **React 19** — Frontend UI
- **TypeScript 6** — Type safety
- **Prisma 7** — ORM with PostgreSQL driver adapter
- **PostgreSQL 16** — Database (managed via Docker Compose)
- **styled-components 6** — CSS-in-JS styling
- **react-player** — Video playback
- **axios / cheerio / fast-xml-parser** — RSS scraper

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Setup

### 1. Install dependencies

```powershell
npm install
```

### 2. Configure environment

Create a `.env` file in the project root (or confirm it already exists):

```env
DATABASE_URL="postgresql://postgres:videostream@localhost:5432/videostream"
```

### 3. Start the database

```powershell
docker compose up -d
```

This starts a PostgreSQL 16 container on port `5432`. Data is persisted in a Docker volume (`postgres_data`).

### 4. Apply migrations

```powershell
npx prisma migrate deploy
```

### 5. Generate Prisma Client

```powershell
npx prisma generate
```

### 6. Start the dev server

```powershell
npm run dev
```

The app runs at **http://localhost:3000**.

## Populating Data

With the dev server running, trigger the RSS scraper to populate anime and episodes:

```powershell
curl.exe -X POST http://localhost:3000/api/scrape
```

Or via Postman / Thunder Client:
- Method: `POST`
- URL: `http://localhost:3000/api/scrape`

Scraping may take a moment depending on the number of feed entries.

## API Routes

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/animes` | List all anime (paginated) |
| `GET` | `/api/animes/[id]` | Get a single anime with episodes |
| `GET` | `/api/episodes/[id]` | Get a single episode with sources |
| `POST` | `/api/scrape` | Scrape RSS feed and upsert DB records |
| `GET` | `/api/watchsource` | Resolve a watch source URL |
| `GET` | `/api/loadsite` | Load external site data |

## Project Structure

```
prisma/
  schema.prisma       # Database schema (Anime, Episode, Source)
  migrations/         # Migration history
prisma.config.ts      # Prisma 7 config (datasource URL, migration path)
src/
  lib/db.ts           # Prisma Client singleton (pg adapter)
  pages/              # Next.js pages and API routes
  components/         # Reusable UI components
  server/             # Server-side utilities (sanitization)
docker-compose.yml    # PostgreSQL service definition
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |