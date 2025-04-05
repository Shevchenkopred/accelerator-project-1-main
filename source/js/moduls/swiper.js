import {Swiper} from '../vendor/vendor.js';

new Swiper('.jury__swiper', {
  loop: true,
  spaceBetween: 0,
  watchSlidesProgress: true,
  breakpoints: {

    320: {
      slidesPerView: 1,
      allowTouchMove: true
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      allowTouchMove: false
    },

    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      allowTouchMove: false
    },
  },

  navigation: {
    nextEl: '.jury__button-next',
    prevEl: '.jury__button-prev',
  }

});

new Swiper('.reviews__swiper', {

  breakpoints: {

    320: {
      allowTouchMove: true
    },

    768: {
      allowTouchMove: false
    },

    1366: {
      allowTouchMove: false
    },
  },

  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  }

});

// document.querySelector('.reviews__button--next').addEventListener('click', () => {
//   swiperFaq.slideNext();
// });

// document.querySelector('.reviews__button--prev').addEventListener('click', () => {
//   swiperFaq.slidePrev();
// });

// document.querySelector('.swiper-button-next').addEventListener('click', () => {
//   swiperJury.slideNext();
// });

// document.querySelector('.swiper-button-prev').addEventListener('click', () => {
//   swiperJury.slidePrev();
// });
