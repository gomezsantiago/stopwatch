const startStopBtn = document.getElementById("start");
const lapResetBtn = document.getElementById("lap");

const dispMilli = document.getElementById("milliseconds");
const dispSec = document.getElementById("seconds");
const dispMin = document.getElementById("minutes");

const dispLap = document.getElementById("lap-times");

const dispTwoDigits = num => num < 10 ? "0" + num : num.toString();

let currTime = Date.now();
let lapTime = currTime;

let newLap = document.createElement("LI");

let seconds = 0;
let mins = 0;
let hours = 0;

let intervalID;

let initialClick = true;



lapResetBtn.addEventListener("click", function(){

    if(lapResetBtn.innerHTML.toLowerCase() === "lap"){
        lapTime = Date.now();
        newLap = document.createElement("LI");
        lap();
    }
    else{
        lapResetBtn.innerHTML = "Lap";
        lapResetBtn.disabled = true;
        reset();
    }
});


startStopBtn.addEventListener("click", function() {

    if(initialClick){
        currTime = Date.now();
        initialClick = false;
    }
    if(startStopBtn.innerHTML.toLowerCase() === "start"){
        startStopBtn.innerHTML = "Stop";
        lapResetBtn.innerHTML = "Lap";
        lapResetBtn.disabled = false;
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

        lap();

        dispMilli.innerHTML = (dispTwoDigits(Math.floor(millis/10)%100));
        dispSec.innerHTML = (dispTwoDigits(seconds));
        dispMin.innerHTML = (dispTwoDigits(mins));


    }, 1)
}


function stop(){
    lapResetBtn.innerHTML = "Reset";
    clearInterval(intervalID);
}

function lap(){
    // list.insertBefore(newItem, list.childNodes[0])

    let lapMillis = Date.now() - lapTime;

    let lapSeconds = Math.floor((lapMillis / 1000) % 60);
    let lapMins = Math.floor((lapMillis / 1000) / 60);

    let dispLapMilli = (dispTwoDigits(Math.floor(lapMillis/10)%100));
    let dispLapSec = (dispTwoDigits(lapSeconds));
    let dispLapMin = (dispTwoDigits(lapMins));

    newLap.innerHTML = `${dispLapMin}:${dispLapSec}.${dispLapMilli}`;
    dispLap.insertBefore(newLap, dispLap.childNodes[0]);

}

function reset(){
    seconds = 0;
    mins = 0;
    hours = 0;
    initialClick = true;

    dispMilli.innerHTML = (dispTwoDigits(0));
    dispSec.innerHTML = (dispTwoDigits(seconds));
    dispMin.innerHTML = (dispTwoDigits(mins));
    dispLap.innerHTML = '';

}