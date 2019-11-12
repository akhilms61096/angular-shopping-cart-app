import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  counter = 0;

  country = 'IN';

  constructor() { }

  ngOnInit() {
  }

  setCountry(name: string) {
    this.country = name;
  }

}
