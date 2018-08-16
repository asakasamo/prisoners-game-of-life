<template>
   <div>
      <h1>Game Board</h1>
      <input type="text" v-model="boardWidth" >
      <input type="text" v-model="boardHeight" >
      <table>
         <tr v-for="(row, x) in board.cells" :key="x">
            <td v-for="(col, y) in row" :key="y">
               <div
                  :id="`cell-${x}-${y}`"
                  :style="{ backgroundColor: board.cells[x][y].color }"
                  @click="setPopoverCell(x, y)"
                  :class="{ selected: isCurrentPopoverCell(x, y) }"
                  >
                  <b-popover
                     :target="`cell-${x}-${y}`"
                     placement="right"
                     :show="isCurrentPopoverCell(x, y)"
                     triggers=""
                     >
                     <template slot="title">
                        <h6>
                           Select a strategy
                           <b-btn @click="currentPopover = null" class="close-btn btn-danger">
                              <span>
                                 &times;
                              </span>
                           </b-btn>
                        </h6>
                        
                     </template>
                     <strategy-picker
                        :selected-id="board.cells[x][y].stratId" 
                        v-on:select-strat-id="(stratId) => setCellStrategy(stratId, x, y)" 
                        />
                  </b-popover>
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
import { Board } from "./logic/board.js";
import Game from "./logic/game.js";
import StrategyPicker from "./StrategyPicker.vue";

export default {
   data() {
      return {
         boardWidth: 2,
         boardHeight: 2,
         board: null,
         currentPopover: null
      };
   },
   created() {
      this.board = new Board(this.boardWidth, this.boardHeight);
      this.board.randomize();
   },
   methods: {
      goToNextGen() {
         this.board.cells = Game.getNextGeneration(this.board);
      },
      setPopoverCell(x, y) {
         if (!this.isCurrentPopoverCell(x, y)) {
            this.currentPopover = `popover-${x}-${y}`;
         } else {
            this.currentPopover = null;
         }
      },
      isCurrentPopoverCell(x, y) {
         return this.currentPopover === `popover-${x}-${y}`;
      },
      setCellStrategy: function(stratId, x, y) {
         this.board.setCellStrategy(stratId, x, y);
         this.refreshBoard();
         this.currentPopover = null;
      },
      refreshBoard() {
         this.board.cells = this.board.getCellsCopy();
      }
   },
   watch: {
      boardWidth() {
         this.board = new Board(this.boardWidth, this.boardHeight);
      },
      boardHeight() {
         this.board = new Board(this.boardWidth, this.boardHeight);
      }
   },
   components: {
      StrategyPicker
   }
};
</script>

<style lang="scss" scoped>
table {
}

.close-btn {
   padding: 1px;
   margin: 0;
   float: right;
   line-height: 1;
}

td {
   width: 30px;
   height: 30px;
   padding: 2px;
   > div {
      width: 100%;
      height: 100%;
   }
   div:hover,
   div.selected {
      cursor: pointer;
      border: 1px solid yellow;
   }

   transition: all 0.2s;
}
</style>
