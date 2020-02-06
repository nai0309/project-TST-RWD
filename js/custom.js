// activate wow.js
new WOW().init();

// mobile device menu start
const mobile_menu_show = document.getElementsByClassName("mobile-menu-btn")[0].getElementsByTagName("img")[0];

$(".mobile-menu-btn img").click(function () {
  $(".mobile-menu").removeClass("d-none");
  $(window).on("scroll", function () {
    $(".mobile-menu").addClass("d-none");
  })
})

function mobile_menu_close() {
  $(".mobile-menu").addClass("d-none");
  $("#goodies").addClass("d-none");
  $("#musicBox").addClass("d-none");
  $("#hit").addClass("d-none");
}

function menu_list(e) {
  if ($(`#${e}.d-none`) != undefined) {
    switch (e) {
      case "hit":
        $("#hit").toggleClass("d-none");
        $("#goodies").addClass("d-none");
        $("#musicBox").addClass("d-none");
        break;
      case "goodies":
        $("#goodies").toggleClass("d-none");
        $("#hit").addClass("d-none");
        $("#musicBox").addClass("d-none");
        break;
      case "musicBox":
        $("#musicBox").toggleClass("d-none");
        $("#hit").addClass("d-none");
        $("#goodies").addClass("d-none");
        break;
    }
  }
}
// mobile device menu end


// slide control start
$('.slideBn').slick({
  infinite: false,
  speed: 300,
  slidesToScroll: 1,
});

$('.song-display').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// slide control end
