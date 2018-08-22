<template>
   <div class="center-flex main-wrapper">
      <div class="controls">
         <b-card class="text-center">
            <div slot="header">
               Settings
            </div>
            <table>
               <tr>
                  <td>Width</td>
                  <td><input type="number" v-model="boardWidthInput"></td>
               </tr>

               <tr>
                  <td>Height</td>
                  <td><input type="number" v-model="boardHeightInput"></td>
               </tr>

               <tr>
                  <td>Scores</td>
                  <td><b-form-checkbox v-model="showScores" class="center-block" /></td>
               </tr>

               <tr>
                  <td colspan="2">
                     <b-btn @click="randomizeBoard">
                        Randomize Board
                     </b-btn>
                  </td>
               </tr>
            </table>
         </b-card>

         <b-card class="mt-2 text-center">   
            <div slot="header">
               Controls
            </div>   
            <b-button-group vertical>
               <b-btn @click="goToPrevGen()" :disabled="generationIdx === 0">
                  Previous Round
               </b-btn>

               <b-btn @click="goToNextGen()">
                  Next Round
               </b-btn>

               <b-btn @click="autoPlay()">
                  Auto-play
               </b-btn>
            </b-button-group>
         </b-card>
      </div>
      
      <div class="board center-flex">
         <b-card> 
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
         </b-card>
      </div>
      
      <div class="population center-flex">
         <b-card>
            <div slot="header">
               Board Population
            </div>
            <StrategyCounter :strategyCount="this.strategyCount" />
         </b-card>
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
         boardWidthInput: 10,
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
   computed: {
      boardIsStabilized() {
         return this.board.hasSameCells(Game.getNextGeneration(this.board));
      }
   },
   created() {
      this.board = new Board(this.boardHeightInput, this.boardWidthInput);
      this.board.randomize();
   },
   methods: {
      randomizeBoard() {
         this.board.randomize();
         this.resetBoardHistory();
      },
      goToNextGen() {
         if (!this.boardIsStabilized) {
            this.pastGenerations.push(this.board.cells);
            this.board.cells = Game.getNextGeneration(this.board);
            this.generationIdx++;
         }
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
      },
      refreshBoard() {
         this.board.cells = this.board.getCellsCopy();
         this.currentPopover = null;
         this.resetBoardHistory();
      },
      modifyBoardDimensions() {
         this.board = new Board(
            parseFloat(this.boardHeightInput),
            parseFloat(this.boardWidthInput),
            this.board
         );
         this.resetBoardHistory();
      },
      autoPlay() {
         let interval = setInterval(() => {
            this.goToNextGen();
            if (this.boardIsStabilized) {
               clearInterval(interval);
            }
         }, 700);
      },
      resetBoardHistory() {
         this.pastGenerations = [];
         this.generationIdx = 0;
      }
   },
   watch: {
      boardWidthInput() {
         this.modifyBoardDimensions();
      },
      boardHeightInput() {
         this.modifyBoardDimensions();
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

.main-wrapper {
   > div {
      padding: 10px;
   }

   > div:first-child {
   }

   > div:nth-child(2) {
   }

   > div:last-child {
   }
}

.controls {
   input {
      width: 50px;
   }
}

.board td {
   min-width: 30px;
   min-height: 30px;
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
