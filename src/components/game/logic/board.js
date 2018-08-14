import { Player } from "./player";
import { isObject } from "util";

/**
 * The Board class, which keeps track of a 2d array of players.
 */
export class Board {
   constructor(width, height) {
      this.width = width;
      this.height = height;
      this.cells = this.getBlankBoard();
   }

   getBlankBoard() {
      let cells = [];
      for (let i = 0; i < this.width; i++) {
         cells.push([]);
         for (var j = 0; j < this.height; j++) {
            cells[i].push(new Player(7, i, j));
         }
      }

      return cells;
   }

   getRandomBoard() {
      let cells = [];

      for (let i = 0; i < this.width; i++) {
         cells.push([]);
         for (let j = 0; j < this.height; j++) {
            cells[i].push(new Player(Math.floor(Math.random() * 8), i, j));
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
}
