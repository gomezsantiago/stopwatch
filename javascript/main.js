const startStopBtn = document.getElementById("start");
const lapResetBtn = document.getElementById("lap");

const dispMilli = document.getElementById("milliseconds");
const dispSec = document.getElementById("seconds");
const dispMin = document.getElementById("minutes");

const dispTwoDigits = num => num < 10 ? "0" + num : num.toString();

let currTime = Date.now();
let seconds = 0;
let mins = 0;
let hours = 0;

let intervalID;


lapResetBtn.addEventListener("click", function(){
    reset();
});


startStopBtn.addEventListener("click", function() {

    if(startStopBtn.innerHTML.toLowerCase() === "start"){
        startStopBtn.innerHTML = "Stop";
        stopwatch();
    }
    else{
        startStopBtn.innerHTML = "Start";
        stop();
    }

});


function stopwatch() {

    intervalID = setInterval(function () {
        let millis = Date.now() - currTime;

        seconds = Math.floor((millis / 1000) % 60);
        mins = Math.floor((millis / 1000) / 60);

        dispMilli.innerHTML = (dispTwoDigits(Math.floor(millis/10)%100));
        dispSec.innerHTML = (dispTwoDigits(seconds));
        dispMin.innerHTML = (dispTwoDigits(mins));
    }, 1)
}


function stop(){
    clearInterval(intervalID);
}

function reset(){
    currTime = Date.now();
    seconds = 0;
    mins = 0;
    hours = 0;

    dispMilli.innerHTML = (dispTwoDigits(Math.floor(millis/10)%100));
    dispSec.innerHTML = (dispTwoDigits(seconds));
    dispMin.innerHTML = (dispTwoDigits(mins));
}
