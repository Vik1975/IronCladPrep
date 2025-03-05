const readline = require('readline');

// Set up readline interface to get input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Brute-force method to find two indices
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; // Return the indices of the two numbers that sum to the target
            }
        }
    }
    return null; // Return null if no solution is found
}

// Ask user for input and process it
rl.question('Enter numbers separated by commas (e.g. 2, 7, 11, 15): ', (numbersInput) => {
    rl.question('Enter the target sum: ', (targetInput) => {
        // Convert the numbers input into an array of integers
        const nums = numbersInput.split(',').map(Number);

        // Convert the target input to a number
        const target = Number(targetInput);

        // Call the twoSum function to find the indices
        const result = twoSum(nums, target);

        // Display the result to the user
        if (result) {
            console.log(`Indices of numbers that add up to ${target}: [${result[0]}, ${result[1]}]`);
        } else {
            console.log(`No two numbers add up to ${target}`);
        }

        // Close the readline interface
        rl.close();
    });
});
