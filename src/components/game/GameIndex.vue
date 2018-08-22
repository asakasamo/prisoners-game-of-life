<template>
   <div>
      <b-tabs card pills>
         <b-tab title="Game">
            <prisoner-game-board />
         </b-tab>
         <b-tab title="Strategy Reference">
            <div class="center-flex">
               <strategy-table />
            </div>
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
