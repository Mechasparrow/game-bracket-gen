//Library that generates a single-elimination bracket for now
//Also interacts with the bracket

import Match from './match';

// | | -> |

class Bracket {

    constructor(players_list) {
      this.rounds_cnt = Bracket.getRoundsCnt(players_list.length);
      this.rounds_list = Bracket.generateStartingBracket(players_list);
      this.current_round = 1;
    }

    getUncompletedMatchFromCurrentRound() {

      var uncompleted_matchs = this.getUncompletedMatchsForRound(this.current_round - 1);

      var random_match = uncompleted_matchs[Math.floor(Math.random()*uncompleted_matchs.length)]

      return random_match;

    }

    getUncompletedMatchsForRound(round_idx) {

      var matchs = this.rounds_list[round_idx];

      var uncompleted_matchs = matchs.filter(function (match) {
        return match.matchEnded() == false;
      })

      return uncompleted_matchs;
    }

    currentRoundCompleted() {

      return (this.getRoundCompleted(this.current_round - 1));

    }

    getRoundCompleted(round_idx) {

      var uncompleted_matchs = this.getUncompletedMatchsForRound(round_idx);

      return (uncompleted_matchs.length == 0);

    }

    bracketEnded() {

      var bracket_ended = true;

      for (var i = 0; i < this.rounds_cnt; i ++) {

        var round_completed = this.getRoundCompleted(i);

        if (round_completed == false){
          bracket_ended = false;
        }else {
          continue;
        }

      }

      return bracket_ended;

    }

    nextRound() {
      if (this.current_round != this.rounds_cnt) {
        this.current_round += 1;
      }else {
        //Drop dead
      }
    }

    static generateStartingBracket(players_list) {

        var players_length = players_list.length;

        var rounds_count = Bracket.getRoundsCnt(players_length);

        var empty_rounds = Bracket.generateEmptyBracket(players_length, rounds_count);

        var completed_rounds = empty_rounds.slice(0);
        var players_left = players_list.slice(0);

        for (var i = 0; i < completed_rounds[0].length; i ++) {

            var player_one;
            var player_two;

            if (players_left.length >= 2) {
                player_one = players_left.pop();
                player_two = players_left.pop();
            }else {
                player_one = players_left.pop();
                player_two = null;
            }

            var match = new Match(player_one, player_two);

            completed_rounds[0][i] = match;

        }

        return completed_rounds;

    }

    static generateEmptyBracket(players_amnt, rounds_count) {

        var rounds = [];

        if (rounds_count == 1) {

          var empty_matchs = Bracket.generateEmptyMatchsList(1)

          rounds.push(empty_matchs)

        }else {
          for (var i = 0; i < rounds_count; i ++) {

              var matchs_for_round_amnt = Math.pow(2, rounds_count - (1 + i));

              var empty_matchs = Bracket.generateEmptyMatchsList(matchs_for_round_amnt);

              rounds.push(empty_matchs)

          }
        }

        return rounds

    }

    static generateEmptyMatchsList(matchs_amnt){

        var empty_matchs = [];

        for (var i = 0; i < matchs_amnt; i ++) {
            empty_matchs.push(Match.generateEmptyMatch());
        }

        return empty_matchs;
    }

    static getRoundsCnt(player_amount) {
        var round_cnt = Math.ceil(Math.log(player_amount) / Math.log(2));
        return round_cnt;
    }

}

export default Bracket;
