import { Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player, ScoreObject } from 'src/app/Core/Models/score-object';
import { ScoreApiService } from 'src/app/Core/Services/score-api.service';
import { isScoreValue } from 'src/app/Lib';

@Component({
  selector: 'app-school-cup',
  templateUrl: './school-cup.component.html',
  styleUrls: ['./school-cup.component.scss']
})
export class SchoolCupComponent implements OnInit {
  gameData: ScoreObject;
  loading: boolean = true;
  tournamentID?: string;
  serverID?: string;
  players: Player[];
  currentPlayer?: Player;

  shouldAnimate = false;
  constructor(
    private service: ScoreApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setServerAndTourneyID();
    this.getGameData();
  }

  setServerAndTourneyID() {
    this.serverID = this.route.params['value']['id'];
    this.tournamentID = this.route.params['value']['tourneyid'];

    //THIS CODE IS TEMPORARY AND MUST BE REMOVED BEFORE PROD
    if (isDevMode()) {
      this.serverID = '568904661885779971';
      this.tournamentID = 'schq1final';
    }
  }

  //Click username
  showPlayerDetails(player: Player, index: number): void {
    this.shouldAnimate = false;

    this.currentPlayer = { ...player, rank: player.rank || index + 1 };

    setTimeout(() => {
      this.shouldAnimate = true;
    }, 400);
  }

  async getGameData() {
    this.gameData = await this.service.getTournamentData(
      this.tournamentID,
      this.serverID
    );
    if (this.gameData != null) {
      console.log(this.gameData);
      2;

      this.players = this.gameData.players
        .map(this.mergeScores)
        .sort(this.byHighestScore);

      this.loading = false;
    }
  }

  mergeScores(player: Player): Player {
    const _player: Player = {
      ...player,
      scoreList: [],
    };

    //Merge all player.score{number} into an array
    for (const key in _player) {
      if (Object.prototype.hasOwnProperty.call(_player, key)) {
        if (isScoreValue(key)) {
          const value = _player[key];
          typeof value == 'number' && _player.scoreList.push(value);
        }
      }
    }

    //Accumulate score
    _player.overallScore = _player.scoreList.reduce(
      (prev, current) => prev + current,
      0
    );

    return _player;
  }

  byHighestScore(player: Player, next?: Player) {
    return next?.overallScore - player?.overallScore;
  }

  getAverage(player: Player) {
    const _average =
      (player?.overallScore || 0) / (player?.scoreList.length || 0);
    return +_average.toFixed(1) || 0;
  }

  resetCurrentPlayer() {
    this.currentPlayer = null;
  }
}

