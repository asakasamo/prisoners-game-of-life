<template>
   <div>
      <b-tabs>
         <b-tab title="Game">
            <prisoner-game-board />
         </b-tab>
         <b-tab title="Reference">
            <strategy-table />
         </b-tab>
      </b-tabs>
   </div>
</template>

<script>
import PrisonerGameBoard from "./PrisonerGameBoard.vue";

export default {
   components: {
      PrisonerGameBoard
   }
};
</script>

<style scoped lang="scss">
</style>
