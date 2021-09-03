import { Component } from '@angular/core';
import { DropdownOutput } from './dropdown/dropdown.module';

@Component({
  selector: 'vm-ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularComponents';

  onOptionSelected({id, value}: DropdownOutput): void {
    console.log("id = " + id);
    console.log("value = " + value);
  }

  onOptionSelectedV2(message: string): void {
    console.log(message);
  }
}
