import {Component, OnInit} from '@angular/core';

@Component({
    //meta info about component, used by angular at runtime
    selector: 'app-root', //html tag/component name
    templateUrl: 'app.component.html', //view part
    styleUrls: [
        'app.component.scss'
    ]
})
export class AppComponent implements OnInit {
    appTitle = "Product App"; //model

    constructor() {
        console.log("App component created");
    }

    //called right after the view is placed in browser
    ngOnInit() {
        console.log("App component init");
    }
}