'use strict';

module.exports = function() {

  $.gulp.task('sprite:svg', function() {
    return $.gulp.src('./src/sprite/*.svg')
      // минифицируем наш svg
      .pipe($.gp.svgmin({}))

      // удаляем из него лишние атрибуты
      .pipe($.gp.cheerio({
        run: function ($) {
          // не удаляем fill если значение none
          $('[fill]').each(function () {
            if(this.attribs.fill.toUpperCase()!='NONE'){
              this.attribs.fill='';
            };
          });

          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true }
      }))
      // gulp-cheerio иногда преобразовывает символ '>' в кодировку '&gt;', исправляем это.
      .pipe($.gp.replace('&gt;', '>'))

      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg"
          }
        }
      }))
    .pipe($.gulp.dest($.config.root + '/assets/img'))
  })

};
