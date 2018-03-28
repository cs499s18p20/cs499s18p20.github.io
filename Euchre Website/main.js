// Typewriter Effect
// var title = 'Euchre Hand Recognition';
var title = 'Coming Soon...'
var speed = 150;
var iteration = 0;

function typing() {

	if(iteration < title.length) {
		
		document.getElementById("typewriter").innerHTML += title.charAt(iteration);
		
		// Break between "Euchre Hand" and "Recognition"
// 		if(iteration == 11) {
// 			document.getElementById("typewriter").innerHTML += '<br>';
// 		}

		iteration++;
		setTimeout(typing, speed);
	}
	
}


// Create BROWSE button and display name of file chosen
function browse_button() {

	var button = document.getElementById('filebutton');
	var input  = document.getElementById('fileupload');

	input.style.display = 'none';
	button.style.display = 'initial';

	button.addEventListener('click', function (e) {
	    e.preventDefault();				    
	    input.click();
	});

	input.addEventListener('change', function () {
	   button.innerText = this.value; 
	});

}
