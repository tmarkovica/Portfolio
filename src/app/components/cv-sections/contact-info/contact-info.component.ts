import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {

  phoneNumber: string = environment.phoneNumber;
  emailAddress: string = environment.emailAddress;

  constructor() { }

  ngOnInit() {}

}
