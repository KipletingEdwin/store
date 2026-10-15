import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
  standalone: false,
})
export class ContactsPage implements OnInit {

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  submitMessage() {
    console.log('Foem Context Dispatched Successfully:', this.contactForm);
    alert(`Thank you ${this.contactForm.name}! Your message has been recorded.`);
    this.contactForm = {name: '', email: '', subject: '', message: ''};
  }

  constructor() { }

  ngOnInit() {
  }

}
