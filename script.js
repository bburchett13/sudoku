let selectedNum = 1;
var gameCells = [];
for (let i = 0; i < 81; i++) {


    gameCells[i] = document.getElementsByClassName('gameCell')[i];
    gameCells[i].addEventListener('click', () => {

        gameCells[i].innerHTML = selectedNum;

    });

};

// let gameCell = document.querySelector("#cell1");
// gameCell.addEventListener('click', () => {

//     gameCell.innerHTML = selectedNum;

// });

// let gameCell2 = document.getElementsByClassName('gameCell')[1]
//         gameCell2.addEventListener('click', function () {
//             gameCell2.innerHTML = selectedNum;
//         });

// Make Number Buttons and Assign them to selectedNum on click
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
//#endregion


let makeBtn = document.querySelector("#makePuzzle");
makeBtn.addEventListener('click', () => {

    console.log("Make Puzzle?");

});