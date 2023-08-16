
const container = document.querySelector('#container');

const calculatorLabels = [
['7', '8', '9', '/'],
['4', '5', '6', '*'],
['1', '2', '3', '-'],
['0','.','=', '+']
]

let userInput = "";
let num1 = 0;
let num2 = 0;
let operator;
let answer = 0;

let label;

let array = [];
index = 0;

function calculator() {
    label = document.createElement('label');
    label.textContent = "";
    container.append(label);

    for (let i = 0; i < 4; i++) {
        const row = document.createElement('div');
        row.style.display = 'flex';
        for (let j = 0; j < 4; j++) {
            const button = document.createElement('button');
            button.textContent = `${calculatorLabels[i][j]}`;

            row.append(button);
        }
        container.append(row);
    }
}

container.addEventListener('click', (e) => {
    // Check if the clicked element is a button
    if (e.target.tagName === 'BUTTON' && e.target.textContent !== '=') {
        userInput += e.target.textContent;
        label.textContent = userInput;
    }
    if (e.target.textContent === '=') {
        operate();
    }
});

function operate() {
    let operators = ['+', '-', '/', '*'];
    for (let op of operators) {
        if (userInput.includes(op)) {
            [num1, num2] = userInput.split(op).map(Number);
            operator = op;
            break;
        }
    }
    
    switch(operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
    }

    label.textContent = "";
    label.textContent = answer;
    answer = 0;
    userInput  = "";

}

calculator();