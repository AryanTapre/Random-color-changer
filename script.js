'use strict';
const generateRandomColorCode = (colorNumber) => {
    return parseInt(Math.random() * colorNumber + 1)
}

const generateRandomRgb = () => {
    return `rgb(${generateRandomColorCode(255)},${generateRandomColorCode(255)},${generateRandomColorCode(255)})`;
}

const startButton = document.getElementById('start-random');
const stopButton = document.getElementById('stop-random');

let reference;

startButton.addEventListener('click',function (){
    if(!reference) {
        reference = setInterval(function (){
            document.body.style.backgroundColor = generateRandomRgb();
        },200);
    }
},false);

stopButton.addEventListener("click",function (){
    console.log(reference);
    clearInterval(reference);
    reference = null;
},false)