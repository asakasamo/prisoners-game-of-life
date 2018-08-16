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
   static colors = [
      "gray",
      "magenta",
      "navy",
      "coral",
      "red",
      "purple",
      "blue",
      "green",
      "black",
      "white"
   ];

   static names = [
      "Never Cooperate",
      "Suspicious Troll",
      "Suspicious Tit-for-tat",
      "Guilty Conscience",
      "Backstabber",
      "Troll",
      "Tit-for-tat",
      "The Quaker",
      "GOL_ALIVE",
      "GOL_DEAD"
   ];

   constructor(strat, x, y) {
      [this.x, this.y] = [x, y];
      this.stratId = strat;
      this.strategy = Player.getStrategyString(strat);
      this.firstMove = parseFloat(this.strategy[0]);
      this.prevMove = this.firstMove;
      this.color = Player.colors[strat];
      this.name = Player.names[strat];
      this.score = 0;
   }

   static get getStrategyDescriptors() {
      return this.names
         .filter((val, idx) => idx < 8)
         .map((val, idx) => {
            const stratString = Player.getStrategyString(idx);
            return {
               name: val,
               color: this.colors[idx],
               stratId: idx,
               start: parseFloat(stratString[0]),
               onCooperate: parseFloat(stratString[1]),
               onDefect: parseFloat(stratString[2])
            };
         })
         .reverse();
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
      return this.stratId === PlayerType.GOL_ALIVE;
   }

   getToggled() {
      if (this.isAlive()) {
         return new Player(PlayerType.GOL_DEAD);
      } else {
         return new Player(PlayerType.GOL_ALIVE);
      }
   }
}

export const PlayerType = {
   GOL_ALIVE: 8,
   GOL_DEAD: 9
};
