/*
    Name: Margaret Donin
    Date Created: 04/05/20
    Most recent revision: 

    To Do:
    fix addtional info situation
    reset button

    name should be wrong if there are numbers
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
    var patronage = null;
    var bestTime = null;

    if (!contactInfo.checkValidity()) {                                 // the form was filled out
        document.getElementById("additionalInfo").innerText = additionalInfo;
        contactInfo.className = "was-validated";
        return false;

    } else {

        console.log(additionalInfo);
        console.log(document.getElementById("additionalInfo").innerText);

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

        // check phone number is ###-###-#### or 10 digits without dashes
        if (phone.length == 10 && isNaN(phone)) {                       // if 10 long and not a number
            contactInfo.className = "was-validated";
            phoneO.setCustomValidity("incorrect format");

        } else if (phone.length == 12) {                                // 12 is the amount of characters in ###-###-####
            var dash1 = 0;
            var dash2 = 0;
            var firstNum = 0;
            var secondNum = 0;
            var thirdNum = 0;

            for (var i = 0; i < phone.length; i++){
                if (phone[i] == "-" && dash1 == 0) {
                    dash1 = i;
                } else if (phone[i] == "-" && dash1 != 0 && dash2 == 0) {
                    dash2 = i;
                } else if (dash1 == 0) {
                    firstNum++;
                } else if (dash1 != 0 && dash2 == 0) {
                    secondNum++;
                } else if (dash1 != 0 && dash2 != 0) {
                    thirdNum++;
                }
            }

            // check it's a ###-###-#### string
            if (firstNum != 3 && secondNum != 3 && thirdNum != 4 && dash1 != 3 && dash2 != 7) {
                phoneO.setCustomValidity("incorrect format");
                contactInfo.className = "was-validated";
            } else if (phone.slice(dah2 + 1).indexOf("-") != -1) {
                phoneO.setCustomValidity("incorrect format");
                contactInfo.className = "was-validated";
            } else if (isNaN(phone.slice(9)) || isNaN(phone.slice(4, 7)) || isNaN(phone.slice(0, -7))) {
                phoneO.setCustomValidity("incorrect format");
                contactInfo.className = "was-validated";
            }

        } else if (phone.length > 10 || phone.length < 10) {            // if the phone number isn't 10 or 12 long then it needs to get caught here.
            phoneO.setCustomValidity("incorrect format");
            contactInfo.className = "was-validated";
        }

        // if Feedback or Other is the reason, we need additionalInfo
        if ((reason === "Other" || reason === "Feedback") && additionalInfo === "") {
            additionalInfoO.setCustomValidity("Need info");
            contactInfo.className = "was-validated";
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

        var areYouSure = confirm("Events involve other people, are you sure?");

        if (areYouSure) {
            submittedInfo.style.display = "block";                          // display user inputs
        } else {
            contactInfo.reset();
        }
    }
    return false;
}

function reset() {
    nameO.setCustomValidity("");                                         // resets validation
    emailO.setCustomValidity("");
    phoneO.setCustomValidity("");
    additionalInfoO.setCustomValidity("");

    contactInfo.className = "needs-validation";

    contactInfo.reset();                                                // resets form
    submittedInfo.style.display = "none";                               // removes user inputs
}