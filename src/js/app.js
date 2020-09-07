$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin no-JS
  require('./modules/noJs')();

  // begin Sticky header
  require('./modules/stickyHeader')();

  // begin phone mask
  // require('./modules/maskedinput')();

  // begin Scroll2Ancor
  // require('./modules/scroll2ancor')();

  // begin Slick slider
  // require('./modules/slick')();

  // begin Popup
  // require('./modules/popup')();

  // begin Animate.css
  //РАБОТАЕТ ТОЛЬКО С JQUERY < 3.0.0 !!!!!!!!!!!!!!!!!!
  // require('./modules/waypoints')();
  // require('./modules/animateCss')();

});