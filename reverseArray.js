// Function to reverse the array
function reverseArray(oldArray) {
    let newArray = []; // Create an empty array

    // Loop through the old array from the end to the beginning
    for (let i = oldArray.length - 1; i >= 0; i--) {
        newArray.push(oldArray[i]); // Move the element to the new array
    }

    return newArray; // Return the new reversed array
}

// Example input: [1, 2, 3, 4, 5]
const oldArray = [1, 2, 3, 4, 5];

// Call the reverseArray function
const newArray = reverseArray(oldArray);

// Output the result
console.log(newArray); // Output: [5, 4, 3, 2, 1]
console.log("End"); 
