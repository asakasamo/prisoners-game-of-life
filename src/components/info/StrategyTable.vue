<template>
   <table>
      <tr>
         <td colspan=3></td>
         <th colspan=2>Response to Opponent</th>
      </tr>
      <tr>
         <th class="color-col">Color</th>
         <th>Name</th>
         <th>First Turn</th>
         <th>Opp. Cooperates</th>
         <th>Opp. Defects</th>
      </tr>

      <tr v-for="(strategy, i) in strategies" :key="i">
         <td class="color-col">
            <div 
               class="strat-color" 
               :style="{ backgroundColor: strategy.color }"
               >
            </div>
         </td>
         <th :style="{ color: strategy.color }"> {{ strategy.name }} </th>
         <td :class="'a' + strategy.start">{{ strategy.start ? "cooperate" : "defect" }}</td>
         <td :class="'a' + strategy.onCooperate">{{ strategy.onCooperate ? "cooperate" : "defect" }}</td>
         <td :class="'a' + strategy.onDefect">{{ strategy.onDefect ? "cooperate" : "defect" }}</td>
      </tr>

   </table>
</template>

<script>
import { Player } from "../game/logic/player";

export default {
   data() {
      return {
         strategies: Player.getStrategyDescriptors
      };
   },
   methods: {}
};
</script>


<style lang="scss" scoped>
table {
   border-collapse: collapse;
   border-style: hidden;
   background-color: #eee;
   text-align: center;
}

td,
th {
   width: 180px;
   height: 50px;
   border: 1px solid black;
}

td.color-col,
th.color-col {
   width: auto;
   padding: 5px;
}

.a1 {
   color: blue;
}
.a0 {
   color: red;
}

.strat-color {
   width: 10px;
   height: 10px;
   display: inline-block;
}
</style>
