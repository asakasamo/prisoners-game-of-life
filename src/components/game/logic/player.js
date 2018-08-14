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
 * @param {number} strat a number from 0-7; or, 8 (alive) or 9 (dead) in the regular Game of Life
 */

export class Player {
   constructor(strat, x, y) {
      const colors = [
         "red",
         "orange",
         "yellow",
         "magenta",
         "blue",
         "indigo",
         "violet",
         "green",
         "black",
         "white"
      ];

      const names = [
         "The Paranoid",
         "Suspicious Troll",
         "Suspicious Tit-for-tat",
         "The Guilty Conscience",
         "The Backstabber",
         "The Troll",
         "Tit-for-tat",
         "The Quaker",
         "GOL_ALIVE",
         "GOL_DEAD"
      ];

      this.stratId = strat;
      this.strategy = Player.getStrategyString(strat);
      [this.x, this.y] = [x, y];
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

   isAlive() {
      return this.stratId === 8;
   }

   getToggled() {
      if (this.isAlive()) {
         return new Player(9, this.x, this.y);
      } else {
         return new Player(8, this.x, this.y);
      }
   }
}
