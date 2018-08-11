<template>
   <div>

      <h3>The Prisoner's Dilemma</h3>

      <p>The prisoner's dilemma is a classic hypothetical scenario in game theory. Here's the situation:</p>

      <blockquote>
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
      </blockquote>

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

      <h3>The Iterated Prisoner's Dilemma</h3>

      <p>
         The iterated prisoner's dilemma is a game that expands on the prisoner's dilemma, by having it played 
         multiple turns in succession between two players. During each turn, each player remembers the previous 
         actions of their opponent, and can adjust their moves accordingly.
      </p>

      <p>
         Each turn is as follows:
      </p>

      <ul>
         <li>
            Both players pick a move: cooperate or defect. Neither player is aware of the other's move.
         </li>

         <li>
            At the end of the turn, each player is rewarded their respective payoff, per the payoff matrix.
            For example, if player 1 cooperates and player 2 defects, player 2 receives T 
            (the temptation payoff) while player 1 receives S (the sucker payoff).
         </li>

         <li>
            The game proceeds to the next turn, with both players aware of the result of the previous turn.
         </li>
      </ul>

      <p>
         After a set number of turns, the game ends. The winner is the player who received the 
         highest payoff score by the end.
      </p>

      <h3>Prisoner Strategies</h3>

      <p>
         With the game's rules in mind, there are several basic strategies that a player can employ, which 
         determines what moves they will make each turn. We've given them special names.
      </p>
      
      <div class="center-flex">
         <strategy-table />
      </div>
   
   </div>
</template>

<script>
export default {
   components: {}
};
</script>

<style lang="scss" scoped>
%stand-out {
   border-left: 5px solid rgb(170, 170, 170);
   background-color: #eee;
}

.stand-out {
   @extend %stand-out;
   padding: 10px;
}

div {
   text-align: center;
}

blockquote {
   @extend %stand-out;
   padding-left: 10px;
   font-style: italic;
   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
   text-align: left;
}

ul {
   @extend %stand-out;
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

.center-flex {
   display: flex;
   justify-content: center;
}
</style>

