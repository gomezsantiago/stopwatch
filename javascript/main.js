let start;

start = document.getElementById("start");

start.addEventListener("click", function() {
    stopwatch();
});

let currTime = Date.now()
let seconds = 0;
let mins = 0;
let hours = 0;

function stopwatch() {
    let dispMilli = document.getElementById("milliseconds");
    let dispSec = document.getElementById("seconds");
    let dispMin = document.getElementById("minutes");

    setInterval(function () {
        let millis = Date.now() - currTime;

        seconds = Math.floor((millis / 1000) % 60);
        mins = Math.floor((millis / 1000) / 60);

        dispMilli.innerHTML = (millis);
        dispSec.innerHTML = (seconds);
        dispMin.innerHTML = (mins);
    }, 1)
}
