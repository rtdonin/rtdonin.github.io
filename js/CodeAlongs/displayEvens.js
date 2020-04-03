/*
    Name: Margaret Donin
    Date Created: 3/31/20
	Most recent revision: 4/03/20
*/


// evensInfo.className = "needs-validation";				// we need to reset the validatin
// evensInfo.reset();										// resets form


function validate() {
	
	var evensInfo = document.forms["evensInfo"];			// creates and object listing the documents forms

	var strtNum = document.getElementById("strtNum");		// gets the user input
	var endNum = document.getElementById("endNum");
	var step = document.getElementById("step");

	endNum.setCustomValidity('');							// resets validity
	step.setCustomValidity('');

	console.log("step is: " + step);
	var startNumber = parseInt(strtNum.value, 10);
    var endNumber = parseInt(endNum.value, 10);
    var stepNumber = parseInt(step.value, 10);
	console.log("after parseint, step is: " + stepNumber);
	evens.style.display = "none";						// hides previous evens and user input
	document.getElementById("answers").innerHTML = "";	// "resets" the answers
		
	if (endNumber <= startNumber) {						// must be two seperate if statments or it will not check both.
		console.log(endNumber);
		evensInfo.className = "was-validated";
		document.getElementById("endNum").setCustomValidity("prob with end num");
	}
	
	if (stepNumber <= 0) {
		console.log(stepNumber);
		evensInfo.className = "was-validated";
		document.getElementById("step").setCustomValidity("prob with step num");
		return false;
	}

	if (!evensInfo.checkValidity()) {
        evensInfo.className = "was-validated";
        return false;
	}
	
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