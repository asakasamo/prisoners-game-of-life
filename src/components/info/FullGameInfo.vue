<template>
   <div>
      <h1 class="text-center font-weight-bold mb-3">The Prisoner's Game of Life</h1>
      
      <p>
         Here comes the fun part - Putting it all together!
      </p>

      <p>
         The core idea of the Prisoner's Game of Life is that we can <strong>visualize the Prisoner's 
         Dilemma in a Game of Life universe.</strong>
      </p>

      <p>
         We start off with a grid very much similar to a Game of Life universe, except with a special twist:
      </p>
      
      <p>
         <strong>Each of the cells contains a prisoner's dilemma strategy.</strong>
      </p>

      <p>
         As you can imagine, this changes the rules of the universe quite a bit. The new rules are:
      </p>

      <ol>
         <li>
            Each cell starts off with one of the basic strategies from the Iterated Prisoner's Dilemma. 
            (If you forgot what they were, <b-link @click="goToTab(1)">click here for reference</b-link>.)
         </li>

         <li>
            At the beginning of every round, each cell "battles" each of its neighbors, 
            <strong>playing 100 turns</strong> of its strategy and keeping track of its payoff scores.
         </li>

         <li>
            At the end of every round, each cell checks the scores of its neighbors, and 
            <strong>adopts the strategy of its highest-scoring neighbor.</strong>
         </li>
      </ol>

      <p>
         The result is a vivid display of the <strong>interactions</strong> between the different strategies!
      </p>

      <hr>

      <h3 class="text-center">
         Enough reading - time for you to see it for yourself!
      </h3>
      
      <div class="center-flex next-link">
         <b-link to="/play">
            <span>
               ⇨ PLAY ⇦  
            </span>
         </b-link>
      </div>
   </div>
</template>

<script>
export default {
   props: ["goToTab"]
};
</script>

<style lang="scss" scoped>
h1 {
   border-bottom: 1px solid #ddd;
}

.next-link {
   font-size: 30px;
   font-weight: bold;
   text-align: center;
   margin: 50px;
   a {
      background: orange;
      padding: 10px;
      border-radius: 10px;
      color: white;
      transition: all 0.3s;
   }
   a:hover {
      text-decoration: none;
      background: red;
      padding: 10px 15px;
   }
}
</style>
