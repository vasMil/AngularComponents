import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { CurrentModule, CurrentViewComponent } from './current/current.module';
import { DeprecatedModule, DeprecatedViewComponent } from './deprecated/deprecated.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CurrentModule,
    DeprecatedModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'current-components', component: CurrentViewComponent},
      { path: 'deprecated-components', component: DeprecatedViewComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path:'**', redirectTo: 'home' } //TODO: Make a 404 error page
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
