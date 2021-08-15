import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoreObject } from '../Models/score-object';

@Injectable({
  providedIn: 'root'
})
export class ScoreApiService {

  constructor(private http: HttpClient) { }

  async getTournamentData(tournamentID: string, serverID: string): Promise<ScoreObject> {
    console.log(`https://us-central1-megagaming-backend-api-hosting.cloudfunctions.net/app/api/bot/tournaments/data/serverid=${tournamentID}&tourneyid=${serverID}`)
    return new Promise<ScoreObject>(async (resolve) => {
      var response = await this.http.get(`https://us-central1-megagaming-backend-api-hosting.cloudfunctions.net/app/api/bot/tournaments/data/serverid=${serverID}&tourneyid=${tournamentID}` ).toPromise().catch(e => { return null; });
      if (response != null) {
        resolve(response);
      }
      resolve(null);
    });
  }
}
