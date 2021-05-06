/**
 * Showing off how to display/hide parts of a SVG-image.
 */
window.Hangman = (function () {
    "use strict";

    var allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö'];

    var wordList = ['blomma', 'lampa', 'boll', 'fotboll', 'radio', 'vinst',
    'lycka', 'sommar', 'jultomte', 'bild', 'cool',
    'fiol', 'strumpa', 'spis'];

    var SECRET_WORD = '';
    var placeholder = []; //to hold _ to hide the SECRET_WORD
    //var secret_word = getWord();
    //var answerArray = [];
    var correctGuesses = 0; //keep track of the number of correct guesses
    var incorrectGuesses = 0; //keep track of incorrect guesses
    var lives = 0;
    var gameOver = false;
    //var man;
    var output = document.getElementById("output");
    var messages = {
        win: 'Grattis, du vann!',
        lose: 'Du förlorade, vill du spela igen',
        omstart: 'Nytt spel igång'
    };

    var hangman = {

        // Get all elements as their id
        "partAsElement": {
            "hill": document.getElementById('hang_hill'),
            "gallow": document.getElementById('hang_construction'),
            "body": document.getElementById('hang_body'),
            "rightarm": document.getElementById('hang_rightarm'),
            "leftarm": document.getElementById('hang_leftarm'),
            "rightleg": document.getElementById('hang_rightleg'),
            "leftleg": document.getElementById('hang_leftleg'),
            "rope": document.getElementById('hang_rope'),
            "head": document.getElementById('hang_head')
        },

        // Create an array with all valid parts
        "validParts": [
            "hill",
            "gallow",
            "rope",
            "head",
            "body",
            "rightarm",
            "leftarm",
            "rightleg",
            "leftleg"
        ],

        "init": function () {
            console.log("in the init function");
            output.innerHTML = messages.omstart;
            gameOver = false;
            SECRET_WORD = this.selectWord();
            this.hideAll();
            this.hideSecretWord();
            this.placeLetters(); //skriver ut alla bokst med en lyssnare på alla knappar

            console.log("the chosen word in init " + SECRET_WORD);

            lives = 9;
            correctGuesses = 0;
            incorrectGuesses = 0;
            document.getElementById("man").innerHTML='You have ' + lives + ''
             + ' lives to go';
        },

        "getSecretWord": function () {
            //choose a random secret_word from array wordList
            return wordList[parseInt(Math.random () *wordList.length)];
        },

        "placeLetters": function () {
            var html = '';
            var l = '';

            html = '<ul>';

            for (var i = 0; i < allLetters.length; i++) {
                l = allLetters[i];
                html += '<button onclick="window.Hangman.setLetter(\''
                + l + '\'); this.style.backgroundColor=\'red\'; this.disabled = true; ">'
                + l + '</button>';

                //this.disabled = true gör att det bara går att trycka på kanappen en gång
                //console.log("hhhhhhtml is " + html);
                //console.log(allLetters[i]);
            }
            html += '</ul>';
            document.getElementById('box').innerHTML = html;
            console.log("in placeLetters function");
        },

        "selectWord": function () {
            SECRET_WORD = this.getSecretWord();
            console.log("the selected word is " + SECRET_WORD);
            return SECRET_WORD;
        },

        "hideSecretWord": function () {
            console.log("in hideSecretWord function");
            //denna gör jag endast för att tömma gammalt värde som är längre än nya ordet vid omspel
            document.getElementById("name").innerHTML="_ _ _";
            for (var i = 0; i < SECRET_WORD.length; i++) {
                placeholder[i] = "_ ";
            }
            document.getElementById("name").innerHTML=placeholder.join("");
            console.log();
        },

        "setLetter": function (letter) {
            //console.log(letter + " is the chosen letter in setletter func");
            if (!gameOver) {
                console.log(this.checkLetter(letter));
                console.log(document.getElementById('box'));
            }
        },

        "checkLetter": function (letter) {
            console.log("in checkLetter " + SECRET_WORD + " letter " + letter);
            var hit = false;

            //jfr bokstaven mot secret_word
            for (var i=0; i < SECRET_WORD.length; i++) {
                if (SECRET_WORD.charAt(i) === letter) {
                    console.log("the letter found " + letter);
                    placeholder[i]=letter;
                    //correctGuesses++;
                    hit = true;
                    if (correctGuesses === SECRET_WORD.length) {
                        console.log("grattis du vann");
                        this.gameComplete("win");
                        //return;
                    }
                } else {
                    console.log("sorry no match");
                }
                //här skriver jag ut de bokstäver jag har träff på
                //console.log("minska inte här");
                document.getElementById("name").innerHTML=placeholder.join("");
            }
            if (hit) {
                console.log("yes a hit");
                correctGuesses++;
                if (correctGuesses === SECRET_WORD.length) {
                    console.log("grattis du vann");
                    this.gameComplete("win");
                }
            }
            if (!hit) {
                this.show(this.validParts[incorrectGuesses]);
                incorrectGuesses ++;
                //console.log("minska med ett liv");

                lives --;
                if (lives < 1) {
                    console.log("you lost!");
                    document.getElementById("man").innerHTML='Du förlorade ';
                    this.gameComplete("lose");
                } else {
                    document.getElementById("man").innerHTML='You have ' + lives + ''
                     + ' lives to go';
                }
                //this.man.innerHTML = 'You have ' + lives + ' lives remaining';


                // console.log("lives " + lives);
                // if (lives < 1) {

                //}
            }
        },

        "gameComplete": function (status) {
            console.log(status);
            gameOver = true;
            if (status === "lose") {
                output.innerHTML = messages.lose;
            } else {
                output.innerHTML = messages.win;
            }
        },

        "peek": function () {  //skriver ut det valda ordet, fusk-funktionen
            console.log("The selected word is  " + SECRET_WORD);
        },

        "wordlist": function () {  //skriver alla ord
            for (var i = 0; i < wordList.length; i++) {
                console.log(wordList[i]);
            }
        },


        //används ej ännu men är tänkt att letter arg ska matchas mot svaret
        //om letter finns, då ska strecket bytas ut mot bokstav
        // "guessLetter": function (letter, shown, answer) {
        //     var checkIndex = 0;
        //
        //     checkIndex = answer.indexOf(letter);
        //     while ( checkIndex >= 0 ) {
        //         shown = this.alterAt(checkIndex, letter, shown);
        //         checkIndex = answer.indexOf(letter, checkIndex + 1);
        //     }
        //     return shown;
        // },

        /**
         * Check if part a valid part, writes error message to console if the part is invalid.
         *
         * @param string part Name of the part to check.
         *
         * @returns boolean true if valid part, else false.
         */
        "isValid": function (part) {
            if (this.validParts.indexOf(part) === -1) {
                //console.log("The part is not valid: " + part);
                return false;
            }
            //console.log("The part is valid: " + part);
            return true;
        },

        /**
         * Hide a part.
         *
         * @param string part Name of the part to hide.
         *
         * @returns void.
         */
        "hide": function (part) {
            if (this.isValid(part)) {
                //console.log("Hiding partttt: " + part);
                this.partAsElement[part].style.display = "none";
            }
        },

        /**
         * Hide all parts.
         * call this att first. Perhaps in the init part??
         *
         * @returns void.
         */
        "hideAll": function () {
            for (var i = 0; i < this.validParts.length; i++) {
                this.hide(this.validParts[i]);
                //console.log("Hiding part: " + this.validParts[i]);
            }
        },


        /**
         * Show a part.
         *
         * @param string part Name of the part to show.
         *
         * @returns void.
         */
        "show": function (part) {
            if (this.isValid(part)) {
                console.log("Showing part: " + part);
                this.partAsElement[part].style.display = "inline";
            }
        }
    };

    console.log("You can now use the hangman object as a part of the window-object." +
    "Try\n\nwindow.Hangman.hide('gallow')\nwindow.Hangman.show('gallow')" +
    "\n\nHere are all the parts you can work on.");
    //console.log(hangman.);

    // Return the object to make it visible.
    return hangman;
})();

//loop through all validparts and hide them
// for (var i = 0; i < window.Hangman.validParts.length; i++) {
//     console.log(window.Hangman.validParts[i]);
//window.Hangman.hide(window.Hangman.validParts[i]);
//}
//window.Hangman.hideAll();
window.Hangman.init();
