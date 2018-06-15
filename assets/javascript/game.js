var winsLabel = document.getElementById("wins");
var losssLabel = document.getElementById("losses");
var guessesleftLabel = document.getElementById("guessesleft");
var yourguessesLabel = document.getElementById("yourguesses");
var messageLabel = document.getElementById("message");
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var guessesLeft = 9;
var myWins = 0;
var myLosses = 0;
var yourGuesses = "";


// Generate a random letter
function randomLetter(){

   return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

var ranLetter = randomLetter();
console.log("Alphabet " + randomLetter());

document.onkeyup = function (event) {
    if(guessesLeft > 1) {
        var letter = event.key.toUpperCase();  
        // var ranLetter = randomLetter();
        console.log(" new letter " + ranLetter);
        // Use regex to check for alphanumeric values
        if (/^[A-Z]/.test(letter)) {
            messageLabel.style.display = "none"   
            // console.log("hide " + letter);
            // code
        
            if(letter === ranLetter) {
                winsLabel.innerText = myWins += 1;
                guessesLeft = 9;
                guessesleftLabel.innerText = guessesLeft;
                yourGuesses = "";
                ranLetter = randomLetter();
                console.log(" new letter " + ranLetter);
            } else {
                guessesLeft -= 1;
                yourguessesLabel.innerText = "";
                yourGuesses += letter + " ";
            }
                    
         } else {
            messageLabel.style.display = "block"
            // console.log("block" + letter);
         }

        
    } else {
        // You lost now populate Losses
        myLosses += 1;
        // reset Guesses left
        guessesLeft = 9;
        // reset your guesses so far
        yourGuesses = "";
        losssLabel.innerText = myLosses;
    }
    guessesleftLabel.innerText = guessesLeft;
    yourguessesLabel.innerText = yourGuesses;
}