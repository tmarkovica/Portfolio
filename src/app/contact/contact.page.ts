import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  email: string = "";
  subject: string = "";
  message: string = "";

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    console.log(this.email);
    console.log(this.subject);
    console.log(this.message);
    this.email = "";
    this.subject = "";
    this.message = "";
  }
}
