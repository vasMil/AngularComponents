import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { VoteResponse } from './voteResponse.model';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  voteResponse: VoteResponse[] = [];

  constructor(private http: HttpClient) { }

  get fetchVoteData() {
    return this.http.get<VoteResponse[]>(
      "http://localhost:8080/vote/get_votes")
      .pipe(tap((response) => {
        this.voteResponse = response;
      }));
  }

  getTokenInfo(token: string): Observable<any> {
    return this.http.get(`http://localhost:8080/user/${token}`);
  }

  registerUserVote(token: string, icon: string): Observable<any> {
    return this.http.put('http://localhost:8080/vote', {"token": token, "icon": icon});
  }
}
