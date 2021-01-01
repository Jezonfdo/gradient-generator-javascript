var $css = document.querySelector("h3");
var $color1 = document.querySelector(".color1");
var $color2 = document.querySelector(".color2");
var $body = document.getElementById("body");
var $reset = document.getElementById("reset");


function styleChange() {
	$body.style.background = "linear-gradient(to right, " + $color1.value + ", " + $color2.value + ")";
	$css.textContent = $body.style.background;
}

function reset() {
	$body.style.background = "linear-gradient(to right, rgb(246, 211, 101), rgb(173, 154, 148))";
	$css.textContent = $body.style.background;
}

$color1.addEventListener("input", styleChange);
$color2.addEventListener("input", styleChange);
$reset.addEventListener("click", reset);

styleChange();
reset();
