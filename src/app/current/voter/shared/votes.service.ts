import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { VoteResponse } from './voteResponse.model';

@Injectable({
  providedIn: 'root'
})
export class VotesService {
  voteResponse: VoteResponse[] = [];

  constructor(private http: HttpClient) { }

  get fetchVoteData() {
    return this.http.get<VoteResponse[]>(
      "http://localhost:8080/votes")
      .pipe(tap((response) => {
        this.voteResponse = response;
      }));
  }

  incrementVotes(icon: string): Observable<any> {
    return this.http.put(`http://localhost:8080/votes`, {"icon": icon});
  }
}
