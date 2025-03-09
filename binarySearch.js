function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Find the middle index
        let mid = Math.floor((left + right) / 2);

        // Check if target is at the mid index
        if (arr[mid] === target) {
            return mid; // Target found, return index
        }

        // If target is greater, ignore the left half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore the right half
        else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;

console.log(binarySearch(arr, target)); // Output: 3 (index of 7)
console.log('End')