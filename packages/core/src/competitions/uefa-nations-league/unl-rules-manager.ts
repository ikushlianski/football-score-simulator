import { RulesManager } from '../../tournament/rules-manager';
import { TournamentRulesInterface } from '../../tournament/tournament-rules.interface';
import { TournamentFormatEnum } from '../../tournament/tournament-format.enum';
import { PlayOffFormatEnum } from '../../tournament/play-off-format.enum';

export class UnlRulesManager extends RulesManager {
  rules: TournamentRulesInterface;

  constructor() {
    super();
    this.rules = {
      teamCount: 55,
      leagueCount: 4,
      groupsPerLeague: 4,
      format: TournamentFormatEnum.multiStage,
      qualification: false,
      playOffFormat: {
        legsBeforeFinal: 1,
        legsInFinal: 1,
        thirdPlaceMatch: false,
      },
      playOffTeamCount: PlayOffFormatEnum.semiFinals,
    };
  }
}
