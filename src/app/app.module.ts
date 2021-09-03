import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { DropdownModule } from './dropdown/dropdown.module';
import { DropdownModuleDepr } from './depricated/dropdown/dropdown.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DropdownModuleDepr,
    DropdownModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
