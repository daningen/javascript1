/* eslint-disable */
/* global Fizzbuzz */
/* global Test */
var Fizzbuzz = (function () {
/* eslint-enable */
    var questionNr = (function () {
        var qNr = 0;

        return function (action) {
            //console.log("qNr in function questionNr " + qNr);
            if (action === "increase") {
                console.log("in function QuestionNr, increase nr now");
                qNr += 1;
                console.log("qNr increased to " + qNr);
                return qNr;
            } else if (action === "reset") {
                console.log("counter reset");
                qNr = 0;
                return qNr;
            } else {
                console.log("return from Fizzbuzz.questionNr, qNr: " + qNr);
                return qNr;
            }
        };
    })();

    var nextQuestion = function () {
        console.log("in words2.nextQuestion func");
        var qNr = questionNr("current");
        var currentQuestion = ordkunskap[qNr];

        console.log("call getCurrentTest1");
        // var currentTest1 = this.getCurrentTest1();
        //console.log("kolla testet");
        //console.log(Common.allTests()[0][2]);
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
            questionNr("reset");
            return false;
        }
        //return firstTest.questions[qNr].question;
    };

    var ordkunskap = [{
        question: 'Vilket är nästa i denna sekvens fortsätter serien?<br>' +
            'Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14,' +
            ' FizzBuzz, 16, 17, ...' +
            ' fizz, 1759, ?',
        options: ["buzz", "fizz", "1760"],
        correct: "buzz"
    }];
    var createQuestion = function (data) {
        console.log("in Words2.createQuestion function");
        console.log("data sent into createQuestion: " + data);
        //console.log("the data in creat function is  ");
        var content = document.getElementById('content');
        var question = data.question;

        var options = data.options;
        var questionBox;

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

                console.log();
                content.removeEventListener("click", eventListener);
                if (check1(answer, e)) {
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
    };
    var check1 = function (answer, e) {
        var qNr = questionNr("current");
        /* eslint-disable */
        var currentTest = Test.getCurrentTest();
        /* eslint-enable */
        var correctAnswer = ordkunskap[qNr].correct;

        console.log("correctAnswer in Words2.check1 " + correctAnswer);

        //console.log("callback is "+ callback);
        console.log("in check1 function");
        //var corrA = this.correctAnswer;
        if (answer === correctAnswer) {
            //if (answer === this.corrAnsw(qNr)) {
            console.log("they are equal ");
            e.target.classList.add("markCorrect");

            console.log("increase localPoints");
            Test.points("increaseLocal");
            console.log("increase QuestionNr, called from check1");
            questionNr("increase");

            return true;
        } else {
            console.log("is qNr correct? " + qNr);
            //console.log("not equal " + answer + " and " + this.corrAnsw(qNr));
            console.log("not equal " + answer + " and " + correctAnswer);
            e.target.classList.add("markWrong");
            questionNr("increase");
            //answer.classList.add("markWrong");
            //answer.classList.add("markWrong");
            //console.log("call questionNr function with increase parm");
            //callback();
            return false;
        }
    };


    return {
        publicMethodOne: function () {
            console.log(ordkunskap[1]);
        },

        start: function () {
            console.log("Publikt interface som jag kan anropa utifrån");

            //hämtar hela frågan med svar
            var question = nextQuestion();

            console.log("the questionnn");
            console.log(question);

            if (question) {
                console.log("yes here is the question " + JSON.stringify(question));
                console.log("call createQuestion");
                createQuestion(question);
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
