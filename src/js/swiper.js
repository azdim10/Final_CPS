const mediaQuerys = window.matchMedia('(max-width:700px)')
if (mediaQuerys.matches === true) {
  mySwiper = new Swiper('.swiper', {
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 'auto'
  })
} else {
}
