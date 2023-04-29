#! /usr/bin/env node

import readLineSync from 'readline-sync';

const num = Math.round(Math.random() * 100);

const primeNumber = () => {

  const halfNumber = Math.round(num / 2);
  let i = 2;
  while (i < halfNumber) {
    
    if (num % i === 0) {
      return 'no'
    }
    i++;
  }
  return 'yes'
};

const answer = primeNumber(num)

console.log('Welcome to the Brain Games!');

const name = readLineSync.question('May I have your name? ');

console.log(`Hello ${name}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

console.log(`Question: ${num}`);

const userUnswer = readLineSync.question('Your answer: ');

const question = () => {
if (answer === userUnswer) {
  console.log('Correct!');
  } else {
    return console.log(`${userUnswer} is wrong answer ;(. correct answer was ${answer}.\nLet's try again ${name}!`);
  }
  
return console.log(`Congratulations, ${name}!`);
}

question()