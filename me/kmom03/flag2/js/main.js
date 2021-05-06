(function () {
    'use strict';

    //var myContent = document.getElementById('content');
    var flagTarget = document.getElementById('flag');
    var linkSwe = document.getElementById('draw-Sweden');
    var linkNor = document.getElementById('draw-Norway');
    var linkNe = document.getElementById('draw-Netherland');
    var linkNi = document.getElementById('draw-Nigeria');

    function drawFlag(theFlag) {
        //console.log("in the showFlag function, going to show this " + this);

        console.log("hello the flag to show is " + theFlag);
        if (theFlag == "swe") {
            var flagSweden;

            flagSweden = '<div class="flag sweden" title="Sveriges flagga">'
            + '<div class="horizontal bar"></div><div class="vertical bar"></div></div>';
            flagTarget.innerHTML = flagSweden;
            console.log('Drawing flag Sweden!');
        } else if (theFlag == "nor") {
            var flagNorway = '<div class="flag norway" title="Norges flagga">'
            + '<div class="horizontal outer bar"></div><div class="vertical outer bar">'
            + '</div><div class="horizontal inner bar"></div>'
            + '<div class="vertical inner bar"></div></div>';

            flagTarget.innerHTML = flagNorway;
            console.log('Drawing flag Norway!');
        } else if (theFlag == "ne") {
            var flagNetherland;

            flagNetherland =  '<div class="flag netherland" title="Nederländernas flagga">'
            + '<div class="horizontal1"></div><div class="horizontal2"></div></div>';
            flagTarget.innerHTML = flagNetherland;
            console.log('Drawing flag flagNetherland!');
        } else if (theFlag == "ni") {
            console.log('Drawing flag Nigeria!');
            var flagNigeria = '<div class="flag nigeria" title="Nigerias flagga">'
            + '<div class="vertical1"></div></div>';

            flagTarget.innerHTML = flagNigeria;
            console.log('Drawing flag Nigeria');
        }
    }

    function addListeners() {
        linkSwe.addEventListener("click", () => {
            drawFlag("swe");
        }, false);
        linkNor.addEventListener("click", () => {
            drawFlag("nor");
        }, false);
        linkNe.addEventListener("click", () => {
            drawFlag("ne");
        }, false);
        linkNi.addEventListener("click", () => {
            drawFlag("ni");
        }, false);
    }
    addListeners();
})();
