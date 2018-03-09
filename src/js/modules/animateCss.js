module.exports = function() {

  // begin Animate CSS + WayPoints javaScript Plugin

  //Author URL: http://webdesign-master.ru
  (function($) {
    $.fn.animated = function(inEffect) {
      $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
        if (dir === "down") {
            $(this).addClass(inEffect).css("opacity", "1");
        };
      }, {
        offset: "100%"
      });
    };
  })(jQuery);

  //animate effect
  $(".section__item").animated("zoomIn", "fadeOut");

  // end Animate CSS + WayPoints javaScript Plugin

};