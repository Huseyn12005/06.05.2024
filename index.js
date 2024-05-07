
//ARRAY

// Write a function that takes an array and returns a new array with the last item removed.
function removeLastItem(arr) {
    return arr.slice(0, -1);
}

// Write a function that takes an array and returns the length of items it has.
function arrayLength(arr) {
    return arr.length;
}

// Write a function that takes an array and an item, returns the array with the item added to the end of array.
function addItemToEnd(arr, item) {
    return [...arr, item];
}

// Write a function that takes an array and an item, returns the array with the item added to the beginning of array.
function addItemToStart(arr, item) {
    return [item, ...arr];
}

// Write a function that takes an array of words and returns a string of the words seperated by ,
function separateToArray(arr) {
    return arr.join(',');
}

// Write a function that takes an array and two indexes (start and end). Return an array consisting of items between the given indexes.
function Items(arr, start, end) {
    return arr.slice(start, end + 1);
}

// Write a function that takes an array and an index, returns the item at given index.
function Item(arr, index) {
    return arr[index];
}

// Write a function that takes an array and an item, removes that item from the array without leaving undefined items, returns the new array.
function removeItem(arr, item) {
    return arr.filter(value => value !== item);
}




//STRING

// Exercise 1: String Length 
// Write a function that takes a string and returns its length.
function stringLength(str) {
    return str.length;
}

// Exercise 2: Character at Index 
// Write a function that takes a string and an index. Return the character at that index.
function characterAtIndex(str, index) {
    return str[index];
}

// Exercise 3: Extract Substring 
// Write a function that takes a string and two indices (start and end). Return the substring between the given indices.
function Substring(str, start, end) {
    return str.slice(start, end);
}

// Exercise 4: Split and Count Words 
// Write a function that takes a sentence and returns the number of words in the sentence.
function count(sentence) {
    return sentence.split(' ').length;
}

// Exercise 5: Search and Replace 
// Write a function that takes a sentence and allows the user to search for a word or phrase and replace it with another word or phrase.
function Replace(sentence, search, replace) {
    return sentence.replace(search, replace);
}

// Exercise 6: Find Index of Character 
// Write a function that takes a string and a character and returns the index of the first occurrence of that character in the string.
function indexOfCharacter(str, char) {
    return str.indexOf(char);
}

// Exercise 7: Reverse a String 
// Write a function that reverses and returns a given string.
function Reverse(str) {
    return str.split('').reverse().join('');
}

// Exercise 8: Remove Whitespace 
// Write a function that takes a sentence with extra whitespace, removes the extra spaces and returns the sentence.

// Exercise 9: Concat
// Write a function that concatenates two given strings and returns the resulting string.
function Concat(str1, str2) {
    return str1 + str2;
}

// Exercise 10: Uppercase Conversion 
// Write a function that takes a sentence and converts the first letter of each word to uppercase.
function uppercaseFirsLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}