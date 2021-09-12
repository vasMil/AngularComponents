import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vm-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @HostBinding("style.--spinner-width")
  @Input() spinnerWidth!: string;

  @HostBinding("style.--spinner-color")
  @Input() spinnerColor!: string;

  @HostBinding("style.--inner-spinner-width")
  @Input() holeSize!: string;

  @HostBinding("style.--bg-color")
  @Input() holeColor!: string | null | undefined;

  ngOnInit(): void {
    if(this.holeColor == null) {
      this.holeColor = getComputedStyle(document.body).getPropertyValue('--body-bg-color');
    }
  }
}
