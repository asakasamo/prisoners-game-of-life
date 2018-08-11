<template>   
   <div id="app">
      <header>
         <h1>The Prisoner's Dilemma Meets The Game of Life</h1>
      </header>

      <div class="content-wrapper">
         <nav>
            <div class="sidebar mt-5">
               <a href="/">
                  <h3>How it works</h3>
               </a>

               <a href="/play">
                  <h3>Play!</h3>
               </a>
            </div>
         </nav>

         <main>
            <router-view />
         </main>
      </div>

   </div>
</template>

<script>
import InfoIndex from "./components/info/InfoIndex.vue";
import GameIndex from "./components/game/GameIndex.vue";

export default {
   components: {
      InfoIndex,
      GameIndex
   },
   data() {
      return {
         tabIndex: 2
      };
   }
};
</script>


<style lang="scss">
* {
   overflow: hidden;
}

body {
   background-color: #ddd;
}

header {
   background-color: #555;
   color: white;
}

#app {
   font-family: "Avenir", Helvetica, Arial, sans-serif;
   text-align: center;
}

div.content-wrapper {
   display: flex;

   nav {
      flex: 1 4;
      align-self: flex-start;
   }
   main {
      flex: 4 1;
   }
}

div.sidebar {
   display: flex;
   flex-direction: column;
   a {
      flex: 1;
   }
}
</style>
