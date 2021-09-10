import { DoBootstrap, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule } from 'ngx-logger';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'


@NgModule({
  declarations: [
    DropdownItemComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LoggerModule.forChild()
  ],
  exports: [
    DropdownItemComponent,
    DropdownMenuComponent
  ],
  entryComponents: [
    DropdownMenuComponent,
    DropdownItemComponent
  ]
})
export class DropdownModule implements DoBootstrap{

  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const menu = createCustomElement(DropdownMenuComponent, {injector: this.injector});
    const item = createCustomElement(DropdownItemComponent, {injector: this.injector});
    customElements.define('vm-dropdown', menu);
    customElements.define('vm-dropdown-item', item);
  }
}
