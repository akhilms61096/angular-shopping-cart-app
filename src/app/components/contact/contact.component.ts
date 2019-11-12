import { Component, OnInit } from '@angular/core';

interface State {
  name: string;
  code?: string;  // ? means optional
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string = "your name";

  state: string = 'KL';

  states: State[] = [{name: 'Karnataka', code: 'KA'},
                     {name: 'TamilNadu', code: 'TN'},
                     {name: 'Kerala', code:'KL'}
                    ];

  constructor() { }

  ngOnInit() {
  }

  show() {
    console.log('name', this.name);
  }
}
