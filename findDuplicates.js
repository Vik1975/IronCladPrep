const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findDuplicatesWithCount(str) {
  const charCount = {};
  const duplicates = {};

  for (let char of str) {
    if (char === ' ') continue; // Skip spaces
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char in charCount) {
    if (charCount[char] > 1) {
      duplicates[char] = charCount[char];
    }
  }

  return duplicates;
}

rl.question('Enter a string to find duplicate characters (excluding spaces): ', (input) => {
  const result = findDuplicatesWithCount(input);
  console.log('Duplicate characters:', result);
  rl.close();
});

  