

document.addEventListener('DOMContentLoaded', function() {


// Screen display numbers when clicked 
const screenDisplay = document.getElementById("screen-numbers");
const btns = document.querySelectorAll('.bottom button');

btns.forEach(button => {
    button.addEventListener('click', function() {
        const letter = this.getAttribute('data-letter');
        const newLetter = document.createElement('span');
        newLetter.textContent = letter;
        newLetter.classList.add('calc-number');
        screenDisplay.appendChild(newLetter);
        console.log('Button clicked:', this);
        console.log('Data letter:', letter);
        console.log('New span element:', newLetter);
})
})

// calculator logic
/*
// Declaring variable for storing
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
*/




/*allBtns.forEach(button => {
    button.addEventListener( 'click' , function() {
      if (letter=="=")
        {
            secondOperand=currentInput;
            if (firstOperand&&operator&&secondOperand)
                {
                  const result=  evaluate(firstOperand,operator,secondOperand);
                  screenDisplay.innerHTML = '';
                  screenDisplay.innerHTML = result;
                }
        }  
        






})
});
*/

// Function for evaluating 

function evaluate(a,op,b) {
 a=parseFloat(a);
 b=parseFloat(b);
 switch (op) {
    case '+': return a+b;
    case '-': return a-b;
    case '*': return a*b;
    case '/': return a/b;
 }
};


// clear btn
const ceBtn = document.getElementById("ce");
ceBtn.addEventListener("click", function(){
    screenDisplay.innerHTML = '';
    currentInput='';
    operator='';
    firstOperand='';
    secondOperand='';
});





});

