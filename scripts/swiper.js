var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    968: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
