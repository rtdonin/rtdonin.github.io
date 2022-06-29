window.onscroll = function () { myFunction() };

var navbar = document.getElementsByTagName("nav");
var navbarName = document.getElementById("navbarName");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbarName.classList.remove("hide");
        navbarName.classList.add("display");

    } else {
        navbar.classList.remove("sticky");
        navbarName.classList.remove("display");
        navbarName.classList.add("hide");
    }
}