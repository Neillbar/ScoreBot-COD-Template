import { Component, OnInit } from '@angular/core';
import { Player, ScoreObject } from 'src/app/Core/Models/score-object';
import { ScoreApiService } from 'src/app/Core/Services/score-api.service';
import { isScoreValue } from 'src/app/Lib';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.sass'],
})
export class MainScreenComponent implements OnInit {
  gameData: ScoreObject;
  loading: boolean = true;

  players: Player[];
  currentPlayer?: Player;

  constructor(private service: ScoreApiService) {}

  ngOnInit(): void {
    this.getGameData();
  }

  showPlayerDetails(player: Player, index: number): void {
    this.currentPlayer = null;
    this.currentPlayer = { ...player, rank: player.rank || index + 1 };
  }

  async getGameData() {
    this.gameData = await this.service.getTournamentData('', '');
    if (this.gameData != null) {
      console.log(this.gameData);

      this.players = this.gameData.players
        .map(this.mergeScores)
        .sort(this.byHighestScore);
      console.log(this.players);
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
      (player?.overallScore || 0) / player?.scoreList.length ?? 0;
    return _average.toFixed(1);
  }
}
