var _ = require('lodash');

var array = [100,200,300,400,500,600,700,800];
console.log('answer:',_.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("btn");
var option = document.querySelector(".fa-solid");


function setGradient() {
	body.style.background = "linear-gradient(to right,"+ color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
	button.textContent = "Copy";

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// copy text to clipboard

function copyText(){
	navigator.clipboard.writeText(css.innerHTML);
	button.textContent = "Copied";
}

button.addEventListener("click", copyText);


function moveCommand(direction){
	var where;
	switch(direction){
	case "1":
		where = "left";
		breake;
	case "2":
		where = "right";
		breake;
	case "3":
		where = "up";
		breake;
	case "4":
		where = "bottom";
		breake;
	default:
		where = "knowWhere";
		breake;
	}
	return where;
}
window.moveCommand(2);
