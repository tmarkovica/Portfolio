import { Component, OnInit } from '@angular/core';
import { PlatformService } from '../../services/platform/platform.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  isMobile: boolean;

  constructor(
    private platformService: PlatformService
    ) {}

  ngOnInit(): void {
    this.isMobile = this.platformService.isMobile;
  }

  doRefresh() {
    window.location.reload();
  }
}
