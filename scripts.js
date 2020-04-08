const num = document.querySelectorAll(".number");
const equalsign = document.querySelector(".equal-sign");
const AC = document.querySelector(".all-clear");
const del = document.querySelector(".del");

const calcScreen = document.querySelector(".calc-screen");
let currentInput = '0';

const inputNumber = (num) =>{
    if(currentInput === '0'){
        if(num === '.')
            currentInput = '0.';
        if(num === '*' || num === '+' || num === '-' || num === '/' || num === '%' )
            currentInput = '0';
        else
            currentInput = num;
    }
    else
        currentInput += num;
}
const updateScreen = (number) => {
    calcScreen.value = number;
}
num.forEach((number)=>{
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);
        updateScreen(currentInput);
    })
})

equalsign.addEventListener("click", (event) =>{
    while(currentInput.endsWith('*') || currentInput.endsWith('+')  || currentInput.endsWith('-') || currentInput.endsWith('/') || currentInput.endsWith('%') )
        currentInput = currentInput.slice(0,-1)
    updateScreen(eval(currentInput));
    currentInput = '0'; 
})

AC.addEventListener("click", (event) =>{
    updateScreen(0);
    currentInput = '0';
})

del.addEventListener("click", (event) =>{
    if(currentInput.length === 1 || currentInput.length === 0)
        currentInput = '0';
    else
        currentInput = currentInput.slice(0,-1)
    updateScreen(currentInput);
})