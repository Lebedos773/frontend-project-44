#! /usr/bin/env node
import readLineSync from 'readline-sync';
import mathematics from '../src/index.js';


console.log('Welcome to the Brain Games!');

const name = readLineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');


function ascking() {
  
  let i = 0;

  while (i < 3) {
    const ops = ['-', '+', '*'];
    const opindex = Math.floor(Math.random()*3);
    const operator = ops[opindex];

    const number2 = Math.round(Math.random(10) * 10);
    const number1 = Math.round(Math.random(10) * 10);
    const example = `${number1} ${operator} ${number2}`;
    
    console.log(`Question: ${example}`);
    const answ = readLineSync.question('Your answer: ');
    const sum = mathematics(number1, operator, number2);
   
    if (sum === Number(answ)) {
      i += 1;
      console.log('Correct!');
    } else {
      return console.log(`${answ} is wrong answer ;(. correct answer was ${sum}.\nLet's try again ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
}


ascking()