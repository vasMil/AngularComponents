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
    this.hasVoted = (this.cookieService.get('hasVoted') === 'true');
    if(this.hasVoted) {
      this.displayResults();
    }
  }

  loadVoteData(): void {

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

  private registerVote(icon: string): void {
    this.voteService.incrementVotes(icon).subscribe({
      next: (resp) => {
        this.cookieService.set('hasVoted', 'true');
        this.displayResults()
        this.hasVoted = true;
      },
      error: (err) => {
        console.log("Failed to update the database! ", err)
      } // TODO: Logger?
    })
  }

  private displayResults(): void {
    this.updating = true;
    this.loadVoteData();
    this.updating = false;
  }

  onClick(event: Event): void {
    const clickedIcon = event.target as HTMLElement;
    this.updating = true;
    this.registerVote(clickedIcon.id);
  }
}
