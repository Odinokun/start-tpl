# Front-end starter template

Starter template I use for static website markup: Pug templates, SCSS, vanilla JS or jQuery, built with Gulp 4.

## What it does
- Pug pages from shared sections and elements
- SCSS split into core, elements, sections and pages, with Autoprefixer, CSSO minification and sourcemaps
- JS bundled with Browserify, minified, checked with ESLint
- SVG sprite built from separate icons
- Image optimization (imagemin, pngquant)
- BrowserSync dev server with live reload
- Swiper, Fancybox and normalize.css included

## Getting started
```bash
npm install
npx gulp
```

## Structure
* fonts
* img
* js
* php
* pug
    * elements (buttons, pagination, etc)
    * sections (header, footer, main page sections, etc.)
    * pages
* sprite
* style
  * core (base styles)
    * fonts
    * variables
    * mixins
    * base
  * elements
  * pages
  * sections
* vendors (custom scripts, styles, etc. - NOT npm scripts - and includes in foundation.js and foundation.css)
* video
