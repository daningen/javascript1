(function () {
    'use strict';

    var flagItaly = '<div class="flag italy"><div class="first"></div>'
    + '<div class="second"></div></div>';

    var flagNigeria = '<div class="flag nigeria"><div class="first"></div>'
    + '<div class="second"></div></div>';

    var flagSweden = '<div class="flag sweden"><div class="first"></div>'
    + '<div class="second"></div></div>';

    var flagNetherland = '<div class="flag netherland"><div class="first"></div>'
    + '<div class="second"></div></div>';

    var flagEthiopia = '<div class="flag ethiopia"><div class="first"></div>'
    + '<div class="second"></div></div>';



    function shuffle(allCards) {
        //anropas för att slumpa ut korten på olika platser flagArray uppdateras
        var j, x, i;

        for (i = allCards.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = allCards[i - 1];
            allCards[i - 1] = allCards[j];
            allCards[j] = x;
        }
    }

    var flag = {
        html: "",
        init: function (html, id) {
            this.html = html;
            this.id = id;
        },

        draw: function (holder) {
            console.log("draw function");
            console.log("this.id is " + this.id);
            holder.innerHTML += "<div id='" + this.id + "'>" + this.html + "</div>";
        },

        undraw: function (holder) {
            holder.innerHTML = "";
        },
    };


    var itFlag = Object.create(flag);
    var svFlag = Object.create(flag);
    var ethFlag = Object.create(flag);
    var neFlag = Object.create(flag);
    var nigFlag = Object.create(flag);

    var flagArray = [];

    flagArray.push(itFlag, itFlag, svFlag, svFlag, ethFlag, ethFlag, neFlag, neFlag,
        nigFlag, nigFlag);

    shuffle(flagArray);


    itFlag.init(flagItaly, "it");
    svFlag.init(flagSweden, "sv");
    ethFlag.init(flagEthiopia, "nor");
    neFlag.init(flagNetherland, "ne");
    nigFlag.init(flagNigeria, "nig");



    //Global variables for memory game

    var items = document.getElementsByClassName("hidden"); //loopa igenom alla fält från html
    var clicks = 0;
    var pairs = 0;
    var firstElement = "";
    var secondElement = "";
    var flag1 = "";
    var flag2 = "";
    var timeout = 0;
    var index = "";



    //var start = new Date();

    var memory= function (event) {
    //function Memory(event) {
        console.log("hit kommer jag varje gång jag klickar på ett kort");
        console.log(event.currentTarget);
        var element = event.currentTarget;



        console.log("the element is ");
        console.log(element);

        if (clicks === 0 && timeout === 0) {
            index = parseInt(this.getAttribute("id")); //skriver ut vilken position kortet finns på
            console.log("whats in the index var? " + index);
            console.log("click = 0");

            flagArray[index].draw(element);

            firstElement = element;
            flag1 = firstElement.children[0].getAttribute("id");
            console.log("flag1 is " + flag1);

            clicks += 1;
        } else if (clicks == 1) {
            //en dubbelkoll att jag inte klickar på samma kort
            if (index == parseInt(this.getAttribute("id"))) {
                console.log("du har redan valt detta kort!");
                return;
            } else {
                index = parseInt(this.getAttribute("id"));
                flagArray[index].draw(element);

                secondElement = element;
                flag2 = secondElement.children[0].getAttribute("id");
                console.log("flag2 is " + flag2);

                clicks -= 1;

                if (flag1 != flag2) { // not a match
                    timeout = 1;
                    console.log("undraw");
                    window.setTimeout(function () {
                        flag.undraw(secondElement); //undraw som sätter kortet till blankt
                        flag.undraw(firstElement);
                        timeout = 0;
                    }, 1000);
                } else { // if flags match
                    console.log("Match");
                    pairs += 1; //ökar på upp antal för varje nytt par

                    if (pairs == 5) {
                        console.log("Grattis, vilket minne! ");
                    }
                }
            }
        }
    };

    for (var i = 0; i < items.length; i++) {
        console.log("här börjar jag spelet?");
        console.log(items[i]);
        items[i].addEventListener("click", memory);
    }
})();
