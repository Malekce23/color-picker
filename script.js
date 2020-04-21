var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var backgroundColor = "linear-gradient(to right, " + color1.value + ", " 
	+ color2.value + ")";
var button = document.getElementById("random");

function getColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " 
	+ color2.value + ")";
	h3.textContent = body.style.background;
}

function colorPicker() {
	return '#'+ Math.floor(Math.random()*16777216).toString(16);
}

function randomize() {
	color1.value = colorPicker();
	color2.value = colorPicker();
	getColor();
}


h3.textContent = backgroundColor +";";
button.addEventListener("click", randomize)
color1.addEventListener("input", getColor);
color2.addEventListener("input", getColor);