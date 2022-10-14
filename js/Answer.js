const canvas = document.querySelector('canvas')
canvas.style.border = '2px solid black'
const ctx = canvas.getContext('2d')
const startScreen = document.querySelector('.game-intro')
//adding some cool song
//const song = new Audio('../Eye_of_the_Tiger.mp3')
//song.volume = 0.1
const background = new Image()
background.src = '../images/road.png'
const background2 = new Image()
background2.src = '../images/road.png'
const car = new Image()
car.src = '../images/car.png'

let carX = 200
let carY = 500
const carHeight = 100
const carWidth = 70
let bgy = 0
let bgy2 = -canvas.height
let isGameOver = false
let gameId = 0
let isMovingRight = false
let isMovingLeft = false

let obstacles = []

const obstacleWidth = 100
const obstacleHeight = 40

class Obstacle {
  constructor() {
    this.x = Math.random() * (canvas.width - obstacleWidth)
    this.y = 0
  }

  move() {
    this.y += 3
  }
}

const drawObstacle = (obstacleX, obstacleY) => {
  ctx.beginPath()
  ctx.fillStyle = 'purple'
  ctx.fillRect(obstacleX, obstacleY, obstacleWidth, obstacleHeight)
  ctx.closePath()
}

const animate = () => {
  ctx.drawImage(background, 0, bgy, canvas.width, canvas.height)
  ctx.drawImage(background, 0, bgy2, canvas.width, canvas.height)
  //parameters for drawing an image (image, x starting point, y starting point, width, height)
  const nextObstacles = obstacles.filter(obstacle => obstacle.y < canvas.height)

  if (gameId % 100 === 0) {
    nextObstacles.push(new Obstacle())
  }
  console.log(nextObstacles)

  nextObstacles.forEach(obstacle => {
    drawObstacle(obstacle.x, obstacle.y)
    obstacle.move()
    if (
      obstacle.x < carX + carWidth &&
      obstacle.x + obstacleWidth > carX &&
      obstacle.y < carY + carHeight &&
      obstacle.y + obstacleHeight > carY
      /*      rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y */
    ) {
      console.log('GameOver')
      isGameOver = true
    }
  })
  obstacles = nextObstacles
  ctx.drawImage(car, carX, carY, carWidth, carHeight)
  // Move the car
  if (isMovingRight === true) {
    carX += 2
  } else if (isMovingLeft === true) {
    carX -= 2
  }

  // Make the road move
  bgy += 3
  bgy2 += 3
  if (bgy > canvas.height) {
    bgy = -canvas.height - 20
  }
  if (bgy2 > canvas.height) {
    bgy2 = -canvas.height
  }

  if (isGameOver) {
    cancelAnimationFrame(gameId)
  } else {
    // Ask for a new frame
    gameId = requestAnimationFrame(animate)
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    console.log('starting')
    //song.play()
    startGame()
  }
  function startGame() {
    startScreen.style.display = 'none'
    animate()
    //Check if the moving variables are true and then move the car accordingly

    //movement of the car
    document.addEventListener('keydown', event => {
      if (event.code === 'ArrowRight') {
        console.log('We are going right!')
        isMovingRight = true
      } else if (event.code === 'ArrowLeft') {
        console.log('We are going left!')
        isMovingLeft = true
      }
    })
    //stop the car from moving
    document.addEventListener('keyup', () => {
      isMovingRight = false
      isMovingLeft = false
    })
  }
}
