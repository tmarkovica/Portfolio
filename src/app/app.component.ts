import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PlatformService } from './services/platform.service';
import AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  constructor(
    private platform: Platform,
    private platformService: PlatformService,
  ) {
    this.initializeApp();
  }

  ngOnInit() {
  }

  initializeApp() {
    this.platformService.isMobile = this.platform.is('mobile');
    console.log("App initialized");
  }
}
