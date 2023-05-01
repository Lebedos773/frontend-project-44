#! /usr/bin/env node

import readLineSync from 'readline-sync';

const num = Math.round(Math.random() * 100);

const primeNumber = (num) => {

  for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
          return 'no';
      }
  }
  return 'yes';
};

console.log('Welcome to the Brain Games!');

const name = readLineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const question = () => {
  
  let i = 0;

  while (i < 3){

    const num = Math.round(Math.random() * 100);

    const answer = primeNumber(num);
    console.log(`Question: ${num}`);
    const userUnswer = readLineSync.question('Your answer: ');
     
      if (answer === userUnswer && answer !== Number(1)) {
        i += 1;
        console.log('Correct!');

      } else {
        return console.log(`${userUnswer} is wrong answer ;(. correct answer was ${answer}.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

question();
