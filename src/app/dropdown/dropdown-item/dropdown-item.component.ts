import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { DropdownMessagePassingService } from '../dropdown-message-passing.service';

@Component({
  selector: 'vm-ac-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css'],
  host: {'[id]': 'id'}
})
export class DropdownItemComponent {
  @Input() text: string = "";
  @Input() dropdown_id!: number;
  id: string = "";

  constructor(private messageService: DropdownMessagePassingService) { }

  onClick(): void{
    this.messageService.emitMessage(this.dropdown_id, this.text);
  }
}
