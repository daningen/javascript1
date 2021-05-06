/* Baddie1 - Assignment */
/*
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

    // HTML Elements
    var baddie;
    // Numbers
    var step, left, top;
    var w = window.innerWidth;
    var h = window.innerHeight;




    // Get HTML baddie
    baddie = document.getElementById('baddie');

    // ------------------------------
    // ASSIGNMENT
    // How many pixles should baddie move each step? Assign a number to step
    step = 10;
    left = 40;
    top = 100;

    console.log("Baddie will move", step, "pixels each step");
    // ------------------------------
    // ASSIGNMENT
    // Where should baddie start on the screen? Assign a number to left and top



    // Places baddie initially
    baddie.style.left = left + "px";
    baddie.style.top = top + "px";
    console.log("Baddie started at " + left + "," + top);

    var content = document.getElementById('content'),
        browserSizeSpan = document.getElementById('browserSize'),
        divSizeSpan = document.getElementById('divSize'),
        browserHeight = window.innerHeight,
        browserWidth = window.innerWidth,
        divSize = {};

    //var browserHeight = window.innerHeight;
    //var browserWidth = window.innerWidth;

    console.log("browserWidth " + browserWidth);
    console.log("browserHeight " + browserHeight);
    console.log("content " + content);
    console.log("browserSizeSpan " + browserSizeSpan);
    console.log("divSizeSpan " + divSizeSpan);
    console.log("divSize " + divSize);
    function getSize(element) {
        var osWidth = element.offsetWidth,
            osHeight = element.offsetHeight,
            clientWidth = element.clientWidth,
            clientHeight = element.clientHeight,
            posX = element.offsetLeft,
            posY = element.offsetTop;

        return {
            osWidth: osWidth,
            osHeight: osHeight,
            clWidth: clientWidth,
            clHeight: clientHeight,
            posLeft: posX,
            posTop: posY
        };
    }


    //console.log(getSize(baddie));


    /* ------------------------------------
     * EVENTS
     */
    // Triggers action on keypress
    document.addEventListener("keydown", function (event) {
        var key;

        // Get which key was pressed
        key = event.keyCode || event.which;
        console.log(key + " was pressed");

        // Gets baddie's current position
        left = baddie.offsetLeft;
        top = baddie.offsetTop;
        console.log("Baddie is currently at " + left + "," + top);

        //browserSizeSpan.innerHTML = browserWidth + ' X ' + browserHeight + 'px';
        //divSize = getSize(content);
        //console.log("divSizexxx " + divSize);

        // ------------------------------
        // ASSIGNMENT
        // Use an if/else or switch (on key) to calculate where baddie is going
        // HINT: step contains the number of pixels that we want baddie to move
        // each time an arrow-key is pressed
        // and left and top contain the position on the screen that baddie
        // will be assigned later
        /* Key contains a number value for which keyboard key was pressed
         * 37 - left arrow
         *         change the variable left so that baddie will move left
         * 38 - up arrow
         *         change the variable top so that baddie will move up
         * 39 - right arrow
         *         change the variable left so that baddie will move right
         * 40 - down arrow
         *         change the variable top so that baddie will move down
         */
        if (key == 37) {
            left = left - step;
        } else if (key == 38) {
            top = top - step;
        } else if (key == 39) {
            left = left + step;
        } else if (key == 40) {
            top = top + step;
        }

        console.log("frame widh " + w + " frame hight " + h);




        // ------------------------------
        // EXTRA ASSIGNMENT
        // Handle so that baddie can't move outside of the window's edges
        // TIP: Use the getSize-example to find how you can get the window width and height



        // Assign a new position for baddie
        baddie.style.left = left + "px";
        baddie.style.top = top + "px";
        console.log("Baddie moved to %i,%i", left, top);
        //console.log(getSize("content"));
    });
}());
