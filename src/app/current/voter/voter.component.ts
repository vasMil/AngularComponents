import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

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

  ngOnInit(): void {
    this.icons_file = this.icons;
    this.icons = this.icons.map(icon => icon.split('.')[0]);
  }

  // Use transactions!
  onClick(event: Event): void {
    const clickedIcon = event.target as HTMLElement;
    console.log(clickedIcon.id);
    // this.updating = true;
    this.hasVoted = true;
  }
}
