window.addEventListener('resize', myFunction) = function () { myFunction() };

var navbar = document.getElementsByTagName("nav");
let lgBreakPoint = 992;

function myFunction() {
    let width = window.innerWidth;
    if (width >= lgBreakPoint) {
       
    } else {
        
    }
}


window.addEventListener('resize', reportWindowSize);
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
{ myFunction() };
 
