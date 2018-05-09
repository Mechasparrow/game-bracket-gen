//Library that generates a single-elimination bracket for now
//Also interacts with the bracket

import Match from './match';

// | | -> |

class Bracket {


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
        
        for (var i = 1; i < rounds_count; i ++) {

            var matchs_for_round_amnt = Math.pow(2, rounds_count - i);

            var empty_matchs = Bracket.generateEmptyMatchsList(matchs_for_round_amnt);

            rounds.push(empty_matchs)
            
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
