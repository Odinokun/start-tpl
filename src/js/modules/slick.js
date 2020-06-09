module.exports = function() {

  // begin Slick slider

  $('.slick').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<div class='prev'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"14\" viewBox=\"0 0 33 14\"><g><g><path d=\"M6.173.33L.55 5.952c-.44.439-.44 1.15 0 1.59l5.623 5.623a1.125 1.125 0 0 0 1.59-1.59L4.06 7.872h27.036a1.125 1.125 0 0 0 0-2.249H4.06L7.763 1.92a1.121 1.121 0 0 0 0-1.59 1.125 1.125 0 0 0-1.59 0z\"/></g></g></svg></div>",
    nextArrow: "<div class='next'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"14\" viewBox=\"0 0 33 14\"><g><g><path d=\"M26.33 13.166l5.623-5.623c.439-.44.439-1.151 0-1.59L26.33.329a1.125 1.125 0 0 0-1.59 1.59l3.702 3.704H1.407a1.125 1.125 0 0 0 0 2.25h27.035l-3.703 3.703a1.121 1.121 0 0 0 0 1.59c.44.44 1.151.44 1.59 0z\"/></g></g></svg></div>",
    responsive: [
      {
        breakpoint: 481,
        settings: {
          arrows: false
        }
      }
    ]
  });

  //begin slider with counters
  // отображаем общее кол-во слайдов
  $('#index-direction__slider').on('init', function (event, slick) {
    var allSlide = slick.slideCount;
    if (allSlide < 10) {
      allSlide = "0" + allSlide;
    }
    $("#counter-all").html(allSlide);
  });
  // отображаем текущий слайд в счетчике
  $('#index-direction__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var curSlide = currentSlide + 1;
    if (curSlide < 10) {
      curSlide = "0" + curSlide;
    }
    $("#counter-tab").html(curSlide);
  });
  // инициализируем слайдер
  $('#index-direction__slider').slick({
    arrows: true,
    fade: true,
    autoplay: false,
    cssEase: 'linear',
    slidesToShow: 1,
    infinity:false,
    slidesToScroll: 1,
    dots: false,
    adaptiveHeight: true,
    dotsClass: 'custom_paging'
  });
  //end slider with counters


  //begin fadeIn/Out left arrows
  $('.slick-slider .slick-next').on('click', function () {
    var slider = $(this).parents('.slick-slider');
    $(slider).children('.slick-prev').addClass('active');
  });
  //end fadeIn/Out left arrows

  //begin fade next btn if last slide is active
  $('.course-schedule__slider .slick-next, .course-schedule__slider .slick-prev').on('click', function () {
    var slider = $(this).parents('.course-schedule__slider');
    var lastChild = $(slider).find('.slick-slide:last');

    if($(lastChild).hasClass('slick-active')){
      $(slider).children('.slick-next').addClass('hide');
    } else {
      $(slider).children('.slick-next').removeClass('hide');
    }
  });
  //end fade next btn if last slide is active

  // end Slick slider

};