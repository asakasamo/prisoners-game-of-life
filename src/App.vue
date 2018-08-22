<template>   
   <div id="app">
      <div class="content-wrapper">
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
         tabIndex: 0
      };
   }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c");

@import url("~bootstrap/dist/css/bootstrap.css");
@import url("~bootstrap-vue/dist/bootstrap-vue.css");

$grid: rgba(0, 0, 0, 0.06);

body {
   background-size: 20px 20px;
   background-image: linear-gradient(to right, $grid 1px, transparent 1px),
      linear-gradient(to bottom, $grid 1px, transparent 1px);
}

header {
   overflow: hidden;
}

#app {
   font-family: "M PLUS Rounded 1c", sans-serif;

   display: flex;
   min-height: 100vh;
   flex-direction: column;
}

div.content-wrapper {
   flex: 1;
   display: flex;

   nav {
      flex: 1;
   }
   main {
      flex: 6;
   }
}

main {
}

div.sidebar {
   margin-top: 100px;
   display: flex;
   flex-direction: column;
   a {
      flex: 1;
   }
}

.center-flex {
   display: flex;
   justify-content: center;
}
</style>
