<template>
   <div>
      <table>
         <tr 
            v-for="strategy in strategies" 
            :key="strategy.name"
            @click="selectStrategy(strategy)"
            :class="{ selected: selectedId === strategy.stratId }"
            >
            <td>
               <div class="strat-color" :style="{ backgroundColor: strategy.color }"
                  >
               </div>
            </td>
            <td>{{ strategy.name }}</td>
         </tr>
      </table>
   </div>
</template>

<script>
import { Player } from "./logic/player";
export default {
   props: ["selectedId"],
   data() {
      return {
         strategies: Player.getStrategyDescriptors
      };
   },
   methods: {
      selectStrategy(strategy) {
         this.$emit("select-strat-id", strategy.stratId);
      }
   }
};
</script>

<style lang="scss" scoped>
table {
   border-collapse: collapse;
   border-style: hidden;
}

td {
   border-bottom: 1px solid gray;
}

tr.selected {
   background-color: yellow;
}

tr:hover {
   background-color: lightgray;
   cursor: pointer;
}

div.strat-color {
   width: 10px;
   height: 10px;
   display: inline-block;
   margin-right: 5px;
}
</style>
