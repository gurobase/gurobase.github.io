//first
function mouseOver1() {
  document.getElementById("cropImage1").classList.add("full");
  document.getElementById("cropImage2").classList.add("guroMoveDown");
  document.getElementById("cropImage3").classList.add("romaMoveDown");
}

function mouseOut1() {
  document.getElementById("cropImage1").classList.remove("full");
  document.getElementById("cropImage2").classList.remove("guroMoveDown");
  document.getElementById("cropImage3").classList.remove("romaMoveDown");
}

//second
function mouseOver2() {
  document.getElementById("cropImage2").classList.add("full");
  document.getElementById("cropImage3").classList.add("romaMoveDown");
  document.getElementById("cropImage1").classList.add("noxedMoveUp");

}

function mouseOut2() {
  document.getElementById("cropImage2").classList.remove("full");
  document.getElementById("cropImage1").classList.remove("noxedMoveUp");
  document.getElementById("cropImage3").classList.remove("romaMoveDown");
}

//third
function mouseOver3() {
  document.getElementById("cropImage3").classList.add("full");
  document.getElementById("cropImage1").classList.add("noxedMoveUp");
  document.getElementById("cropImage2").classList.add("guroMoveUp");

}

function mouseOut3() {
  document.getElementById("cropImage3").classList.remove("full");
  document.getElementById("cropImage1").classList.remove("noxedMoveUp");
  document.getElementById("cropImage2").classList.remove("guroMoveUp");
}

function mouseDown() {
  document.getElementById("ProgBar").classList.add("progressBarFilled");
}