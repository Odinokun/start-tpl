module.exports = function () {

  // begin Sticky Header
  window.addEventListener('scroll', function () {
    let oldScroll = this.oldScroll || 0;
    let newScroll = this.scrollY;
    let isScrollDown = newScroll > oldScroll;
    let scrollTop = $(this).scrollTop();

    if (scrollTop >= 100) {
      document.querySelector('#header').classList.toggle('header--scroll-down', isScrollDown);
    }

    this.oldScroll = newScroll;
  });
  // end Sticky Header

};