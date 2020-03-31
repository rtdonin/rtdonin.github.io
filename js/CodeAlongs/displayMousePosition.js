// If we're tracking the mouse, grab DOM references to be used in all functions.
var tracking = false;
var mouseX = document.getElementById("mouseX");
var mosueY = document.getElementById("mouseY");

var mood = false;

// changes the mosue.
// classList is an array - like collection of CSS class names.
function toggle() {
    if (tracking) {
        this.classList.remove("btn-danger");
        this.classList.add("btn-success");
        this.innerText = "Start mouse tracking.";

        mouseX.innerText = "Untracked";
        mouseY.innerText = "Untracked";
    } else {
        this.classList.remove("btn-success");
        this.classList.add("btn-danger");
        this.innerText = "Stop mouse tracking.";
    }
    tracking = !tracking;
}

function positive() {
    if (mood) {
        this.classList.remove("btn-warning");
        this.classList.add("btn-info");
        this.innerText = "Turn that frown :(";

        mouseX.innerText = "Untracked";
        mouseY.innerText = "Untracked";
    } else {
        this.classList.add("btn-warning");
        this.classList.remove("btn-info");
        this.innerText = "upside down! :)";

        alert("the blue button makes the X value be the Y value and vise versa");
    }
    mood = !mood;
}


// If tracking is enabled, update the view.
// evt is an event object in JS
// has different properties based on type of event.
function updateMousePosition(evt) {
    if (tracking) {
        mouseX.innerText = evt.clientX;
        mouseY.innerText = evt.clientY;
    }

}

function reverseMousePosition(evt) {
    if (mood) {
        mouseX.innerText = evt.clientY;
        mouseY.innerText = evt.clientX;
    }
}

function stopTracking(evt) {
    if (mood == true) {
        mood = false;
    } else if (tracking == true) {
        tracking = false;
    }
}

// A reference to the function is attached to the DOM. We don't execute them explicitly. 
document.getElementById("btnToggle").addEventListener("click", toggle);
document.addEventListener("mousemove", updateMousePosition);
// document.getElementById("btnToggle").addEventListener("keydown", stopTracking);
// document.addEventListener("keyup", toggle);

document.getElementById("btnPositive").addEventListener("click", positive);
document.addEventListener("mousemove", reverseMousePosition);
// document.getElementById("btnPositive").addEventListener("keyup", stopTracking);
// document.getElementById("btnPositive").addEventListener("keyup", positive);