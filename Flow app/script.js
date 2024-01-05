var timer;       
var isRunning = false;  
var seconds = 0, minutes = 0;  

function startStop() {

    // not running

    if (isRunning) {
        clearInterval(timer); 
        document.getElementById("pause-play-image").src = "img/play.png"; 

    } 

    // running

    else {
        timer = setInterval(updateDisplay, 1000); 
        document.getElementById("pause-play-image").src = "img/pause.png";  
    }
    isRunning = !isRunning;
}

function reset() {
    document.getElementById("pause-play-image").scr = "img/play.png";
    clearInterval(timer);  // does other function be affected by this function?
    isRunning = false;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    
    
}

function updateDisplay() {
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    seconds++; // nested if

    var displayString = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds; // understand this part

    document.getElementById("display").innerHTML = displayString;
}