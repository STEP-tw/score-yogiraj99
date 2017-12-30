let numberOfRows=60;
let numberOfCols=120;
let game=undefined;
let scoreCard=undefined;
let animator=undefined;

const animateSnake=function() {
  let oldHead=game.getSnakeHead();
  let oldTail=game.getSnakesOldTail();
  let head=game.getSnakeHead();
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  if(game.isSnakeEatingFood()) {
    scoreCard.addScore();
    showScore(scoreCard);
    game.growSnake();
    game.createFood(numberOfRows,numberOfCols);
    drawFood(game.getFood());
  }
}

const changeSnakeDirection=function(event) {
  game.changeSnakeDirection(event.code);
//   switch (event.code) {
//     case "KeyA":
//       snake.turnLeft();
//       break;
//     case "KeyD":
//       snake.turnRight();
//       break;
//     case "KeyC":
//       snake.grow();
//       break;
//     default:
//   }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

const createFood=function(numberOfRows,numberOfCols) {
  food=generateRandomPosition(numberOfCols,numberOfRows);
}

const startGame=function() {
  game=new Game();
  game.startGame();
  drawGrids(numberOfRows,numberOfCols);
  drawSnake(game.getSnake());
  game.createFood(numberOfRows,numberOfCols);
  drawFood(game.getFood());
  scoreCard=new ScoreCard();
  addKeyListener();
  animator=setInterval(animateSnake,140);
}

window.onload=startGame;
