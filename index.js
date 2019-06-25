// When the user scrolls the page, execute myFunction 
//window.onscroll = function () {
//  myFunction()
//};

// Get the header

var navbar = document.getElementById("znavbar")

// Get the offset position of the navbar
var sticky = navbar.offsetHeight;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(window).scroll(function () {
  myFunction()
  var scrollDistance = $(window).scrollTop();

  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  //		$('nav').fadeIn("fast");
  //} else {
  //		$('nav').fadeOut("fast");
  //}

  // Assign active class to nav links while scolling
  $('section').each(function (i) {
    if ($(this).position().top <= scrollDistance) {
      $('.znavitem a.active').removeClass('active');
      $('.znavitem a').eq(i).addClass('active');
    }
  });
}).scroll();
