import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private headings: string[] = ["Biography", "Skills", "Language Skills", "My Web Projects"];

  constructor(private router: Router) {}

  ngOnInit(): void {
    /* const target = document.querySelector('.typewriter');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'blue'
    });
    writer
      .type('Portfolio')
      .rest(2000)
      .start(); */

    var targetHeadings: NodeListOf<Element> = document.querySelectorAll('.typewriterHeadings')
    let index = 0;
    targetHeadings.forEach(element => {
      const writer1 = new Typewriter(element, {
        loop: false,
        typeColor: 'white'
      });
      writer1.type(this.headings[index]).start()
      index++;
    });
  }

  goToContactPage() {
    this.router.navigate(["contact"], {replaceUrl: false});
  }
}
