import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderToolbarComponent } from '../../components/header-toolbar/header-toolbar.component';
import { ClipboardModule } from 'ngx-clipboard';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ClipboardModule
  ],
  declarations: [HomePage, HeaderToolbarComponent, ContactFormComponent]
})
export class HomePageModule {}
