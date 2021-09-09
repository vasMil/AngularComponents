import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownMessagePassingService } from '../dropdown-service/dropdown-message-passing.service';
import { DropdownOutput } from '../dropdownOutput.model';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'vm-dropdown-depr',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
})
export class DropdownMenuComponent implements OnInit {
  @Input() name!: string;
  @Input() dropdown_id!: number;
  private default_name!: string;

  @Output() optionSelected = new EventEmitter<DropdownOutput>();

  constructor(private messageService: DropdownMessagePassingService, private logger: NGXLogger) { }

  ngOnInit(): void {
    if (this.name == null){
      this.logger.warn("Dropdown default name is null");
    }
    else if (this.dropdown_id == null) {
      this.logger.error("Dropdown id cannot be null!");
      throw new Error("Dropdown id cannot be null!")
    }
    this.messageService.initServiceInstance(this.dropdown_id, this.name).subscribe(
      text => {
        this.name = text;
        this.optionSelected.emit({
          id: this.dropdown_id,
          value: text
        });
      }
    );
    this.default_name = this.name;
  }

  // If the user right-clicks on the dropdown button
  // it should reset to it's initial state
  public onRClick(event: MouseEvent): void {
    event.preventDefault();
    const x = event.target as HTMLButtonElement;
    if (x.tagName.toLowerCase() !== "button" || event.button !== 2) {
      return;
    }
    // Reset the button text
    this.name = this.default_name;
  }
}