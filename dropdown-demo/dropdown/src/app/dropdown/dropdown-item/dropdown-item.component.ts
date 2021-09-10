import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vm-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DropdownItemComponent {

  @Input() text = "";

  onClick(): void{
    return;
  }
}
