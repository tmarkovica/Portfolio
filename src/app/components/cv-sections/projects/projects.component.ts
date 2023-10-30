import { Component, OnInit } from '@angular/core';
import { MY_PROJECTS } from 'src/app/data/my-projects';
import { AboutProject } from 'src/app/interfaces/about-project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  myProjects: AboutProject[] = MY_PROJECTS;

  constructor() { }

  ngOnInit() {}

}
