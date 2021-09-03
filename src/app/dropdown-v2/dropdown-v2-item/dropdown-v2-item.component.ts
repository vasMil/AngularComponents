import { Component, Input } from '@angular/core';

@Component({
  selector: 'vm-ac-dropdown-v2-item',
  templateUrl: './dropdown-v2-item.component.html',
  styleUrls: ['./dropdown-v2-item.component.css']
})
export class DropdownV2ItemComponent {
  @Input() text = "";

  onClick(): void{
    return;
  }
}
