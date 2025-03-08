function isValid(s) {
    let countParentheses = 0;
    let countBraces = 0;
    let countBrackets = 0;

    // Traverse the string
    for (let char of s) {
        if (char === '(') {
            countParentheses++;
        } else if (char === ')') {
            if (countParentheses === 0) return false;  // No opening '(' to match
            countParentheses--;
        } else if (char === '{') {
            countBraces++;
        } else if (char === '}') {
            if (countBraces === 0) return false;  // No opening '{' to match
            countBraces--;
        } else if (char === '[') {
            countBrackets++;
        } else if (char === ']') {
            if (countBrackets === 0) return false;  // No opening '[' to match
            countBrackets--;
        }
    }

    // If all counters are zero, the string is valid
    return countParentheses === 0 && countBraces === 0 && countBrackets === 0;
}

// Example usage:
console.log(isValid("()"));       // Output: true
console.log(isValid("()[]{}"));   // Output: true
console.log(isValid("(]"));       // Output: false
console.log(isValid("([)]"));     // Output: false
console.log(isValid("{[]}"));     // Output: true
console.log('End!!!')
