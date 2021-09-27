import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vm-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  state = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
