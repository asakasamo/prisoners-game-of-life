/**
 * The player class. Keeps track of a single player and its scores
 *
 *
 *                          Opponent Move
 *  Strat# | First Move | Cooperate | Defect
 *    7    |     1      |     1     |    1       < The Quaker
 *    6    |     1      |     1     |    0       < Tit-for-tat
 *    5    |     1      |     0     |    1       < The Troll
 *    4    |     1      |     0     |    0       < The Backstabber
 *    3    |     0      |     1     |    1       < The Guilty Conscience
 *    2    |     0      |     1     |    0       < Suspicious Tit-for-tat
 *    1    |     0      |     0     |    1       < Suspicious Troll
 *    0    |     0      |     0     |    0       < The Paranoid
 *
 * @param {number} strat a number from 0-7
 */

export class Player {
   constructor(strat) {
      const colors = [
         "red",
         "orange",
         "yellow",
         "magenta",
         "blue",
         "indigo",
         "violet",
         "green"
      ];

      const names = [
         "The Paranoid",
         "Suspicious Troll",
         "Suspicious Tit-for-tat",
         "The Guilty Conscience",
         "The Backstabber",
         "The Troll",
         "Tit-for-tat",
         "The Quaker"
      ];

      this.strategy = Player.getStrategyString(strat);
      this.firstMove = parseFloat(this.strategy[0]);
      this.prevMove = this.firstMove;
      this.color = colors[strat];
      this.name = names[strat];
      this.score = 0;
   }

   static getStrategyString(strat) {
      let stratString = strat.toString(2);
      while (stratString.length < 3) {
         stratString = "0" + stratString;
      }
      return stratString;
   }

   getNextMove(oppMove) {
      return parseInt(this.strategy[2 - oppMove]);
   }
}
