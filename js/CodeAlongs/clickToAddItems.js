var numberFun = document.forms["numberFun"];
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function validate() {
    numberFun.className = "needs-validation";
    if (!numberFun.checkValidity()) {
        numberFun.className = "was-validated";
        return false;
    }
    var operand1 = parseInt(num1.value, 10);
    var operand2 = parseInt(num2.value, 10);

    document.getElementById("addResult").innerText = operand1 + operand2;
    document.getElementById("subtractResult").innerText = operand1 - operand2;
    document.getElementById("multiplyResult").innerText = operand1 * operand2;
    document.getElementById("divideResult").innerText = operand1 / operand2;

    results.style.display = "block";
    submitButton.innerText = "Recalculate";

    return false;
}

function resetView() {
    numberFun.className = "needs-validation";
    results.style.display = "none";
    submitButton.innertext = "Calculate";
    num1.focus();
}
// For decimal numbers instead of using parseInt we should use parseFloat() maybe.

// What happens when you leave Num 1 or Num 2 empty and click "Calculate"?
//         You get a message saying that "Num 2 required and must be a number."
// Can you add non-numeric input? (Some browsers allow it. Others don't.) If so, what happens when you calculate?
//          Same error message as above.
// What happens if you enter 0 for Num 2? How does JavaScript handle division by zero?
//          You get "infinity" as an answer