let numberOne = document.querySelector('.number-one');
let numberTwo = document.querySelector('.number-two');
let display = document.querySelector('.display');
let displayBox = document.querySelector('.display-box');


function sum(){
let numOne = parseInt(numberOne.value);
let numTwo = parseInt(numberTwo.value)
    if (numOne && numTwo){
        displayBox.style.display = 'block';
        display.innerHTML = `Answer is: ${numOne + numTwo}`;
    }else if(numOne){

        displayBox.style.display = 'block';
        display.innerHTML = 'Enter the second number!';
    }else {
        displayBox.style.display = 'block';
        display.innerHTML = 'Enter the first number!';

    }
}






