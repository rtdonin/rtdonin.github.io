/*
    Name: Margaret Donin
    Date Created: 04/05/20
    Most recent revision: 
*/

function validate() {
    var contactInfo = document.forms["contactInfo"];            // get all object from form
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var reason;
    var additionalInfo;
    var bestTime;

    contactInfo.className = "needs-validation";
    
    if (!contactInfo.checkValidity()) {
        contactInfo.className = "was-validated";
        return false;
    } else {
        

        document.getElementById("printName").innerText = name;
        document.getElementById("printEmail").innerText = email;
        document.getElementById("printPhone").innerText = phone;
        document.getElementById("printReason").innerText = reason;
        document.getElementById("printAdditionalInfo").innerText = additionalInfo;
        document.getElementById("printBestTime").innerText = bestTime;
        
        alert("Events involve other people, are you sure?");
        submittedContactInfo.style.display = "block";   
    }

    return false;
}

function reset() {
    contactInfo.reset();	// resets form     
}
