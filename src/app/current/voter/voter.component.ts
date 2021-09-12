import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vm-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VoterComponent {
  headerText = "Did you like our site?";
  footerText = "Feedback is always welcome!";

  @Input() icons!: string[];
}
