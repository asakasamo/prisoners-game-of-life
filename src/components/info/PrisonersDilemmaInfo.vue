<template>
   <div>

      <h1 class="text-center font-weight-bold mb-3">The Prisoner's Dilemma</h1>

      <p>The <strong>prisoner's dilemma</strong> is a classic hypothetical scenario in game theory. 
      Here's the situation:</p>

      <div class="stand-out font-italic mb-3">
         Two accomplices have been arrested for a crime, but neither has confessed to committing it. The police 
	      interrogate them separately, offering three alternatives:

         <ol>
            <li>
               If both confess (i.e. they betray each other), they will both face a two-year sentence.
            </li>
            <li>
               If only one confesses and the other remains silent, that individual will go free, and the accomplice 
		         will be jailed for 3 years.
            </li>
            <li>
               If neither confesses (i.e. they both remain silent), they will both be charged with a lesser offense 
               and go to jail for 1 year.
            </li>
         </ol>
      </div>

      <p>
         In other words, both players have the choice of either <strong>cooperating</strong> with their 
         accomplice (staying silent) or <strong>defecting</strong> (betraying).
      </p>

      <p>
         One representation of the results of a prisoner's dilemma game is called the 
         <strong>payoff matrix</strong>, where both accomplices are considered to have received a "payoff". 
         Here's what it looks like in this case:
      </p>

      <div class="center-flex mb-3">
         <payoff-matrix T="0" S="-3" R="-1" P="-2" />
      </div>

      <h3 class="mt-5">The Iterated Prisoner's Dilemma</h3>

      <p>
         The iterated prisoner's dilemma is a game that expands on the prisoner's dilemma, by having it played 
         multiple turns in succession between two players. During each turn, each player remembers the previous 
         actions of their opponent, and can adjust their moves accordingly.
      </p>

      <p>
         Each turn is as follows:
      </p>

      <div class="stand-out mb-3">
         <ul>
            <li>
               Both players pick a move: cooperate or defect. Neither player is aware of the other's move.
            </li>

            <li>
               At the end of the turn, each player is rewarded their respective payoff, per the payoff matrix.
               (For example, if player 1 cooperates and player 2 defects, player 2 receives 0 while player 1 
               receives -3.)
            </li>

            <li>
               The game proceeds to the next turn, with both players aware of the result of the previous turn.
            </li>
         </ul>
      </div>

      <p>
         After a set number of turns, the game ends. The winner is the player who has the
         highest payoff score by the end. (Keep in mind, the payoffs are all negative.)
      </p>

      <h3 class="mt-5">Prisoner Strategies</h3>

      <p>
         With the game's rules in mind, there are several basic strategies that a player can employ, which 
         determines what moves they will make each turn. We've given them special names.
      </p>
      
      <div class="center-flex">
         <strategy-table />
      </div>

      <hr>

      <div class="center-flex next-link">
         <b-link @click="goToTab(2)">
            <span>
               Next: The Game of Life ⇨
            </span>
         </b-link>
      </div>
   
   </div>
</template>

<script>
export default {
   props: ["goToTab"],
   components: {}
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3 {
   border-bottom: 1px solid #ddd;
}

ol,
ul {
   margin: 0;
}

.stand-out {
   border-left: 5px solid steelblue;
   background-color: rgba(70, 131, 180, 0.13);
   padding: 10px;
}

ul {
   text-align: left;
}

.T strong,
span.T {
   color: Purple;
}
.R strong,
span.R {
   color: green;
}
.S strong,
span.S {
   color: maroon;
}
.P strong,
span.P {
   color: red;
}

.next-link {
   font-size: 30px;
   text-align: center;
   font-weight: bold;
   margin: 50px;
   a {
      background: steelblue;
      padding: 10px;
      border-radius: 10px;
      color: white;
      transition: all 0.3s;
   }
   a:hover {
      text-decoration: none;
      background: dodgerblue;
   }
}
</style>

