import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'vm-dropdown',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DropdownMenuComponent implements OnInit {
  @Input() name!: string;
  private _default_name!: string;

  @Output() optionSelected: EventEmitter<string> = new EventEmitter();

  constructor(private logger: NGXLogger) { }

  ngOnInit(): void {
    if (this.name == null){
      this.logger.warn("Dropdown name is empty");
    }
    this._default_name = this.name;
  }

  // Taking advantage of the fact that the event bubbles up to the parent elements
  public onClick(event: MouseEvent): void {
    event.stopPropagation;
    const targetElement = event.target as HTMLElement;
    if(targetElement.tagName.toLowerCase() === "li"){
      // add this to logger
    }
    else if (targetElement.tagName.toLowerCase() === "button"){
      // logger message
      this.name = targetElement.textContent as string;
      this.optionSelected.emit(this.name);
    }
    else {
      // logger message
    }
    return;
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
    this.name = this._default_name;
  }
}
