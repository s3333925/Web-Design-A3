// Function create sticky nav bar.
// W3Schools. 2022. Code. https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
function stickyNavbar() {
  window.onscroll = function () {
    myFunction();
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
}

// Function to change carousel image on home page.
// W3Schools. 2022. Code. https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function checkUserDetails() {
  if (localStorage.getItem("name") === null) {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  } else {
    document.getElementById("name").value = localStorage.name;
    document.getElementById("email").value = localStorage.email;
    document.getElementById("remember").setAttribute("checked", "checked");
  }
}

function forgetOrRememberMe() {
  // Delete stored user information from local storage
  if (document.getElementById("remember").checked !== true) {
    localStorage.clear();
  } else {
    localStorage.name = document.getElementById("name").value;
    localStorage.email = document.getElementById("email").value;
  }
}
