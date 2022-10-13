
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
let XStartPosition = (cvWidth/2)-(carWidth/2);
let YStartPosition= cvHeight-carHeight;
let XCarMove = 0
let MoveRight = +15;
let MoveLeft = -15;

// UPON LOADING
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  // GET BACKGROUND IMAGE
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);

  // FUNCTIONS
  const animate = () => {
clearCar();
ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
moveCar();
drawCar();
  };

const clearCar = () => {ctx.clearRect(0, 0, cvWidth, cvHeight)};
  const moveCar = () => {
    if(XStartPosition + XCarMove <= cvWidth - carWidth - 60 && XStartPosition + XCarMove >= 0 + carWidth + 10) 
    {XStartPosition += XCarMove}
  };
  const drawCar = () => {ctx.drawImage(carImg, XStartPosition, YStartPosition, carWidth, carHeight)};  

  // CALLBACK FUNCTION TO BE INVOKED UPON START BUTTON CLICK
  function startGame() {
    // MAKE START SCREEN DISAPPEAR
    const startScreen = document.querySelector(".game-intro");
    startScreen.style.display = "none"

    // MAKE CAR APPEAR
drawCar();

// MAKE CAR MOVE LEFT AND RIGHT
document.addEventListener("keydown", event => {
  if(event.key === "ArrowRight") {

    XCarMove = MoveRight
    animate();
  }
  else if (event.key === "ArrowLeft") {
    XCarMove = MoveLeft
    animate();
  }
})

}
};
