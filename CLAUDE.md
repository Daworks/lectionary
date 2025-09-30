# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Korean Lectionary (성서일과) web application that displays liturgical calendar readings for Korean Protestant churches. The project is a collaboration between 도서출판KMC (KMC Press) and 디자인아레테 (Design Arete). It's a static web application built with Vite that generates annual lectionary schedules.

## Development Commands

### Build and Development
- `npm run dev` - Start Vite development server for local development
- `npm run build` - Build for production (outputs to `dist/` directory)
- No test scripts are currently configured

### Package Management
The project uses multiple package managers:
- `package.json` with npm/yarn
- `pnpm-lock.yaml` indicates pnpm usage
- `yarn.lock` indicates yarn usage

## Architecture

### Build System
- **Vite** as the build tool and dev server
- **Rollup** for bundling (via Vite)
- **Sass** for CSS preprocessing
- Single-page application with `index.html` as entry point

### File Structure
- `index.html` - Main HTML template with embedded Korean lectionary content
- `app.js` - Main JavaScript module handling:
  - Feather icons initialization
  - Month navigation (`goMonth()` function)
  - Liturgical color styling (흰색/녹색/보라색/적색/흑색)
  - Smooth scrolling functionality
- `app.scss` - Main stylesheet with:
  - Korean web font (Spoqa Han Sans Neo) definitions
  - Responsive layout for lectionary display
  - Liturgical color classes (bg-white, bg-green, bg-purple, bg-red, bg-black)
- `dist/` - Production build output directory
- `asset/` - Static assets (fonts, images)

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

- Content is provided by 도서출판KMC and should be treated as copyrighted material
- The project generates annual lectionary schedules (currently 2025년/2025 year)
- Historical versions exist as separate HTML files (2020.html, kmc.html) and PDF documents
- Uses ES modules (`"type": "module"` in package.json)
- Google Analytics integration is configured in the HTML