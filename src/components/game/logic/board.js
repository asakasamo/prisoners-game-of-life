import { Player } from "./player";
import { isObject } from "util";

/**
 * The Board class, which keeps track of a 2d array of players.
 */
export class Board {
   constructor(width, height, oldBoard = null) {
      this.width = width;
      this.height = height;

      if (!oldBoard) this.cells = this.getBlankBoard();
      else this.cells = this.getTruncatedBoard(oldBoard);
   }

   getBlankBoard() {
      let cells = [];
      for (let x = 0; x < this.width; x++) {
         cells.push([]);
         for (var y = 0; y < this.height; y++) {
            cells[x].push(new Player(7, x, y));
         }
      }

      return cells;
   }

   getRandomBoard() {
      let cells = [];

      for (let x = 0; x < this.width; x++) {
         cells.push([]);
         for (let y = 0; y < this.height; y++) {
            cells[x].push(new Player(Math.floor(Math.random() * 8), x, y));
         }
      }

      return cells;
   }

   getTruncatedBoard(oldBoard) {
      let cells = [];
      for (let x = 0; x < this.width; x++) {
         cells.push([]);
         for (var y = 0; y < this.height; y++) {
            if (oldBoard.cells[x] && oldBoard.cells[x][y]) {
               cells[x].push(new Player(oldBoard.cells[x][y].stratId, x, y));
            } else {
               cells[x].push(new Player(7, x, y));
            }
         }
      }

      return cells;
   }

   getCellsCopy() {
      return [...this.cells];
   }

   setTestBoard() {
      let cells = [
         [new Player(2, 0, 0), new Player(0, 0, 1)],
         [new Player(0, 1, 0), new Player(6, 1, 1)]
      ];

      this.cells = cells;
      [this.width, this.height] = [cells.length, cells[0].length];
   }

   setGameOfLifeBoard() {
      const al = new Player(8);
      const de = new Player(9);

      let cells = [
         [de, de, de, de, de],
         [de, de, de, de, de],
         [de, al, al, al, de],
         [de, de, de, de, de],
         [de, de, de, de, de]
      ];

      this.cells = cells;
      [this.width, this.height] = [cells.length, cells[0].length];
   }

   /**
    * Returns the neighboring cells of a given cell
    * @param {number} x x coordinate
    * @param {number} y y coordinate
    * @param {boolean} wrap if the function should wrap around the edges
    */
   getNeighborCoords(x, y, wrap = true) {
      let neighbors = [];

      // get each surrounding cell, wrapping around the edges if specified
      for (let i = x - 1; i < x + 2; i++) {
         for (let j = y - 1; j < y + 2; j++) {
            if (!(i === x && j === y)) {
               if (wrap) {
                  neighbors.push([
                     (i + this.width) % this.width,
                     (j + this.height) % this.height
                  ]);
               } else {
                  if (
                     !(i < 0 || i >= this.width || j < 0 || j >= this.height)
                  ) {
                     neighbors.push([i, j]);
                  }
               }
            }
         }
      }

      return neighbors;
   }

   randomize() {
      this.cells = this.getRandomBoard();
   }

   getCell(x, y) {
      return this.cells[x][y];
   }

   setCellStrategy(stratId, x, y) {
      this.cells[x][y] = new Player(stratId, x, y);
   }

   getStrategyCounterStrings() {
      let strats = Player.getStrategyDescriptors;
      return strats
         .map((strategy) => {
            return {
               name: strategy.name,
               count: this.countCellsWithStrategy(strategy.stratId),
               color: strategy.color
            };
         })
         .sort((strat1, strat2) => strat2.count - strat1.count);
   }

   countCellsWithStrategy(stratId) {
      let count = 0;
      for (let row of this.cells) {
         for (let cell of row) {
            if (cell.stratId === stratId) count++;
         }
      }
      return count;
   }

   hasSameCells(cells) {
      if (
         !cells ||
         this.width != cells.length ||
         this.height != cells[0].length
      )
         return false;

      let different = false;
      for (let x = 0; x < this.width; x++) {
         for (let y = 0; y < this.height; y++) {
            if (this.cells[x][y].stratId !== cells[x][y].stratId)
               different = true;
         }
      }
      return !different;
   }
}
