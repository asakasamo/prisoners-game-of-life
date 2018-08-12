<template>
   <div>
      <h1>The Game of Life</h1>

      <p>
         The Game of Life is a well-known cellular automaton created by the British mathematician John Conway.
      </p>

      <p>
         Put simply, it's a zero-player game (i.e., it plays itself) that operates on a two-dimensional grid
         of square cells which represents a "universe". Each cell can either be "alive" or "dead". 
      </p>

      <p>
         The universe steps through rounds, modifying the grid every round based on each cell's interaction with its 
         8 neighbors. The rules of each turn are as follows:
      </p>

      <ol>
         <li>Any live cell with fewer than two live neighbors dies (as if by underpopulation).</li>
         <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
         <li>Any live cell with more than three live neighbors dies (as if by overpopulation).</li>
         <li>Any dead cell with exactly three live neighbors becomes a live cell (as if by reproduction).</li>
      </ol>

      <b-link @click="goToTab(3)">
         Next: The Prisoner's Game of Life
      </b-link>
   </div>
</template>

<script>
export default {
   props: ["goToTab"],
   components: {}
};
</script>
