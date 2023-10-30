import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { IonicModule } from '@ionic/angular';
import { LanguageSkillsComponent } from './language-skills/language-skills.component';



@NgModule({
  declarations: [
    LanguageSkillsComponent,
    ContactInfoComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LanguageSkillsComponent,
    ContactInfoComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
  ]
})
export class CvSectionsModule { }
