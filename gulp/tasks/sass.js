'use strict';

module.exports = function() {
  const sass = require('gulp-sass')(require('sass'));

  $.gulp.task('sass', function() {
    return $.gulp.src('./src/style/app.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe(sass()).on('error', $.gp.notify.onError({ title: 'Style SASS'}))
      .pipe($.gp.autoprefixer({grid: true}))
      .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })

};
