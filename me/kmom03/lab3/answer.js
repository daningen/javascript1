/**
 * @preserve a55cf50c3abed4af004e26e9d0920f5c
 *
 * a55cf50c3abed4af004e26e9d0920f5c
 * javascript1
 * lab3
 * v2
 * daer16
 * 2017-11-03 17:18:47
 * v2.3.8 (2017-10-19)
 *
 * Generated 2017-11-03 18:18:48 by dbwebb lab-utility v2.3.8 (2017-10-19).
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
 * Lab 3 - functions
 *
 * Practice to write functions.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create a function `sumRangeNumbers()` that returns the sum of all numbers
 * between two chosen numbers. The function should take two arguments, one
 * representing the lowest boundary and one that represents the highest
 * boundary. For example, the arguments 10 and 20 should return the sum of
 * 10+11+12+13...+20.
 *
 * Test it using the values `30 and 70`, answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function sumRangeNumbers(x, y) {
    for (var i = x; i <= y; i++) {
        if (i !== x) {
            x = x + i;
        }
    }
    return x;
}

ANSWER = sumRangeNumbers(30, 70);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, true);

/**
 * Exercise 1.2 (1 points)
 *
 * Create a function called `fruitColor()` that takes one argument called
 * `fruit` and returns the color of the fruit.
 *
 * The function should be aware of the following fruits (`banana, apple, kiwi,
 * plum`) with respective color (`yellow, green, green, red`).
 *
 * Try it out using the fruit `banana` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function fruitColor(fruit) {
    var color;

    if (fruit == "banana") {
        color = "yellow";
    } else if (fruit == "apple") {
        color = "red";
    } else if (fruit == "kiwi") {
        color = "brown";
    } else if (fruit == "plum") {
        color = "purple";
    }
    return color;
}


ANSWER = fruitColor("banana");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Create a function `printRange()` that takes two arguments `rangeStart` and
 * `rangeStop` and returns a string with all numbers comma-separated in the
 * range.
 *
 * Try it using the arguments `22 and 49`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



 //console.log(result);

 //}

var result = "";

function printRange(rangeStart, rangeStop) {
    for (var i = rangeStart; i <= rangeStop; i++) {
        result += i + ',';
        //console.log("result " + result);
    }

    result = result.slice(0, -1);
    return result;
}

ANSWER = printRange(22, 49);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (1 points)
 *
 * Create a function `printRangeReversed()` that takes two arguments
 * `rangeStart` and `rangeStop` and returns a string with all numbers
 * comma-separated in the range.
 *
 * Try it using the arguments `49 and 22`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = "";
function printRangeReversed(rangeStart, rangeStop) {
    for (var i = rangeStart; i >= rangeStop; i--) {
        result += i + ',';
        //console.log("result " + result);
    }
    result = result.slice(0, -1);
    return result;
}



ANSWER = printRangeReversed(49, 22);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, true);

/**
 * Exercise 1.5 (1 points)
 *
 * Create a function `printAnyRange()` that takes two arguments `rangeStart`
 * and `rangeStop` and returns a string with all numbers comma-separated in
 * the range.
 *
 * If `rangeStart` is smaller than `rangeStop` then call the function
 * `printRange()`.
 *
 * If `rangeStart` is greater than `rangeStop` the call the function
 * `printRangeReversed()`.
 *
 * Try it using the arguments `22 and 49` (both ways).
 *
 * Answer with the result using arguments 22 and 49.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = "";
function printAnyRange(rangeStart, rangeStop) {
    if (rangeStart < rangeStop) {
        console.log("start is smaller than stop");
        result = printRange(rangeStart, rangeStop);
    } else {
        console.log("stop is smaller than start");
        result = printRangeReversed(rangeStart, rangeStop);
    }
    return result;
}


ANSWER = printAnyRange(22, 49);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6 (1 points)
 *
 * Create a function called `stringRepeat()` that returns a string a specific
 * number of times. The function should take two arguments, one string and one
 * number: `red` and `5`. The number represents the number of times the string
 * should be added to a string.
 *
 * Test the function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = "";
function stringRepeat(name, times) {
    for (var i = 0; i < times; i++) {
        result += name;
        //console.log("result " + result);
    }
    return result;
}




ANSWER = stringRepeat("red", 5);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, true);

/**
 * Exercise 1.7 (1 points)
 *
 * Create a function `inRange()` that takes three arguments, `rangeStart`,
 * `rangeStop` and `value`.
 *
 * The function should return boolean `true` if value is greater than
 * rangeStart and less than rangeStop. Otherwise it should return boolean
 * `false`.
 *
 * Try it out using the range `171 - 550` and the value `391`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function inRange(rangeStart, rangeStop, range) {
    if (range >= rangeStart && range <= rangeStop) {
        console.log("in between");

        return true;
    }
    console.log("not in between");
    return false;
}





ANSWER = inRange(171, 550, 391);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8 (1 points)
 *
 * Try out the function `inRange()` using the range `171 - 550` and the value
 * `642`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = inRange(171, 550, 642);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9 (1 points)
 *
 * Create a function called `degreesToRadians()` that should take one
 * argument, a degree value. The function should convert the value to radians
 * and return the result with max 4 decimals.
 *
 * Test your function with the value `35` and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function degreesToRadians(degree) {
    degree = (degree * Math.PI / 180);
    degree = parseFloat(degree.toFixed(4));
    return degree;
}


ANSWER = degreesToRadians(35);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, true);

/**
 * Exercise 1.10 (1 points)
 *
 * Create a function called `fizzBuzz()` that takes two arguments `start` and
 * `stop` and returns a comma-separated string.
 *
 * The arguments represents the starting point and stop point of the game
 * `Fizz Buzz` (http://en.wikipedia.org/wiki/Fizz_buzz). The function should
 * run from start to stop and add `Fizz`, `Buzz` or both to your
 * result-variable at appropriate numbers.
 *
 * Each entry to your result should be comma-separated. If `stop` is equal or
 * lower than `start`, the function should return an appropriate error
 * message.
 *
 * Test the function using `start=3 and stop=23`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = "";
function fizzBuzz(start, stop) {
    //start = parseInt(start.split("="));
    start = parseInt(start.replace(/[^0-9]/g, ''));
    //stop = parseInt(stop.split("="));
    stop = parseInt(stop.replace(/[^0-9]/g, ''));


    console.log("start is " + start + " stop is " + stop);
    for (var i = start; i <= stop; i ++) {
        console.log(result);
        if (i % 3 == 0 && i % 5 == 0) {
            result +=  "Fizz Buzz" + ",";
        } else if (i % 3 == 0 && start % 5 == 0) {
            result +=  "Fizz Buss" + ",";
        } else if (i % 3 == 0) {
            result +=  "Fizz" + ",";
        } else if (i % 5 == 0) {
            result +=  "Buzz" + ",";
        } else {
            result += i + ",";
        }
    }

    result = result.slice(0, -1);
    return result;
}

ANSWER = fizzBuzz("start=3", "stop=23");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 2 . Extra assignments
 *
 * These questions are worth 3 points each. Solve them for extra points. In
 * this section, you could re-use your code from lab 1 in exercise 2.1 and
 * 2.2.
 *
 */



