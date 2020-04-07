/*
    Name: Fluffernutter
    Date Created: 04/06/20
    Most recent revision:
*/
var animals = [[" zebra", "https://cdn.pixabay.com/photo/2018/10/19/10/25/zebra-3758310_960_720.jpg"],
    [" horse", "https://cdn.pixabay.com/photo/2018/01/01/18/30/horse-3054683_960_720.jpg"],
    [" cow", "https://cdn.pixabay.com/photo/2016/10/04/23/52/cow-1715829_960_720.jpg"],
    [" sheep", "https://modernfarmer.com/wp-content/uploads/2017/12/Funny-Sheep-Facts-1200x800.jpg"],
    [" cat", "https://i.kym-cdn.com/photos/images/newsfeed/001/505/718/136.jpg"],
    [" dog", "https://i.pinimg.com/originals/6f/59/1e/6f591ead2c19d1442446a2be67aebd9a.jpg"],
    [" parrot", "https://cdn.pixabay.com/photo/2018/09/22/17/05/ara-3695678_1280.jpg"],
    [" hampster", "https://cdn.pixabay.com/photo/2016/03/05/22/54/animal-1239398_960_720.jpg"],
    ["n elephant", "https://cdn.pixabay.com/photo/2018/10/06/16/40/elephant-3728225_1280.jpg"],
    [" giraffe", "https://cdn.pixabay.com/photo/2017/04/11/21/34/giraffe-2222908_1280.jpg"]];
 
function question() {
    index = Math.floor(Math.random() * animals.length);
    document.getElementById("animalName").innerText = animals[index][0];    // insets the name of the animal in the question
    
    var answerBtn = Math.floor(Math.random() * 4);  // the button for our answer
    answerBtnId = "answer" + answerBtn;             // create the button id as a string
    document.getElementById(answerBtnId).innerHTML = "<img class = 'img-fluid' src = " + animals[index][1] + " alt = " + animals[index][0] + " />";  // insert HTML for image

    for (var i = 0; i < 4; i++){
        var wrongAnswer = Math.floor(Math.random() * animals.length);   // choose random other animals for other buttons

        if (i != answerBtn) {
            var id = "answer" + i;
            document.getElementById(id).innerHTML = "<img class = 'img-fluid' src = " + animals[wrongAnswer][1] + " alt = " + animals[wrongAnswer][0] + " />";
        }
    }

    game.style.display = "block"; // display question and buttons
}

document.getElementById("start").addEventListener("click", question);
