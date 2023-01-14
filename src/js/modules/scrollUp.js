module.exports = function () {

  const offset = 100;
  const scrollUp = document.getElementById('scrollUp');
  const scrollUpSvgPath = document.querySelector('.scrollUp__path');
  const getTop = () => document.documentElement.scrollTop || window.pageYOffset;

  if (scrollUp) {
    const pathLength = scrollUpSvgPath.getTotalLength();

    scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

    // updateDashoffset
    const updateDashoffset = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      scrollUpSvgPath.style.strokeDashoffset = pathLength - (getTop() * pathLength / height);
    }

    // onScroll
    window.addEventListener('scroll', () => {
      updateDashoffset();

      if (getTop() > offset) {
        scrollUp.classList.add('scrollUp--active');
      } else {
        scrollUp.classList.remove('scrollUp--active');
      }
    })

    // click
    scrollUp.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })
  }


};