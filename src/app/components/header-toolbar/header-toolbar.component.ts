import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
})
export class HeaderToolbarComponent implements OnInit {

  isMobile: boolean

  private navOpen: boolean = false;
  mobileNavHidden: boolean = true;

  constructor(
    private platformService: PlatformService,
    ) { }

  ngOnInit() {
    this.isMobile = this.platformService.isMobile;

    const target = document.querySelector('.typewriter');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'blue'
    });
    writer
      .type('Portfolio')
      .rest(2000)
      .start();
  }

  toggleNav() {
    this.mobileNavHidden= !this.mobileNavHidden;
  }
}
