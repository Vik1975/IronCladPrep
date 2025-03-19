function findMax(arr) {
    if (arr.length === 0) {
      return "Array is empty";  // Handle empty array case
    }
  
    let max = arr[0];  // Start by assuming the first element is the largest
  
    // Iterate over the array and compare each element
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];  // Update max if a larger element is found
      }
    }
  
    return (` Max number is: ${max}`);
  }
  
  const arr = [3, 1, 4, 1, 12, 9, 2];
  console.log(findMax(arr));  // Output: 9
  

  /*function findMax(arr) {
    if (arr.length === 0) {
      return "Array is empty";
    }
    return Math.max(...arr);
  }
  
  const arr = [3, 1, 4, 1, 5, 9, 2];
  console.log(findMax(arr));  // Output: 9
  */