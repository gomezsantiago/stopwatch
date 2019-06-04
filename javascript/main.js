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
    let 
    setInterval(function () {
        let millis = Date.now() - currTime;

        seconds = Math.floor((millis / 1000) % 60);
        mins = Math.floor((millis / 1000) / 60);

        console.log("milliseconds: ", millis)
        console.log("seconds: ", seconds)
        console.log("mins: ", mins)
    }, 1)
}
