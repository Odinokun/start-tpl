'use strict';

module.exports = function () {

  $.gulp.task('js:app-browserify', function () {
    return $.browserify({
        entries: 'src/js/app.js',
        debug: true
      })
      .bundle()
      .pipe($.sourceStream('app.js'))
      .pipe($.buffer())

      //минификация js
      .pipe($.gp.uglify())
      .pipe($.gulp.dest($.config.root + '/assets/js'));
  });

};