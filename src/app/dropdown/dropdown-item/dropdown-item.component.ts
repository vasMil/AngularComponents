import { Component, Input, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { DropdownMessagePassingService } from '../dropdown-service/dropdown-message-passing.service';

@Component({
  selector: 'vm-ac-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css']
})
export class DropdownItemComponent implements OnInit {
  @Input() text = "";
  @Input() dropdown_id!: number;

  constructor(private messageService: DropdownMessagePassingService, private logger: NGXLogger) { }

  ngOnInit(): void {
    if (this.text == ""){
      this.logger.warn("Dropdown item text is empty");
    }
    else if (this.dropdown_id == null) {
      this.logger.error("Dropdown id cannot be null!");
      throw new Error("Dropdown id cannot be null!")
    }
  }

  onClick(): void{
    this.messageService.emitMessage(this.dropdown_id, this.text);
  }
}
