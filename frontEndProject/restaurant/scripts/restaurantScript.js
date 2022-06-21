/*
    Name: Margaret Donin
    Date Created: 04/05/20
    Most recent revision: 04/08/20 

    To optomize:
    * resetting the form
    * why my textarea invalid-feedback wasn't working.
*/

function validate() {
    var contactInfo = document.forms["contactInfo"];    // get all object from form
    
    var nameO = document.getElementById("name");        // get all input as object
    var emailO = document.getElementById("email");
    var phoneO = document.getElementById("phone");
    var reasonO = document.getElementById("reason");
    var additionalInfoO = document.getElementById("additionalInfo");

    contactInfo.className = "needs-validation";     // resets validation just in case
    nameO.setCustomValidity('');
    emailO.setCustomValidity('');
    phoneO.setCustomValidity('');

    var name = nameO.value;         // get values as a string
    var email = emailO.value;
    var phone = phoneO.value;
    var reason = reasonO.value;
    var additionalInfo = additionalInfoO.value;
    var patronage = null;
    var bestTime = "";              // can not set it to null. JS will print 'nullMonday'

    // additionalInfoO.required = false;       // resetting the attribute, wasn't working right.
    invalidTextarea.style.display = "none";
    submittedInfo.style.display = "none";   // hide the info box

    // checking name is a full name. indexOf returns -1 if the argument isnt found.
    // everyone has a first and last name. There is a space between the names.
    // check if the space is the first or last character 
    if (name.indexOf(" ") == -1) {
        contactInfo.className = "was-validated";
        nameO.setCustomValidity("need the full name");
    } else if (name.indexOf == 0 || name.indexOf == (name.legnth - 1)) {
        contactInfo.className = "was-validated";
        nameO.setCustomValidity("need the full name");
    }

    // checking that email is string + @ + string + . + string
    // this only check if this is a valid email
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

    // check phone number is ###-###-#### or 10 digits and is a number.
    if (phone.length == 10 && isNaN(phone)) { // if 10 characters long and not a number
        contactInfo.className = "was-validated";
        phoneO.setCustomValidity("incorrect format");

    } else if (phone.length == 12) {  // 12 is the amount of characters in ###-###-####
        var dash1 = 0;
        var dash2 = 0;
        var firstNum = 0;
        var secondNum = 0;
        var thirdNum = 0;

        for (var i = 0; i < phone.length; i++){
            if (phone[i] == "-" && dash1 == 0) {
                dash1 = i;
            } else if (phone[i] == "-" && dash1 != 0) {
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
        if (firstNum != 3 || secondNum != 3 || thirdNum != 4 || dash1 != 3 || dash2 != 7) {
            phoneO.setCustomValidity("incorrect format");
            contactInfo.className = "was-validated";
        } else if (isNaN(phone.slice(0, 3)) || isNaN(phone.slice(4, 7)) || isNaN(phone.slice(9))) {
            phoneO.setCustomValidity("incorrect format");
            contactInfo.className = "was-validated";
        }

    } else if (phone.length != 10) {  // if the phone number isn't 10 or 12 long then it needs to get caught here.
        phoneO.setCustomValidity("incorrect format");
        contactInfo.className = "was-validated";
    }

    // if Feedback or Other is the reason, we need additionalInfo
    if ((reason == "Other" || reason == "Feedback" ) && additionalInfo == "") {
        // additionalInfoO.required = true;     // not working right now.
        invalidTextarea.style.display = "block";
        contactInfo.className = "was-validated";
        return false;
    }

    // the form was filled out
    if (!contactInfo.checkValidity()) {
        document.getElementById("additionalInfo").innerText = additionalInfo;
        contactInfo.className = "was-validated";
        return false;
    }

    // get patronage
    document.getElementById("patronageN").checked ? patronage = "No": patronage = "Yes";

    // best time to contact
    // all the days will be kept in an array and printed out that way.
    var day = [];

    if (document.getElementById("M").checked) {
        day.push("Monday");
    }
    if (document.getElementById("T").checked) {
        day.push("Tuesday");
    }
    if (document.getElementById("W").checked) {
        day.push("Wednesday");
    }
    if (document.getElementById("Th").checked) {
        day.push("Thursday");
    }
    if (document.getElementById("F").checked) {
        day.push("Friday");
    }

    switch (day.length) {
        case 0: bestTime = "We will contact you as soon as we can muster up the energy to people.";
            break;
        case 1: bestTime = day[0];
            break;
        case 2: bestTime = day[0] + " and " + day[1];
            break;
        default:
            for (var i = 0; i < day.length; i++) {
                if (i == (day.length - 1)) {
                    bestTime += "and " + day[i];
                } else {
                    bestTime += day[i] + ", ";
                }
            }
    }

    // put user inputs in the table
    document.getElementById("printName").innerText = name;
    document.getElementById("printEmail").innerText = email;
    document.getElementById("printPhone").innerText = phone;
    document.getElementById("printReason").innerText = reason;
    document.getElementById("printAdditionalInfo").innerText = additionalInfo;
    document.getElementById("printPatronage").innerText = patronage;
    document.getElementById("printBestTime").innerText = bestTime;

    // confirm our introvert is ready to interact with people.
    // if ready to interact with people, display the table with the data.
    confirm("Events involve other people, are you sure?") ? submittedInfo.style.display = "block" : contactInfo.reset();

    return false;
}

function resetForm() {
    console.log("reset button was clicked");
    var contactInfoII = document.forms["contactInfo"];

    document.getElementById("name").setCustomValidity('');      // reset validations
    document.getElementById("email").setCustomValidity('');
    document.getElementById("phone").setCustomValidity('');
    document.getElementById("reason").setCustomValidity('');
    contactInfoII.className = "needs-validation";

    document.getElementById("name").value = "";     // reset values ideally form.reset(); would work. but it didn't
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("reason").value = "Catering";
    document.getElementById("additionalInfo").value = "";
    document.getElementById("patronageN").checked = true;
    document.getElementById("patronageY").checked = false;
    document.getElementById("M").checked = false;
    document.getElementById("T").checked = false;
    document.getElementById("W").checked = false;
    document.getElementById("Th").checked = false;
    document.getElementById("F").checked = false;

    document.getElementById("submittedInfo").style.display = "none";       // hides users input
    // document.getElementById("additionalInfo").required = false;       // reset the attribute not working right.
    invalidTextarea.style.display = "none";

    // contactInfoII.reset(); // should be resetting my form
    document.getElementById("name").focus();

    return false;
}