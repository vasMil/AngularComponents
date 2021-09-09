import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'vm-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DropdownItemComponent implements OnInit {

  @Input() text = "";

  constructor(private logger: NGXLogger) { }

  ngOnInit(): void {
    if (this.text == ""){
      this.logger.warn("Dropdown item text is empty");
    }
  }

  onClick(): void{
    return;
  }
}
