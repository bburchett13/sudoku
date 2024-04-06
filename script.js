let selectedNum = '';
let gameCells = [];
let gameLayout = [];
let playableCells = [];
let hintCells = [];
let playerHintsON = false;
let solved = false;
let counter = 0;
let counter2 = 0;

//These are my 3 game layout test cases
gameLayout = [7, 1, 4, 6, 8, 2, '', 5, '', '', 5, '', 9, 1, 7, 4, 8, 2, '', '', 2, '', '', 5, 1, '', 7, '', 4, 9, 2, 7, '', 5, 3, '', 6, '', 7, '', 9, 8, 2, 1, '', 8, '', '', '', '', '', 6, '', '', '', '', '', 3, '', '', 8, 9, '', 5, '', '', '', '', '', 3, '', '', 4, '', 3, 8, '', '', '', '', 1];

//This game layout should take ~6,000 iterations
// gameLayout = ['', '', '', '', '', 9, '', 5, '', 6, '', 8, '', '', '', 9, '', '', '', 5, 9, '', 8, '', 3, 6, '', '', '', '', 1, '', 2, '', '', '', 2, '', '', '', 4, '', '', '', 1, '', '', '', 7, '', 3, '', '', '', '', 2, 6, '', 5, '', 7, 3, '', '', '', 4, '', '', '', 5, '', 8, '', 9, '', 8, '', '', '', '', ''];

// gameLayout = [1, '', '', '', '', 3, 5, '', 6, '', '', '', '', '', '', 8, '', 7, '', 5, '', 6, '', '', '', '', '', '', '', 6, '', '', 7, '', '', 8, '', '', 8, '', 6, '', 2, '', '', 4, '', '', 9, '', '', 6, '', '', '', '', '', '', '', 4, '', 2, '', 2, '', 4, '', '', '', '', '', '', 9, '', 7, 5, '', '', '', '', 3];

let answer = [];
// var answer = [5, 3, 4, 6, 7, 8, 9, 1, 2, 6, 7, 2, 1, 9, 5, 3, 4, 8, 1, 9, 8, 3, 4, 2, 5, 6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 4, 2, 6, 8, 5, 3, 7, 9, 1, 7, 1, 3, 9, 2, 4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 2, 8, 7, 4, 1, 9, 6, 3, 5, 3, 4, 5, 2, 8, 6, 1, 7, 9];
let numberButtons = document.getElementsByClassName('numberButton');
let hints = document.getElementById("playerHints");
let row;
let column;
let square;
let squareIndex;

//Number Buttons
//#region
let btn1 = document.querySelector("#button1");
btn1.addEventListener('click', () => {

    oldNum = selectedNum;
    selectedNum = 1;
    resetNumButtons(oldNum, selectedNum);

});

let btn2 = document.querySelector("#button2");
btn2.addEventListener('click', () => {

    oldNum = selectedNum;
    selectedNum = 2;
    resetNumButtons(oldNum, selectedNum);

});

let btn3 = document.querySelector("#button3");
btn3.addEventListener('click', () => {

    oldNum = selectedNum;
    selectedNum = 3;
    resetNumButtons(oldNum, selectedNum);

});

let btn4 = document.querySelector("#button4");
btn4.addEventListener('click', () => {

    oldNum = selectedNum;
    selectedNum = 4;
    resetNumButtons(oldNum, selectedNum);

});

let btn5 = document.querySelector("#button5");
btn5.addEventListener('click', () => {

    oldNum = selectedNum;
    selectedNum = 5;
    resetNumButtons(oldNum, selectedNum);

});

let btn6 = document.querySelector("#button6");
btn6.addEventListener('click', () => {

    oldNum = selectedNum;
    selectedNum = 6;
    resetNumButtons(oldNum, selectedNum);

});

let btn7 = document.querySelector("#button7");
btn7.addEventListener('click', () => {

    oldNum = selectedNum;
    selectedNum = 7;
    resetNumButtons(oldNum, selectedNum);

});

let btn8 = document.querySelector("#button8");
btn8.addEventListener('click', () => {

    oldNum = selectedNum;
    selectedNum = 8;
    resetNumButtons(oldNum, selectedNum);

});

