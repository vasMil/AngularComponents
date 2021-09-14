import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { VoteResponse } from './shared/voteResponse.model';
import { VotesService } from './shared/votes.service';

@Component({
  selector: 'vm-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VoterComponent implements OnInit{
  @Input() icons!: string[];
  icons_file!: string[];

  hasVoted = false;
  updating = false;

  votesToPercentMap = new Map<VoteResponse, number>();

  constructor(private votesService: VotesService) { }

  ngOnInit(): void {
    this.icons_file = this.icons;
    this.icons = this.icons.map(icon => icon.split('.')[0]);
  }

  loadVoteData(): void {
    this.updating = true;
    let voteSet = new Set<VoteResponse>();
    let totalVotes = 0;
    this.votesService.fetchVoteData.subscribe({
      next: () => {
        this.votesService.voteResponse.forEach((voteRec) => {
          voteSet.add(voteRec);
          totalVotes += voteRec.num_of_votes;
        })
        this.votesToPercentMap.clear();
        voteSet.forEach((vote) => {
          this.votesToPercentMap.set(vote, (vote.num_of_votes/totalVotes)*100);
        });
        this.updating = false;
        this.hasVoted = true;
      },
      error: (err) => {console.log("Could not fetch data: ", err);} // TODO: Logger?
    });
  }

  registerVote(icon: string): void {
    this.votesService.incrementVotes(icon).subscribe({
      next: (resp) => {
        console.log(resp);
        this.loadVoteData();
      },
      error: (err) => {
        console.log("Failed to update the database! ", err)
      } // TODO: Logger?
    })
  }

  onClick(event: Event): void {
    const clickedIcon = event.target as HTMLElement;
    this.registerVote(clickedIcon.id);
  }
}
