/**
 * Returns the payoffs from a single game
 * @param {number} p1move 1 (cooperate) or 0 (defect)
 * @param {number} p2move 1 (cooperate) or 0 (defect)
 * @returns {array}
 */
$scope.getPayoffScores = function(p1move, p2move) {
   p1move = parseInt(p1move);
   p2move = parseInt(p2move);

   if (p1move == 1 && p2move == 1)
      //both cooperate
      return [3, 3];

   if (p1move == 0 && p2move == 0)
      //both defect
      return [1, 1];

   if (p1move == 1 && p2move == 0)
      //p1 cooperate, p2 defect
      return [0, 5];

   if (p1move == 0 && p2move == 1)
      //p2 cooperate, p1 defect
      return [5, 0];

   return [0, 0];
};

/**
 * Returns the scores after 2 given strategies play a series of games against each other,
 * as an array of size 2. (i.e. [player 1 score, player 2 score])
 *
 * @param {number} games number of games
 * @param {Player} player1
 * @param {Player} player2
 * @returns {array}
 */
$scope.getSeriesResult = function(games, player1, player2) {
   var p1 = new $scope.player(player1.strategy);
   var p2 = new $scope.player(player2.strategy);
   var p1next, p2next;

   //console.log(p1);
   //console.log(p2);

   for (var i = 0; i < games; i++) {
      //console.log("Game #" + i);

      var scores = $scope.payoffMatrix(p1.prevMove, p2.prevMove);
      //console.log("\tPlayer 1: " + p1.prevMove + " (+" + scores[0] + ")");
      //console.log("\tPlayer 2: " + p2.prevMove + " (+" + scores[1] + ")");
      p1.score += scores[0];
      p2.score += scores[1];

      p1next = p1.getNextMove(p2.prevMove);
      p2next = p2.getNextMove(p1.prevMove);
      p1.prevMove = p1next;
      p2.prevMove = p2next;
   }

   //console.log("\nFinal scores:");
   //console.log("\tPlayer 1: " + p1.score);
   //console.log("\tPlayer 2: " + p2.score);

   return [p1.score, p2.score];
   //return p1.score;
};

/**
 * Advances the board to the next generation
 */
$scope.advance = function() {
   $scope.scores = $scope.doBattle($scope.board);
   $scope.board = $scope.getNextGeneration($scope.board, $scope.scores);
};

$scope.go = function() {
   $interval($scope.advance, 1000);
   //$scope.advance();
};

$scope.board = $scope.randomBoard($scope.BOARD_WIDTH, $scope.BOARD_HEIGHT);
