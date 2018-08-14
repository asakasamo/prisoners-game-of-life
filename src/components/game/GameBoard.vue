<template>
   <div>
      <h1>Game Board</h1>
      <table>
         <tr v-for="(row, x) in board.cells" :key="x">
            <td v-for="(col, y) in row" :key="y">
               <div 
                  :style="{ backgroundColor: col.color }"
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
import Battle from "./logic/battle.js";

export default {
   data() {
      return {
         board: new Board(5, 5)
      };
   },
   created() {
      this.board.setTestBoard();
   },
   methods: {
      goToNextGen() {
         this.board.cells = Battle.getNextGeneration(this.board);
         // this.board.cells = Battle.getNextGenerationGameOfLife(this.board);
      },
      setCell(x, y) {
         this.board.cells[x][y] = this.board.cells[x][y].getToggled();
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
