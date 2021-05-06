/* eslint-disable */
/* global Shapes Test*/
var Shapes = (function () {
/* eslint-enable */

    var content = document.getElementById('content');
    //var progress = document.getElementById('progress');
    var shapeQuestion = document.getElementById('shapeQuestion');

    var htmlShapes = [{
        name: "blueTriangle",
        class: 'triangle blue shapeTile',
        descr: "Den blå triangeln",
    }, {
        name: "redBlob",
        class: 'blob red shapeTile',
        descr: "Den röda cirkeln"
    }, {
        name: "greenRectangle",
        class: 'rectangle green shapeTile',
        descr: "Den gröna rektangeln"
    }, {
        name: "yellowBlob",
        class: 'blob yellow shapeTile',
        descr: "Den gula cirkeln"
    }, {
        name: "yellowTriangle",
        class: 'triangle yellow shapeTile',
        descr: "Den gula triangeln"
    }, {
        name: "blueSquare",
        class: 'square blue shapeTile',
        descr: "Den blå kvadraten"
    }, {
        name: "greenSquare",
        class: 'square green shapeTile',
        descr: "Den gröna kvadraten"
    }, {
        name: "greenBlob",
        class: 'blob green shapeTile',
        descr: "Den gröna cirkeln"
    }, {
        name: "redTriangle",
        class: 'triangle red shapeTile',
        descr: "Den röda triangeln"
    }, {
        name: "redRectangle",
        class: 'rectangle red shapeTile',
        descr: "Den röda rektangeln"
    }];

    //shuffles the array with the descriptions
    var shuffle = function shuffle(array) {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = array[counter];

            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    };
    /**
    * Funktionen skriver slumpmässigt ut beskrivningen på de olika
    * formerna som visas
    */
    var drawDescription = function () {
        console.log("in drawShapes func ");
        var shapeDescription = [];
        //var shapes = document.getElementsByClassName("shapeTile");
        //all question to later be sent to shuffle
        var i;

        for (i = 0; i < htmlShapes.length; i++) {
            //content.innerHTML += htmlShapes[i].html;
            //fill the array with the descriptions of each shape
            shapeDescription.push(htmlShapes[i].descr);
        }

        //shuffle
        shapeDescription = shuffle(shapeDescription);

        for (i = 0; i < htmlShapes.length; i++) {
            shapeQuestion.innerHTML += shapeDescription[i] + "<br>";
        }
    };
    /**
    * Funktionen skriver ut samtliga former.
    * @todo innehåller en bug, lyckas inte få listener att fungera
    */
    var drawShapes = function () {
        console.log("in drawShapes func ");
        var i;

        for (i = 0; i < htmlShapes.length; i++) {
            //shapeQuestion.innerHTML += shapeDescription[i] + "<br>";
            var element = document.createElement("div");

            element.className = htmlShapes[i].class; // lägg det så istället
            console.log("add listener for " + htmlShapes[i]);
            element.addEventListener("click", checkAnswer);
            content.appendChild(element);
        }
        var timeleft = 10;
        var downloadTimer = setInterval(function () {
            document.getElementById("progressBar").value = 10 - --timeleft;
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                console.log("timeleft");
                console.log(timeleft);
            }

            if (timeleft == 0) {
                console.log("time out");
                Test.showFinalPoints();
            }
        }, 1000);
    };
    /* eslint-disable */
    //denna används endast i felsökning av mina lyssnare som ej fungerar
    var draw = function () {
        var i;

        for (i = 0; i < htmlShapes.length; i++) {
            //shapeQuestion.innerHTML += shapeDescription[i] + "<br>";
            var element = document.createElement("div");

            element.className = htmlShapes[i].class; // lägg det så istället
            console.log("add listener for " + htmlShapes[i]);
            element.addEventListener("click", Shapes.checkAnswer);
            content.appendChild(element);
        }
    };
    /* eslint-enable */
    /**
    * Funktionen är en timer som ska hålla reda på tiden som jag har på
    * mig att utföra gällande test på
    */
    var progress = function () {
        console.log("in process func ");

        //<progress value="0" max="10" id="progressBar"></progress>

        var element = document.createElement("progress");

        element.value = "0";
        element.max = "10";
        element.id = "progressBar";
        content.appendChild(element);
    };
    /**
    * Funktionen ska jämföra mitt svar med facit som finns i htmlshapes.descr
    * @todo ej klart då min lyssnare ej fungerar
    */
    var checkAnswer = function (event) {
        //var maxTry = 3;
        console.log("hit kommer jag varje gång jag klickar på ett kort");
        console.log("currentTarget");
        console.log("I just got clicked: ", this, event);
        console.log(event.currentTarget);
        var theId = this.id;

        console.log(theId);
    };
    var start = function () {
        console.log("in start function in shapes.js");
        content.innerHTML = "";
        //draw();
        progress();
        drawDescription();
        drawShapes();
    };

    return {
        start: start
    };
})();
