import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    MatToolbarModule,
  ],
  providers: [{ 
    provide: LocationStrategy//RouteReuseStrategy
    , 
    useClass: HashLocationStrategy//IonicRouteStrategy 
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
