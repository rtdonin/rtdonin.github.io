/*
    Name: Margaret Donin
    Date Created: 3/31/20
    Most recent revision: 4/02/20
*/

var evensInfo = document.forms["evensInfo"];			// creates and object listing the documents forms

var strtNum = document.getElementById("strtNum");		// gets the user input
var endNum = document.getElementById("endNum");
var step = document.getElementById("step");

function validate() {

	var startNumber = parseInt(strtNum.value, 10);
    var endNumber = parseInt(endNum.value, 10);
    var stepNumber = parseInt(step.value, 10);

	document.getElementById("answers").innerHTML = ""	// "resets" the answers

	if (!evensInfo.checkValidity()) {
        evensInfo.className = "was-validated";
        return false;
	}
	
	// lines 22-30 are not working the way I want them to yet.
	// They should be giving error messages.
	// They need to be fixed.

	// if (endNumber <= startNumber) {
	// 	evensInfo.className = "was-validated";
	// 	return false;
	// }
	
	// if (stepNumber <= 0) {
	// 	evensInfo.className = "was-validated";
	// 	return false;
	// }
	
	document.getElementById("printStrtNum").innerText = startNumber; 	// inserts user values
    document.getElementById("printEndNum").innerText = endNumber;
	document.getElementById("printStep").innerText = stepNumber;
    
    for (var i = startNumber; i <= endNumber; i += stepNumber) {		// find evens to display
        if (i % 2 == 0) {
            document.getElementById("answers").innerHTML += i + "<br />";
		}
		evens.style.display = "block";									// display evens and user input
    }
    return false;
}