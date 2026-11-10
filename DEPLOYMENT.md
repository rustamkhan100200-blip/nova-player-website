# NOVA PLAYER — Cloudflare Pages Deployment Guide

This project is built as a production-grade, zero-backend, high-performance static React Single Page Application (SPA) compatible with **Cloudflare Pages**, **Vercel**, **Netlify**, or any static CDN.

---

## 1. Quick Deploy via Cloudflare Dashboard (Git Integration)

1. **Log in to Cloudflare**:
   Navigate to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. **Select Repository**:
   Choose your repository containing the NOVA PLAYER website code.
3. **Configure Build Settings**:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or leave blank)
   - **Node.js version**: `18` or `20` (Environment variable `NODE_VERSION=20` if prompted)
4. **Deploy**:
   Click **Save and Deploy**. Cloudflare Pages will build the static assets and deploy globally on Cloudflare's Edge network within ~60 seconds.

---

## 2. Direct Upload via Wrangler CLI

If deploying directly without Git:

```bash
# 1. Install Wrangler CLI
npm install -g wrangler

# 2. Build the production bundle
npm run build

# 3. Deploy the dist directory to Cloudflare Pages
wrangler pages deploy dist --project-name=nova-player
```

---

## 3. Configuring the Direct APK Download URL

All download actions across the entire website are connected to a single centralized configuration:

1. Open `src/config/appConfig.ts`.
2. Locate `APK_DOWNLOAD_URL`:
   ```typescript
   // Empty string: displays the clear "Download coming soon" state and release notification modal
   export const APK_DOWNLOAD_URL: string = "";

   // When you upload your compiled APK to your asset host or CDN (e.g., R2, Cloudflare, S3):
   export const APK_DOWNLOAD_URL: string = "https://cdn.novaplayer.app/releases/nova-player-v1.0.0-beta.apk";
   ```
3. When `APK_DOWNLOAD_URL` has a direct URL, all buttons on the website initiate a direct file transfer of the APK file without third-party redirects.
4. Update the `sha256`, `apkSize`, and `version` fields in `APP_CONFIG` whenever packaging a new release.

---

## 4. Edge Headers & SPA Routing

The project includes:
- `public/_headers`: Enforces strict security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) and sets immutable 1-year cache headers on static hashed `/assets/*`.
- `public/_redirects`: Provides standard SPA fallback (`/* /index.html 200`) to guarantee error-free URL handling across Cloudflare's global edge network.
