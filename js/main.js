// Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1, // Bir vaqtda nechta slayd ko‘rsatilsin
    loop: true, // Cheksiz aylanish
    margin: 20, // Elementlar orasidagi masofa
    nav: false, // Oldinga va orqaga tugmalar
    dots: false, // Pastdagi nuqtali indikatorlar
    autoplay: true, // Avtomatik slayd o'tishi
    autoplayTimeout: 1000, // 3 soniyada bitta slayd
    autoplayHoverPause: true, // Sichqoncha ustida bo‘lsa, to‘xtaydi
    navText: ["&larr;", "&larr;"], // O'ng va chap tugmalar
    responsive: {
      0: { items: 1 },
      200: { items: 1 },
      400: { items: 1.4 },
      600: { items: 2.5 },
      800: { items: 3 },
      1000: { items: 4 },
    },
  });
});

