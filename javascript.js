//randomly chooses a word
var randAnswer = ["acetaminophen", "word", "super", "origami", "controller", "tree", "elephant", "computer", "calendar"];
var correctAns = randAnswer[Math.floor(Math.random() * randAnswer.length)];
var inputtedLetters = [];
var lives = 6;

//populate _'s for the answer display
displayAns("_");

//troubleshooting
//console.log(correctAns);

eventListeners();
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

//buttons
function eventListeners(){
    document.getElementsByClassName("a")[0].addEventListener("click", function(){letterAns("a")}); 
    document.getElementsByClassName("b")[0].addEventListener("click", function(){letterAns("b")});
    document.getElementsByClassName("c")[0].addEventListener("click", function(){letterAns("c")});
    document.getElementsByClassName("d")[0].addEventListener("click", function(){letterAns("d")});
    document.getElementsByClassName("e")[0].addEventListener("click", function(){letterAns("e")});
    document.getElementsByClassName("f")[0].addEventListener("click", function(){letterAns("f")});
    document.getElementsByClassName("g")[0].addEventListener("click", function(){letterAns("g")});
    document.getElementsByClassName("h")[0].addEventListener("click", function(){letterAns("h")});
    document.getElementsByClassName("i")[0].addEventListener("click", function(){letterAns("i")});
    document.getElementsByClassName("j")[0].addEventListener("click", function(){letterAns("j")});
    document.getElementsByClassName("k")[0].addEventListener("click", function(){letterAns("k")});
    document.getElementsByClassName("l")[0].addEventListener("click", function(){letterAns("l")});
    document.getElementsByClassName("m")[0].addEventListener("click", function(){letterAns("m")});
    document.getElementsByClassName("n")[0].addEventListener("click", function(){letterAns("n")});
    document.getElementsByClassName("o")[0].addEventListener("click", function(){letterAns("o")});
    document.getElementsByClassName("p")[0].addEventListener("click", function(){letterAns("p")});
    document.getElementsByClassName("q")[0].addEventListener("click", function(){letterAns("q")});
    document.getElementsByClassName("r")[0].addEventListener("click", function(){letterAns("r")});
    document.getElementsByClassName("s")[0].addEventListener("click", function(){letterAns("s")});
    document.getElementsByClassName("t")[0].addEventListener("click", function(){letterAns("t")});
    document.getElementsByClassName("u")[0].addEventListener("click", function(){letterAns("u")});
    document.getElementsByClassName("v")[0].addEventListener("click", function(){letterAns("v")});
    document.getElementsByClassName("w")[0].addEventListener("click", function(){letterAns("w")});
    document.getElementsByClassName("x")[0].addEventListener("click", function(){letterAns("x")});
    document.getElementsByClassName("y")[0].addEventListener("click", function(){letterAns("y")});
    document.getElementsByClassName("z")[0].addEventListener("click", function(){letterAns("z")});
    document.getElementsByClassName("replay")[0].addEventListener("click", function(){window.location.reload();});
}
