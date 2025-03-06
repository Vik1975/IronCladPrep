function countCharacters(str) {
    let countObj = {};  // Object to store the count of each character
    let result = '';    // String to store the final result

    // Count frequency of each character
    for (let char of str) {
        countObj[char] = (countObj[char] || 0) + 1;
        console.log(countObj)
    }

    // Construct the result string
    for (let char in countObj) {
        result += char + countObj[char];
        console.log(result)
    }

    return result;
}

// Example usage
const inputString = 'asdaafgffd';
const output = countCharacters(inputString);
console.log(`The Result : ${output}`);  // Output: 'a3s1d2f3g1'
console.log('End') 