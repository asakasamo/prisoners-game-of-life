import { Player } from "./player";

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
            cells[i].push(new Player(7));
         }
      }

      return cells;
   }

   getRandomBoard() {
      var arr = [];

      for (var i = 0; i < this.width; i++) {
         arr.push([]);
         for (var j = 0; j < this.height; j++) {
            arr[i].push(new Player(Math.floor(Math.random() * 8)));
         }
      }

      return arr;
   }

   getNeighbors(x, y) {
      var neighbors = [];

      // get each surrounding cell, wrapping around the edges if necessary
      for (var i = x - 1; i < x + 2; i++) {
         for (var j = y - 1; j < y + 2; j++) {
            if (!(i == x && j == y)) {
               neighbors.push([
                  (i + this.width) % this.width,
                  (j + this.height) % this.height
               ]);
            }
         }
      }

      return neighbors;
   }

   randomize() {
      this.cells = this.getRandomBoard();
   }
}
