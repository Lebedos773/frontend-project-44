#! /usr/bin/env node

import readLineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readLineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?.');

const makeProgression = () => {
  let result = [];

  const rndmNum = Math.ceil(Math.random() * 100);
  const rndmStep = Math.ceil(Math.random() * 5);

  for (let i = 0; i < rndmStep * 10; i += rndmStep) {
    result.push(rndmNum + i);
  }
  return result;
};

const ascking = () => {
  let i = 0;

  while (i < 3) {
  
    const arr1 = makeProgression();
    const getRandom = Math.ceil(Math.random() * 9);
    const rightAnswer = arr1[getRandom];
    const arr2 = arr1;
    arr2[getRandom] = '..';

    console.log(`Question: ${arr2.join(' ')}`);
    const userAnswer = readLineSync.question('Your answer: ');
   
    if (Number(userAnswer) === rightAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

ascking();
