/*
    Name: Margaret Donin
    Date Created: 04/05/20
    Most recent revision: 
*/

function validate() {
    var placingTheBet = document.forms["placingTheBet"];            // get all object from form
    var strtBetS = document.getElementById("strtBet");              // get starting bet -> it's a string

    var strtBetN = parseFloat(strtBetS.value);                      // bet as a float
    strtBetS.setCustomValidity("");                                 // reseting validation of form

    var totalRolls;                                                 // just declaring my variables.
    var rollsOnMax = 0;
    var max = 0;
    var gameMoney = strtBetN;
    var die1;
    var die2;

    if (!placingTheBet.checkValidity()) {
        placingTheBet.className = "was-validated";
        return false;
    } else if (strtBetN <= 0) {
        placingTheBet.className = "was-validated";
        strtBetS.setCustomValidity("You need to play more money");
        return false;
    } else {
        for (totalRolls = 1; gameMoney > 0; totalRolls++) {
            die1 = Math.floor(Math.random() * 6) + 1;               // getting die numbers.
            die2 = Math.floor(Math.random() * 6) + 1;
            
            if ((die1 + die2) === 7) {                              // is the sum on the dice greater than 7
                gameMoney += 4
                if (gameMoney > max) {                              // check for max value
                    max = gameMoney;
                    rollsOnMax = totalRolls;
                }
            } else {                                                // dice total isn't 7, we lose money
                gameMoney--;
            }
        }
        placingTheBet.reset();										// resets form
        strtBetS.setCustomValidity("");                             // reseting validation of form

    }
    document.getElementById("printStrtBet").innerText = strtBetN;   // give user the resutlt
    document.getElementById("printTotalRolls").innerText = totalRolls;
    document.getElementById("printHighestAmtWon").innerText = max;
    document.getElementById("printRollCountAtHightestAmtWon").innerText = rollsOnMax;

    results.style.display = "block";                                // display results
    return false;
}