let btn9 = document.querySelector("#button9");
btn9.addEventListener('click', () => {

    oldNum = selectedNum;
    selectedNum = 9;
    resetNumButtons(oldNum, selectedNum);

});
let btnErase = document.querySelector("#erase");
btnErase.addEventListener('click', () => {

    oldNum = selectedNum;
    selectedNum = '';
    resetNumButtons(oldNum, selectedNum);

});
//#endregion

//Game Settings
//#region
let btnClear = document.querySelector("#clear");
btnClear.addEventListener('click', () => {

    for (i = 0; i < playableCells.length; i++) {

        gameCells[playableCells[i]].innerHTML = '';
        colorCell(playableCells[i], 'white', playerHintsON);

    }

})

let btnHints = document.querySelector('#playerHints');
btnHints.addEventListener('click', () => {

    if (playerHintsON) {

        playerHintsON = false;
        hints.style.borderColor = 'black';

    }
    else {

        playerHintsON = true;
        hints.style.borderColor = 'red';


    };
    colorCells(gameLayout, answer, playableCells, playerHintsON)
});


let solveBtn = document.querySelector('#solve');
solveBtn.addEventListener('click', () => {

    for (i = 0; i < answer.length; i++) {

        gameCells[i].innerHTML = answer[i];

    };

});

let makeBtn = document.querySelector("#makePuzzle");
makeBtn.addEventListener('click', () => {

    makeGame(gameLayout);
    answer = solve(gameLayout, playableCells);

});
//#endregion

//Function to change number button style to show which one is selected
function resetNumButtons(oldNum, num) {

    if (oldNum === '' && num !== ''){

        numberButtons[9].style.borderColor = 'black';
        numberButtons[num-1].style.borderColor = 'red';

    }
    else if (oldNum !== '' && num === '') {

        numberButtons[oldNum-1].style.borderColor = 'black';
        numberButtons[9].style.borderColor = 'red';

    }
    else if (oldNum === '' && num === '') {

        numberButtons[9].style.borderColor = 'red';

    }
    else {

        numberButtons[oldNum-1].style.borderColor = 'black';
        numberButtons[num-1].style.borderColor = 'red';
    };

};

// Create buttons for each cell and provide game logic
function makeGame(gameLayout) {

    for (let i = 0; i < gameLayout.length; i++) {
    
        // Find game cell
        gameCells[i] = document.getElementsByClassName('gameCell')[i];
        
        // create game board using the gameLayout
        gameCells[i].innerHTML = gameLayout[i];
    
        // If statement to create button for playable cells and decide what to do when the user puts a number in place
        if (gameLayout[i] === '') {
    
            gameCells[i].classList.add = 'playableCell';
            playableCells.push(i);
            colorCell(i, 'white', playerHintsON);
            // gameCells[i].style.backgroundColor = 'white';
            gameCells[i].addEventListener('click', () => {
        
                gameCells[i].innerHTML = selectedNum;
    
                // if wrong, make cell red, if erase, make cell white, if correct, make cell green
                if (selectedNum !== answer[i] && selectedNum !== '') {
    
                    colorCell(i, 'red', playerHintsON);
                    // gameCells[i].style.backgroundColor = 'red';
    
                }
                else if (selectedNum === '') {
    
                    colorCell(i, 'white', playerHintsON);
                    // gameCells[i].style.backgroundColor = 'white';
    
                }
                else {
    
                    colorCell(i, 'green', playerHintsON);
                    // gameCells[i].style.backgroundColor = 'green';
    
                }
        
            });
    
        };
        
    };

};

function colorCell(index, color, playerHintsON) {
    if (playerHintsON) {

            gameCells[index].style.backgroundColor = color;

    }
    if (color === 'white') {

        gameCells[index].style.backgroundColor = color;

    }

    
    
}

function colorCells(gameLayout, answer, playableCells, playerHintsON){

    if (playerHintsON) {

        for (let i = 0; i < playableCells.length; i++) {

            if (gameCells[playableCells[i]].innerHTML === answer[playableCells[i]].toString()){
    
                gameCells[playableCells[i]].style.backgroundColor = 'green';
    
            }
            else {

                gameCells[playableCells[i]].style.backgroundColor = 'red';

            }
            if (gameCells[playableCells[i]].innerHTML === ''){

                gameCells[playableCells[i]].style.backgroundColor = 'white';

            }
    
        }

    }
    else {

        for (let i = 0; i < playableCells.length; i++){

            gameCells[playableCells[i]].style.backgroundColor = 'white';

        }

    }


}

