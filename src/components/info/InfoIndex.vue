<template>   
   <div>
      <site-header />
      <div class="content-wrapper">
         <b-tabs pills card v-model="tabIndex" nav-class="tab-style">
            <b-tab title="Introduction" :title-link-class="tabStyleClass(0)">
               <Introduction v-bind="{ goToTab }" />
            </b-tab>
            <b-tab title="The Prisoner's Dilemma" :title-link-class="tabStyleClass(1)">
               <PrisonersDilemmaInfo v-bind="{ goToTab }" />
            </b-tab>
            <b-tab title="The Game of Life" :title-link-class="tabStyleClass(2)">
               <GameOfLifeInfo v-bind="{ goToTab }" />
            </b-tab>
            <b-tab title="The Prisoner's Game of Life" :title-link-class="tabStyleClass(3)">
               <FullGameInfo v-bind="{ goToTab }" />
            </b-tab>
         </b-tabs>
      </div>

   </div>
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
            return ["active-tab"];
         }
      }
   }
};
</script>

<style lang="scss" scoped>
.tab-style {
   font-size: 100px;
}
.active-tab {
   font-size: 100px;
}
</style>


