# Setting up a VitePress Documentation Site

## 1. Creating a GitHub Repository

1. Go to GitHub (github.com)
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Fill in the repository details:
   - Choose your organization/account
   - Enter repository name
   - Add description (optional)
   - Choose Public/Private
   - Do not initialize with README
5. Click "Create repository"

## 2. Branch Setup

After creating the repository, set up the branch structure:

```bash
# Clone the empty repository
git clone [your-repository-url]
cd [repository-name]

# Create initial commit
touch README.md
git add README.md
git commit -m "Initial commit"

# Rename main branch to production
git branch -m main production
git push -u origin production

# Create UAT branch
git checkout -b uat
git push -u origin uat
```

## 3. Project Structure Setup

Create the necessary directories and files:

```bash
# Create project structure
mkdir docs
mkdir -p .vitepress/theme

# Create main documentation file
echo "# Welcome to Documentation" > docs/index.md

# Create VitePress configuration file
touch .vitepress/config.ts

# Create theme files
touch .vitepress/theme/custom.css
touch .vitepress/theme/index.ts
```

## 4. Node.js Installation & Verification

1. Download Node.js:
   - Visit [nodejs.org](https://nodejs.org)
   - Download LTS version
   - Follow installation wizard

2. Verify installation:

```bash
node --version
npm --version
```

## 5. VitePress Installation

```bash
# Initialize Node.js project
npm init -y

# Install VitePress
npm install -D vitepress

# Install GitHub Pages deployment tool
npm install -D gh-pages
```

## 6. Configuration Setup

1. Update `package.json`:

```json
{
  "scripts": {
    "dev": "vitepress dev",
    "build": "vitepress build",
    "preview": "vitepress preview",
    "deploy": "gh-pages -d .vitepress/dist"
  }
}
```

1. Configure `.vitepress/config.ts`:

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Your Site Title",
  description: "Site description",
  base: '/repository-name/',  // Important for GitHub Pages
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' }
        ]
      }
    ]
  }
})
```

1. Setup custom theme in `.vitepress/theme/custom.css`:

```css
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
}

.vp-doc h1 {
  color: var(--vp-c-brand);
}
```

1. Configure theme in `.vitepress/theme/index.ts`:

```typescript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

## 7. Development

Start local development server:

```bash
npm run dev
```

## 8. Building and Deployment

1. Build the site:

```bash
npm run build
```

1. Push changes to UAT:

```bash
git add .
git commit -m "Update documentation"
git push origin uat
```

1. Deploy to GitHub Pages:

```bash
npm run deploy
```

## 9. GitHub Pages Setup

1. Go to repository Settings
2. Navigate to Pages section
3. Configure:
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
4. Save changes

## 10. GitHub Actions Setup (Automated Deployment)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [production]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm
      - run: npm ci
      - name: Build
        run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: .vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

## 11. Working Flow

1. Make changes in UAT branch
2. Test locally using `npm run dev`
3. Build site with `npm run build` if planning to use `npm run deploy`
4. Otherwise, commit and push to UAT
5. Create Pull Request from UAT to production
6. After review and merge, GitHub Actions will automatically deploy

## Troubleshooting

1. If VitePress doesn't recognize configuration:
   - Rename config file to `config.mjs`
   - Or add `"type": "module"` to package.json

2. If GitHub Pages deployment fails:
   - Verify base URL in VitePress config matches repository name
   - Ensure GitHub Pages is enabled and configured correctly
   - Check GitHub Actions permissions

3. If local development server fails:
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`