let solvingIndex;
let testNum;
let solvedCells = [];
function solve(gameBoard, playableCells) {
    answer = gameBoard;
    let maxSolvingIndex = 0;
    solvingIndex = 0;
    testNum = 1;
    while (!solved) {
        if (checkIfValid(answer, testNum, playableCells[solvingIndex])) {

            answer[playableCells[solvingIndex]] = testNum;

            solvingIndex = solvingIndex + 1;
            if (solvingIndex > maxSolvingIndex) {

                maxSolvingIndex = solvingIndex;

            }
            testNum = 1;

            if (solvingIndex > playableCells.length-1) {

                solved = true;
                return answer;
                
            }
        }
        else {

            testNum += 1;

        }
        if (testNum > 9) {
            while (testNum > 9) {

                answer[playableCells[solvingIndex]] = '';
                solvingIndex = solvingIndex - 1;
                testNum = answer[playableCells[solvingIndex]] + 1;
                if (solvingIndex < 0) {

                    console.log('impossible');
                    break;
    
                }

            }
            
            counter2++;

        };
    };
};

function checkIfValid(gameArray, num, index) {

    row = Math.floor(index/9);
    column = index % 9;
    square = findSquare(row,column);

    for (i = 0; i < 9; i++){
        //check row
        if (gameArray[i+(row*9)] === num) {
        // if (gameArray[row][i] === num) {

            console.log('row', testNum);
            return false;

        }
        //check column
        if (gameArray[column + (i*9)] === num) {
        // if (gameArray[i][column] === num) {

            console.log('column', testNum);
            return false;

        }
 
    };
    //check square
    if (checkSquare(square, num)) {

        console.log(checkSquare('square', testNum));
        return false;

    }
    return true;


};

// function to find the 3x3 square that the selected cell is in 
function findSquare(row, column) {
    squareMatrix = [[1, 1, 1, 2, 2, 2, 3, 3, 3], [1, 1, 1, 2, 2, 2, 3, 3, 3], [1, 1, 1, 2, 2, 2, 3, 3, 3], [4, 4, 4, 5, 5, 5, 6, 6, 6], [4, 4, 4, 5, 5, 5, 6, 6, 6], [4, 4, 4, 5, 5, 5, 6, 6, 6], [7, 7, 7, 8, 8, 8, 9, 9, 9], [7, 7, 7, 8, 8, 8, 9, 9, 9], [7, 7, 7, 8, 8, 8, 9, 9, 9]];
    return squareMatrix[row][column];
};

//check the 3x3 square to see if num is present. return true if present
function checkSquare(square, num) {
    counter = 0;
    //Define the square indeces for the square we are searching
    //#region
    if (square === 1) {

        squareIndex = [0,1,2,9,10,11,18,19,20];

    }
    if (square === 2) {

        squareIndex = [3,4,5,12,13,14,21,22,23];

    }
    if (square === 3) {

        squareIndex = [6,7,8,15,16,17,24,25,26];

    }
    if (square === 4) {

        squareIndex = [27,28,29,36,37,38,45,46,47];

    }
    if (square === 5) {

        squareIndex = [30,31,32,39,40,41,48,49,50];

    }
    if (square === 6) {

        squareIndex = [33,34,35,42,43,44,51,52,53];

    }
    if (square === 7) {

        squareIndex = [54,55,56,63,54,65,72,73,74];

    }
    if (square === 8) {

        squareIndex = [57,58,59,66,67,68,75,76,77];

    }
    if (square === 9) {

        squareIndex = [60,61,62,69,70,71,78,79,80];

    }
    //#endregion
    
    //Search through the square to see if the number of interest matches any number in the square
    for (let j = 0; j < 9; j++){
        if (gameLayout[squareIndex[j]] === num) {

            return true;
    
        }
        counter = counter + 1;

    };
    //If we search through all squares and haven't yet returned true, return false
    
    if (counter === 9) {
        return false;

    }
       
}