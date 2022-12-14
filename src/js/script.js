let slider = $(document).ready(function () {
  $(".content__tabs").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    prevArrow:
      "<img class='a-left control-c prev arrow-prev' src='../img/slideer-arrow-left.svg'>",
    nextArrow:
      "<img class='a-right control-c next arrow-next' src='../img/slider-arrow-right.svg'>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          vertical: true,
          verticalScrolling: true,
          slidesToShow: 3,
          speed: 1000,
          autoplaySpeed: 2500,
          arrows: false,
        },
      },
    ],
  });
});

$(".item").on("click", function () {
  $(".item").removeClass("active");
  $(this).addClass("active");
  let tabs = $(this).data("tabs");
  $(".content").addClass("d-none");
  $(".content[data-tabs = " + tabs + "]").removeClass("d-none");
  $(".content[data-tabs = " + tabs + "]").addClass("d-block");
});
