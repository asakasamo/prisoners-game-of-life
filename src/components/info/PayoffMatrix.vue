<template>
   <tbody class="prisoner">
      <tr class="prisonerB">
         <th class="AB">
            <div>B</div>
            <div>A</div>
         </th>

         <th>B stays silent</th>
         <th>B betrays</th>
      </tr>

      <tr>
         <th class="prisonerA">A stays silent</th>
         <td>
            <div>{{ R || 'R' }}</div>
            <div>{{ R || 'R' }}</div>
         </td>
         <td>
            <div>{{ T || 'T' }}</div>
            <div>{{ S || 'S' }}</div>
         </td>
      </tr>

      <tr>
         <th class="prisonerA">A betrays</th>
         <td>
            <div>{{ S || 'S' }}</div>
            <div>{{ T || 'T' }}</div>
         </td>
         <td>
            <div>{{ P || 'P' }}</div>
            <div>{{ P || 'P' }}</div>
         </td>
      </tr>
   </tbody>
</template>

<script>
export default {
   // Temptation, Sucker, Reward, Punishment
   props: ["T", "S", "R", "P"]
};
</script>


<style lang="scss" scoped>
$prisonerA: rgb(225, 245, 255);
$prisonerB: rgb(255, 225, 230);

tbody {
   border-collapse: collapse;
   border: 1px solid black;
   th,
   td {
      width: 150px;
      height: 50px;
      padding: 10px;
      border: 1px solid black;
      text-align: center;
   }
}
td div:last-child,
th div:last-child {
   margin-right: 2em;
   text-align: left;
}

td div:first-child,
th div:first-child {
   margin-left: 2em;
   text-align: right;
}

td,
th.AB {
   background: linear-gradient(
      to top right,
      $prisonerA 49.5%,
      #000 49.5%,
      #000 50.5%,
      $prisonerB 50.5%
   );
   line-height: 1;
}
.prisonerA {
   background-color: $prisonerA;
}
.prisonerB {
   background-color: $prisonerB;
}
</style>
