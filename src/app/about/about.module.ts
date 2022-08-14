import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { NgImageSliderModule } from 'ng-image-slider';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    NgImageSliderModule,
  ],
  declarations: [AboutPage, ImageSliderComponent]
})
export class AboutPageModule {}
