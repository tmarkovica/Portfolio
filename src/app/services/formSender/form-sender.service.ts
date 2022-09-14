import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactForm } from 'src/app/interfaces/contact-form';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormSenderService {

  private apiKey = environment.apiKey;
  private secretKey = environment.secretKey;

  constructor(private http: HttpClient) { }

  send(contactForm: ContactForm): Promise<string> {

    return this.http.post("http://my-mailman.herokuapp.com/contact-form", contactForm).toPromise()
    .then((val: any) => {
      console.log(val);
      const result = val.result;
      console.log(result);
      return result;
    },
    (error) => { //Error callback
      console.log(error);
      return 'error';
    });
  }

  getEmailsSent() {
    this.http.get("https://my-mailman.herokuapp.com/emails-sent", {
    }).toPromise().then((res: number) => {
      console.log(`Emails sent ${res}`);
    });
  }
}
