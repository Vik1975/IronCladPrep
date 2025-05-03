// Function to validate strong password
// Minimum 8 characters
// At least 1 letter
// At least 1 number
// At least 1 special character (e.g., @, #, $, etc.)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to validate strong password
function isStrongPassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
}

// Function to repeatedly ask for password until valid
function askPassword() {
  rl.question('Enter a strong password (min 8 chars, at least 1 letter, at least 1 number, special char: e.g., @, #, $, etc. ): ', (input) => {
    if (isStrongPassword(input)) {
      console.log('✅ Strong password accepted!');
      rl.close();
    } else {
      console.log('❌ Weak password. Please try again.\n');
      askPassword(); // Repeat
    }
  });
}

// Start prompting
askPassword();

