'use strict';

module.exports = function() {

  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: true,
      server: $.config.root
    });

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });

};
