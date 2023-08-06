import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Typewriter from 't-writer.js';
import { PlatformService } from '../../services/platform/platform.service';
import { AboutProject } from 'src/app/interfaces/about-project';
import { MY_PROJECTS } from 'src/app/data/my-projects';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  isMobile: boolean;

  myProjects: AboutProject[] = MY_PROJECTS;

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
