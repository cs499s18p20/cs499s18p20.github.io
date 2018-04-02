// Typewriter Effect
// var title = 'Euchre Hand Recognition';
var title = 'Your Results...'
var speed = 150;
var iteration = 0;

function typingR() {
	if(iteration < title.length) {
		document.getElementById("Rtypewriter").innerHTML += title.charAt(iteration);
        iteration++;
		setTimeout(typingR, speed);
	}

}
var timingvar;
function displayResult() {
  timingvar=setTimeout(showPage, 3800); //Arbitrary timing for now, can be modified.
}
//Unhide the result, hide the loader.
function showPage() {
  document.getElementById("loadDiv").style.display="none";
  document.getElementById("resultDiv").style.display="block";
  //loadTable();
}
