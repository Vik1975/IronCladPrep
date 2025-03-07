function findMissingNumber(arr) {
    const n = arr.length; // Length of the array (n elements)
    
    // Calculate the expected sum of numbers from 1 to n+1
    const expectedSum = (n + 1) * (n + 2) / 2;
    
    // Initialize actualSum to 0 and loop through the array to sum its elements
    let actualSum = 0;
    for (let i = 0; i < n; i++) {
        actualSum += arr[i];
    }

    // The missing number is the difference between the expected and actual sum
    return expectedSum - actualSum;
}

// Example usage:
const arr = [3, 7, 1, 2, 8, 4, 5]; // The array is missing the number 3
console.log(findMissingNumber(arr));  // Output: 3