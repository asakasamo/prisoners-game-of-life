<template>
   <table>
      <tr>
         <td colspan=2></td>
         <th colspan=2>Response to Opponent</th>
      </tr>
      <tr>
         <th>Name</th>
         <th>First Turn</th>
         <th>Opponent Cooperates</th>
         <th>Opponent Defects</th>
      </tr>

      <tr v-for="(strategy, i) in strategies" :key="i">
         <th>
            <span :style="{ 
               color: strategy.color, 
               borderLeft: '10px solid ' + strategy.color 
            }"
            >
               {{ strategy.name }}
            </span>
         </th>
         <td :class="'a' + strategy.start">{{ strategy.start ? "cooperate" : "defect" }}</td>
         <td :class="'a' + strategy.onCooperate">{{ strategy.onCooperate ? "cooperate" : "defect" }}</td>
         <td :class="'a' + strategy.onDefect">{{ strategy.onDefect ? "cooperate" : "defect" }}</td>
      </tr>

   </table>
</template>

<script>
export default {
   data() {
      return {
         strategies: [
            {
               name: "The Quaker",
               start: 1,
               onCooperate: 1,
               onDefect: 1,
               color: "limegreen"
            },
            {
               name: "Tit-for-tat",
               start: 1,
               onCooperate: 1,
               onDefect: 0,
               color: "blue"
            },
            {
               name: "The Troll",
               start: 1,
               onCooperate: 0,
               onDefect: 1,
               color: "purple"
            },
            {
               name: "The Backstabber",
               start: 1,
               onCooperate: 0,
               onDefect: 0,
               color: "red"
            },
            {
               name: "The Guilty Conscience",
               start: 0,
               onCooperate: 1,
               onDefect: 1,
               color: "orange"
            },
            {
               name: "Suspicious Tit-for-tat",
               start: 0,
               onCooperate: 1,
               onDefect: 0,
               color: "skyblue"
            },
            {
               name: "Suspicious Troll",
               start: 0,
               onCooperate: 0,
               onDefect: 1,
               color: "pink"
            },
            {
               name: "The Paranoid",
               start: 0,
               onCooperate: 0,
               onDefect: 0,
               color: "gray"
            }
         ]
      };
   },
   methods: {}
};
</script>


<style lang="scss" scoped>
table {
   border-collapse: collapse;
   border-style: hidden;
}

td,
th {
   width: 200px;
   height: 50px;
   border: 1px solid black;
}

.a1 {
   color: blue;
}
.a0 {
   color: red;
}
</style>
