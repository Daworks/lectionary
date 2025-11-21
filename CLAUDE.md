# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Korean Lectionary (성서일과) web application that displays liturgical calendar readings for Korean Protestant churches. The project is a collaboration between 도서출판KMC (KMC Press) and 디자인아레테 (Design Arete). It's a static web application built with Vite that generates annual lectionary schedules.

## Development Commands

### Build and Development
- `npm run dev` - Start Vite development server for local development (default port: 5173)
- `npm run build` - Build for production (outputs to `dist/` directory)
- No test scripts are currently configured

### Package Management
Multiple package managers are present in the repository. Use pnpm for consistency:
- Primary: `pnpm` (pnpm-lock.yaml present)
- Also available: npm, yarn (yarn.lock present)

## Architecture

### Build System
- **Vite** as the build tool and dev server
- **Rollup** for bundling (via Vite)
- **Sass** for CSS preprocessing
- Single-page application with `index.html` as entry point

### File Structure
- `index.html` - Main HTML template with embedded Korean lectionary content for 2026
- `app.js` - Main JavaScript module (34 lines):
  - Feather icons initialization
  - Month navigation (`goMonth()` function) - smooth scrolls to selected month
  - Liturgical color styling - dynamically applies CSS classes based on Korean text (흰색/녹색/보라색/적색/흑색)
  - Smooth scrolling functionality
- `app.scss` - Main stylesheet:
  - Korean web font (Spoqa Han Sans Neo) definitions
  - Responsive layout for lectionary display
  - Liturgical color classes (bg-white, bg-green, bg-purple, bg-red, bg-black)
- `vite.config.mjs` - Vite configuration with path aliases and build settings
- `dist/` - Production build output directory
- `asset/` - Static assets (fonts, images)
- Historical files: `2020.html`, `kmc.html`, `index2025.html`, PDF/HWP documents (2020-2023)

### Key Features
- **Korean Localization**: All content and UI in Korean
- **Liturgical Colors**: Dynamic color coding based on church calendar
- **Month Navigation**: JavaScript-powered month jumping functionality
- **Responsive Design**: Mobile-friendly layout
- **Static Generation**: Builds to static HTML/CSS/JS for easy deployment

### Dependencies
- `feather-icons` - Icon library for UI elements
- Development dependencies: Vite, Rollup, Sass

### Deployment
The built application (`dist/index.html`) can be served as a static website. The README indicates users should download and extract files, then run `dist/index.html`.

## Important Notes

- **Content Copyright**: All lectionary content is provided by 도서출판KMC and should be treated as copyrighted material
- **Current Year**: The active file is `index.html` displaying 2026 lectionary schedule
- **Historical Versions**: Previous years available as separate files (2020.html, index2025.html, kmc.html) and PDF/HWP documents
- **Year Updates**: When updating for new years, the main `index.html` should be updated with new lectionary data
- **ES Modules**: Uses ES module syntax (`"type": "module"` in package.json)
- **Analytics**: Google Analytics (G-XHJTK635H0) and Google Tag Manager (GTM-NDKNX4M) are integrated
- **Metadata**: OpenGraph and Twitter Card metadata configured for social sharing