'use strict';

module.exports = function() {

  $.gulp.task('copy:css', function() {
    return $.gulp.src('src/style/uncompressed.css')
      .pipe($.gulp.dest($.config.root + '/assets/css'))
  })

};
