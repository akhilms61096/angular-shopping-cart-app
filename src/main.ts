//bootstrap
//this is the first file to be executed in browser
//load angular app module into browser 

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
    .bootstrapModule(AppModule);  //bootstraps add module