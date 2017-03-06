//Conclusion : No problem when borrowing methods from other objects as this is initialized at the time of calling.

var gameController = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null,
    players: [
        { name: "Tommy", playerID: 987, age: 23 },
        { name: "Pau", playerID: 87, age: 33 }
    ]
}

var appController = {
    scores: [900, 845, 809, 950],
    avgScore: null,
    avg: function () {

        var sumOfScores = this.scores.reduce(function (prev, cur, index, array) {
            return prev + cur;
        });

        this.avgScore = sumOfScores / this.scores.length;
    }
}

//this will give right output

gameController.avg = appController.avg;
gameController.avg();
console.log(gameController.avgScore);
console.log(appController.avgScore);


//this will give right output as well. No need to use bind thus

// gameController.avg = appController.avg.bind(gameController);
// gameController.avg();
// console.log(gameController.avgScore);
// console.log(appController.avgScore);


//this will give wrong output as we are binding the method to the wrong(appController) object and calling it from gameController

// gameController.avg = appController.avg.bind(appController);
// gameController.avg();
// console.log(gameController.avgScore);
// console.log(appController.avgScore);