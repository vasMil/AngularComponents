import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  goToCustomView(): void {
    this.router.navigate(['current-components']);
  }
  
  goToDeprecatediView(): void {
    this.router.navigate(['deprecated-components']);
  }
}
