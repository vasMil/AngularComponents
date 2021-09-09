import { Component } from '@angular/core';
import { DropdownOutput } from '../dropdown/dropdown.module';

@Component({
  selector: 'vm-deprecated-view',
  templateUrl: './deprecated-view.component.html',
  styleUrls: ['./deprecated-view.component.css']
})
export class DeprecatedViewComponent {
  title = 'AngularComponents';

  onOptionSelectedDepr({id, value}: DropdownOutput): void {
    console.log("id = " + id);
    console.log("value = " + value);
  }

  onOptionSelected(message: string): void {
    console.log(message);
  }
}
