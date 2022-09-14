import { Component, OnInit } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';
import { ContactForm } from 'src/app/interfaces/contact-form';
import { FormSenderService } from 'src/app/services/formSender/form-sender.service';
import { PlatformService } from 'src/app/services/platform.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {

  name: string = "";
  email: string = "";
  confirm_email: string = "";
  subject: string = "";
  message: string = "";

  responseTextHidden: boolean = true;

  constructor(
    private formSender: FormSenderService,
    private platformService: PlatformService
    ) { }

  ngOnInit() {
  }

  sendMessage() {
    if (this.name == "" || this.email == "" || this.subject == "") {
      this.displayMessage("Some fields are empty.");
      return;
    }
    
    if (this.email != this.confirm_email) {
      this.displayMessage("Email fields do not match.")
      return;
    }

    const form: ContactForm = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
      platform: this.platformService.getPlatformToString()
    }

    this.formSender.send(form).then(result => {
      this.displayMessage(result);
      if (result == "Sent")
      {
        this.responseTextHidden = false;
        this.clearFromFields();
        this.setMessageColor("green");
      }
    })
  }

  private clearFromFields() {
    this.name = "";
    this.email = "";
    this.confirm_email = "";
    this.subject = "";
    this.message = "";
  }

  private displayMessage(message: string) {
    document.getElementById("responseText").innerText = message;
    this.setMessageColor("red");
    this.responseTextHidden = false;
  }

  private setMessageColor(color: string) {
    document.getElementById("responseText").style.color = color;
  }
}
