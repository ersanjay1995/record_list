import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Record } from './record';
// import { RECORDS } from './mock-records';
@Injectable()
export class RecordService {
  private recordsUrl = 'https://spreadsheets.google.com/feeds/list/17bWk5dAPf4L0vsG7ZDR-5pYA_ZZIVgkiqnNC8lrD8wo/od6/public/values?alt=json';

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getRecords(): Promise<Record[]> {
    return this.http.get(this.recordsUrl)
      .toPromise()
      .then(function(response) {
        let body = response.text();
        let entries = JSON.parse(body).feed.entry;
        let output = [];
        for (var i in entries) {
          output.push({
              id: i,
              title: entries[i].gsx$title.$t,
              artist: entries[i].gsx$artist.$t,
              year: entries[i].gsx$year.$t,
              notes: entries[i].gsx$notes.$t,
          });
        }
        return output;
      })
      .catch(this.handleError);
  }
}
