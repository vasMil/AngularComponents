import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropdownV2Module } from './dropdown-v2/dropdown-v2.module';
import { DropdownModule } from './dropdown/dropdown.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    DropdownV2Module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
