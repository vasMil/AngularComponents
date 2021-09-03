import { Component, Input, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'vm-ac-dropdown-v2-item',
  templateUrl: './dropdown-v2-item.component.html',
  styleUrls: ['./dropdown-v2-item.component.css']
})
export class DropdownV2ItemComponent implements OnInit {

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
