/* eslint-disable */
/* global Test */
var Memory = (function () {
    /* eslint-enable */
    console.log("In Memory.testMemory");

    var content = document.getElementById('content');
    var question1 = document.getElementById('question1');

    var flagItaly = '<div id="it" class="flag italy"><div class="first" ></div>' +
        '<div class="second"></div></div>';

    var flagNigeria = '<div id="ni" class="flag nigeria"><div class="first"></div>' +
        '<div class="second"></div></div>';

    var flagSweden = '<div id="sw" class="flag sweden"><div class="first"></div>' +
        '<div class="second"></div></div>';

    var flagNetherland = '<div id="ne" class="flag netherland">' +
        '<div class="first"></div><div class="second"></div></div>';

    var flagEthiopia = '<div id="et" class="flag ethiopia"><div class="first"></div>' +
        '<div class="second"></div></div>';

    var flagJapan = '<div id="ja" class="flag japan">' +
        '<div class="japanBlob"></div></div>';

    var flags = [];
    var flagsCopy = []; //a copy of flags array to be used in random choicse of flags
    //var randomFlag = "hopplaflagga";

    var flag = {
        /* properties and methods */
        country: "",
        //init: function (country, flagga) {
        //init: function (html, id) {
        init: function (html) {
            //this.country = country;
            this.html = html;

            //this.id = id;
            //console.log("id in init : " + this.id);
            console.log("init function");
            //console.log("country i init är " + html);
            //console.log("stoppa in flaggan i flags[] och flagsCopy[]");
            flags.push(html);
            //add the flags to a new array to be used in random picking
            flagsCopy.push(html);
        },
    };

    /**
     * Funktionen skapar slummässigt en flagga
     * @param {String}  newFlag används om en ny flagga ska genereras, annars blank
     * @return {array} randomFId, randomClass och randomFlag
     */
    var randomFl = (function () {
        var randomFlagId;
        var randomClass;
        var randomFlag;

        return function (action) {
            console.log("action is " + action);
            if (action === "newFlag") {
                console.log("randomFlag2 func call with callparm");
                if (flagsCopy.length > 0) {
                    console.log("yes there are still flags");
                    randomFlag = flagsCopy[(Math.random() * flagsCopy.length) | 0];
                    //console.log("randomFlag in func randomFl is " + randomFlag);
                    randomFlagId = randomFlag.substr(9, 2); //slumpflaggans id
                    randomClass = randomFlag.split("\""); //plocka ut class
                    randomClass = randomClass[3];
                    //remove  the item from array flagsCopy to avoid it to be picked again
                    flagsCopy.splice(flagsCopy.indexOf(randomFlag), 1);
                    console.log("the randomFlag to return from func randomFl");
                    console.log(randomFlag);

                    return {
                        randomFlagId: randomFlagId,
                        randomClass: randomClass,
                        randomFlag: randomFlag
                    };
                } else {
                    console.log("flagsCopy array is empty");
                    return false;
                }
            } else {
                console.log("nope");

                return {
                    randomFlagId: randomFlagId,
                    randomClass: randomClass,
                    randomFlag: randomFlag
                };
            }
        };
    }());

    var draw = function (flagga, qst) {
        //flagTarget.innerHTML += flagga;
        //if sats som checkar att qst innehåller question
        // och i så fall skrivs fråga och slumpflagga ut
        if (qst != undefined) {
            console.log("question in draw");
            console.log(qst);
            //console.log("and the flagga? " + flagga);
            console.log("skriv ut fråga och slumpflagga i func draw ");
            question1.innerHTML = '<p class="positioned"> <b>Var finns denna flagga?</b></p>';
            console.log(" 1 skriv ut ny slump-flagga från func draw");
            question1.innerHTML += flagga;
        } else {
            //console.log("this.id is " + this.id);
            console.log("draw flag in draw func");
            content.innerHTML += flagga;
        }
    };
    /**
    för varje kort sätter jag ett nytt attribut som ändrar flaggorna till tomma kort
    **/
    var flip = function () {
        console.log("in flip function");
        var element = document.getElementsByClassName("flag");
        //var el1 = document.getElementsByClassName("flag");

        console.log("element.length " + element.length);
        //content.innerHTML = "hoppl";
        console.log("is it an array " + Array.isArray(element));
        Array.from(element).forEach(function (item) {
            console.log(item);
            var x = item.getAttribute('class');

            console.log("x is " + x);
            item.setAttribute('class', 'flag empty');
        });
        //a new flag to be generated
        console.log("call randomFlag1 from flip, should do after flipped cards");
        console.log("call with parm newFlag");
        var randomFlagDetails = randomFl("newFlag");
        var randomFlag = randomFlagDetails.randomFlag;

        //var randomFlagId = randomFlagDetails.randomFlagId;
        //var randomClass = randomFlagDetails.randomClass;

        //rita ut den flagga som ska gissas på
        console.log("anropa draw från flip function, skicka med fråga och slumpflaga");
        //console.log("randomFlag to send " + randomFlag);
        draw(randomFlag, "question");
        var emptyFlags = document.getElementsByClassName("empty");

        //add listener on empty flags
        var i;

        for (i = 0; i < emptyFlags.length; i++) {
            console.log(emptyFlags[i]);
            emptyFlags[i].addEventListener("click", memory);
        }
    };

    var memory = function (event) {
        //var maxTry = 3;
        console.log("hit kommer jag varje gång jag klickar på ett kort");
        console.log("currentTarget");
        console.log(event.currentTarget);
        var theId = this.id;

        console.log(theId);
        //console.log("randomFlagId in memory func " + randomFlagId);
        var randomFlagDetails = randomFl();

        // console.log("randomFlagDetails in memory function");
        // console.log(randomFlagDetails);
        var randomFlagId = randomFlagDetails.randomFlagId;

        console.log("randomFlagId in memory");
        console.log(randomFlagId);

        //var element = event.currentTarget;
        console.log("the clicked id " + event.target.id);
        console.log("randomFlagId in memory " + randomFlagId);

        //compare the clicked item with the actual flag
        if (event.target.id == randomFlagId) {
            console.log("good job, they are equal");
            // console.log(event.target.class);
            console.log("the target");
            console.log(event.target);
            // console.log("the attributes");
            // console.log(event.srcElement.classList.value);
            var randomClass = randomFlagDetails.randomClass;

            //change classname of the correctly clicked flag
            event.srcElement.setAttribute("class", randomClass);

            //use this var as key to change appearence to the new randomFlag
            //var oldRandomClass = randomClass;
            //var oldRandomFlagId = randomFlagDetails.randomFlagId;

            //här kan jag testa att jag inte har fått maxpoäng. Om poäng=6 dåär detta test klart
            //om jag svarar fel ska jag  komma till nästa test.
            console.log("increase localPoints");
            //window.test.points("increaseLocal");
            Test.points("increaseLocal");

            console.log("check if array contains data");

            randomFlagDetails = randomFl("newFlag");
            if (randomFlagDetails) {
                console.log("yes go on");
                draw(randomFlagDetails.randomFlag, "question");
            } else {
                console.log("array empty, return to test function");
                console.log("update globalpoints");
                Test.points("increaseGlobal");
                //question1 innehållande fråga och slumpflagga töms
                question1.innerHTML = "";
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
        } else {
            console.log("Sorry wrong answer");
            content.innerHTML = "<b>Sorry wrong answer</b>";
            //question1.innerHTML = "<b>Sorry wrong answer</b>";
            setTimeout(function () {
                question1.innerHTML = "";
                console.log("update globalpoints");
                Test.points("increaseGlobal");

                console.log("increase current position - to get to a new test");
                Test.currentPosition("increase");
                console.log("showTotalPoints");

                Test.showTotalPoints("current");
            }, 1000);
            setTimeout(function () {
                //question1 innehållande fråga och slumpflagga töms
                console.log("go to next instruction");
                Test.showInstruction();
                //return;
            }, 2000);
        }
        console.log("still in memory function");
    };
    var start = function () {
        console.log("in start function");

        content.innerHTML = "";

        //create object
        var swedishFlag = Object.create(flag);
        var italyFlag = Object.create(flag);
        var netherlandFlag = Object.create(flag);
        var nigeriaFlag = Object.create(flag);
        var ethiopiaFlag = Object.create(flag);
        var japanFlag = Object.create(flag);

        //init
        console.log("anropa init för varje objekt");
        swedishFlag.init(flagSweden, "se");
        italyFlag.init(flagItaly, "it");
        netherlandFlag.init(flagNetherland, "ne");
        nigeriaFlag.init(flagNigeria, "ni");
        ethiopiaFlag.init(flagEthiopia, "et");
        japanFlag.init(flagJapan, "ja");

        //console.log(flags.toString());
        console.log("flags length is " + flags.length);
        for (var i = 0; i < flags.length; i++) {
            //console.log("anrop för denna " + flags[i]);

            //flag.createElement(flags[i]);
            console.log("call draw from start func for all flags in flags array");
            draw(flags[i]);
        }
        console.log("after calling draw 6 times");
        setTimeout(function () {
            console.log("flippa så att flaggorna inte syns");
            flip();
        }, 2000);
    };

    return {
        start: start
    };
})();
