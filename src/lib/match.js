
class Match {

    // Generates a match with two players against one another
    constructor(player_one, player_two) {
        this.player_one = player_one;
        this.palyer_two = player_two;
    }

    // Generates an empty match
    static generateEmptyMatch() {
        return new Match(null, null);
    }
}



export default Match;
