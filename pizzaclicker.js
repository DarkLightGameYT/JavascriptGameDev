console.log("Vintage Is A: Vital Individual Noted To Abuse Grammar Errors");
console.log("Or Would You Prefer: Vital Idiot Noted To Abuse Grammar Errors");

//wait untik the window is loaded before registering the onclick event.
window.addEventListener('load', registerEvents, false);
//create global counting variable
var theCount = 0;
//Registers onclick events
function registerEvents(e) {
    document.getElementById('incrementButton').addEventListener('click', increaseCount, false);
    document.getElementById('currentPizzas').addEventListener('click', increaseCount, false);
  //document.getElementById('currentpps').addEventListener('click', increaseCount, false);
    document.getElementById('pizzasbakedthisascension').addEventListener('click', increaseCount, false);
    document.getElementById('pizzasbakedalltime').addEventListener('click', increaseCount, false);
}

    
//Increments theCount and displays result
function increaseCount(e) {
    theCount++;
    document.getElementById('currentCount').innerHTML = theCount;
    document.getElementById('pizzasbank').innerHTML = theCount;
  //document.getElementById('ppscurrent').innerHTML = theCount;
    document.getElementById('thisAscension').innerHTML = theCount;
    document.getElementById('alltime').innerHTML = theCount;
}



