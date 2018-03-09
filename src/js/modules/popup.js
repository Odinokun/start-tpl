module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function() {
    $('.popup, .popup__layer').fadeIn();
  });
  // end popup open

  // begin popup close
  $('.popup__layer').on('click', function() {
    $('.popup, .popup__layer').fadeOut();
  });
  // end popup close

  // begin popup scroll
  // $(window).on('scroll', function() {
  //   $('.popup').css({'top': $(window).scrollTop() + 50});
  // }).scroll();
  // end popup scroll

};