<template>
   <div>
      <h1 class="text-center font-weight-bold mb-3">The Game of Life</h1>

      <p>
         The Game of Life is a well-known cellular automaton created by the British mathematician John Conway.
      </p>

      <p>
         Put simply, it's a zero-player game (i.e., it plays itself) that operates on a two-dimensional grid
         of square cells which represents a "universe". Each cell can either be "alive" or "dead". 
      </p>

      <p>
         The universe steps through rounds, modifying the grid every round based on each cell's interaction with its 
         8 neighbors. At each step, the following transitions occur:
      </p>

      <ol>
         <li>Any live cell with fewer than two live neighbors dies (as if by underpopulation).</li>
         <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
         <li>Any live cell with more than three live neighbors dies (as if by overpopulation).</li>
         <li>Any dead cell with exactly three live neighbors becomes a live cell (as if by reproduction).</li>
      </ol>

      <h3>Give it a try!</h3>
      <p>Tip: Click on a cell to toggle its state between alive and dead.</p>

      <div class="center-flex">
         <GameOfLife />
      </div>

      <hr>
      
      <div class="center-flex next-link">
         <b-link @click="goToTab(3)">
            <span>
               Next: The Prisoner's Game of Life ⇨
            </span>
         </b-link>
      </div>

   </div>
</template>

<script>
import GameOfLife from "../game/GameOfLife.vue";
export default {
   props: ["goToTab"],
   components: { GameOfLife }
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3 {
   border-bottom: 1px solid #ddd;
}

.next-link {
   font-size: 30px;
   font-weight: bold;
   text-align: center;
   margin: 50px;
   a {
      background: steelblue;
      padding: 10px;
      border-radius: 10px;
      color: white;
      transition: all 0.3s;
   }
   a:hover {
      text-decoration: none;
      background: dodgerblue;
   }
}
</style>

