#! /usr/bin/env node
import readLineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readLineSync.question('May I have your name? ');

console.log(`Hello ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function ascking() {
  let i = 0;

  while (i < 3) {
    const number = Math.round(Math.random(10) * 10);
    const question = readLineSync.question(`Question: ${number}`);
    console.log(`Your answer: ${question}`);

    if (number % 2 === 0 && question === 'yes') {
      i += 1;
      console.log('Correct!');
    } else if (number % 2 !== 0 && question === 'no') {
      i += 1;
      console.log('Correct!');
    } else {
      const wrongYes = `${question} is wrong answer ;(. correct answer was 'no'.\nLet's try again ${name}!`;
      const wrongNo = `${question} is wrong answer ;(. correct answer was 'yes'.\nLet's try again ${name}!`;

      return question === 'no' || number % 2 === 0 ? console.log(wrongNo) : console.log(wrongYes);
    }
  }
  return console.log(`Congratulations, ${name}`);
}

ascking()