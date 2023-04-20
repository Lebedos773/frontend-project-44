#! /usr/bin/env node
import readLineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readLineSync.question('May I have your name? ');

console.log(`Hello ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const number = Math.round(Math.random(10) * 10);

const question = readLineSync.question(`Question: ${number}`);
console.log(`Your answer: ${question}`);

function ascking() {
  let i = 0;

  while (i < 3) {
    if (number % 2 === 0 && question === 'yes') {
      i += 1;
      console.log('Correct!');
    } else if (number % 2 !== 0 && question === 'no') {
      i += 1;
      console.log('Correct!');
    } else {
      return console.log(`${question} is wrong answer ;(.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}`);
}

console.log(ascking(number));
