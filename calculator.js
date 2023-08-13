
const container = document.querySelector('#container');

const calculatorLabels = [
['7', '8', '9', '/'],
['4', '5', '6', '*'],
['1', '2', '3', '-'],
['0','.','=', '+']
]

let num1 = 0;
let num2 = 0;
let operator;

let label;

const array = [];
index = 0;

function calculator() {
    label = document.createElement('label');
        container.append(label);
        // label.textContent = '0';

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
        label.textContent += e.target.textContent;
        array[index] = e.target.textContent;
        index++;
    }
    if (e.target.textContent === '=') {
        label.textContent = "";
        operate();
    }
});

function operate() {
    alert(array);
}

calculator();