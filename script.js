var timer;       
var isRunning = false;  
var isReset = false;
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
    
    document.getElementById("reset-button").addEventListener("click", function() {
        document.getElementById("pause-play-image").src = "img/play.png";
        clearInterval(timer);  // does other function be affected by this function?
        isReset = true;
        updateDisplay();
    });
      
}

function updateDisplay() {
    if (isReset) {
        seconds = 0;
        minutes = 0;
        isReset = false; // Reset the flag for subsequent calls
    } else {
        // Existing timer logic
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        seconds++;
    }

    // Display formatting
    var displayString = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    // ... update the display with displayString
    document.getElementById("display").innerHTML = displayString;
}

    
