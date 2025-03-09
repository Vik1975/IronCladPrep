function maxSubArray(nums) {
    // Initialize the variables to track the current sum and the maximum sum
    let currentSum = nums[0];
    let maxSum = nums[0];

    // Loop through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Update the current sum: either add the current number or start a new subarray from current number
        currentSum = Math.max(currentSum + nums[i], nums[i]);
        
        // Update the maximum sum if the current sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    // Return the maximum sum found
    return maxSum;
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr)); // Output: 6, because the subarray [4, -1, 2, 1] has the largest sum
console.log('End')