var headSlideIndex = 0;
headCarousel();

function headCarousel() {
    var i;
    var x = document.getElementsByClassName("headSlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    headSlideIndex++;
    if (headSlideIndex > x.length) { headSlideIndex = 1 }
    x[headSlideIndex - 1].style.display = "block";
    setTimeout(headCarousel, 3000); // Change image every 2 seconds
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () { stickyNav() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//Shop now Button
document.getElementById("shopnow").onclick = function () {
    location.href = "#product";
};

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function burgerNav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }