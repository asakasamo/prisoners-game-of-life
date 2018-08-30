<template>
   <div>
      <table>
         <tr>
            <td></td>
            <th class="strategy">Strategy</th>
            <th>Pop.</th>
         </tr>

         <tr 
            v-for="strategy in strategyCount" 
            :key="strategy.name"
            v-if="strategy.count > 0">
            <td>
               <div class="strat-color" :style="{ backgroundColor: strategy.color }"></div>
            </td>

            <td :style="{ color: strategy.color }">
               {{ strategy.name }}
            </td>

            <td class="text-center">{{ strategy.count }}</td>
         </tr>
      </table>
   </div>
</template>

<script>
import { Player } from "./logic/player";
export default {
   props: ["strategyCount"]
};
</script>

<style lang="scss" scoped>
table {
   border-collapse: collapse;
   border-style: hidden;
}

td,
th {
   border-bottom: 1px solid gray;
   padding: 5px;
}

.strategy {
   width: 180px;
}

div.strat-color {
   width: 10px;
   height: 10px;
   display: inline-block;
}
</style>
