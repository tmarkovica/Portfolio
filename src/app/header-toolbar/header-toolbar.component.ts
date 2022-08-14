import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'
import { PlatformService } from '../services/platform.service';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss'],
})
export class HeaderToolbarComponent implements OnInit {

  isMobile: boolean

  constructor(
    private platformService: PlatformService,
    private tbm: MatToolbar
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

}
