// If we're tracking the mouse, grab DOM references to be used in all functions.
var tracking = false;
var mouseX = document.getElementById("mouseX");
var mosueY = document.getElementById("mouseY");

var mood = false;

// changes the mouse.
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

// this makes an orange/blue button track the mouse.
function positive() {
    if (mood) {
        this.classList.remove("btn-warning");
        this.classList.add("btn-info");
        this.innerText = "Turn that frown :(";

        mouseX.innerText = "Untracked";
        mouseY.innerText = "Untracked";
    } else {
        this.classList.remove("btn-info");
        this.classList.add("btn-warning");
        this.innerText = "upside down! :)";
    }
    mood = !mood;
}


// If tracking is enabled, update the view.
// evt is an event object in JS
// has different properties based on type of event.
function updateMousePosition(evt) {
    if (tracking || mood) {
        mouseX.innerText = evt.clientX;
        mouseY.innerText = evt.clientY;
    }

}

function stopTracking(evt) {
    console.log("mood is " + mood + " tracking is " + tracking);
    if (mood == true) {
        mood = false;
        console.log("mood = false");
    } else if (tracking == true) {
        tracking = false;
        console.log("tracking = false");
    }
}

// A reference to the function is attached to the DOM. We don't execute them explicitly. 
document.getElementById("btnToggle").addEventListener("click", toggle);
document.getElementById("btnPositive").addEventListener("click", positive);
document.addEventListener("mousemove", updateMousePosition);

document.getElementById("entirePage").addEventListener("click", stopTracking);