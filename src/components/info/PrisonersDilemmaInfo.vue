<template>
   <div>
      <h1>The Prisoner's Dilemma</h1>

The prisoner's dilemma is a classic hypothetical scenario in game theory. The basic situation is such:

	- Two accomplices have been arrested for a crime, but neither has confessed to committing it. The police 
	interrogate them separately, offering three alternatives:
	
		1. If both confess (i.e. they betray each other), they will each face a two-year sentence.
		
		2. If only one confesses and the other remains silent, that individual will go free, and the accomplice 
		will be jailed for 3 years.
			
		3. If neither confesses (i.e. they both remain silent), they will both be charged with a lesser offense and go to jail
		for 1 year.		
		
In other words, both players have the choice of either cooperating with their accomplice (staying silent) 
or defecting (betraying). The results of the prisoner's dilemma can be represented in matrix form, referred
to as the "payoff matrix". Here's what it looks like:

(Payoff matrix)

To generalize it, we can replace the payoffs with 4 variables:

	T is the Temptation payoff, which represents the accomplice going free (0 prison time).
		From a selfish individual standpoint, this is the "best" outcome, and so it gives the highest payoff.

	S is the Sucker's payoff, which represents the accomplice receiving the highest prison sentence (5 years).
		This is the worst individual outcome, and as such it gives the lowest payoff.
		
	R is the reward payoff, which results from both accomplices cooperating (1 year).
		This is the best collective outcome.

	P is the punishment payoff, which results from both accomplices defecting (2 years).
		This is the worst collective outcome.
	
In these terms, a true prisoner's dilemma game (abstractly speaking) must satisfy the following condition:
	T > R > P > S
	
The iterated prisoner's dilemma

The iterated prisoner's dilemma is a game that expands on the prisoner's dilemma, by having it played multiple
times in succession between two players. During each turn, each player remembers the previous actions of their
opponent, and can adjust their moves accordingly. Put simply, each turn is as follows:

	- Both players pick a move: cooperate or defect. Neither player is aware of the other's move.
	- At the end of the turn, each player is rewarded their respective payoff, per the payoff matrix. 

		For example, if player 1 cooperates and player 2 defects, player 2 receives T (the temptation payoff) while player 1 receives S (the sucker payoff).
		
	- The game proceeds to the next turn, with both players aware of the result of the previous turn.
	
After a set number of turns, the game ends. The winner is the player who received the highest payoff score by the end.

Automated strategies

	With the game's rules in mind, there are several basic strategies that a player can employ, which determines
	what moves they will make each turn. We've given them special names.
	
	(strategy table)
   
   </div>
</template>

<script>
export default {
   components: {}
};
</script>
