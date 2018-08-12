<template>
   <div>
      <h1>The Prisoner's Game of Life</h1>
      
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
            Each cell starts off with one of the basic strategies from the iterated prisoner's dilemma. 
            <b-link>(Here they are again.)</b-link>
         </li>

         <li>
            At the beginning of every round, each cell "battles" each of its neighbors, 
            <strong>playing 50 turns</strong> of its strategy and keeping track of its payoff scores.
         </li>

         <li>
            At the end of every round, each cell checks the scores of its neighbors, and 
            <strong>adopts the strategy of its highest-scoring neighbor.</strong>
         </li>
      </ol>

      <p>
         The result is a vivid display of the <strong>interactions</strong> between the different strategies!
      </p>

      <h3>
         Enough reading - time for you to see it for yourself!
      </h3>

      <b-link to="/play">
         <h1>Play</h1>
      </b-link>
   </div>
</template>

<script>
export default {
   props: ["goToTab"],
   components: {}
};
</script>
