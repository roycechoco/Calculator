

document.addEventListener('DOMContentLoaded', function() {




/*(const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
*/

const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnTimes = document.getElementById("times");
const btnDivide = document.getElementById("divide");

const screenDisplay = document.getElementById("screen-numbers");

const numBtns = document.querySelectorAll('.number-container button');
numBtns.forEach(button => {
    button.addEventListener('click', function() {
        const letter = this.getAttribute('data-letter');
        const newLetter = document.createElement('span');
        newLetter.textContent = letter;
        newLetter.classList.add('calc-number');
        screenDisplay.appendChild(newLetter);
})
})

const ceBtn = document.getElementById("ce");
ceBtn.addEventListener("click", function(){
    screenDisplay.innerHTML = '';
});


function add(a,b)
{
    return a+b;
}

function subtract(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    return a/b;
}





});

