<template>
   <div>
      <h1>Game Board</h1>
      <table>
         <tr v-for="(row, x) in board.cells" :key="x">
            <td v-for="(col, y) in row" :key="y">
               <div 
                  :style="{ backgroundColor: board.cells[x][y].color }"
                  @click="setCell(x, y)"
                  >
               </div>
            </td>
         </tr>
      </table>

      <b-btn @click="board.randomize()">
         Randomize Board
      </b-btn>

      <b-btn @click="goToNextGen()">
         Next Gen
      </b-btn>
   </div>
</template>

<script>
import { Player } from "./logic/player.js";
import { Board } from "./logic/board.js";
import Game from "./logic/game.js";

export default {
   data() {
      return {
         board: new Board(5, 5)
      };
   },
   created() {
      this.board.setGameOfLifeBoard();
   },
   methods: {
      goToNextGen() {
         this.board.cells = Game.getNextGenerationGameOfLife(this.board);
      },
      setCell(x, y) {
         const copy = this.board.getCellsCopy();
         copy[x][y] = copy[x][y].getToggled();
         this.board.cells = copy;
      }
   }
};
</script>

<style lang="scss" scoped>
table {
}

td {
   width: 30px;
   height: 30px;
   margin: 2px;
   div {
      width: 100%;
      height: 100%;
   }

   transition: all 0.5s;
}
</style>
