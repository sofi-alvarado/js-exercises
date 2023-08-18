// 1. Write a function to calculate the area of a rectangle given its width and height
let inputHeight = document.getElementById("input-height");
let inputWidth = document.getElementById("input-width");
let btnCalculate = document.getElementById("btn-calculate-area");
let resultEl = document.getElementById("result-el")


btnCalculate.addEventListener("click", function showArea() {
    let nHeight = parseInt(inputHeight.value);
    let nWidth = parseInt(inputWidth.value);
    calculateArea(nHeight, nWidth);
})

function calculateArea(width, height) {
    return resultEl.textContent += height * width;
}

// End of Exercise 1

// 2. Create a function to check if a given number is even or odd.
let inputNumber = document.getElementById("input-number");
let btnCheck = document.getElementById("btn-check");
let resultNumber = document.getElementById("result-number");

btnCheck.addEventListener("click", function showNumber() {
    let pNumber = inputNumber.value;
    checkNumber(pNumber);
    clear();
    
})


function checkNumber(number) {
    console.log(number % 2)
    if (number % 2 === 0 ) {
        return resultNumber.textContent +=` ${number} is even`
    } else {
        return resultNumber.textContent +=` ${number} is odd`
    }
}

function clear() {
    inputNumber.value = " ";
}

// End of Exercise 2

// 3. Write a function to reverse a string.
 let inputReverse = document.getElementById("input-reverse");
 let btnReverse = document.getElementById("btn-reverse");
 let textReserve = document.getElementById("text-reverse");

 btnReverse.addEventListener("click", function showReverse() {
    let pString = inputReverse.value;
    reverseString(pString); 
 })

 function reverseString(string) {
    return textReserve.textContent += string.split("").reverse().join("");
 }

// End of Exercise 4

// 4. Implement a function to find the factorial of a number.
let inputFactorial = document.getElementById("input-factorial");
let btnFactorial = document.getElementById("btn-factorial");
let textFactorial = document.getElementById("text-factorial");

btnFactorial.addEventListener("click", function showFactorial() {
   let pNumber = inputFactorial.value;
   factorialNumber(pNumber); 
})

function factorialNumber(number) {
    let factorial = number;
   for (let i = 1; i < number; i++) {
        factorial = factorial * i;
   }
   console.log(factorial)
   return textFactorial.textContent += factorial;
}

// End of Exercise 4








function changeString(string) {
    if(string.length < 5) {
        return "Hello " + string;
    } else {
        let upperCase = string.toUpperCase();
        return upperCase;
    }
}

//console.log(changeString("Tio"));


function findMaxValue(numbers) {
    let maxValue = numbers[0];
    console.log(maxValue)
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue = numbers[i];
        }
    } 
    return maxValue;
}
const numbers2 = [9, 33, 2, 10]
//console.log(findMaxValue(numbers2));
//console.log(value)

