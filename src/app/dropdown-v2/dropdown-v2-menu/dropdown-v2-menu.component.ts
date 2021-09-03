import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vm-ac-dropdown-v2',
  templateUrl: './dropdown-v2-menu.component.html',
  styleUrls: ['./dropdown-v2-menu.component.css']
})
export class DropdownV2MenuComponent implements OnInit {
  @Input() name!: string;
  private _default_name!: string;

  ngOnInit(): void {
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
