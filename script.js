var starts = document.getElementById("sta");
var initial = document.getElementById("ini");

let countdown; // Store the interval
let pausedTime = null; // Store paused time

function start() {

    initial.classList.add('initial1');
    initial.classList.remove('initial');
    starts.classList.add('started');
    starts.classList.remove('start');


    // Get values
    let days = parseInt(document.getElementById("Days").value) || 0;
    let hours = parseInt(document.getElementById("Hours").value) || 0;
    let minutes = parseInt(document.getElementById("Minutes").value) || 0;
    let seconds = parseInt(document.getElementById("Seconds").value) || 0;

    let totalTimeInSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds; 

    if (pausedTime !== null) {
        totalTimeInSeconds = pausedTime;
        pausedTime = null;
    }

    countdown = setInterval(function() {
        if(totalTimeInSeconds <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
            return;
        }
        
        totalTimeInSeconds--;

        // Convert totalTimeInSeconds to days, hrs, mins, secs
        let d = Math.floor(totalTimeInSeconds / 86400);
        let h = Math.floor((totalTimeInSeconds % 86400) / 3600);
        let m = Math.floor((totalTimeInSeconds % 3600) / 60);
        let s = totalTimeInSeconds % 60;

        document.getElementById("days").textContent = String(d).padStart(2, '0');
        document.getElementById("hrs").textContent = String(h).padStart(2, '0');
        document.getElementById("min").textContent = String(m).padStart(2, '0');
        document.getElementById("sec").textContent = String(s).padStart(2, '0');
        
    }, 1000);
}

function stop() {
    clearInterval(countdown);
    document.getElementById("days").textContent = "00";
    document.getElementById("hrs").textContent = "00";
    document.getElementById("min").textContent = "00";
    document.getElementById("sec").textContent = "00";
}

function restart() {
    clearInterval(countdown);
    start();
}

function pause() {
    let days = parseInt(document.getElementById("days").textContent);
    let hours = parseInt(document.getElementById("hrs").textContent);
    let minutes = parseInt(document.getElementById("min").textContent);
    let seconds = parseInt(document.getElementById("sec").textContent);

    pausedTime = days * 86400 + hours * 3600 + minutes * 60 + seconds;

    clearInterval(countdown);
}










// let countdown; // Store the interval
// let pausedTime = null; // Store paused time

// function toggleVisibility() {
//     const initialDiv = document.getElementById("ini");
//     const startDiv = document.getElementById("sta");

//     if(initialDiv.style.visibility === "visible") {
//         initialDiv.style.visibility = "hidden";
//         initialDiv.style.height = "0px";
//         startDiv.style.visibility = "visible";
//         startDiv.style.height = "250px";
//         startDiv.style.display = "flex";
//         startDiv.style.justifyContent = "center";
//         startDiv.style.alignItems = "center";
//     } else {
//         initialDiv.style.visibility = "visible";
//         initialDiv.style.height = "100px";
//         startDiv.style.visibility = "hidden";
//         startDiv.style.height = "0px";
//     }
// }

// function start() {
//     toggleVisibility();
    
//     let days = parseInt(document.getElementById("Days").value) || 0;
//     let hours = parseInt(document.getElementById("Hours").value) || 0;
//     let minutes = parseInt(document.getElementById("Minutes").value) || 0;
//     let seconds = parseInt(document.getElementById("Seconds").value) || 0;

//     let totalTimeInSeconds = days * 86400 + hours * 3600 + minutes * 60 + seconds;

//     if (pausedTime !== null) {
//         totalTimeInSeconds = pausedTime;
//         pausedTime = null;
//     }

//     countdown = setInterval(function() {
//         if(totalTimeInSeconds <= 0) {
//             clearInterval(countdown);
//             alert("Time's up!");
//             return;
//         }
        
//         totalTimeInSeconds--;

//         let d = Math.floor(totalTimeInSeconds / 86400);
//         let h = Math.floor((totalTimeInSeconds % 86400) / 3600);
//         let m = Math.floor((totalTimeInSeconds % 3600) / 60);
//         let s = totalTimeInSeconds % 60;

//         document.getElementById("days").textContent = String(d).padStart(2, '0');
//         document.getElementById("hrs").textContent = String(h).padStart(2, '0');
//         document.getElementById("min").textContent = String(m).padStart(2, '0');
//         document.getElementById("sec").textContent = String(s).padStart(2, '0');
        
//     }, 1000);
// }

// function stop() {
//     clearInterval(countdown);
//     toggleVisibility();
//     document.getElementById("days").textContent = "00";
//     document.getElementById("hrs").textContent = "00";
//     document.getElementById("min").textContent = "00";
//     document.getElementById("sec").textContent = "00";
// }

// function restart() {
//     clearInterval(countdown);
//     toggleVisibility();
// }

// function pause() {
//     let days = parseInt(document.getElementById("days").textContent);
//     let hours = parseInt(document.getElementById("hrs").textContent);
//     let minutes = parseInt(document.getElementById("min").textContent);
//     let seconds = parseInt(document.getElementById("sec").textContent);

//     pausedTime = days * 86400 + hours * 3600 + minutes * 60 + seconds;

//     clearInterval(countdown);
// }

// // Initialize visibility on page load
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("ini").style.visibility = "visible";
//     document.getElementById("ini").style.height = "100px";
//     document.getElementById("sta").style.visibility = "hidden";
//     document.getElementById("sta").style.height = "0px";
// });


