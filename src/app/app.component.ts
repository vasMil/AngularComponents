import { Component } from '@angular/core';
import { DropdownOutput } from './depricated/dropdown/dropdown.module';

@Component({
  selector: 'vm-ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularComponents';

  onOptionSelectedDepr({id, value}: DropdownOutput): void {
    console.log("id = " + id);
    console.log("value = " + value);
  }

  onOptionSelected(message: string): void {
    console.log(message);
  }
}
