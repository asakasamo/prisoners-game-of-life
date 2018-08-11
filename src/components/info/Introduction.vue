<template>
   <div class="wrapper">
      
      <h2>Introduction</h2>

      <p>This 0-player game is a visual representation of the ::prisoner's dilemma::, with its rules applied to 
      the well-known cellular automaton, the ::Game of Life:: . In order to really understand what's going on,
      you need to first understand both concepts.</p>

      <b-link @click="goToNextTab()">The Prisoner's Dilemma</b-link>
      <b-link @click="goToNextTab()">The Game of Life</b-link>
      <b-link @click="goToNextTab()">The Full Game</b-link>

   </div>
</template>

<script>
export default {
   props: ["goToNextTab"],
   data() {
      return {};
   },
   methods: {}
};
</script>

<style lang="scss" scoped>
</style>