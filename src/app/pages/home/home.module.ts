import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderToolbarComponent } from '../../components/header-toolbar/header-toolbar.component';
import { ClipboardModule } from 'ngx-clipboard';
import { CvSectionsModule } from 'src/app/components/cv-sections/cv-sections.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ClipboardModule,
    CvSectionsModule,
  ],
  declarations: [
    HomePage,
    HeaderToolbarComponent,
  ]
})
export class HomePageModule {}
