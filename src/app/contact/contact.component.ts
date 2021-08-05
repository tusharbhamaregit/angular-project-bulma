import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() {}

  public name: string;
  public email: string;
  public message: string;

  ngOnInit() {}

  submitContactForm() {}
}
