(() => {
  document.addEventListener('DOMContentLoaded', () => {

    var swiper = new Swiper(".sale__slider", {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  });
})();