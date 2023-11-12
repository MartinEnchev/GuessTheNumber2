"use strict"

const generateNumber = function () {
  return Math.trunc(Math.random() * 21);
}

let numberToGuess = generateNumber();

document.querySelector('.unknown-number').textContent = numberToGuess;

let points = 0;
let score = 20;

document.querySelector('.check-guess').addEventListener('click', function (){
  const yourGuess = Number(document.querySelector('.your-guess').value);
  // console.log(yourGuess);

  if (yourGuess !== 0 && !yourGuess) {
    document.querySelector('.messageFromTheGame').textContent = '.. that is not a number!'
  } else if (yourGuess === numberToGuess) {
    document.querySelector('.messageFromTheGame').textContent = 'You guessed right!';
    
    
  }


});
