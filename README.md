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

## CI/CD Pipeline

Every push to `main` triggers an automated deploy via GitHub Actions:

```
push to main
  └─ migrate   →  npx prisma migrate deploy  (Supabase PostgreSQL)
       └─ deploy  →  vercel deploy --prod
```

PRs targeting `main` must pass two status checks before merge is allowed:
- `ci / test` — ESLint
- `ci / build` — Production build

### Required GitHub Secrets

Add these under **Settings → Secrets and Variables → Actions**:

| Secret | Where to find it |
|--------|-----------------|
| `DATABASE_URL` | Supabase → Project Settings → Database → **Transaction pooler** URI (port `6543`, `?pgbouncer=true`) — used by the app at runtime |
| `DIRECT_URL` | Supabase → Project Settings → Database → **Direct connection** URI (port `5432`) — used by Prisma Migrate |
| `VERCEL_TOKEN` | Vercel → Account Settings → Tokens |
| `VERCEL_ORG_ID` | Vercel → Project Settings → General |
| `VERCEL_PROJECT_ID` | Vercel → Project Settings → General |

> **Important:** `DIRECT_URL` (port `5432`) is only used by Prisma Migrate in CI. The app itself always connects via the pooler (`DATABASE_URL`, port `6543`).

Also set both `DATABASE_URL` and `DIRECT_URL` in Vercel's environment variables (Production).

### Branch Protection Setup

In **GitHub → Settings → Branches → Add rule** for `main`:

- ✅ Require a pull request before merging (1 approval)
- ✅ Require status checks: `ci / test` and `ci / build`
- ✅ Dismiss stale reviews when new commits are pushed
- ✅ Require branches to be up to date before merging
- ✅ Do not allow bypassing the above settings

env.local:
# Connect to Supabase via connection pooling
DATABASE_URL="postgresql://postgres.qhnaigeqanbosvbxxfcn:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection to the database. Used for migrations
DIRECT_URL="postgresql://postgres.qhnaigeqanbosvbxxfcn:[YOUR-PASSWORD]@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"

prisma/schema.prisma:
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}