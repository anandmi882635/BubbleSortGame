var timer = 10;
var score = 0;
var newHit = 0;


// jispe click karoge wo element par event raise hoga, aur event listener naa milne par event element ke parent par listener dhundhega, waha bhi na milne par event parent ke parent ke parent par listener dhundega

function makeBubble() {
    var abc = "";
    for (var i = 0; i <= 170; i++) {
        var store = Math.floor(Math.random() * 10);
        abc += `<div class="bubble"> ${store} </div>`;
    }

    document.querySelector("#pbtm").innerHTML = abc;


};

function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = "<h3>Game Over</h3>"
        }

    }, 1000);

};

function getNewHit() {
    newHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = newHit;
};

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
};

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clickednum = Number(details.target.textContent);
    if (clickednum === newHit) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});


runtimer();





