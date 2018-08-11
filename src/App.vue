<template>   
   <div id="app">
      <header>
         <h1>The Prisoner's Dilemma Meets The Game of Life</h1>
      </header>

      <div class="content-wrapper">
         <nav>
            <div class="sidebar">
               <a href="/" :class="{ active: $router.currentRoute.name === 'info' }">
                  <h3>How it works</h3>
               </a>

               <a href="/play" :class="{ active: $router.currentRoute.name === 'play' }">
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
   props: ["pageName"],
   data() {
      return {
         tabIndex: 2
      };
   }
};
</script>


<style lang="scss">
$primary: skyblue;

header {
   overflow: hidden;
}

body {
   background-color: #ddd;
}

#app {
   display: flex;
   min-height: 100vh;
   flex-direction: column;
   font-family: "Avenir", Helvetica, Arial, sans-serif;
}

header {
   background-color: #555;
   color: white;
   flex-basis: 100px;
}

div.content-wrapper {
   flex: 1;
   display: flex;

   nav {
      flex: 1 4;
   }
   main {
      flex: 4 1;
   }
}

nav {
   background-color: green;
}

main {
   background-color: $primary;
}

div.sidebar {
   margin-top: 100px;
   display: flex;
   flex-direction: column;
   a {
      flex: 1;
   }
}

a.active {
   background-color: $primary;
}
</style>
