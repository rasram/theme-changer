# 🎨 Interactive Website

An interactive website built with Vite featuring a custom build command.

## Features

- 🎭 **Theme Changer** - Click colors to change the site theme
- 🔢 **Counter** - Interactive counter with animations
- 📝 **Quick Notes** - Add and manage notes (click to complete, × to delete)
- ✨ **Animation Box** - Trigger fun animations
- 🖌️ **Mini Canvas** - Draw with customizable brush

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

This will open the site at `http://localhost:3000`

### Build

**Standard Build:**
```bash
npm run build
```
Outputs to `dist/` folder.

**Custom Build (Recommended):**
```bash
npm run build:custom
```
Outputs to `dist-custom/` folder with enhanced minification.

### Preview Build

Preview the standard build:
```bash
npm run preview
```

Preview the custom build:
```bash
npm run preview:custom
```

## Hosting

After building, you can host the contents of the `dist/` or `dist-custom/` folder on any static hosting service:

- **Netlify** - Drag and drop the dist folder
- **Vercel** - Connect your repo and set build command
- **GitHub Pages** - Push dist contents to gh-pages branch
- **Any static server** - Just serve the HTML files

## Project Structure

```
test1/
├── index.html          # Main HTML file
├── src/
│   ├── main.js         # JavaScript logic
│   └── style.css       # Styles
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies & scripts
└── README.md           # This file
```

## Build Commands Summary

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Standard production build |
| `npm run build:custom` | Custom build with enhanced options |
| `npm run preview` | Preview standard build |
| `npm run preview:custom` | Preview custom build |
