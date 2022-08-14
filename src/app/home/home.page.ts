import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Typewriter from 't-writer.js'
import { PlatformService } from '../services/platform.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private headings: string[] = ["Biography", "Skills", "Language Skills", "My Web Projects"];

  isMobile: boolean;
  
  copyIconHidden: boolean[] = [true, true];

  constructor(
    private router: Router,
    private platformService: PlatformService
    ) {}

  ngOnInit(): void {
    this.isMobile = this.platformService.isMobile;
    console.log(this.isMobile);

    var targetHeadings: NodeListOf<Element> = document.querySelectorAll('.typewriterHeadings')
    let index = 0;
    targetHeadings.forEach(element => {
      const writer1 = new Typewriter(element, {
        loop: false,
        typeColor: 'auto'
      });
      writer1.type(this.headings[index]).start();
      index++;
    });
  }

  goToContactPage() {
    this.router.navigate(["contact"], {replaceUrl: false});
  }

  mouseEnter(i: number) {
    this.copyIconHidden[i] = false;
  }

  mouseLeave(i: number) {
    this.copyIconHidden[i] = true;
  }

  doRefresh() {
    window.location.reload();
  }
}
