module.exports = function() {

  $(".phone-mask").click(function(){
    $(this).setCursorPosition(3);
  }).mask("+7 (999) 999-99-99");

};