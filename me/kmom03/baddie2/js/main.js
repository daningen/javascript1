/* Baddie2 - Assignment */
/*
You should start by uncommenting blocks of code or functions that are needed for the assignment.
Follow the instructions given for each of these blocks.
After that you can start doing the assigments.
Assignment-sections start like this:
    // -------------------------------------------
    // ASSIGNMENT

Note that the INSTRUCTION can be to fill a whole BLOCK of code, not just one row.
In some cases you have to fill in some missing parts of code or change parts of it.
It can look like this:
    if(false)
These should be filled out by replacing the boolean false with your code, for example:
    if(x > 10)

Good luck!
*/

(function () {
    'use strict';

    // HTML elements
    var baddie, content; // eslint-disable-line no-unused-vars
    // Numbers
    var step, left, top;

    // Get HTML elements that are to be used
    baddie = document.getElementById("baddie");
    content = document.getElementById("content");

    // Step value - how far does baddie go per step - his own size per step
    step = baddie.offsetWidth;
    console.log("Baddie will step " + step + " pixels each move");

    // Gets starting position of baddie
    left = baddie.offsetLeft;
    top = baddie.offsetTop;
    console.log("Baddie starts at " + left + "," + top);

    /* ------------------------------------
     * EVENTS
     */
    // Triggers action on keypress
    document.addEventListener("keydown", function (event) {
        var key;

        // Gets what key was pressed as number
        key = event.keyCode || event.which;
        console.log(key + " was pressed");

        // Switch case to decide where baddie is to go
        // -------------------------------------------
        // ASSIGNMENT
        // Fill in the missing code in my switch case so that the baddie moves
        // Give each call to isBaddieMovable() the right parameters
        // Call moveBaddie in each case
        // Call turn-functions where needed
        switch (key) {
            case 37: //left

                if (isBaddieMovable(-1, 0)) {
                    moveBaddie(-1, 0);
                    turnLeft();
                    //left = left - step;
                    //console.log("call moveBaddie");

                    // Turn baddie left - Use the given function
                }
                break;
            case 38: //down
                if (isBaddieMovable(0, -1)) {
                    moveBaddie(0, -1);
                }
                break;
            case 39: //right
                if (isBaddieMovable(1, 0)) {
                    // Go right - Use moveBaddie-function
                    moveBaddie(1, 0);
                    turnRight();


                    // Turn baddie right - Use the given function
                }
                break;
            case 40: //up
                if (isBaddieMovable(0, 1)) {
                    // Go down - Use moveBaddie-function
                    moveBaddie(0, 1);
                    //top = top + step;
                }
                break;
            // ----------------------
            // EXTRA ASSIGNMENT
            // Create a case for spacebar key and use the function to jump


            default:
                // Button was pressed but no action is to be performed
                console.log("Nothing happened with the gameboard");
                // return this function so that the default button action is performed instead
                return true;
        }
        // Baddie action was performed - prevent button default
        event.preventDefault();
    });


    /* ---------------------------------------------------------
     * FUNCTIONS
     */

    /**
     * This function checks that the move was possible and returns eitherthe new position or false
     * @param  {int} moveLeft    - direction to move horizontally, range: -1 -> 1
     * @param  {int} moveTop    - direction to move vertically, range: -1 -> 1
     * @return {bool}             - if baddie was movable true is returned,
     * otherwise false is returned
     */
    var isBaddieMovable = function (moveLeft, moveTop) {
        var movable, newLeft, newTop, max;

        console.log("Checking if baddie collided with the content walls");
        // Assume that baddie did not collide at first
        movable = true;
        // Get baddie's new position if moved
        newLeft = left + moveLeft*step;
        newTop = top + moveTop*step;
        console.log("Checking collision at", newLeft, newTop);

        // --------------------------------------------
        // ASSIGNMENT
        // Fill out the missing parts accordingly so that the baddie doesn't
        // move outside of the content
        // Left wall collide check - check if newLeft outside content
        // Hint: you can type condition = 10 > 12; for example
        // The conditoion variable will hold a boolean of the evaluation
        console.log("left="+left);
        console.log("top="+top);
        console.log("newLeft="+newLeft);
        console.log("newTop="+newTop);

        var condition = newLeft < 0;

        if (condition) {
            movable = false;
            console.log("Baddie collided with left wall");
        }

        condition = newTop < 0;

        //check if newTop is outside myContent
        if (condition) {
            movable = false;
            console.log("Baddie collided with top wall");
        }
        condition = false;
        // Top wall collide check - check if newTop is outside content
        if (condition) {
            movable = false;
            console.log("Baddie collided with top wall");
        }
        // Right wall collide check
        // Change max value from 0 to that of content width
        max = 400;
        if (newLeft + baddie.offsetWidth > max) {
            movable = false;
            console.log("Baaaaaddie collided with right wall");
        }
        // Bottom wall collide check
        // Change max value from 0 to that of content height
        max = 300;
        if (newTop + baddie.offsetHeight > max) {
            movable = false;
            console.log("Baddie collided with bottom wall");
        }

        // Return if baddie collided
        console.log("return value of movable " +movable);
        return movable;
    };

    /**
     * Changes position variables for baddie and style to draw the change out on the screen
     * @param  {[type]} moveLeft    - direction to move horizontally
     * @param  {[type]} moveTop        - direction to move vertically
     */

    var moveBaddie = function (moveLeft, moveTop) {
        // Get new baddie positon by getting current one and adding step and direction
        // For example, if baddie wants to go right, the direction is opposite of left (-1)
        left += moveLeft*step;
        top += moveTop*step;

        // To actually visually move baddie we need to change left and top in style as pixels
        baddie.style.left = left + "px";
        baddie.style.top = top + "px";
    };


    /**
     * Performs 2 moves - up and down, so that it appears as if baddie jumps
     */
    //UNCOMMENT THIS SECTION FOR EXTRA ASSIGNMENT
    /*
    var jump = function() {
        // If baddie won't collide moving up - perform the jump with a timer to come down again
        if(isBaddieMovable(0, -1)) {
            // ----------------------
            // EXTRA ASSIGNMENT
            // Move baddie up

            // Create a timeout

            // In the timeout move baddie down again (called after the timeout finishes)

        }
    };
    console.log(jump);
*/

    /**
     * Turn baddie image right - transform handled in style.css
     */
    // UNCOMMENT THIS FUNCTION TO BE ABLE TO CONTINUE

    function turnRight() {
        baddie.classList.remove("baddie-left");
    }

    /**
     * Turn baddie image left - transform handled in style.css
     */
    // UNCOMMENT THIS FUNCTION TO BE ABLE TO CONTINUE

    function turnLeft() {
        baddie.classList.add("baddie-left");
    }
}());
