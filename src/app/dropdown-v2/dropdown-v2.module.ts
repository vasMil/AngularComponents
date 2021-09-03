import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownV2ItemComponent } from './dropdown-v2-item/dropdown-v2-item.component';
import { DropdownV2MenuComponent } from './dropdown-v2-menu/dropdown-v2-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule } from 'ngx-logger';



@NgModule({
  declarations: [
    DropdownV2ItemComponent,
    DropdownV2MenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LoggerModule.forChild()
  ],
  exports: [
    DropdownV2ItemComponent,
    DropdownV2MenuComponent
  ]
})
export class DropdownV2Module { }
