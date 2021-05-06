/**
 * @preserve 1b034900bac198994d0af493cc7d2f14
 *
 * 1b034900bac198994d0af493cc7d2f14
 * javascript1
 * lab4
 * v2
 * daer16
 * 2017-12-01 14:50:58
 * v2.3.8 (2017-10-19)
 *
 * Generated 2017-12-01 15:50:58 by dbwebb lab-utility v2.3.8 (2017-10-19).
 * https://github.com/mosbth/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent */
/* jscs:disable indent */
(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 4 - arrays
 *
 * Practise arrays. You might find useful help here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Array
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Arrays
 *
 * To copy an array use array.slice() to make a real copy, not a shallow one.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create a variable `array2` holding an array with the words:
 * `[candy,cake,cupcakes,lollipop,pringles]`. Return the element on position:
 * `1` in array2.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var array2 = ['candy', 'cake', 'cupcakes', 'lollipop', 'pringles'];





ANSWER = array2[1];

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, true);

/**
 * Exercise 1.2 (1 points)
 *
 * Use the variable `array2`. Concatenate the first item and the last item as
 * a string. Separate the string with `-`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

ANSWER = array2[0] + '-' + array2.slice(-1)[0];




//ANSWER = array2[0] + '-' + array2.pop(); //med pop plockas värdet bort

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Create an array, `array1`, with the items `47,98,-13,0,-412,499,3,1200`.
 *
 * Merge the two arrays, `array1` and `array2`, into a third variable
 * `array3`.
 *
 * Answer with array3.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var array1 = [47, 98, -13, 0, -412, 499, 3, 1200];

var array3 = array1.concat(array2);





ANSWER = array3;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, true);

/**
 * Exercise 1.4 (1 points)
 *
 * Create a variable `array21` as a clone of `array2`.
 * Sort `array21`.
 * (Hint:
 * http://stackoverflow.com/questions/3978492/javascript-fastest-way-to-duplic
 * ate-an-array-slice-vs-for-loop)
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var array21 = array2.slice(0);




ANSWER = array21.sort();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5 (1 points)
 *
 * Create a variable `array11` as a copy of `array1`.
 * Sort `array11` according to its values. The smallest value comes first and
 * the largest value comes last.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var array11 = array1.slice();

array11.sort(function (a, b) {
    return a - b;
});



ANSWER = array11;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, true);

/**
 * Exercise 1.6 (1 points)
 *
 * Create a variable `array22` which holds the same content as `array2` - but
 * all strings are uppercase.
 * Use the built-in Array-function `map()` to solve it.
 *
 * Answer with the array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */




var array22  = array2.slice(0).map(function (x) {
    return x.toUpperCase();
});



ANSWER = array22;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, true);

/**
 * Exercise 1.7 (1 points)
 *
 * Create a new array, `array12`. It should contain all positive numbers from
 * the `array1`.
 * Use the built-in array-function `filter()` to solve it.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



var array12 = array1.filter(function (v) {
    return v > 0;
});



ANSWER = array12;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 *
 * Create a function `arrayAverage()` that takes one array as argument and
 * returns the average of all elements in that array.
 *
 * Try out the function using `array1` and answer with the rounded integer
 * result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function arrayAverage(oneArray) {
    var total = 0;

    for (var i = 0; i < oneArray.length; i++) {
        total += oneArray[i];
    }

    return Math.round(total/oneArray.length);
}


ANSWER = arrayAverage(array1);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Modify arrays
 *
 * Learn how to modify arrays.
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Create a new array `myArray` and make it a copy of `array1`. Switch place
 * on the first and the last element, with the help of built-in
 * array-functions.
 * Use the array-functions `pop(), push(), shift() and unshift()`.
 *
 * Answer with `myArray`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var myArray = array1.slice();

/** unshift - adds one or more elements to the beginning of an array and
shift - method removes the first element
pop - removes the last element from an array and returns that element
push - adds one or more elements to the end of an arra
*/
var first = myArray.shift();
var last = myArray.pop();

myArray.unshift(last);
myArray.push(first);


ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, true);

/**
 * Exercise 2.2 (1 points)
 *
 * In `myArray` change the `3rd and 4th` value to the boolean value `false`
 * using built-in array-function `splice()`.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

console.log(myArray);
myArray.splice(2, 2);
console.log(myArray);
myArray.splice(2, 0, false);
myArray.splice(3, 0, false);



ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, true);

/**
 * Exercise 2.3 (1 points)
 *
 * Remove the `4th and 5th` item in 'myArray'. Then insert the string `MEGA`
 * after the item `3rd`. Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


myArray.splice(3, 2);
myArray.splice(3, 0, 'MEGA');



ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
