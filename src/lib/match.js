
class Match {

    static get PLAYER_ONE() {
      return "player_one"
    }

    static get PLAYER_TWO() {
      return "player_two"
    }

    // Generates a match with two players against one another
    constructor(player_one, player_two, winner) {
        this.player_one = player_one;
        this.player_two = player_two;
        this.winner = null
    }

    // Generates an empty match
    static generateEmptyMatch() {
        return new Match(null, null, null);
    }

    static generateInitialMatch(player_one, player_two) {
      return new Match(player_one, player_two, null);
    }

    setWinner(winner) {
      this.winner = winner;
    }

    getWinner() {
      if (this.winner == Match.PLAYER_ONE || this.winner == Match.PLAYER_TWO) {
        return this[this.winner];
      }else {
        return null;
      }
    }

    matchEnded() {
      return this.winner !== null;
    }

}



export default Match;
