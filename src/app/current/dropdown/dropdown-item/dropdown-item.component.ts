import { Component, Input, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'vm-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css']
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
