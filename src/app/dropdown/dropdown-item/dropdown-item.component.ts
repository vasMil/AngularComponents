import { Component, Input } from '@angular/core';
import { DropdownMessagePassingService } from '../dropdown-service/dropdown-message-passing.service';

@Component({
  selector: 'vm-ac-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css']
})
export class DropdownItemComponent {
  @Input() text = "";
  @Input() dropdown_id!: number;

  constructor(private messageService: DropdownMessagePassingService) { }

  onClick(): void{
    this.messageService.emitMessage(this.dropdown_id, this.text);
  }
}
