let ScoreCard = function () {
  this._score=0;
}

ScoreCard.prototype.getScore = function () {
  return this._score;
};

ScoreCard.prototype.addScore = function (score=10) {
  return this._score+=score;
};
