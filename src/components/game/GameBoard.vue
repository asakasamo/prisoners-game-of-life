<template>
   <div>
      <h1>Game Board</h1>
      <table>
         <tr v-for="(row, i) in board.cells" :key="i">
            <td v-for="(col, j) in row" :key="j">
               <div :style="{ backgroundColor: col.color }">
                  {{ col.strategy }}
               </div>
            </td>
         </tr>
      </table>

      <b-btn @click="board.randomize()">
         Randomize Board
      </b-btn>
   </div>
</template>

<script>
import { Player } from "./logic/player.js";
import { Board } from "./logic/board.js";

export default {
   data() {
      return {
         board: new Board(10, 10)
      };
   },
   created() {
      const b = new Board(10, 10);
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
