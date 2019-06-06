$(document).ready(function () {
  $(".slider").bxSlider();
});

$(document).ready(function () {
  $(".wrapper a").bind("click", function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $("html, body")
      .stop()
      .animate({
          scrollTop: $(target).offset().top
        },
        600,
        function () {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
        }
      );

    return false;
  });
});

$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $("section").each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $(".wrapper a.active").removeClass("active");
        $(".wrapper a")
          .eq(i)
          .addClass("active");
      }
    });
  })
  .scroll();

$('.slider').bxSlider({
  auto: true,
  autoControls: false,
  stopAutoOnClick: true,
  pager: true,
  mode: 'fade',
  easing: 'ease-in-out',
  speed: 2000
});


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("home");

var navbar = document.getElementById("znavbar")

// Get the offset position of the navbar
var sticky = header.offsetHeight;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}