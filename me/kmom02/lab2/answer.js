/**
 * @preserve d77c8cc6cfcc24e0c1226b8d1555ecdc
 *
 * d77c8cc6cfcc24e0c1226b8d1555ecdc
 * javascript1
 * lab2
 * v2
 * daer16
 * 2017-10-24 16:15:48
 * v2.3.8 (2017-10-19)
 *
 * Generated 2017-10-24 18:15:49 by dbwebb lab-utility v2.3.8 (2017-10-19).
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
 * Lab 2 - statements
 *
 * Statements and expressions in JavaScript.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . If, else if and else
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create five variables: `card1, card2, card3, card4, card5`.
 *
 * Assign the values `6, 8, 5, 2, 1` to the variables created above.
 *
 * Add them up and put the sum in a variable called `result`.
 *
 * Answer with the variable `result`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var card1 = 6;
var card2 = 8;
var card3 = 5;
var card4 = 2;
var card5 = 1;

var result = card1 + card2 + card3 + card4 + card5;

ANSWER = result;


// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Use an `if statement` to see if the five cards (card1-card5) have a
 * combined sum that is higher than 21.
 *
 * Create a variable `status` and give it a different value depending on the
 * following.
 *
 * * If the sum is higher than 21, give your variable the value `"busted"`.
 * * Else give it the value `"safe"`.
 *
 * Answer with your status-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
if (result > 21) {
    result = 'busted';
} else {
    result = 'safer';
}
ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Use `if else statements` to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21.
 *
 * Answer with a string corresponding to the result:
 * lower = `"safe"`
 * higher = `"busted"`
 * 21 = `"black jack"`
 *
 * Store the response in your status-variable and answer with it.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var mySum = (card1 + card2 + card3);

console.log("mySum is " + mySum);
if (mySum == 21) {
    result = "black jack";
} else if (mySum < 21) {
    result = "safe";
} else {
    result = "busted";
}

ANSWER = result;
// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (2 points)
 *
 * Create three variables: `dealer1, dealer2, dealer3`.
 *
 * Assign the values `3, 1, 10` to the variables.
 *
 * Combine the `if`, `else if`, `else` statements and the operator `AND (&&)`
 * to see what the dealer should do. Combine as you feel needed.
 *
 * If the sum of the dealercards is lower than 17, answer with `"pick"`, if
 * the sum is higher than or equal to 17 and lower than 21 answer with
 * `"stop"`. If the sum is 21 answer with `"black jack"`. If the sum is higher
 * than 21 answer with `"busted"`.
 *
 * Store the response in a variable, and answer with it.
 *
 * PS. You can change the sum to test that your if-statement really works for
 * all values, just to try it out.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var dealer1 = 3;
var dealer2 = 1;
var dealer3 = 10;
var sum = dealer1 + dealer2 + dealer3;

if (sum < 17) {
    result = 'pick';
} else if (sum < 21) {
    result = 'stop';
} else if (sum == 21) {
    result = 'black jack';
} else {
    result = 'busted';
}

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 2 . Switch, case
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Use a switch-case statement to create a message with the type of fruit and
 * its color. You have the following type of fruits with a corresponding
 * color:
 *
 * * banana: yellow
 * * apple: green
 * * kiwi: green
 * * plum: purple
 *
 * Create a variable `myFruit` which holds the current type of your fruit. If
 * 'myFruit' is banana, the result should be a variable containing the string
 * value `"The banana is yellow."`
 *
 * Ensure that your switch-case works for all values.
 *
 * Answer with the result where `myFruit = "apple"`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myFruit = 'apple';

switch (myFruit) {
case 'banana':
    result = 'The ' + myFruit + ' is yellow.';
break;
case 'apple':
    result = 'The ' + myFruit + ' is green.';
break;
case 'kiwi':
    result = 'The ' + myFruit + ' is green.';
break;
case 'plum':
    console.log('The ' + myFruit + ' is purple.');
    result = 'The ' + myFruit + ' is purple.';
break;
}

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, true);

/**
 * Exercise 2.2 (1 points)
 *
 * Extend your switch-case statement with a `default value`. The result should
 * be:
 *
 * `"That is an unknown fruit."` when the variable 'myFruit' has an unknown
 * value.
 *
 * Answer with the result where 'myFruit = pear'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
myFruit = 'pear';
switch (myFruit) {
case 'banana':
    result = 'The ' + myFruit + ' is yellow.';
break;
case 'apple':
    result = 'The ' + myFruit + ' is green.';
break;
case 'kiwi':
    result = 'The ' + myFruit + ' is green.';
break;
case 'plum':
    console.log('The ' + myFruit + ' is purple.');
    result = 'The ' + myFruit + ' is purple.';
break;
default:
    result = 'That is an unknown fruit.';
break;
}

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . For loops
 *
 */



/**
 * Exercise 3.1 (1 points)
 *
 * Use a `for-loop` to increment `410` with the value `4`, `12` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = 410;
var i;

for (i = 0; i < 12; i++) {
    result = result + 4;
//  console.log(result);
}


ANSWER = result;
// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, true);

/**
 * Exercise 3.2 (1 points)
 *
 * Use a for-loop to decrement `714` with the value `4`, `19` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = 714;
for (i = 0; i <19; i++) {
    result = result - 4;
}



ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3 (3 points)
 *
 * Use a for-loop to add all the even values in the range `20` to `46` to a
 * string with each number separated by a comma `,`.
 *
 * The result should not end with a comma. You should neither have a space
 * after the comma.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = "";
for (i = 20; i < 47; i ++) {
    if (i % 2 == 0) {
        result += i + ',';
    }
}


//console.log(result);

//}

result = result.slice(0, -1);

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 4 . While loops
 *
 */



/**
 * Exercise 4.1 (1 points)
 *
 * Use a `while-loop` to increment `12` with the value `4` until it has
 * reached or passed `410`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

i = 12;
var x = 0;

while (i < 410) {
    i = i + 4;
    x = x + 1;
}
result = x;




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, true);

/**
 * Exercise 4.2 (1 points)
 *
 * Use a while-loop to subtract `4` from `714` until the value has reached or
 * passed `0`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
i = 714;
x = 0;
while (i > 0) {
    i = i - 4;
    x = x + 1;
}
result = x;




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);

/**
 * Exercise 4.3 (3 points)
 *
 * Use a while-loop to add all the values, to a comma-separated string, in the
 * range `26` to `61`, where the value is divisable by 5 or 7.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


result = "";
for (i = 26; i < 62; i ++) {
    if (i % 5 == 0 || i % 7 == 0) {
        result += i + ',';
    }
}


//console.log(result);

//}

result = result.slice(0, -1);

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.3", ANSWER, false);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
