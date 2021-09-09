import { Component } from '@angular/core';

@Component({
  selector: 'vm-current-view',
  templateUrl: './current-view.component.html',
  styleUrls: ['./current-view.component.css']
})
export class CurrentViewComponent {
  title = 'AngularComponents';

  onOptionSelected(message: string): void {
    console.log(message);
  }
}
