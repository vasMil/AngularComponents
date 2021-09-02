import { Component, Input, OnInit } from '@angular/core';
import { DropdownMessagePassingService } from './dropdown-message-passing.service';

@Component({
  selector: 'vm-ac-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() name!: string;
  @Input() dropdown_id!: number;
  private default_name!: string;

  constructor(private messageService: DropdownMessagePassingService) { }

  ngOnInit(): void {
    this.messageService.initServiceInstance(this.dropdown_id, this.name).subscribe(
      text => this.name = text
    );
    this.default_name = this.name;
  }

  // If the user right-clicks on the dropdown button
  // it should reset to it's initial state
  public onRClick(event: MouseEvent) {
    event.preventDefault();
    let x = event.target as HTMLButtonElement;
    if (x.tagName.toLowerCase() !== "button" || event.button !== 2) {
      return;
    }
    // Reset the button text
    this.name = this.default_name;
  }
}