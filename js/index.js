
//SETTING UP
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const roadImg = new Image();
roadImg.src = "../images/road.png"
const roadImg2 = new Image();
roadImg2.src = "../images/road.png"
const carImg = new Image ();
carImg.src = "../images/car.png";
let cvWidth = canvas.width;
let cvHeight = canvas.height;
let roadStartPosition = 0;
let roadStartPosition2 = -cvHeight;
let roadMove = 1;
let carWidth = 50;
let carHeight = 100;
let XStartPosition = (cvWidth/2)-(carWidth/2);
let YStartPosition= cvHeight-carHeight;
let XCarMove = 0
let MoveRight = +5;
let MoveLeft = -5;
let obstacleStartPosition = 0;
let obstacleMove = 1;


// UPON LOADING
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  // GET BACKGROUND IMAGE
  const drawRoad = () => {ctx.drawImage(roadImg, 0, roadStartPosition, canvas.width, canvas.height)};
  const drawRoad2 = () => {ctx.drawImage(roadImg2, 0, roadStartPosition2, canvas.width, canvas.height)};
 drawRoad();

  // FUNCTIONS
  const animate = () => {
clearCanvas();
drawRoad();
moveRoad();
drawRoad2();
moveRoad2();
drawCar();
moveCar();
newObstacle();
let gameId = requestAnimationFrame(animate)
console.log(gameId)
if (gameId === 5000) {
  cancelAnimationFrame(gameId)
}
  };


const clearCanvas = () => {ctx.clearRect(0, 0, cvWidth, cvHeight)};

const moveRoad = () => {
  let roadCurrentPosition = roadStartPosition += roadMove;
if (roadStartPosition < cvHeight) {
roadCurrentPosition;
}
else {
  roadStartPosition = 0;
}
};

const moveRoad2 = () => {
  let roadCurrentPosition2 = roadStartPosition2 += roadMove;
if (roadStartPosition2 < 0) {
roadCurrentPosition2;
}
else {
  roadStartPosition2 = -cvHeight;
}
};

const moveCar = () => {
    if(XStartPosition + XCarMove <= cvWidth - carWidth - 60 && XStartPosition + XCarMove >= 0 + carWidth + 10) 
    {XStartPosition += XCarMove}
  };

const drawCar = () => {ctx.drawImage(carImg, XStartPosition, YStartPosition, carWidth, carHeight)};  

const drawObstacle = () => {ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.fillRect(0, obstacleStartPosition, 400, 20);
    ctx.closePath()};

const moveObstacle = () => {
  let obstacleCurrentPosition = obstacleStartPosition += obstacleMove;
  obstacleCurrentPosition;
}

const newObstacle = () => {
  drawObstacle();
  moveObstacle();
}
   
  // CALLBACK FUNCTION TO BE INVOKED UPON START BUTTON CLICK
  function startGame() {
    // MAKE START SCREEN DISAPPEAR
    const startScreen = document.querySelector(".game-intro");
    startScreen.style.display = "none"
    animate();

}
// MAKE CAR MOVE LEFT AND RIGHT
document.addEventListener("keydown", event => {
  if(event.key === "ArrowRight") {
    XCarMove = MoveRight
  
  }
  else if (event.key === "ArrowLeft") {
    XCarMove = MoveLeft
  }
})

document.addEventListener("keyup", event => {
 XCarMove = 0;
})

}