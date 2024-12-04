$(window).scroll(function () {
  let e = $(window).scrollTop();
  $(window).width() >= 992
    ? e >= 70
      ? ($(".sticky-header").css("background-color", "rgba(255, 255, 255)"),
        $(".sticky-header").css("box-shadow", "0 2px 5px rgba(0, 0, 0, 0.1)"),
        localStorage.setItem("stickyHeaderState", "scrolled"))
      : ($(".sticky-header").css("background-color", "transparent"),
        $(".sticky-header").css("box-shadow", ""),
        localStorage.setItem("stickyHeaderState", "top"))
    : ($(".sticky-header").css("background-color", "white"),
      $(".sticky-header").css("box-shadow", "0 2px 5px rgba(0, 0, 0, 0.1)"));
}),
  $(document).ready(function () {
    $(".to-up").hide(),
      $(window).scroll(function () {
        $(this).scrollTop() > 300
          ? $(".to-up").fadeIn()
          : $(".to-up").fadeOut();
      }),
      $(".to-up").click(function (e) {
        e.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 900);
      });
    let e = localStorage.getItem("stickyHeaderState");
    $(window).width() >= 992 &&
      ("scrolled" === e
        ? ($(".sticky-header").css("background-color", "rgba(255, 255, 255)"),
          $(".sticky-header").css("box-shadow", "0 2px 5px rgba(0, 0, 0, 0.1)"))
        : ($(".sticky-header").css("background-color", "transparent"),
          $(".sticky-header").css("box-shadow", "")));
    var t = mixitup(".menu-items", {
      selectors: { target: ".menu-item" },
      animation: {
        duration: 500,
        effects: "fade translateX(-100%) scale(0.5) ",
        easing: "ease-in-out",
        queueLimit: 3,
        clampHeight: !1,
      },
    });
    $(".filter").on("click", function () {
      var e = $(this).data("filter");
      t.filter(e),
        $(".filter").removeClass("active"),
        $(this).addClass("active");
    }),
      new Swiper(".swiper-container", {
        loop: !0,
        loopAdditionalSlides: 0,
        effect: "coverflow",
        speed: 1e3,
        autoplay: { delay: 2500, disableOnInteraction: !1 },
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: !0,
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: !1,
        },
        breakpoints: {
          1440: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          0: { slidesPerView: 1, spaceBetween: 5 },
        },
      }),
      new Swiper(".chef-swiper-container", {
        loop: !0,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: { delay: 2500, disableOnInteraction: !1 },
        pagination: { el: ".swiper-pagination", clickable: !0 },
        breakpoints: {
          571: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        },
      });
  });
