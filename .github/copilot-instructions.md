# Copilot Instructions: CI/CD Pipeline Setup

## Goal
Set up a complete CI/CD pipeline using GitHub Actions that:
- Automatically deploys the app to Vercel on every push to `main`
- Runs Supabase migrations on every deployment to `main`
- Enforces pull requests (PRs) as the only way to merge into `main`
- Runs automated checks on every PR before merge is allowed

## Branch Protection Rules (GitHub Settings)
Configure `main` branch protection with these rules:
- Require pull request reviews before merging (at least 1 approval)
- Require status checks to pass before merging:
    - `ci / test` (lint + unit tests)
    - `ci / build` (production build check)
- Dismiss stale PR reviews when new commits are pushed
- Do not allow direct pushes to `main`
- Require branches to be up to date before merging

## GitHub Actions Workflows Needed

### 1. PR Check Workflow
File: `.github/workflows/pr-check.yml`
- Trigger: `on: pull_request` targeting `main`
- Jobs:
    - Install dependencies (use cache for node_modules)
    - Run linter (ESLint or equivalent)
    - Run unit/integration tests
    - Run a production build (`npm run build`) to catch build errors
    - Report status back to the PR (used by branch protection)

### 2. Deploy Workflow
File: `.github/workflows/deploy.yml`
- Trigger: `on: push` to `main` branch only
- Jobs (run in sequence, not parallel):
    1. `migrate` — Run Supabase DB migrations via Supabase CLI
         - Use `supabase db push` with `--linked` flag
         - Authenticate using `SUPABASE_ACCESS_TOKEN` and `SUPABASE_PROJECT_ID` secrets
    2. `deploy` (depends on `migrate`) — Deploy to Vercel
         - Use `vercel --prod` CLI
         - Authenticate using `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` secrets

## Required GitHub Secrets
Instruct the user to add these under Settings > Secrets and Variables > Actions:
- `VERCEL_TOKEN` — from Vercel account settings
- `VERCEL_ORG_ID` — from Vercel project settings
- `VERCEL_PROJECT_ID` — from Vercel project settings
- `SUPABASE_ACCESS_TOKEN` — from Supabase account settings
- `SUPABASE_PROJECT_ID` — from Supabase project dashboard
- `SUPABASE_DB_PASSWORD` — Supabase database password (if needed for migrations)

## Constraints & Preferences
- Use Node.js 20 (LTS) as the runner environment
- Cache `node_modules` using `actions/cache` to speed up workflows
- Use `actions/checkout@v4` and `actions/setup-node@v4`
- The deploy job must NEVER run on PRs — only on direct pushes to `main`
- Migrations must complete successfully before Vercel deploy starts
- Add a summary step at the end of deploy that prints the Vercel deployment URL
- Keep workflows DRY — extract repeated steps into composite actions if needed

## Output Expected
Generate the full YAML for both workflow files, ready to copy into the repo.
Also generate a README section explaining the CI/CD flow and how to set it up.