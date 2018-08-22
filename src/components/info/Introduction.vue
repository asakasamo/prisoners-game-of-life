<template>
   <div class="wrapper">
      
      <h1 class="text-center font-weight-bold mb-3">Introduction</h1>

      <p>
         <strong>The Prisoner's Game of Life</strong> is a game that merges two popular concepts
         in the world of logic: <strong>The Prisoner's Dilemma</strong>, and the <b>Game of Life</b>. 
         It's recommended that you be familiar with both in order to really appreciate this game 
         before moving on - otherwise, it won't make much sense or be nearly as interesting.
      </p>

      <p>
         (If you already get the gist of it, you can skip all of this and <a href="/play">play the game!)</a>
      </p>

      <div class="center-flex">
         <div class="list-group links">
            <a class="list-group-item" href="#" @click="goToTab(1)">The Prisoner's Dilemma</a>
            <a class="list-group-item" href="#" @click="goToTab(2)">The Game of Life</a>
            <a class="list-group-item" href="#" @click="goToTab(3)">The Prisoner's Game of Life</a>
         </div>
      </div>
         
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
h1 {
   font-weight: bold;
   border-bottom: 1px solid #ddd;
}

.links {
   display: inline-block;
   margin: auto;
   width: 300px;
   text-align: center;
}
</style>