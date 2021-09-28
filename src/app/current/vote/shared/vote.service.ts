import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { VoteResponse } from './voteResponse.model';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  voteResponse: VoteResponse[] = [];

  constructor(private http: HttpClient) { }

  get fetchVoteData() {
    return this.http.get<VoteResponse[]>(
      "http://localhost:8080/vote/votes")
      .pipe(tap((response) => {
        this.voteResponse = response;
      }));
  }

  incrementVotes(icon: string): Observable<any> {
    return this.http.put(`http://localhost:8080/vote/votes`, {"icon": icon});
  }
}