/**
 * Exercise 2.1 (3 points)
 *
 * Create a function called `printSum()` that should take two variables, the
 * sum of the players hand and the sum of the dealers hand.
 *
 * Your hand should be three cards with the values: `8, 3 and 10`.
 * The dealers hand should be three card with the values: `1, 8, 4`.
 * The function should return the sum and the player: `Player: 21, Dealer:
 * 13`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
result = "";

function printSum(player, dealer) {
    var countPlayer = 0;
    var countDealer = 0;

    console.log(player, dealer);
    //player = parseInt(player.split(",").join(""));

    player = player.split(",");
    dealer = dealer.split(",");

    console.log("splits " + player);

    for (var i = 0; i < player.length; i++) {
        console.log(player[i]);
        countPlayer += parseInt(player[i]);
        console.log("counting " + countPlayer);
    }
    for (i = 0; i < dealer.length; i++) {
        console.log(dealer[i]);
        countDealer += parseInt(dealer[i]);
        console.log("counting " + countDealer);
    }

    result = "Player: " + countPlayer + ", Dealer: " + countDealer;

    return result;
}




ANSWER = printSum("8,3,10", "1,8,4");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, true);

/**
 * Exercise 2.2 (3 points)
 *
 * Create a function called `printResult()` that should take two variables,
 * the sum of the players hand and the sum of the dealers hand.
 *
 * Players hand should be three cards with the values: `8, 3 and 10`. The
 * dealers hand should be three card with the values: `1, 8, 4`.
 *
 * This time you should include the check from lab 2 where you find out the
 * boundaries of the player and the dealer.
 * Player hand = 21 (black jack).
 * Player hand less than 21 (safe).
 * Player hand larger than 21 (busted).
 * Dealer hand less than 17 (safe).
 * Dealer hand larger or equal to 17 and less than 21 (stop).
 * Dealer hand = 21 (black jack).
 * Delaer hand larger than 21 (busted).
 *
 * Return a string in the format: `Player: safe, Dealer: busted`.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printResult(player, dealer) {
    var countPlayer = 0;
    var countDealer = 0;

    console.log(player, dealer);
    //player = parseInt(player.split(",").join(""));

    player = player.split(",");
    dealer = dealer.split(",");

    console.log("splits " + player);

    for (var i = 0; i < player.length; i++) {
        console.log(player[i]);
        countPlayer += parseInt(player[i]);
    }
    if (countPlayer == 21) {
        player =  "Player: black jack,";
    } else if (countPlayer < 21) {
        player =  "Player: safe,";
    } else {
        player =  "Player: busted,";
    }

    for (i = 0; i < dealer.length; i++) {
        console.log(dealer[i]);
        countDealer += parseInt(dealer[i]);
    }

    if (countDealer < 17) {
        dealer =  "Dealer: safe";
    } else if (countDealer == 17 || countDealer < 21) {
        dealer =  "Dealer: stop";
    } else if (countDealer == 21) {
        dealer = "Dealer: black jack";
    } else {
        dealer =  "Dealer: busted";
    }
    result = player + " " + dealer;
    return result;
}





ANSWER = printResult("8,3,10", "1,8,4");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, true);

/**
 * Exercise 2.3 (3 points)
 *
 * Create a function called `calculateInterest()` that returns the money you
 * have after x years of interest, given three arguments: `616, 11 and 5`.
 * First argument represents the start money, the second argument represents
 * the number of years your money produces interest. The third argument is the
 * interest rate in percent (%).
 *
 * Test your function and answer with the result with a maximum of 4 decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function calculateInterest(money, years, rate) {
    rate = rate/100 + 1;
    result = money * Math.pow(rate, years);
    result = parseFloat(result.toFixed(4));
    return result;
}



ANSWER = calculateInterest(616, 11, 5);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, true);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
