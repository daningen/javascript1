(function () {
    'use strict';

    var box1 = document.getElementById("box1");


    box1.style.zIndex = 0;  //används till att räkna upp varje ny kopia
    var workSpaceWidth = document.body.clientWidth;
    var workSpaceHeight = document.body.clientHeight;

    var randomForm = ["box", "circle"];
    var randomFormLength = randomForm.length;
    var randomColor = ["red", "green", "blue", "yellow"];
    var randomColorLength = randomColor.length;

    function centerDiv() {
        var box1Width = box1.clientWidth;
        var box1Height = box1.clientHeight;
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;

        box1.style.top = (
            windowHeight / 2) - (box1Height / 2) + "px";
        box1.style.left = (windowWidth / 2) - (box1Width / 2) + "px";
    }


    function logDetails(box, workSpaceWidth, workSpaceHeight) {
        return "Window width: " + workSpaceWidth +
            "px.\nWindow height: " + workSpaceHeight +
            "px.\n\tBox width: " + box.offsetWidth +
            "px.\n\tBox height: " + box.offsetHeight +
            "px.\n\tBox left position: " + box.offsetLeft +
            "px.\n\tBox top position: " + box.offsetTop + "px.\n\n";
    }
    console.log(logDetails(box1, workSpaceWidth, workSpaceHeight));

    function getSelected() {
        // var antal = document.getElementsByClassName("selected");
        //
        // console.log("count them in getSelected");
        // for (var i = 0; i < antal.length; i ++) {
        //     console.log(i);
        // }
        // console.log(document.getElementsByClassName("selected"));
        return document.getElementsByClassName("selected");
    }

    function toggleCircle() {
        var all = getSelected();

        for (var i = 0; i < all.length; i++) {
            all[i].classList.toggle("circle");
        }
    }



    function createCopy() {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var temp = all[i].cloneNode();


            temp.style.zIndex = parseInt(temp.style.zIndex) + 1; //hämtar int-värde från sig själv

            temp.addEventListener("click", function (event) {
                event.target.classList.toggle("selected");
            });
            //lägger ut elementet
            document.getElementsByTagName("body")[0].appendChild(temp);
            var randomHeight = Math.floor(Math.random() * (window.innerHeight - temp.clientHeight));
            var randomWidth = Math.floor(Math.random() * (window.innerWidth - temp.clientWidth));

            temp.style.top = randomHeight + "px";
            temp.style.left = randomWidth + "px";
        }
    }

    function changeSize(step) {
        var all = getSelected();

        for (var i = 0; i < all.length; i++) {
            var currH = parseFloat(window.getComputedStyle(all[i]).height);

            var currW = parseFloat(window.getComputedStyle(all[i]).width);

            currH = currH + step;
            currW = currW + step;
            all[i].style.height = currH + "px";
            all[i].style.width = currW + "px";

            all[i].style.top = parseFloat(all[i].style.top) - step / 2 + "px";
            all[i].style.left = parseFloat(all[i].style.left) - step / 2 + "px";
        }
    }

    function remove() {
        var all = getSelected();

        while (all.length > 0) {
            all[0].parentNode.removeChild(all[0]);
        }
    }

    function unSelect() {
        //var all = getSelected();
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            all[i].classList.remove("selected");
        }
    }


    function selectAll() {
        //var all = getSelected();
        var all = document.querySelectorAll(".box");


        for (var i = 0; i < all.length; i++) {
            all[i].classList.add("selected");
        }

        // for (var e = document.querySelectorAll(".selected"), t = 0; t < e.length; t++) {
        //     e[t].classList.remove("selected");
        // }
    }


    function moveZ(e) {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            //temp.style.zIndex = parseInt(temp.style.zIndex) + 1;
            if (e == "zUp") {
                console.log("up  on level in moveZ");
                all[i].style.zIndex = i++;
                //all[i].style.zIndex ++;
            } else if (e == "zDown") {
                console.log("down one level in moveZ");
                all[i].style.zIndex --;
            }
        }
    }

    //function move(allSelected, direction) {
    function move(e) {
        var all = document.querySelectorAll(".selected");

        for (var i = 0; i < all.length; i++) {
            var top = all[i].offsetTop,
                left = all[i].offsetLeft;
            //var el = document.getElementById(o[t].id);


            if (e == "up") {
                all[i].style.top = (top - 10) + "px";
            } else if (e == "down") {
                all[i].style.top = (top + 10) + "px";
            } else if (e == "left") {
                all[i].style.left = (left - 10) + "px";
            } else if (e == "right") {
                all[i].style.left = (left + 10) + "px"; // jshint ignore:line
            }

            console.log(all[i].style.left);
            console.log(all[i].style.top);
        }
    }
    function draw() {
        var canvas = document.getElementById('canvas');

        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            ctx.moveTo(110, 75);
            ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
            ctx.stroke();
        }
    }


    function createRandom() {
        var creRan = document.getElementById("box1");
        //var all = document.querySelectorAll(".selected");

        ////////
        var temp = creRan.cloneNode();

        temp.style.zIndex = parseInt(temp.style.zIndex) + 1; //hämtar int-värde från sig själv

        temp.addEventListener("click", function (event) {
            event.target.classList.toggle("selected");
        });
        //lägger ut elementet
        var randomHeight = Math.floor(Math.random() * (window.innerHeight - temp.clientHeight));
        var randomWidth = Math.floor(Math.random() * (window.innerWidth - temp.clientWidth));

        document.getElementsByTagName("body")[0].appendChild(temp);
        temp.classList.add(randomForm[Math.floor(Math.random()*randomFormLength)]);
        temp.classList.add(randomColor[Math.floor(Math.random()*randomColorLength)]);
        temp.classList.add("selected");

        temp.style.top = randomHeight + "px";
        temp.style.left = randomWidth + "px";
    }


    function changeColor() {
        var all1 = getSelected();

        for (var i = 0; i < all1.length; i++) {
            var colorNow = window.getComputedStyle(all1[i]).backgroundColor;

            if (colorNow == "rgb(0, 128, 0)") {
                all1[i].style.backgroundColor = "yellow";
            } else if (colorNow == "rgb(255, 255, 0)") {
                all1[i].style.backgroundColor = "red";
            } else if (colorNow == "rgb(255, 0, 0)") {
                all1[i].style.backgroundColor = "blue";
            } else if (colorNow == "rgb(0, 0, 255)") {
                all1[i].style.backgroundColor = "green";
            }
        }
    }

    //vid klick togglar den, ram eller icke ram
    box1.addEventListener("click", function (event) {
        event.target.classList.toggle("selected");
        console.log(box1);
    });




    //lyssna på tangenttryck
    document.addEventListener("keydown", function (event) { // jshint ignore:line
        var key = event.keyCode;

        console.log(key);
        switch (key) {
            case 69: //e
                toggleCircle();
                break;
            case 84: //t
                createCopy();
                //duplicate();
                break;
            case 81: //q öka
                changeSize(10);
                break;
            case 87: //w minska
                changeSize(-10);
                break;
            case 82: //r minska
                changeColor();
                break;
            case 83: //move one level with Zindex up #s #3.2
                moveZ("zUp");
                break;
            case 65: //move one level with Zindex down #a #3.2
                moveZ("zDown");
                break;
            case 89: //remove marked elements #y #3.3
                remove();
                break;
            case 38: //move up #3.4
                move("up");
                break;
            case 40://move down #3.4
                move("down");
                break;
            case 39: //move right #3.4
                move("right");
                break;
            case 37: //move left #3.4
                move("left");
                break;
            case 85: //make marked elements unselected #u #3.5
                unSelect();
                break;
            case 73: //make all elements selected #i #3.6
                selectAll();
                break;
            case 80: //create random element #p #3.7
                createRandom();
                break;
            case 70: //create random element #f #5
                selectAll();
                remove();
                draw(); //draw the smiley
                break;
        }
    });
    document.addEventListener("dblclick", function (e) {  //#4.1
        if (e.target.classList.contains('box')) {
            var box = e.target;

            console.log("in dblclick");

            box.classList.add("animateSize");
            box.style.width="2px";
            box.style.height="2px";
            window.setTimeout(2000);
        }
    });


    window.addEventListener("resize", centerDiv);

    centerDiv();
})();
