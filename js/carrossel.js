const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    allowTouchMove: true, // Permitir navegação por clique e arrastar
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});
  