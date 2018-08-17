<template>
   <div>
      <h1>Game Board</h1>
      <input type="number" v-model="boardWidthInput">
      <input type="number" v-model="boardHeightInput">
      <input type="checkbox" v-model="showScores">

      <b-btn @click="board.randomize()">
         Randomize Board
      </b-btn>

      <b-btn @click="goToNextGen()">
         Next Round
      </b-btn>

      <b-btn @click="goToPrevGen()" :disabled="generationIdx === 0">
         Previous Round
      </b-btn>

      <table>
         <tr v-for="(row, x) in board.cells" :key="x">
            <td v-for="(col, y) in row" :key="y">
               <div
                  :id="`cell-${x}-${y}`"
                  :style="{ backgroundColor: board.cells[x][y].color }"
                  @click="setPopoverCell(x, y)"
                  :class="{ selected: isCurrentPopoverCell(x, y) }"
                  >

                  <!-- Strategy picker popover -->
                  <b-popover
                     :target="`cell-${x}-${y}`"
                     placement="right"
                     :show="isCurrentPopoverCell(x, y)"
                     triggers=""
                     >

                     <!-- Popover Title -->
                     <template slot="title">
                        <h6>
                           Select a strategy

                           <!-- Close button -->
                           <b-btn @click="currentPopover = null" class="close-btn btn-danger">
                              <span>
                                 &times;
                              </span>
                           </b-btn>
                        </h6>
                     </template>

                     <!-- Strategy picker -->
                     <strategy-picker
                        :selected-id="board.cells[x][y].stratId" 
                        v-on:select-strat-id="(stratId) => setCellStrategy(stratId, x, y)" 
                        />
                  </b-popover>

                  <span v-if="showScores" class="score">
                     {{ scores[x][y] }}
                  </span>
               </div>
            </td>
         </tr>
      </table>

      <div>
         <StrategyCounter :strategyCount="this.strategyCount" />
      </div>
   </div>
</template>

<script>
import { Board } from "./logic/board.js";
import Game from "./logic/game.js";
import StrategyPicker from "./StrategyPicker.vue";
import StrategyCounter from "./StrategyCounter.vue";

export default {
   data() {
      return {
         boardWidthInput: 20,
         boardHeightInput: 10,
         board: null,
         currentPopover: null,
         strategyCount: null,
         scores: null,
         showScores: false,
         pastGenerations: [],
         generationIdx: 0
      };
   },
   created() {
      this.resetBoard();
      this.board.randomize();
   },
   methods: {
      goToNextGen() {
         this.pastGenerations.push(this.board.cells);
         this.board.cells = Game.getNextGeneration(this.board);
         this.generationIdx++;
      },
      goToPrevGen() {
         this.board.cells = this.pastGenerations.pop();
         this.generationIdx--;
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
      },
      resetBoard() {
         this.board = new Board(
            parseFloat(this.boardHeightInput),
            parseFloat(this.boardWidthInput),
            this.board
         );
      }
   },
   watch: {
      boardWidthInput() {
         this.resetBoard();
      },
      boardHeightInput() {
         this.resetBoard();
      },
      board: {
         deep: true,
         handler: function() {
            this.strategyCount = this.board.getStrategyCounterStrings();
            this.scores = Game.getScoresForGeneration(this.board);
         }
      }
   },
   components: {
      StrategyPicker,
      StrategyCounter
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

.score {
   color: white;
   font-size: 0.5em;
}

td {
   width: 30px;
   height: 30px;
   padding: 2px;

   > div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   div:hover,
   div.selected {
      cursor: pointer;
      border: 1px solid yellow;
   }

   transition: all 0.2s;
}
</style>
