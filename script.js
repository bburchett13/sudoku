let selectedNum = 1;
var gameCells = [];
var gameLayout = [];
gameLayout = [5, 3, 4, 6, 7, 8, 9, 1, 2, '', 7, 2, 1, 9, 5, 3, 4, '', 1, 9, 8, 3, 4, 2, 5, 6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 4, 2, 6, 8, 5, 3, 7, 9, 1, 7, 1, 3, 9, 2, 4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 2, 8, 7, 4, 1, 9, 6, 3, 5, 3, 4, 5, 2, 8, 6, 1, 7, 9];
var answer = [5, 3, 4, 6, 7, 8, 9, 1, 2, 6, 7, 2, 1, 9, 5, 3, 4, 8, 1, 9, 8, 3, 4, 2, 5, 6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 4, 2, 6, 8, 5, 3, 7, 9, 1, 7, 1, 3, 9, 2, 4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 2, 8, 7, 4, 1, 9, 6, 3, 5, 3, 4, 5, 2, 8, 6, 1, 7, 9];
console.log(gameLayout.length);

// Create buttons for each cell and provide game logic
//#region
for (let i = 0; i < 81; i++) {
    
    // Find game cell
    gameCells[i] = document.getElementsByClassName('gameCell')[i];
    
    // create game board using the gameLayout
    gameCells[i].innerHTML = gameLayout[i];

    // If statement to create button for playable cells and decide what to do when the user puts a number in place
    if (gameLayout[i] === '') {

        gameCells[i].classList.add = 'playableCell';
        gameCells[i].style.backgroundColor = 'white';
        gameCells[i].addEventListener('click', () => {
    
            gameCells[i].innerHTML = selectedNum;

            // if wrong, make cell red, if erase, make cell white, if correct, make cell green
            if (selectedNum !== answer[i] && selectedNum !== '') {

                gameCells[i].style.backgroundColor = 'red';

            }
            else if (selectedNum === '') {

                gameCells[i].style.backgroundColor = 'white';

            }
            else {

                gameCells[i].style.backgroundColor = 'green';

            }
    
        });

    };
    
};
//#endregion


//#region
let btn1 = document.querySelector("#button1");
btn1.addEventListener('click', () => {

    selectedNum = 1;

});

let btn2 = document.querySelector("#button2");
btn2.addEventListener('click', () => {

    selectedNum = 2;

});

let btn3 = document.querySelector("#button3");
btn3.addEventListener('click', () => {

    selectedNum = 3;

});

let btn4 = document.querySelector("#button4");
btn4.addEventListener('click', () => {

    selectedNum = 4;

});

let btn5 = document.querySelector("#button5");
btn5.addEventListener('click', () => {

    selectedNum = 5;

});

let btn6 = document.querySelector("#button6");
btn6.addEventListener('click', () => {

    selectedNum = 6;

});

let btn7 = document.querySelector("#button7");
btn7.addEventListener('click', () => {

    selectedNum = 7;

});

let btn8 = document.querySelector("#button8");
btn8.addEventListener('click', () => {

    selectedNum = 8;

});

let btn9 = document.querySelector("#button9");
btn9.addEventListener('click', () => {

    selectedNum = 9;

});
let btnErase = document.querySelector("#erase");
btnErase.addEventListener('click', () => {

    selectedNum = '';


});
//#endregion


let makeBtn = document.querySelector("#makePuzzle");
makeBtn.addEventListener('click', () => {

    console.log("Make Puzzle?");

});
