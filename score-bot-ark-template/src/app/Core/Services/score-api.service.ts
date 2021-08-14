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
      var response = await this.http.get("https://run.mocky.io/v3/4e44c9b2-2051-41f7-842e-c2464ddde325" ).toPromise().catch(e => { return null; });
      if (response != null) {
        resolve(response);
      }
      resolve(null);
    });
  }
}
