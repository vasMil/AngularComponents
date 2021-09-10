import { DoBootstrap, NgModule } from '@angular/core';
import { DropdownItemComponent } from './dropdown/dropdown-item/dropdown-item.component';
import { DropdownMenuComponent } from './dropdown/dropdown-menu/dropdown-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    DropdownItemComponent,
    DropdownMenuComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  entryComponents: [
    DropdownMenuComponent,
    DropdownItemComponent
  ]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const menu = createCustomElement(DropdownMenuComponent, {injector: this.injector});
    const item = createCustomElement(DropdownItemComponent, {injector: this.injector});
    customElements.define('vm-dropdown', menu);
    customElements.define('vm-dropdown-item', item);
  }
}
