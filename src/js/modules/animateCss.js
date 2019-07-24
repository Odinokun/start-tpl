module.exports = function() {

  // begin Animate CSS + WayPoints javaScript Plugin
  //РАБОТАЕТ ТОЛЬКО С JQUERY < 3.0.0 !!!!!!!!!!!!!!!!!!

  $(".services__item").waypoint(function() {
    $(this).addClass("animated zoomInUp");
  }, {
    offset: "100%"
  });

  // end Animate CSS + WayPoints javaScript Plugin

};