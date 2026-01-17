# GitHub Pages Deployment Guide

This guide explains how to deploy the AYRA gemstone profile application to GitHub Pages.

## 🚀 Quick Deploy

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

The repository is set up with automatic deployment. Every push to the `main` branch will automatically build and deploy to GitHub Pages.

**Steps:**

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub: `https://github.com/Vrush-Open-Source/ayragemz-profile`
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push your changes:**

   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **Wait for deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the deployment workflow run
   - Once completed, your site will be live at: `https://vrush-open-source.github.io/ayragemz-profile/`

### Option 2: Manual Deployment

If you prefer to deploy manually:

```bash
npm run deploy
```

This will:

1. Build the production version
2. Push the `dist` folder to the `gh-pages` branch
3. Make it available at: `https://vrush-open-source.github.io/ayragemz-profile/`

## 📝 What Was Configured

### 1. Vite Configuration (`vite.config.ts`)

- Added `base: '/ayragemz-profile/'` for production builds
- This ensures all assets load correctly from the GitHub Pages subdirectory

### 2. Package Scripts (`package.json`)

- Added `predeploy` script that runs before deployment
- Added `deploy` script using `gh-pages` package

### 3. GitHub Actions Workflow (`.github/workflows/deploy.yml`)

- Automatically builds and deploys on push to `main`
- Uses official GitHub Pages actions
- Handles Node.js setup, dependencies, and deployment

### 4. SPA Routing Support

- Added `public/404.html` for handling deep links
- Added redirect script in `index.html` to restore proper routes
- This ensures routes like `/alignment-guide` work correctly

## 🔧 Local Development

During local development, the app runs without the `/ayragemz-profile/` base path:

```bash
npm run dev
```

The app will be available at `http://localhost:8080` (or port 8081 if 8080 is busy)

## 🌐 Production Build Testing

To test the production build locally:

```bash
npm run build
npm run preview
```

This will build with the GitHub Pages base path and preview it locally.

## 📦 Build Output

The build creates a `dist` folder with:

- Optimized and minified JavaScript
- Optimized CSS
- All assets with hashed filenames for cache busting
- 404.html for SPA routing support

## 🔄 Updating the Deployment

After making changes:

1. **Automatic (GitHub Actions):**

   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

   The deployment happens automatically!

2. **Manual:**
   ```bash
   npm run deploy
   ```

## 🎯 Live URL

Once deployed, your application will be available at:

**https://vrush-open-source.github.io/ayragemz-profile/**

## ⚙️ Troubleshooting

### Assets not loading

- Make sure the `base` path in `vite.config.ts` matches your repository name
- Clear browser cache and try again

### Routes not working

- Ensure GitHub Pages is set to use **GitHub Actions** as the source
- Check that 404.html exists in the deployed files

### Build fails in GitHub Actions

- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Make sure `NODE_ENV=production` is set

### Deep links (direct URLs) return 404

- This is expected behavior initially
- The 404.html will redirect to the correct route
- Make sure the redirect scripts are in place in both index.html and 404.html

## 🎨 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## 📊 Monitoring Deployments

- Go to the **Actions** tab to see deployment history
- Each deployment shows build time, status, and logs
- Click on any workflow run to see detailed logs

---

**Note:** The first deployment might take a few minutes. Subsequent deployments are typically faster (2-3 minutes).
