import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { DropdownServiceModule } from './dropdown-service/dropdown-service.module';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule } from 'ngx-logger';

export { DropdownOutput } from './dropdownOutput.model'

@NgModule({
  declarations: [
    DropdownMenuComponent,
    DropdownItemComponent
  ],
  imports: [
    CommonModule,
    DropdownServiceModule,
    HttpClientModule,
    LoggerModule.forChild()
  ],
  exports: [
    DropdownMenuComponent,
    DropdownItemComponent
  ]
})
export class DropdownModule { }
