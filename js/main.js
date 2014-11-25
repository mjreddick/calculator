evalString = "";

var numButtons = document.getElementsByClassName("digit-button");
var mathButtons = document.getElementsByClassName("math-symbol");
var output = document.getElementById("output");
var symbols = {divide: "/", multiply: "*", plus: "+", minus: "-"}
var clear = document.getElementById("clear");
var enter = document.getElementById("enter");

function updateOutput(str) {
	output.innerHTML = str;
}

for(var i = 0; i < numButtons.length; i++) {
	numButtons[i].addEventListener("click", function() {
		evalString += this.id.split("-")[1];
		updateOutput(evalString);
	});
}

for(var i = 0; i < mathButtons.length; i++) {
	mathButtons[i].addEventListener("click", function() {
		evalString += symbols[this.id];
		updateOutput(evalString);
	});
}

clear.addEventListener("click", function() {
	evalString = "";
	updateOutput(evalString);
});

enter.addEventListener("click", function() {
	answer = eval(evalString);
	updateOutput(answer);
	evalString = "";
});
