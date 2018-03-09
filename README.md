# Front-end startup template

Author: <a href="http://odinokun.com" target="_blank">Odinokun</a>

## Technologies:
* Gulp 4.0
* Pug(Jade)
* Sass(Scss)
* JS+jQuery

## How to use:
1. install node.js(8.9.4)
2. clone this repo
3. cd path/to/this repository
4. npm i gulpjs/gulp-cli -g  // Install the latest Gulp CLI tools globally
5. npm i
6. run "gulp" command to start

## Structure:
* fonts
* img
* js
* php
* pug
    * elements (мелкие элементы, например кнопки или пагинация)
    * sections (крупные элементы, например header, footer, секции главной страницы)
    * pages
* sprite
* style
  * core (базовые стили)
    * fonts
    * variables
    * mixins
    * base
  * elements (мелкие элементы, например кнопки или пагинация)
  * pages (стили для страниц сайта)
  * sections (крупные элементы, например header, footer и секции главной страницы)
* vendors (сюда заливаем все чего нет в NPM и подключаем эти в файлы foundation)
* video
