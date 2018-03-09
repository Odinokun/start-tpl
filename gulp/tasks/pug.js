'use strict';

module.exports = function() {

  $.gulp.task('pug', function() {
    return $.gulp.src('./src/pug/pages/*.pug')
      .pipe($.gp.pug({ pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gp.prettify({
        // indent_handlebars: true,
        // indent_inner_html: true,
        preserve_newlines: true,
        // max_preserve_newlines: 1,
        // unformatted: ['pre', 'code'],
        // extra_liners: [],
        // brace_style: 'expand',
        indent_char: ' ',
        indent_size: 2}))
      .pipe($.gulp.dest($.config.root));
  });

};
