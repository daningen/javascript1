(function () {
    'use strict';

    //var myContent = document.getElementById('content');
    var flagTarget = document.getElementById('flag');

    var flagSweden = '<div class="flag sweden" title="Sveriges flagga">'
    + '<div class="horizontal bar"></div><div class="vertical bar"></div></div>';

    var flagNorway = '<div class="flag norway" title="Norges flagga">'
    + '<div class="horizontal outer bar"></div><div class="vertical outer bar">'
    + '</div><div class="horizontal inner bar"></div>'
    + '<div class="vertical inner bar"></div></div>';

    var flagNetherland =  '<div class="flag netherland" title="Nederländernas flagga">'
    + '<div class="horizontal1"></div><div class="horizontal2"></div></div>';

    var flagNigeria = '<div class="flag nigeria" title="Nigerias flagga">'
    + '<div class="vertical1"></div></div>';

    var flags = [];


    var flag = {
        /* properties and methods */
        country: "",
        //flags: [],
        //init: function (country, flagga) {
        init: function (country) {
            this.country = country;
            //this.flagga = flagga;
            console.log("country i init är " + country);
            //console.log("flagga i init är " + flagga);
            //this.flags.push(country, flagga);
            flags.push(country);
        },
        draw: function (flagga) {
            flagTarget.innerHTML += flagga;
            //return this.country;
        }
    };

    //create object
    var swedishFlag = Object.create(flag);
    var norwayFlag = Object.create(flag);
    var netherlandFlag = Object.create(flag);
    var nigeriaFlag = Object.create(flag);

    //init
    swedishFlag.init(flagSweden);
    norwayFlag.init(flagNorway);
    netherlandFlag.init(flagNetherland);
    nigeriaFlag.init(flagNigeria);

    //console.log(flags.toString());
    for (var i = 0; i < flags.length; i++) {
        console.log("detta vill jag printa " + flags[i]);
        flag.draw(flags[i]);
    }
})();
