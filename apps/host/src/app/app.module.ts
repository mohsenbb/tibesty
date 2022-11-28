import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@tibesty/material";
import { HttpClientModule } from "@angular/common/http";
import { UtilsModule } from "@tibesty/utils";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
