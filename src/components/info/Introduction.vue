<template>
   <div class="wrapper">
      
      <h3>Introduction</h3>

      <p>This 0-player game is a visual representation of <strong>The Prisoner's Dilemma</strong>, 
      with its rules applied to Conway's <b>Game of Life</b>. It's recommended that you get familiar
      with both concepts in order to really appreciate what's going on before moving on - otherwise,
      it won't make much sense or be nearly as interesting.</p>

      <p>
         (If you already get the gist of it, you can skip all of this and <a href="/play">play the game!)</a>
      </p>

      <ul>
         <li><b-link @click="goToTab(1)">The Prisoner's Dilemma</b-link></li>
         <li><b-link @click="goToTab(2)">The Game of Life</b-link></li>
         <li><b-link @click="goToTab(3)">The Full Game</b-link></li>
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