import { Component, OnInit } from '@angular/core';
import { ScoreObject } from 'src/app/Core/Models/score-object';
import { ScoreApiService } from 'src/app/Core/Services/score-api.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.sass']
})
export class MainScreenComponent implements OnInit {
  gameData: ScoreObject;
  loading: boolean = true;
  constructor(private service: ScoreApiService) { }

  ngOnInit(): void {
    this.getGameData();
  }

  async getGameData() {
    this.gameData = await this.service.getTournamentData("", "");
    if (this.gameData != null) {
      console.log(this.gameData.players[1]);
      this.loading = false;
    }
  }

}
