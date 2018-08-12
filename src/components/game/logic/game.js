/**
 * Returns the next generation of the given game board.
 * @param board the game board
 * @param scores the scores generated by the game board
 */
function getNextGeneration(board, scores) {
   var next = []; //next generation

   for (var x = 0; x < $scope.BOARD_WIDTH; x++) {
      next.push([]);
      for (var y = 0; y < $scope.BOARD_HEIGHT; y++) {
         //for this cell,

         //find highest neighbor score
         var bestScore = scores[x][y];
         var bestidx = -1;

         //get the neighbor coordinates
         var neighborCoords = $scope.getNeighbors(
            x,
            y,
            $scope.BOARD_WIDTH,
            $scope.BOARD_HEIGHT
         );

         //search for the highest scoring neighbor
         for (var fi = 0; fi < neighborCoords.length; fi++) {
            //var fi = (Math.floor(Math.random() * neighborCoords.length) + i) % neighborCoords.length;
            //console.log(fi);

            //if(x == 0 && y == 0) console.log("COMPARING " + scores[neighborCoords[fi][0]][neighborCoords[fi][1]] + " TO CURRENT BEST OF " + bestScore);

            if (
               scores[neighborCoords[fi][0]][neighborCoords[fi][1]] > bestScore
            ) {
               bestScore = scores[neighborCoords[fi][0]][neighborCoords[fi][1]];
               bestidx = fi;
            }
         }

         //  adopt that strategy
         if (bestidx != -1) {
            next[x][y] = new $scope.player(
               board[neighborCoords[bestidx][0]][
                  neighborCoords[bestidx][1]
               ].strategy
            );
         } else {
            next[x][y] = new $scope.player(board[x][y].strategy);
         }
      }
   }

   return next;
}

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

/**
 * Performs battles between each cell and its neighbors, and returns a 2D array of the total scores afterward.
 */
$scope.doAllBattles = function() {
   var scores = [];

   for (var i = 0; i < board.length; i++) {
      scores.push([]);
      for (var j = 0; j < board[i].length; j++) {
         var total = 0;
         var neighbors = $scope.getNeighbors(
            i,
            j,
            board.length,
            board[i].length
         );
         for (var k = 0; k < neighbors.length; k++) {
            //console.log(board[i][j]);
            //total += $scope.playGames(20, board[i][j], board[neighbors[k][0]][neighbors[k][1]])[0];
            total +=
               $scope.scoresMatrix[board[i][j].strategy][
                  board[neighbors[k][0]][neighbors[k][1]].strategy
               ];
         }

         scores[i].push(total);
      }
   }

   //console.log(scores);
   return scores;
};

/**
 * Gets the local scores for a specific cell
 * @param {number} games
 */
$scope.getLocalScores = function(games) {
   var arr = []; //next generation

   for (var i = 0; i < 8; i++) {
      arr.push([]);
      for (var j = 0; j < 8; j++) {
         arr[i][j] = $scope.playGames(
            games,
            new $scope.player(i),
            new $scope.player(j)
         )[0];
      }
   }

   return arr;
};
