<template>   
   <div id="app">
      <main>
         <router-view />
      </main>
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

#app {
   font-family: "M PLUS Rounded 1c", sans-serif;

   display: flex;
   min-height: 100vh;
   flex-direction: column;
   min-width: 900px;
}

.center-flex {
   display: flex;
   justify-content: center;
}

.content-wrapper {
   margin: 30px;
   background-color: rgba(244, 250, 255, 0.7);
   border-radius: 20px;
   border: 1px solid rgba(70, 131, 180, 0.25);
}
</style>
