export function NOD(number1, number2) {
  let c;
  while (number1 !== number2) {
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
      i += 1;
      console.log();
    } else {
      return console.log(`${answ} is wrong answer ;(. correct answer was ${result}.\nLet's try again ${name}!`);
    }
  }
  return console.log(`Congratulations ${name}!`);
}

export function progression() {
  let arr1 = [];

  const rndmNum = Math.round(Math.random() * 100);
  const rndmStep = Math.round(Math.random() * 5);

  for (let i = 0; i < rndmStep * 10; i += rndmStep) {
    arr1.push(rndmNum + i);
  }

  return console.log(arr1);
};