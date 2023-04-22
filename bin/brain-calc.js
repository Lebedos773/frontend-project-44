#! /usr/bin/env node
import readLineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readLineSync.question('May I have your name? ');

console.log(`Hello ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');