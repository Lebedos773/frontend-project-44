
export default function mathematics(number1, operator, number2) {
  let sum = 0;
  if (operator === '+') {
    return sum = number1 + number2;
  } else if (operator === '-') {
    return sum = number1 - number2;
  } else if (operator === '*') {
    return sum = number1 * number2;
  } else {
    return sum;
  }
}


export function NOD(number1, number2) {
  let c;
  while (number1 != number2) {
    if (number1 > number2) {
      number1 = number1 - number2;

    } else
    if (number1 < number2) {
      c = number1;
      number1 = number2;
      number2 = c;
    }

  }
  return number1
}


export function threeIteration(answ, result, name) {
  let i = 0;

  while (i < 3) {
    if (answ === result) {
      i++;
      console.log();
    } else {
      return console.log(`${answ} is wrong answer ;(. correct answer was ${result}.\nLet's try again ${name}!`);
    }
  }
  return console.log(`Congratulations ${name}!`);
}
