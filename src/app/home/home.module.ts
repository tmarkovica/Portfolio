import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderToolbarComponent } from '../header-toolbar/header-toolbar.component';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ClipboardModule
  ],
  declarations: [HomePage, HeaderToolbarComponent]
})
export class HomePageModule {}
