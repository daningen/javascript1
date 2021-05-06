/* global Test */
/* eslint-disable */
var Words = (function () {
/* eslint-enable */
    /**
    * Funktionen akontroller om det finns en ny fråga
    * @return {string} aktuell fråga
    */
    var nextQuestion = function () {
        console.log("in words.nextQuestion func");
        var qNr = Test.questionNr("current");

        console.log("qNR in words.nextQuestion " + qNr);
        var currentQuestion = ordkunskap[qNr];

        console.log("call getCurrentTest1");
        console.log("kolla ordkunskap nu");
        console.log(currentQuestion);
        console.log("denna skickar jag vidare");
        //createQuestion(currentQuestion);
        //console.log("currentTest in nextQuestion is " + JSON.stringify(currentTest1));
        //console.log("qNr is " + qNr);
        //if (typeof currentTest1[qNr] !== "undefined") {
        if (typeof currentQuestion !== "undefined") {
            console.log("a new question found in nextQuestion");
            //console.log(currentTest1[qNr]);
            console.log(currentQuestion);
            //return currentTest1[qNr].question; //denna returnerar endast frågan
            return currentQuestion; //denna returnerar hela frågeobjektet
        } else {
            console.log("är frågorna slut?");
            //här nollställer jag qNr så att jag kan börja på noll för kommande test
            Test.questionNr("reset");
            return false;
        }
        //return firstTest.questions[qNr].question;
    };
    /**
    * Objektet ordkunskap innehåller samtliga mina frågor
    * för detta test
    */
    var ordkunskap = [{
        question: 'Vad betyder "Klimakterium"?',
        options: ["befruktning", "höjdpunkt", "övergångsålder"],
        correct: "övergångsålder"
    }, {
        question: 'Vad betyder "Illustrativ"?',
        options: ["idealistisk", "belysande", "händelserik"],
        correct: "belysande"
    }, {
        question: 'Vad betyder "Oförrätt"',
        options: ["kränkning", "osanning", "bestraffning"],
        correct: "kränkning"
    }];

    return {
        start: function () {
            console.log("Publikt interface som jag kan anropa utifrån");

            //hämtar hela frågan med svar
            var question = nextQuestion();

            console.log("the questionn");
            console.log(question);

            if (question) {
                console.log("yes here is the question " + JSON.stringify(question));
                console.log("call createQuestion");
                Test.createQuestion(question);
            } else {
                console.log("no, there is no more question in this section");
                console.log("update globalpoints");
                Test.points("increaseGlobal");
                console.log("showTotalPoints");
                Test.showTotalPoints("current");
                console.log("increase current position - to get to a new test");
                Test.currentPosition("increase");
                setTimeout(function () {
                    console.log("go to next instruction");
                    Test.showInstruction();
                    //return;
                }, 2000);
            }
        }
    };
})();
