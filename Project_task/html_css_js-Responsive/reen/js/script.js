$(document).ready(function () {
  $("#toggle-nav").click(function () {
    $("#header-nav").slideToggle(750);
  });

  $(".owl-carousel").owlCarousel({
    stagePadding: 0,
    loop: false,
    margin: 20,
    nav: false,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    navText: [
      "<i class='fa fa-long-arrow-left owl__left-arrow'></i>",
      "<i class='fa fa-long-arrow-right owl__right-arrow'></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      582: {
        items: 3,
      },
      960: {
        items: 4,
      },
    },
  });
});
