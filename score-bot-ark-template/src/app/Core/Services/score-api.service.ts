import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoreObject } from '../Models/score-object';

@Injectable({
  providedIn: 'root'
})
export class ScoreApiService {

  constructor(private http: HttpClient) { }

  async getTournamentData(tournamentID: string, serverID: string): Promise<ScoreObject> {
    return new Promise<ScoreObject>(async (resolve) => {
      var response = await this.http.get("https://us-central1-megagaming-backend-api-hosting.cloudfunctions.net/app/api/bot/tournaments/data/serverid=568904661885779971&tourneyid=schq1final" ).toPromise().catch(e => { return null; });
      if (response != null) {
        resolve(response);
      }
      resolve(null);
    });
  }
}
