const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumOfDigits(n) {
  let sum = 0;
  // Convert the number to a string to easily iterate over each digit
  for (let digit of n.toString()) {
    sum += Number(digit);  // Convert each character to a number and add to sum
  }
  return sum;
}

rl.question('Enter a number: ', (userInput) => {
  let n = parseInt(userInput, 10);  // Convert the input to an integer

  if (!isNaN(n)) {
    console.log("Sum of digits:", sumOfDigits(n));  // Output the sum of digits
  } else {
    console.log("Please enter a valid number.");
  }

  rl.close();
});
