$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: true,
      autoplay: false,
      autoplayTimeout: 2000,
      smartSpeed: 1000,
    //   animateOut: "slideOutDown",
      animateIn: "slideInDown",
    });
  });
  