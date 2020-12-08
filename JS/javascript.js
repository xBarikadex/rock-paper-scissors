let playerInput = 0;
let computerInput = Math.ceil(Math.random() * 3);

function rock() {playerInput = 1;}
function paper() {playerInput = 2;}
function scissors() {playerInput = 3;}

function rockPaperScissors (playerInput) {
    if (playerInput == computerInput) {
        console.log("There was a draw");
    } else if (playerInput == 1 && computerInput == 2) {
        console.log("Computer won with paper");
    } else if (playerInput == 2 && computerInput == 3) {
        console.log("Computer won with scissors");
    } else if (playerInput == 3 && computerInput == 1) {
        console.log("Computer won with rock");
    } else if (playerInput == 2 && computerInput == 1) {
        console.log("Player won with paper");
    } else if (playerInput == 3 && computerInput == 2) {
        console.log("Player won with scissors");
    } else if (playerInput == 1 && computerInput == 3) {
        console.log("Player won with rock");
    } else {
        console.log("Uhhhhhhh...")
    }
}