
//SETTING UP
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const roadImg = new Image();
canvas.style.border = "2px solid black";
roadImg.src = "../images/road.png"
const carImg = new Image ();
carImg.src = "../images/car.png";
let cvWidth = canvas.width;
let cvHeight = canvas.height;
let carWidth = 50;
let carHeight = 100;

// UPON LOADING
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  // GET BACKGROUND IMAGE
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);

  // CALLBACK FUNCTION TO BE INVOKED UPON START BUTTON CLICK
  function startGame() {
    // MAKE START SCREEN DISAPPEAR
    const startScreen = document.querySelector(".game-intro");
    startScreen.style.display = "none"



};
