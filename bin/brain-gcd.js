#! /usr/bin/env node

import readLineSync from 'readline-sync';
import { NOD } from '../src/index.js';


console.log('Welcome to the Brain Games!');

const name = readLineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

function ascking(){
  let i = 0;

  while (i < 3) {

    const number1 = Math.ceil(Math.random() * 10);
    const number2 = Math.ceil(Math.random() * 10);
    const example = `${number1} ${number2}`;
    
    console.log(`Question: ${example}`);
    const answ = readLineSync.question('Your answer: ');
    const sum = NOD(number1, number2);
   
    if (sum === Number(answ)) {
      i += 1;
      console.log('Correct!');
    } else {
      return console.log(`${answ} is wrong answer ;(. correct answer was ${sum}.\nLet's try again, ${name}!`);
    }
  }
  
  return console.log(`Congratulations, ${name}!`);
}

ascking()
