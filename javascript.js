//randomly chooses a word
var randAnswer = ["acetaminophen", "word", "super", "origami", "controller", "tree", "elephant", "computer", "calendar"];
var correctAns = randAnswer[Math.floor(Math.random() * randAnswer.length)];
var inputtedLetters = [];
var lives = 6;

//populate _'s for the answer display
displayAns("_");

//create buttons and event listeners
addInputButtons();

//create hearts
addHearts()

/*----functions----*/
function addHearts(){ //add hearts (lives) to HTML
    for (var i = 0; i < lives; i++){
        var elem = document.createElement("img");
        elem.setAttribute("src","assets/images/heart.png");
        elem.classList.add("life" + (i + 1));
        document.getElementsByClassName('hearts')[0].appendChild(elem);
    }
}

function addInputButtons(){
    for (var i = 97; i <= 122; i++){
        (function(i){
            var elem = document.createElement("button");
            var letter = String.fromCharCode(i);
            
            //class and HTML attributes
            elem.classList.add(letter);
            elem.innerHTML = letter.toUpperCase();

            //on click event listener
            elem.addEventListener("click",function(){letterAns(letter);}, false);
            //make the lement
            document.getElementsByClassName('btn-ans-div')[0].appendChild(elem);
        }(i))
    }
    document.getElementsByClassName("replay")[0].addEventListener("click", function(){window.location.reload();});
}

function takelife(){ //animate hearts if answer is wrong, end game if lives==0
    var lifeToRemove = document.getElementsByClassName("life" + lives)[0];
    lifeToRemove.classList.add("heart-dies"); 
    lives--;
    if(lives == 0){
        endGame("lost");
    }
}

//display the word on screen, update as user gets right
function displayAns(inputtedLetters){
    var finalStr = "";
    var element = document.getElementsByClassName("answer")[0];

    //compare each letter of the correct answer to the inputted letters and combine them to the final string to display
    for (var i =0; i < correctAns.length; i++){
        var wasLetterInputted = false;
        for (var j = 0; j < inputtedLetters.length; j++){
            if (correctAns[i] === inputtedLetters[j]){
                finalStr += inputtedLetters[j];
                wasLetterInputted = true;
                break;
            }
        }
        if (!wasLetterInputted){
            finalStr += "_ "; 
        }
           
    }
    element.innerHTML = finalStr;
    if(finalStr === correctAns){
        endGame("win");
    }
}

//each input for letter
function letterAns(letter){
    //modify button to fade
    var element = document.getElementsByClassName(letter)[0];
    element.classList.add("button-fade-out");
    
    //determine if letter the user chose can be found in the correct answer
    var found = false;
    for (var i = 0; i < correctAns.length; i++){
        if (letter === correctAns[i]){
            found = true;
            console.log("letter found");
            inputtedLetters.push(letter);
            displayAns(inputtedLetters);
            break;
        }
    }
    if (!found)
    {
        console.log("letter not found");
        //takelife();
        takelife();
    }
    
}

//game ends
function endGame(status){
    document.getElementsByClassName('game-status-div')[0].style.display = "block";
    if (status == "win"){
        document.getElementsByClassName('game-status')[0].innerHTML ="YOU WON";
    }
    else{
        document.getElementsByClassName('game-status')[0].innerHTML ="YOU LOST";
    }
    document.getElementsByClassName('wordAns')[0].innerHTML = "The word was: " + correctAns;
}