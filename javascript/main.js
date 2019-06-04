const startStopBtn = document.getElementById("start");
const lapResetBtn = document.getElementById("lap");

const dispMilli = document.getElementById("milliseconds");
const dispSec = document.getElementById("seconds");
const dispMin = document.getElementById("minutes");

const dispLapMilli = document.getElementById("lap-milliseconds");
const dispLapSec = document.getElementById("lap-seconds");
const dispLapMin = document.getElementById("lap-minutes");

const dispTwoDigits = num => num < 10 ? "0" + num : num.toString();

let currTime = Date.now();
let lapTime = currTime;
let seconds = 0;
let mins = 0;
let hours = 0;

let intervalID;



lapResetBtn.addEventListener("click", function(){
    //check if reset is button name to reset or make a lap
    lapTime = Date.now();
    lap();
});


startStopBtn.addEventListener("click", function() {

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
    let lapMillis = Date.now() - lapTime;

    let lapSeconds = Math.floor((lapMillis / 1000) % 60);
    let lapMins = Math.floor((lapMillis / 1000) / 60);

    dispLapMilli.innerHTML = (dispTwoDigits(Math.floor(lapMillis/10)%100));
    dispLapSec.innerHTML = (dispTwoDigits(lapSeconds));
    dispLapMin.innerHTML = (dispTwoDigits(lapMins));

}

function resetLap(){
    
}

function reset(){
    let currTime = Date.now();
    seconds = 0;
    mins = 0;
    hours = 0;

    console.log("milliseconds: ", );
    dispMilli.innerHTML = (dispTwoDigits(0));
    dispSec.innerHTML = (dispTwoDigits(seconds));
    dispMin.innerHTML = (dispTwoDigits(mins));
}
