/* ==================================================================================================================
Q. Write a function that returns the reverse of a string? 
================================================================================================================== */

let str = 'Write a function that returns the reverse of a string?';

// using for loop
function stringReverse(str) {
    let reverseStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    return reverseStr;
}

console.log(stringReverse(str));

// using array methods
function stringReverseUsingArrayMethods(str) {
    return str.split('').reverse().join('');
}

console.log(stringReverseUsingArrayMethods(str));


/* ==================================================================================================================
Q. Write a function that returns the longest word in the sentence.
================================================================================================================== */

// using for loop
function longestWord(str) {
    let longestWord = '',
        splitArray = str.split(' ');

    for (let i = 0; i < splitArray.length; i++) {
        if (splitArray[i].length > longestWord.length) {
            longestWord = splitArray[i];
        }
    }

    return longestWord;
}

console.log(longestWord(str));

// using array methods
function longestWordUsingArrayMethods(str) {
    return str.split(' ').sort((a, b) => a.length - b.length)[str.split(' ').length - 1];
}

console.log(longestWordUsingArrayMethods(str));


/* ==================================================================================================================
Q. Write a function that checks whether a given string is a palindrome or not?
================================================================================================================== */

// using for loop
function palindrome(str) {
    let reverseStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }

    str = str.replaceAll(' ', '').toLowerCase();
    reverseStr = reverseStr.replaceAll(' ', '').toLowerCase();

    return str === reverseStr;
}

console.log(palindrome(str));

// using array methods
function palindromeUsingArrayMethods(str) {
    let reverseStr = str.split('').reverse().join('');

    str = str.replaceAll(' ', '').toLowerCase();
    reverseStr = reverseStr.replaceAll(' ', '').toLowerCase();

    return str === reverseStr;
}

console.log(palindromeUsingArrayMethods(str));


/* ==================================================================================================================
Q. Write a function to remove duplicate elements from an array.
================================================================================================================== */

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];

// using for loop
function removeDuplicates(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    }

    arr = uniqueArray;

    return arr;
}

console.log(removeDuplicates(arr))


/* ==================================================================================================================
Q. Write a function that checks whether two strings are anagrams or not?
================================================================================================================== */

let s1 = 'cars', s2 = 'scar';

function anagrams(s1, s2) {
    if (s1.length !== s2.length) return false;

    let sortedS1 = s1.split('').sort().join(''),
        sortedS2 = s2.split('').sort().join('');

    if (sortedS1 === sortedS2) return true;

    return false;
}

console.log(anagrams(s1, s2));


/* ==================================================================================================================
Q. Write a function that returns the number of vowels in a string.
================================================================================================================== */

let vowelStr = 'Write a function that returns the number of vowels in a string';

// using for loop
function vowels(str) {
    let vowelsCount = 0,
        vowelsArr = ['a', 'e', 'i', 'o', 'u'],
        formattedStr = str.toLowerCase().replaceAll(' ', '');

    for (let i = 0; i < vowelsArr.length; i++) {
        if (formattedStr.includes(vowelsArr[i])) vowelsCount++;
    }

    return vowelsCount;
}

console.log(vowels(vowelStr));


/* ==================================================================================================================
Q. Write a function to find the largest number in an array.
================================================================================================================== */

let numArr = [1, 1, 21, 12, 3, 93, 4, 5, 6, 10, 23, 40, 98, 103, 73, 443, 2343, 42434, 232, 2, 1, 56];

// using for loop
function largestNum(arr) {
    let largestNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) largestNum = arr[i];
    }

    return largestNum;
}

console.log(largestNum(numArr));

// using array methods
function largestNumUsingArrayMethods(arr) {
    return arr.sort((a, b) => a > b ? 1 : -1)[arr.length - 1];
}

console.log(largestNumUsingArrayMethods(numArr));


/* ==================================================================================================================
Q. Write a function to check if a given number is prime or not?
================================================================================================================== */

// using for loop
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(isPrime(10));


/* ==================================================================================================================
Q. Write a function to calculate the factorial of a number.
================================================================================================================== */

// using for loop
function factorial(num) {
    if (num < 2) return 1;

    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }

    return factorial;
}

console.log(factorial(10));

// using recursion
function factorialUsingRecursion(num) {
    if (num < 2) return 1;

    return num * factorialUsingRecursion(num - 1);
}

console.log(factorialUsingRecursion(10));


/* ==================================================================================================================
Q. Write a function to remove all whitespace characters from a string.
================================================================================================================== */

let whitespaceStr = 'Write a    function to   remove all whitespace     characters from      a      string.';

// using for loop
function removeWhitespaces(str) {
    let modifiedStr = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') modifiedStr += str[i];
    }

    return modifiedStr;
}

console.log(removeWhitespaces(whitespaceStr));

// using string methods
function removeWhitespacesStringMethod(str) {
    return str.replaceAll(' ', '');
}

console.log(removeWhitespacesStringMethod(whitespaceStr));
