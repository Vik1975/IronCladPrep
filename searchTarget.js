function search(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // If target is found
        if (nums[mid] === target) {
            return mid;
        }

        // Check which part is sorted
        if (nums[left] <= nums[mid]) {  // Left part is sorted
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;  // Search in the left part
            } else {
                left = mid + 1;   // Search in the right part
            }
        } else {  // Right part is sorted
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;  // Search in the right part
            } else {
                right = mid - 1; // Search in the left part
            }
        }
    }
    
    return -1;  // Target not found
}

// Example usage:
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(search(nums, target));  // Output: 4 (index of 0 in the rotated array)

const target2 = 3;
console.log(search(nums, target2)); // Output: -1 (3 is not in the array)
console.log('End')