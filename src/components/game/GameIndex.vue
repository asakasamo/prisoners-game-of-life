<template>
   <div>
      <b-tabs>
         <b-tab title="Game">
            <game-board />
         </b-tab>
         <b-tab title="Reference">
            <strategy-table />
         </b-tab>
      </b-tabs>
   </div>
</template>

<script>
import GameBoard from "./GameBoard.vue";

export default {
   components: {
      GameBoard
   }
};
</script>

<style scoped lang="scss">
</style>
