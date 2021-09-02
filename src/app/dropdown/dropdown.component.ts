import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DropdownMessagePassingService } from './dropdown-message-passing.service';

@Component({
  selector: 'vm-ac-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() name!: string;
  @Input() dropdown_id!: number;

  constructor(private messageService: DropdownMessagePassingService) { }

  ngOnInit(): void {
    this.messageService.initServiceInstance(this.dropdown_id, this.name).subscribe(
      text => this.name = text
    );
  }
}