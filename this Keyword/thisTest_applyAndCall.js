//global function​
function avg() {
    // Add all the scores and return the total​
    var sumOfScores = this.scores.reduce(function (prev, cur, index, array) {
        return prev + cur;
    });

    // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply​
    this.avgScore = sumOfScores / this.scores.length;
}

var gameController = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null
}

//test apply
avg.apply(gameController)
console.log(gameController.avgScore);

//test call
gameController.avgScore = null;
avg.call(gameController)
console.log(gameController.avgScore);

//test bind
gameController.avgScore = null;
var gameAvg = avg.bind(gameController);
gameAvg();
console.log(gameController.avgScore);