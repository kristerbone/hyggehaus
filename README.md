# HyggeHaus - Coming Soon

A Next.js application for HyggeHaus, marrying Scandinavian hygge with house & techno music through bespoke lighting.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Responsive design** with mobile-first approach
- **Optimized images** using Next.js Image component
- **Warm autumnal color palette** (sunrise/sunset hues)
- **Imagery showcase**: Diffused lighting, fires, disco lights, and vinyl records
- **Smooth animations** and ambient lighting effects

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main coming soon page
│   └── globals.css     # Global styles
├── package.json
├── tsconfig.json
└── next.config.js
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy with AWS Amplify

This app uses a **single-app** build (not a monorepo). The repo includes `amplify.yml` for Amplify Hosting.

**If the app was created as a monorepo**, switch it to a single app:

1. Open [AWS Amplify Console](https://console.aws.amazon.com/amplify/) and select your app.
2. Go to **App settings** (left sidebar) → **General**.
3. Under **Build settings**, click **Edit** (or **Hosting** → **Build settings**).
4. Ensure **"Monorepo"** / **"My app is a monorepo"** is **not** selected. The app root should be the repository root (no subfolder).
5. If you see **Environment variables**, remove or leave blank `AMPLIFY_MONOREPO_APP_ROOT` (it’s only for monorepos).
6. Save and **Redeploy** the app (e.g. **Hosting** → **Run build** or push a commit).

**New app:** When connecting the repo, do **not** check “My app is a monorepo”; use the default (repository root as app root).
