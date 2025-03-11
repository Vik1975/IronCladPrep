function isPolyndrom(word) {
  return  word === word.split('').reverse().join('')
}
console.log(isPolyndrom('hello'));
console.log(isPolyndrom('madam'));
