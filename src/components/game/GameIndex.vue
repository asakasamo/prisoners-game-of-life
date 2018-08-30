<template>
   <div>
      <site-header />

      <div class="content-wrapper">
         <b-tabs card pills>
            <b-tab title="Game Board">
               <prisoner-game-board />
            </b-tab>
            <b-tab title="Prisoner Strategies">

               <div class="center-flex vertical">   
                  <b-alert show dismissible class="info">
                     <strong>Tip:</strong> This table is available here for reference.
                  </b-alert>

                  <strategy-table />
               </div>
            </b-tab>
         </b-tabs>
      </div>
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
.info {
   width: 770px;
   display: flex;
}

.vertical {
   flex-direction: column;
   align-items: center;
}
</style>
