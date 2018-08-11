<template>   
   <main>

      <b-card no-body class="m-3">
         <b-tabs card v-model="tabIndex">
            <b-tab title="Introduction" :title-link-class="tabStyleClass(0)">
               <Introduction v-bind="{ goToTab }" />
            </b-tab>
            <b-tab title="The Prisoner's Dilemma" :title-link-class="tabStyleClass(1)">
               <PrisonersDilemmaInfo v-bind="{ goToTab }" />
            </b-tab>
            <b-tab title="The Game of Life" :title-link-class="tabStyleClass(2)">
               <GameOfLifeInfo v-bind="{ goToTab }" />
            </b-tab>
            <b-tab title="The Full Game" :title-link-class="tabStyleClass(3)">
               <FullGameInfo v-bind="{ goToTab }" />
            </b-tab>
         </b-tabs>
      </b-card>
      

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
      goToTab(idx) {
         this.tabIndex = idx;
      },
      tabStyleClass(idx) {
         if (this.tabIndex === idx) {
            return ["activeTab"];
         }
      }
   }
};
</script>

<style lang="scss" scoped>
</style>
