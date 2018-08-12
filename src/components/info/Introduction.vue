<template>
   <div class="wrapper">
      
      <h3>Introduction</h3>

      <p>
         <strong>The Prisoner's Game of Life</strong> is a game that merges two popular concepts
         in the world of logic: <strong>The Prisoner's Dilemma</strong>, and Conway's <b>Game of Life</b>. 
         It's recommended that you be familiar with both in order to really appreciate this game 
         before moving on - otherwise, it won't make much sense or be nearly as interesting.
      </p>

      <p>
         (If you already get the gist of it, you can skip all of this and <a href="/play">play the game!)</a>
      </p>

      <ul>
         <li><b-link @click="goToTab(1)">The Prisoner's Dilemma</b-link></li>
         <li><b-link @click="goToTab(2)">The Game of Life</b-link></li>
         <li><b-link @click="goToTab(3)">The Prisoner's Game of Life</b-link></li>
      </ul>
   </div>
</template>

<script>
export default {
   props: ["goToTab"],
   data() {
      return {};
   },
   methods: {}
};
</script>

<style lang="scss" scoped>
</style>