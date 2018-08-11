<template>   
   <main>
      <b-tabs v-model="tabIndex">
         <b-tab title="Introduction">
            <Introduction v-bind="{ goToNextTab }" />
         </b-tab>
         <b-tab title="The Prisoner's Dilemma">
            <PrisonersDilemmaInfo goToNextTab />
         </b-tab>
         <b-tab title="The Game of Life">
            <GameOfLifeInfo goToNextTab />
         </b-tab>
         <b-tab title="The Full Game">
            <FullGameInfo goToNextTab />
         </b-tab>
      </b-tabs>

   </main>
</template>

<script>
import Introduction from "./Introduction.vue";
import PrisonersDilemmaInfo from "./PrisonersDilemmaInfo.vue";
import GameOfLifeInfo from "./GameOfLifeInfo.vue";
import FullGameInfo from "./FullGameInfo.vue";

export default {
   components: {
      Introduction,
      PrisonersDilemmaInfo,
      GameOfLifeInfo,
      FullGameInfo
   },
   data() {
      return {
         tabIndex: 0
      };
   },
   methods: {
      goToNextTab() {
         this.tabIndex++;
      }
   }
};
</script>


<style lang="scss">
</style>
