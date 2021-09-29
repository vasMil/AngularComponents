import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { VoteResponse } from './shared/voteResponse.model';
import { VoteService } from './shared/vote.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'vm-voter',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VoteComponent implements OnInit{
  @Input() icons!: string[];
  icons_file!: string[];

  hasVoted = false;
  updating = false;

  votesToPercentMap = new Map<VoteResponse, number>();

  constructor(private voteService: VoteService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.icons_file = this.icons;
    this.icons = this.icons.map(icon => icon.split('.')[0]);
    this.setView();
  }

  onClick(event: Event): void {
    const clickedIcon = event.target as HTMLElement;
    this.updating = true;
    this.registerVote(clickedIcon.id);
  }
  
  private registerVote(icon: string): void {
    let userToken = this.cookieService.get('token');
    if(userToken == "") {
      alert("You need to login!");
      this.updating = false;
      return;
    }
    this.voteService.registerUserVote(userToken, icon).subscribe({
      next: (res) => {
        this.hasVoted = true;
        this.displayResults();
        this.cookieService.set('token', res.token);
      }
    })
  }

  private setView(): void {
    if(this.cookieService.get('token') == "") {
      return;
    }
    this.voteService.getTokenInfo(this.cookieService.get('token')).subscribe({
      next: (res) => {
        this.hasVoted = res.has_voted;
        if(this.hasVoted) {
          this.displayResults();
        }
      }
    });
  }

  private displayResults(): void {
    this.updating = true;
    this.loadVoteData();
    this.updating = false;
  }

  private loadVoteData(): void {
    if (this.voteService.voteResponse.length) {
      this.setPercentageMapper();
    }
    else {
      this.voteService.fetchVoteData.subscribe({
        next: () => {
          this.setPercentageMapper();
        },
        error: (err) => {
          console.log("Could not fetch data: ", err);
        } // TODO: Logger?
      });
    }
  }
  
  private setPercentageMapper() {
    let voteSet = new Set<VoteResponse>();
    let totalVotes = 0;
    this.voteService.voteResponse.forEach((voteRec) => {
      voteSet.add(voteRec);
      totalVotes += voteRec.num_of_votes;
    });
    this.votesToPercentMap.clear();
    voteSet.forEach((vote) => {
      totalVotes === 0 ? this.votesToPercentMap.set(vote, 0) : 
        this.votesToPercentMap.set(vote, (vote.num_of_votes/totalVotes)*100);
    });
  }
}
