(() => {
  const span = document.querySelector('#current-year')
  span.innerText = new Date().getFullYear()
})()

// Get the header

var navbar = document.querySelector("nav")

// Get the offset position of the navbar
var sticky = navbar.offsetHeight;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeNavbarSticky() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener('scroll', function () {
  makeNavbarSticky()
  let scrollDistance = window.pageYOffset;

  // Assign active class to nav links while scolling
  $('section').each(function (i) {
    if ($(this).position().top - 100 <= scrollDistance) {
      $('nav ul li.active').removeClass('active');
      $('nav ul li').eq(i).addClass('active');
    }
  });
});
