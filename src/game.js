let Game = function() {
  this._snake=undefined;
  this._food=undefined;
  this._scoreCard=undefined;
}

const createSnake=function() {
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();

  return new Snake(head,body);
}

Game.prototype.startGame = function () {
  this._snake=createSnake();
  this._scoreCard=new ScoreCard();
};

Game.prototype.createFood = function (maxLengthOfBox,maxWidthOfBox) {
  this._food=generateRandomPosition(maxLengthOfBox,maxWidthOfBox);
};

Game.prototype.getSnake = function () {
  return this._snake;
}

Game.prototype.getSnakesOldTail = function () {
  return this._snake.move();
}

Game.prototype.growSnake = function () {
  this._snake.grow()
};

Game.prototype.getSnakeHead = function () {
  return this._snake.getHead();
}

Game.prototype.getSnakeBody = function () {
  return this._snake.getBody;
}

Game.prototype.getFood = function () {
  return this._food;
};

Game.prototype.isSnakeEatingFood = function () {
  let head=this._snake.getHead();
  return head.isSameCoordAs(this._food);
}

Game.prototype.addScore = function () {
  this._scoreCard.addScore();
  return ;
};

Game.prototype.getScore = function () {
  return this._scoreCard.getScore();
};

Game.prototype.changeSnakeDirection = function (direction) {
  switch (direction) {
    case "KeyA":
      this._snake.turnLeft();
      break;
    case "KeyD":
      this._snake.turnRight();
      break;
    case "KeyC":
      this._snake.grow();
      break;
    default:
  }
};
