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


