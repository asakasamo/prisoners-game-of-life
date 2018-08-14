import { Player } from "./player";
import { Board } from "./board";

const TEMPTATION = 0,
   REWARD = -1,
   PUNISHMENT = -2,
   SUCKER = -3,
   COOPERATE = 1,
   DEFECT = 0;

export default {
   /**
    * Returns the payoffs from a single game
    * @param {number} p1move 1 (cooperate) or 0 (defect)
    * @param {number} p2move 1 (cooperate) or 0 (defect)
    * @returns {array}
    */
   getPayoffScores: function(p1move, p2move) {
      p1move = parseInt(p1move);
      p2move = parseInt(p2move);

      if (p1move == COOPERATE && p2move == COOPERATE)
         //both cooperate
         return [REWARD, REWARD];

      if (p1move == DEFECT && p2move == DEFECT)
         //both defect
         return [PUNISHMENT, PUNISHMENT];

      if (p1move == COOPERATE && p2move == DEFECT)
         //p1 cooperate, p2 defect
         return [SUCKER, TEMPTATION];

      if (p1move == DEFECT && p2move == COOPERATE)
         //p2 cooperate, p1 defect
         return [TEMPTATION, SUCKER];

      return [0, 0];
   },

   /**
    * Returns the scores after 2 given strategies play a series of games against each other,
    * as an array of size 2. (i.e. [player 1 score, player 2 score])
    *
    * @param {number} games number of games
    * @param {Player} player1
    * @param {Player} player2
    * @returns {array} [player1 score, player2 score]
    */
   getSeriesResult: function(games, player1, player2) {
      let p1next, p2next;
      const p1 = new Player(player1.stratId);
      const p2 = new Player(player2.stratId);

      for (var i = 0; i < games; i++) {
         var scores = this.getPayoffScores(p1.prevMove, p2.prevMove);
         p1.score += scores[0];
         p2.score += scores[1];

         p1next = p1.getNextMove(p2.prevMove);
         p2next = p2.getNextMove(p1.prevMove);
         p1.prevMove = p1next;
         p2.prevMove = p2next;
      }

      return [p1.score, p2.score];
   },

   /**
    * Returns a matrix of the resultant score of the FIRST player when each strategy plays against
    * each other strategy.
    *
    * For example, [7][0] is the Quaker's score if a Quaker battles a Paranoid, while [0][7] would
    * be the Paranoid's score in the same battle.
    *
    * @param {number} games How many games to play
    * @return {[[]]} [7][7]
    */
   getScoresMatrix: function(games) {
      let scores = [];

      for (let i = 0; i < 8; i++) {
         scores.push([]);
         for (let j = 0; j < 8; j++) {
            scores[i][j] = this.getSeriesResult(
               games,
               new Player(i),
               new Player(j)
            )[0];
         }
      }

      return scores;
   },

   /**
    * Performs battles between each cell and its neighbors, and returns a 2D array of the total scores afterward.
    * @param {Board} board the game board
    */
   getScoresForGeneration: function(board) {
      const scoresMatrix = this.getScoresMatrix(50);

      // fill it with empty array
      let scores = [];
      for (let x = 0; x < board.width; x++) {
         scores.push([]);
      }

      // for each cell
      for (let row of board.cells) {
         for (let cell of row) {
            let totalScore = 0;
            let neighbors = board.getNeighborCoords(cell.x, cell.y);

            for (let neighborCoord of neighbors) {
               totalScore +=
                  scoresMatrix[cell.stratId][
                     board.getCell(...neighborCoord).stratId
                  ];
            }

            scores[cell.x][cell.y] = totalScore;
         }
      }

      return scores;
   },

   /**
    * Returns the next generation of the given game board.
    * @param {Board} board the game board
    */
   getNextGeneration(board) {
      let nextGen = board.getBlankBoard();
      let scores = this.getScoresForGeneration(board);

      for (let row of board.cells) {
         for (let cell of row) {
            //for this cell,

            //find highest neighbor score
            let bestScore = scores[cell.x][cell.y];
            let bestNeighbor = cell;
            const neighborCoords = board.getNeighborCoords(cell.x, cell.y);

            //search for the highest scoring neighbor
            for (let neighborCoord of neighborCoords) {
               let [nx, ny] = neighborCoord;
               if (scores[nx][ny] > bestScore) {
                  bestScore = scores[nx][ny];
                  bestNeighbor = board.getCell(nx, ny);
               }
            }

            //  adopt that strategy
            nextGen[cell.x][cell.y] = new Player(
               bestNeighbor.stratId,
               cell.x,
               cell.y
            );
         }
      }

      return nextGen;
   },

   /**
    * Returns the next generation for a given Game of Life board
    * @param {*} board
    */
   getNextGenerationGameOfLife(board) {
      let nextGen = board.getBlankBoard();

      for (let x in board.cells) {
         for (let y in board.cells[x]) {
            [x, y] = [parseFloat(x), parseFloat(y)];
            let aliveNextGen = false;
            let liveNeighbors = 0;
            const neighborCoords = board.getNeighborCoords(x, y, false);

            //search for the highest scoring neighbor
            for (let neighborCoord of neighborCoords) {
               let [nx, ny] = neighborCoord;
               if (board.cells[nx][ny].isAlive()) {
                  liveNeighbors++;
               }
            }

            const cell = board.cells[x][y];
            if (
               cell.isAlive() &&
               (liveNeighbors === 2 || liveNeighbors === 3)
            ) {
               aliveNextGen = true;
            } else if (cell.isAlive()) {
               aliveNextGen = false;
            } else if (!cell.isAlive() && liveNeighbors === 3) {
               aliveNextGen = true;
            }

            nextGen[x][y] = aliveNextGen ? new Player(8) : new Player(9);
         }
      }
      return nextGen;
   }
};
