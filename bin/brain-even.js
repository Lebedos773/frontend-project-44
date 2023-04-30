#! /usr/bin/env node
import readLineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readLineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function ascking() {
  let i = 0;

  while (i < 3) {
    const number = Math.round(Math.random(10) * 10);

    console.log(`Question: ${number}`);

    const answ = readLineSync.question('Your answer: ');

    if (number % 2 === 0 && answ === 'yes') {
      i += 1;
      console.log('Correct!');
    } else if (number % 2 !== 0 && answ === 'no') {
      i += 1;
      console.log('Correct!');
    } else {
      const wrongYes = `${answ} is wrong answer ;(. correct answer was 'no'.\nLet's try again, ${name}!`;
      const wrongNo = `${answ} is wrong answer ;(. correct answer was 'yes'.\nLet's try again, ${name}!`;

      return answ === 'no' || number % 2 === 0 ? console.log(wrongNo) : console.log(wrongYes);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

ascking()