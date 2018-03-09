'use strict';

global.$ = {
  package:  require('./package.json'),
  config:   require('./gulp/config'),
  path: {
    task:           require('./gulp/paths/tasks.js'),
    jsFoundation:   require('./gulp/paths/js.foundation.js'),
    cssFoundation:  require('./gulp/paths/css.foundation.js'),
    app:            require('./gulp/paths/app.js')
  },
  gulp:         require('gulp'),
  del:          require('del'),
  browserSync:  require('browser-sync').create(),
  browserify:   require('browserify'),
  buffer:       require('vinyl-buffer'),
  sourceStream: require('vinyl-source-stream'),
  gp:           require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'image:min',
    'sprite:svg',
    'pug',
    'sass',
    'css:foundation',
    'js:foundation',
    'js:app-browserify',
    'copy:js',
    'copy:css',
    'copy:fonts',
    'copy:php',
    'copy:video'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
