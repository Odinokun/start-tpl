module.exports = function() {

  // begin Sticky Header
  // No JS library used
  // ;(function(document, window, index) {
  //     'use strict';

  //     var elSelector = '.sticky-header',
  //         element = document.querySelector(elSelector);

  //     if (!element) return true;

  //     var elHeight = 0,
  //         elTop = 0,
  //         dHeight = 0,
  //         wHeight = 0,
  //         wScrollCurrent = 0,
  //         wScrollBefore = 0,
  //         wScrollDiff = 0;

  //     window.addEventListener('scroll', function() {
  //         elHeight = element.offsetHeight;
  //         dHeight = document.body.offsetHeight;
  //         wHeight = window.innerHeight;
  //         wScrollCurrent = window.pageYOffset;
  //         wScrollDiff = wScrollBefore - wScrollCurrent;
  //         elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;

  //         if (wScrollCurrent <= 0)
  //             element.style.top = '0px';

  //         else if (wScrollDiff > 0)
  //             element.style.top = (elTop > 0 ? 0 : elTop) + 'px';

  //         else if (wScrollDiff < 0) {
  //             if (wScrollCurrent + wHeight >= dHeight - elHeight)
  //                 element.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';

  //             else
  //                 element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';
  //         }

  //         wScrollBefore = wScrollCurrent;
  //     });

  // }(document, window, 0));








  var position = 0;

  $(window).scroll(function(e) {
    var $element = $('.sticky-header');
    var scrollTop = $(this).scrollTop();
    if( scrollTop <= 0 ) { 
      $element.removeClass('hide').removeClass('scrolling');
    } else if( scrollTop < position ) {
      $element.removeClass('hide');
    } else if( scrollTop > position ) {
      $element.addClass('scrolling');
      if( scrollTop + $(window).height() >=  $(document).height() - $element.height() ){
        $element.removeClass('hide');
      } else if(Math.abs($element.position().top) < $element.height()) {
        $element.addClass('hide');
      }
    }
    position = scrollTop;
  })
  // end Sticky Header

};