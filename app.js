//This calculator can only handle operations with two numbers at a time (can take multiple digits per number).
//As I'm unsure of how to store an unlimited number of variables (generating and deleting as needed) to store the numbers being operated on
//And implementing order of operations seems like it would be tricky.

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let displayNum = '';
let firstNum = '';
let secondNum = '';
let activeOperator = 'idle';
let equalActive = false;
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
    if(event.target.classList.contains('number')) {
        if(equalActive === true) {
            reset();
            equalActive = false;
        };
        if(activeOperator === 'idle') {
        displayUpdate();
        } else if (activeOperator === '+' || activeOperator === '-' || activeOperator === '/' || activeOperator === '*') {
        displayUpdate();
        secondNum = displayNum;
        };
    } else if (event.target.innerText === 'C') {
        reset();
    } else if(event.target.classList.contains('operator')) {
        equalActive = false;
        store();
    } else if (event.target.classList.contains('equals')) {
        calculate();
        };
    });
  });
/*-------------------------------- Functions --------------------------------*/
const displayUpdate = () => {
    displayNum += event.target.innerText;
    display.textContent = displayNum;
};

const store = () => {
    activeOperator = event.target.innerText;
    if(displayNum !== '') {
    firstNum = displayNum;
    displayNum = '';
    };
};

const reset = () => {
    displayNum = '';
    display.textContent = displayNum;
    activeOperator = 'idle';
    firstNum = '';
    secondNum = '';
}

const calculate = () => {
    let answer = '';
        if(activeOperator === '+') {
            answer = Number(firstNum) + Number(secondNum);
        } else if(activeOperator === '-') {
            answer = Number(firstNum) - Number(secondNum);
        } else if (activeOperator === '*') {
            answer = Number(firstNum) * Number(secondNum);
        } else if (activeOperator === '/') {
            answer = Number(firstNum) / Number(secondNum);
        } else {return};
        display.textContent = answer;
        firstNum = answer;
        displayNum = answer;
        secondNum = '';
        activeOperator = 'idle';
        equalActive = true;
};