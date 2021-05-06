/* global Words Memory Shapes Fizzbuzz */
var Test = (function () {
    'use strict';

    var currentTest; //find the current test, key is currentPos, använd denna för att välja ut test
    //var qNr = 0; //keeps track on current question
    var content = document.getElementById('content');

    var allTests = [
        ["Intro",
            "Välkommen!",
            'Detta testpakettt syftar till att ge en kvantitativ uppskattning av dinaa' +
            ' kognitiva förmågor. Bli inte för nervös utan följ bara instruktionerna ' +
            'och klicka dig igenom testet. Efter varje deltest kommer du att få ' +
            'ett delresultat och efter hela testet en totalpoäng.' +
            ' <br><br>Lycka till!<p>Klicka för att fortsätta...</p>'
        ],
        ["testWords",
            "Ordkunskap",
            'Välj rätt betydelse på ordet i frågan. Du får poäng för ' +
            'varje rätt svar.<p>Klicka för att starta testet...</p>',
        ],
        ["testFizz",
            "FizzBuzz",
            'Välj det alternativ som fortsätter serien. Du får poäng ' +
            'för varje rätt svar.<p>Klicka för att starta testet...</p>'
        ],
        ["testMemory",
            "Minnestest",
            'Du kommer att få se nio flaggor under fem sekunder. En ' +
            'Efter detta kommer flaggorna ' +
            'att vändas bort och du skall klicka på rätt flagga enligt markeringen ' +
            ' på listan till vänster. Testet är över om du väljer fel eller klarat ' +
            'alla. Du får poäng för varje rätt vald flagga. <p>Klicka för ' +
            'att starta testet...</p>'
        ],
        ["testVisual",
            "Shapes",
            'Du kommer att få se tio former med olika färger och en' +
            'lista med former och färger.' +
            'En blå timer kommer att visas i underkant.<br> Du har 15 ' +
            'sekunder på dig att klicka på formerna i rätt ordning enligt listan.' +
            '<br> Testet är över efter 15s eller när du klarat alla. Du får poäng' + 'för varje ' +
            'rätt vald form. <p>Klicka för att starta testet...</p>'
        ],
        ["testPerception",
            "Ordkunskap",
            'Du kommer att få se tio former med olika färger. Du har 1 ' +
            'sekund på dig att klicka, eller inte, på formen som visas. <br><br>' +
            'Du skall klicka på former som:<p>Har en annan färg än röd.<br> Har ' +
            'en annan form än kvadrat.<br> Är röd och kvadrat.<br> </p>Testet är' +
            ' över när alla former har visats. Rätt klick ger poäng och fel ' +
            'ger 0 poäng. <p>Klicka för att starta testet...</p>'
        ]
    ];

    return {

        /**
        * Här startar testet, med anrop till informationsrutan
        */
        start: function () {
            console.log("in Test.start, get the first test");

            var currentTest = this.getCurrentTest();

            console.log("currentTest is " + currentTest);
            console.log("call function showInfoBox from func test.js");
            this.showInfoBox();
        },
        /**
        * Funktionen returnerar vilket test som är aktuellt
        * @return {string} currentTest
        */
        getCurrentTest: function () {
            console.log("in Test.getCurrentTest()");
            var currentPos = Test.currentPosition("current");

            currentTest = Test.getTestInfo()[currentPos][1];
            //var infoText = allTests[currentPos][2];

            console.log("in Test.getCurrentTest function and current test is " + currentTest);
            return currentTest;
        },
        /* eslint-disable */
        /**
        * Funktionen hämtar samtliga tester
        * @param {String}  newFlag används om en ny flagga ska genereras, annars blank
        * @return {array} allTests
        */
        getTestInfo: function (currentPos) {
            console.log("all the tests");
            return allTests;
            //return allTests[currentPos];
        },
        /* eslint-enable */

        /**
        * Funktionen
        * @param {String}  action anger om jag ska öka eller minska från vilken
        * position jag hämtar ett test
        * @return {string} currentP
        */
        currentPosition: (function () {
            var currentP = 0;

            console.log("in Test.currentPosition");

            return function (action) {
                if (action === "increase") {
                    console.log("action is " + action);
                    currentP += 1;
                    console.log("currentPos increased to " + currentP);
                    return currentP;
                    //reset används om jag vill börja om på föregående test. Är
                    //jag på första behöver jag inte backa
                } else if (action === "reset") {
                    if (currentP > 1) {
                        currentP = currentP - 1;
                    }
                } else {
                    //console.log("currentPos current unchanged " + currentP);
                    return currentP;
                }
            };
            //return counter += 1;
        })(),

        /**
        * Funktionen anger vilken fråga jag hämtar, denna är aktuell före
        * vissa tester
        * @param {String}  action används till att öka eller minske
        * @return {int} qNr
        */
        questionNr: (function () {
            var qNr = 0;

            return function (action) {
                console.log("qNr in Test.questionNr " + qNr);
                if (action === "increase") {
                    console.log("in Test.QuestionNr, increase nr now");
                    qNr += 1;
                    console.log("qNr increased to " + qNr);
                    return qNr;
                } else if (action === "reset") {
                    console.log("counter reset");
                    qNr = 0;
                    return qNr;
                } else {
                    console.log("return from Test.questionNr, qNr: " + qNr);
                    return qNr;
                }
            };
        })(),

        /**
        * Funktionen startar om aktuellt test
        * @todo innehåller en bug då poäng som jag fått ej nollställs om jag
        * precis lämnat testet
        */
        reset: function () {
            console.log("in Test.reset func");
            Test.points("reset");
            Test.questionNr("reset");
            Test.currentPosition("reset");
            console.log("call dispatcher to start all over");
            Test.dispatcher();
        },
        /**
        * Funktionen använder aktuellt objekt bygger sedan en questionBox
        * som visas i frågeformuläret.
        */
        createQuestion: function (data) {
            console.log("in Test.createQuestion function");
            console.log("data sent into createQuestion: " + data);
            //console.log("the data in creat function is  ");
            var question = data.question;
            var correctAnswer = data.correct;

            var options = data.options;
            var questionBox;

            // console.log("the options are " );
            // console.log(options);

            content.innerHTML = "";
            questionBox = document.createElement("div");
            questionBox.classList.add("questions");
            questionBox.innerHTML = question;
            content.appendChild(questionBox);

            //create the alternatives
            var optionsBox;
            //console.log("options length is :" + options.length);

            for (var i = 0; i < options.length; i++) {
                //console.log("the options " + options[i]);
                optionsBox = document.createElement("div");
                optionsBox.classList.add("questions");
                optionsBox.innerHTML += options[i];
                content.appendChild(optionsBox);
                optionsBox.addEventListener("click", function eventListener(e) {
                    console.log("my click " + e.target.textContent); //innehåller det jag klickat på
                    console.log("before checking");
                    var answer = e.target.textContent;

                    content.removeEventListener("click", eventListener);
                    if (Test.check1(answer, correctAnswer, e)) {
                        console.log("yes correct answer");

                        setTimeout(function () {
                            console.log("call dispatcher");
                            Test.dispatcher();
                            //console.log("return now");
                            //return;
                        }, 1100);
                    } else {
                        console.log("incorrect Answer");
                        setTimeout(function () {
                            console.log("call dispatcher");
                            Test.dispatcher();
                            //return;
                        }, 2000);
                    }
                    return;
                });
            }
        },
        /**
        * Funktionen håller redan på mina poäng
        * @param {String}  action används till att öka eller minska
        * @return {int} localCnt och globalCnt
        */
        points: (function () {
            var localPoints = 0;
            var allPoints = 0;

            return function (action) {
                console.log(action);
                if (action === "increaseLocal") {
                    localPoints += 1;
                    console.log("localPoints increased to  " + localPoints);
                    return {
                        localCnt: localPoints,
                        globalCnt: allPoints
                    };
                } else if (action === "reset") {
                    console.log("counter reset in Test.points");
                    localPoints = 0;
                    return {
                        localCnt: localPoints,
                        globalCnt: allPoints
                    };
                } else if (action === "increaseGlobal") {
                    console.log("increase global");
                    allPoints += localPoints;

                    //set local points to 0 after completed test
                    console.log("reset local points");
                    localPoints = 0;
                    return {
                        localCnt: localPoints,
                        globalCnt: allPoints
                    };
                } else {
                    return {
                        localCnt: localPoints,
                        globalCnt: allPoints
                    };
                }
                //return counter += 1;
            };
        })(),
        /**
        * Funktionen visar mina poäng
        */
        showTotalPoints: function () {
            console.log("show my points in Test.showTotalPoints");

            //var localP = window.test.points("current").localCnt);
            var globalP = this.points("current").globalCnt;
            var pointsBox;
            var currentPos = Test.currentPosition("current");

            console.log("currentPos is " + currentPos);
            console.log(Test.getTestInfo(currentPos));

            var rubrik = this.getTestInfo()[currentPos][1];

            console.log("och rubriken " + rubrik);
            //var infoText = allTests[currentPos][2];
            var infoText = 'Detta deltest avklarat. Nedan visas poängen ' +
                '<p>Vänta lite...</p>';

            content.innerHTML = "";
            pointsBox = document.createElement("div");
            pointsBox.classList.add("pointsBox");
            pointsBox.innerHTML = "<h3>" + rubrik + "</h3><br><p>" + infoText + "</p>";
            pointsBox.innerHTML += '<h2>' + 'Dina poäng' + '</h2><h3>' + globalP +
                ' </h3>';
            content.appendChild(pointsBox);
            content.addEventListener("click", function eventListener() {
                console.log("eventListener anropar dispatcher");
                //window.test.showQuestion();

                setTimeout(function () {
                    console.log("sleep in Test.showTotalPoints");
                    Test.dispatcher();
                    content.removeEventListener("click", eventListener);
                }, 1000);
            });
        },
        /**
        * Funktionen visar mina poäng totalt när test är klart
        */
        showFinalPoints: function () {
            console.log("show my points in Test.showFinalPoints");


            var globalP = this.points("current").globalCnt;
            var pointsBox;
            //var currentPos = Test.currentPosition("current");

            //console.log("currentPos is " + currentPos);
            //console.log(Test.getTestInfo(currentPos));

            var rubrik = "Grattis till ufört test!";

            console.log("och rubriken " + rubrik);
            //var infoText = allTests[currentPos][2];
            var infoText = 'Nedan visas poängen ' +
                '<p>Hoppas att det har varit givande...</p>';

            content.innerHTML = "";
            pointsBox = document.createElement("div");
            pointsBox.classList.add("pointsBox");
            pointsBox.innerHTML = "<h3>" + rubrik + "</h3><br><p>" + infoText + "</p>";
            pointsBox.innerHTML += '<h2>' + 'Dina poäng' + '</h2><h3>' + globalP +
                ' </h3>';
            content.appendChild(pointsBox);
        },
        /**
        * Funktionen är central och håller reda på vilket nästa test är
        */
        dispatcher: function () {
            console.log("in Test.dispatcher func");
            var currentPos = this.currentPosition("current");

            console.log("currentPos in Test.dispatcher is " + currentPos);

            var currentTest = Test.getCurrentTest();

            console.log("currentTest is " + currentTest);
            console.log("switch logic in Test.dispatcher");
            switch (currentTest) {
                case "Välkommen!":
                    console.log("only välkommen!");
                    break;
                case "Ordkunskap":
                    console.log("only ordkunskap");
                    //Shapes.start();
                    Words.start();
                    break;
                case "FizzBuzz":
                    console.log("only Fizzbuzz, call Fizzbuzz.start");
                    Fizzbuzz.start();
                    break;
                case "Minnestest":
                    console.log("only Minnestest, call Memory.start");
                    Memory.start();
                    break;
                case "Shapes":
                    console.log("only Minnestest, call Shapes.start");
                    Shapes.start();
                    break;
            }
        },
        /**
        * Funktionen visar information inför ett nytt test
        */
        showInfoBox: function () {
            var infoBox;
            var currentPos = this.currentPosition("current");
            var rubrik = allTests[currentPos][1];
            var infoText = Test.getTestInfo()[currentPos][2];

            currentPos = this.currentPosition("increase");

            console.log("from showInfoBox currentPos is " + currentPos);

            //currentPos += 1; //
            console.log("varför ökar jag denna 2 ggr?");
            console.log("currentPos is now " + currentPos);
            content.innerHTML = "";
            infoBox = document.createElement("div");
            infoBox.classList.add("infoBox");
            infoBox.innerHTML = "<h3>" + rubrik + "</h3><br><p>" + infoText + "</p>";
            content.append(infoBox);

            content.addEventListener("click", function eventListener() {
                console.log("click, anropa showInstruction");
                //window.test.showInstruction();
                Test.showInstruction(); //notera, här klickar jag på modulnamn och därefter funktion
                content.removeEventListener("click", eventListener);
            });
        },

        //
        /**
         * Instruktion om testet som ska visas inför varje nytt test visas
         * @param {number}  currentPos  håller reda på vilken rad i arrayen den ska
         * hämta text ifrån. Ex 1
         * @param {string} rubrik hämtar texten från array allTests
         * @param {string} infoText hämtar infotext från array allTests
         */
        showInstruction: function () {
            console.log("in Test.showInstruction");
            var instructionBox;
            var currentPos = this.currentPosition("current");
            var rubrik = Test.getTestInfo()[currentPos][1];
            var infoText = Test.getTestInfo()[currentPos][2];

            console.log(currentPos);
            console.log(rubrik);
            console.log(infoText);

            content.innerHTML = "";
            instructionBox = document.createElement("div");
            instructionBox.classList.add("instructionBox");
            instructionBox.innerHTML = "<h3>" + rubrik + "</h3><br><p>" + infoText + "</p>";
            content.appendChild(instructionBox);
            content.addEventListener("click", function eventListener() {
                console.log("eventListener anropar Test.dispatcher");
                //window.test.showQuestion();
                //window.test.dispatcher();

                /*en otrolig fullösning nedan
                jag hämtar ut rubrik för att se vilket test jag är på och om det är
                Minnestest, anropar jag ej Test.dispatcher. I övriga fall gör jag det.
                */

                var rubrik = Test.getTestInfo()[currentPos][1];

                console.log("rubriken i showInstruction " + rubrik + "obs ful ful lösning");
                if (rubrik != "Minnestest") {
                    Test.dispatcher();
                }
                content.removeEventListener("click", eventListener);
            });
        },
        /**
        * Funktionen jämför svar med facit
        * @return {boolean}
        */
        check1: function (answer, correctAnswer, e) {
            var qNr = Test.questionNr("current"); // jshint ignore:line
            /* eslint-disable */
            var currentTest = Test.getCurrentTest();
            /* eslint-enable */
            //console.log(this.globalCount);
            // var correctAnswer = Test.currentTest[qNr].correct;
            //var correctAnswer = ordkunskap[qNr].correct;

            console.log("correctAnswer in Words.check1 " + correctAnswer);

            //console.log("callback is "+ callback);
            console.log("in check1 function");
            //var corrA = this.correctAnswer;
            if (answer === correctAnswer) {
                //if (answer === this.corrAnsw(qNr)) {
                console.log("they are equal ");
                e.target.classList.add("markCorrect");

                console.log("increase localPoints");
                Test.points("increaseLocal");
                console.log("increase QuestionNr, called from Test.check1");
                Test.questionNr("increase");
                Test.questionNr("current");

                return true;
            } else {
                console.log("is qNr correct? " + qNr);
                //console.log("not equal " + answer + " and " + this.corrAnsw(qNr));
                console.log("not equal " + answer + " and " + correctAnswer);
                e.target.classList.add("markWrong");
                Test.questionNr("increase");
                //answer.classList.add("markWrong");
                //answer.classList.add("markWrong");
                //console.log("call questionNr function with increase parm");
                //callback();
                return false;
            }
        },
    };
}());

//Test.start();
//window.test.start();
