import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderToolbarComponent } from '../header-toolbar/header-toolbar.component';



@NgModule({
  declarations: [HeaderToolbarComponent],
  imports: [
    CommonModule,
  ],
  exports: [HeaderToolbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
