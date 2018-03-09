'use strict';

module.exports = function() {

  $.gulp.task('copy:video', function() {
    return $.gulp.src('./src/video/**/*.*')
      .pipe($.gulp.dest($.config.root + '/assets/video'));
  });

};