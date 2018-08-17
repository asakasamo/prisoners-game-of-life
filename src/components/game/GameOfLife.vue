<template>
   <div>
      <b-btn @click="nextGenClick()">
         Next Step
      </b-btn>

      <b-btn @click="toggleAutoPlay()">
         {{ autoPlayId ? "Pause" : "Autoplay" }}
      </b-btn>
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

   </div>
</template>

<script>
import { Board } from "./logic/board.js";
import Game from "./logic/game.js";

export default {
   data() {
      return {
         board: new Board(),
         prevGen: null,
         autoPlayId: null
      };
   },
   created() {
      this.board.setGameOfLifeBoard();
      this.toggleAutoPlay();
   },
   methods: {
      nextGenClick() {
         this.stopAutoPlay();
         this.goToNextGen();
      },
      goToNextGen() {
         this.prevGen = this.board.cells;
         this.board.cells = Game.getNextGenerationGameOfLife(this.board);
      },
      setCell(x, y) {
         this.stopAutoPlay();
         const newCells = this.board.getCellsCopy();
         newCells[x][y] = newCells[x][y].getToggled();
         this.board.cells = newCells;
      },
      toggleAutoPlay() {
         if (!this.autoPlayId) {
            this.autoPlayId = setInterval(() => {
               this.goToNextGen();
            }, 500);
         } else {
            this.stopAutoPlay();
         }
      },
      stopAutoPlay() {
         clearInterval(this.autoPlayId);
         this.autoPlayId = null;
      }
   }
};
</script>

<style lang="scss" scoped>
table {
   border-color: gray;
}
td {
   border: 1px solid gray;
   width: 40px;
   height: 40px;
   div {
      width: 100%;
      height: 100%;
   }
   div:hover {
      cursor: pointer;
      border: 1px solid yellow;
   }

   transition: all 0.2s;
}
</style>
