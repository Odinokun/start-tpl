module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function(e) {
    e.preventDefault();

    let targetPopup = '#' + $(this).data('popup');
    $(targetPopup + ', #popup__layer').fadeIn();
  });
  // end popup open

  // begin popup close
  $('#popup__layer, .popup__close').on('click', function() {
    $('.popup, #popup__layer').fadeOut();
  });
  // end popup close

};