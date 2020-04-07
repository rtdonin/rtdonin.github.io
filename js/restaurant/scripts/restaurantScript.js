/*
    Name: Margaret Donin
    Date Created: 04/05/20
    Most recent revision: 

    To Do:
    fix addtional info situation
    reset button

    name should be wrong if there are numbers
    phone number should except ###-###-####
    best time to have "and"

    alert button needs to have a no button that resets everything
*/

function validate() {
    var contactInfo = document.forms["contactInfo"];                    // get all object from form
    
    var nameO = document.getElementById("name");                        // get all input as object
    var emailO = document.getElementById("email");
    var phoneO = document.getElementById("phone");
    var reasonO = document.getElementById("reason");
    var additionalInfoO = document.getElementById("additionalInfo");

    contactInfo.className = "needs-validation"                          // resets validation
    nameO.setCustomValidity("");
    emailO.setCustomValidity("");
    phoneO.setCustomValidity("");
    additionalInfoO.setCustomValidity("");
    submittedInfo.style.display = "none";                               // reset the info box

    var name = nameO.value;                                             // get values as a string
    var email = emailO.value;
    var phone = phoneO.value;
    var reason = reasonO.value;
    var additionalInfo = additionalInfoO.value;
    var patronage = "";
    var bestTime = "";

    // document.getElementById("additionalInfo").innerText = " ";          // in case it wasn't filled out

    if (!contactInfo.checkValidity()) {                                 // the form was filled out
        contactInfo.className = "was-validated";
        additionalInfoO.setCustomValidity("");
        // document.getElementById("additionalInfo").innerText = additionalInfo;
        return false;

    } else {
        // checking name is a full name. If it doesn't exist the indexOf returns -1
        if (name.indexOf(" ") == -1) {
            contactInfo.className = "was-validated";
            nameO.setCustomValidity("need the full name");
        }

        // checking the email is string + @ + string + . + string
        var at = 0;
        var charB4 = 0;
        var charMiddle = 0;
        var charAfter = 0;
        var dot = 0;

        for (var i = 0; i < email.length; i++) {
            if (email[i] == "@") {
                at = i;
            } else if (email[i] == ".") {
                dot = i;
            } else if (at == 0) {
                charB4++;
            } else if (dot == 0) {
                charMiddle++;
            } else if (dot > at) {
                charAfter++;
            }
        }

        if (at > dot || charB4 == 0 || charMiddle == 0 || charAfter == 0) {
            contactInfo.className = "was-validated";
            emailO.setCustomValidity("not a real email");
            return false;
        }

        // check phone number is ###-###-#### or 10 digits
        if (phone.length != 10) {
            phoneO.setCustomValidity("incorrect format");
        }
        
        // if Feedback or Other is the reason, we need additionalInfo
        if ((reason === "Other" || reason === "Feedback") && additionalInfo === "") {
            contactInfo.className = "was-validated";
            additionalInfoO.setCustomValidity("Need info");
            // document.getElementById("additionalInfo").innerText = "";

            return false;
        }

        // get patronage
        if (document.getElementById("patronageN").checked) {
            patronage = "No";
        } else {
            patronage = "Yes";
        }

        // best time to contact
        if (document.getElementById("M").checked) {
            bestTime += "Monday";
        }
        if (document.getElementById("T").checked) {
            if (bestTime.length > 0) {
                bestTime += ","
            }
            bestTime += " Tuesday";
        }
        if (document.getElementById("W").checked) {
            if (bestTime.length > 0) {
                bestTime += ","
            }
            bestTime += " Wednesday";
        }
        if (document.getElementById("Th").checked) {
            if (bestTime.length > 0) {
                bestTime += ","
            }
            bestTime += " Thursday";
        }
        if (document.getElementById("F").checked) {
            if (bestTime.length > 0) {
                bestTime += ","
            }
            bestTime += " Friday";
        }

        document.getElementById("printName").innerText = name;          // put user inputs in the table
        document.getElementById("printEmail").innerText = email;
        document.getElementById("printPhone").innerText = phone;
        document.getElementById("printReason").innerText = reason;
        document.getElementById("printAdditionalInfo").innerText = additionalInfo;
        document.getElementById("printPatronage").innerText = patronage;
        document.getElementById("printBestTime").innerText = bestTime;

        // document.getElementById("additionalInfo").innerText = additionalInfo; // reseting the form input
        
        alert("Events involve other people, are you sure?");
        submittedInfo.style.display = "block";                           // display user inputs
    }
    return false;
}

function reset() {
    // name.setCustomValidity("");                                         // resets validation
    // email.setCustomValidity("");
    // phone.setCustomValidity("");
    // additionalInfo.setCustomValidity("");
    contactInfo.className = "needs-validation";
    // document.getElementById("additionalInfo").innerText = "";

    contactInfo.reset();                                                // resets form
    submittedInfo.style.display = "none";                               // removes user inputs
}