'use strict';

let players = ["X", "O"];
let marker = ["X", "O"];
let score = [0,0];
let winScores = [7, 56, 84, 448, 73, 146, 292, 273];
let gameOver = false;
let whoseTurn = 0;  

document.getElementById("msg").innerHTML = "Let's Play!";

function checkWin() {
    for (let i=0; i<winScores.length; i++){
        if ((score[whoseTurn] & winScores[i]) == winScores[i]) { 
        document.getElementById("msg").innerHTML = players[whoseTurn] + " won the game!";
        gameOver = true;
        } else if (((score[0]+score[1])==511) && !gameOver) {
        document.getElementById("msg").innerHTML = "Cat wins, play again?";
        gameOver = true;
        }
    }
}

function ticTacToe(clickedDiv, divValue) {
    if (!gameOver) {
        score[whoseTurn] += divValue;
        clickedDiv.onclick = "";
        clickedDiv.innerHTML = "<span>" + marker[whoseTurn] + "</span>";
        checkWin();
        if (!gameOver){
            switchPlayer();
            document.getElementById("msg").innerHTML = "It's " + players[whoseTurn] + "'s turn!";    
        }
    }
};

function switchPlayer() {
    if (whoseTurn == 0) whoseTurn = 1;
    else whoseTurn = 0;
};

// function reset() {
//     console.log("this works!");
//     gameOver = false;
//     score = [0,0];
//     clearBoard();
// }
