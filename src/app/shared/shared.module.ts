import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SharedDirective } from '../shared.directive';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [ //for private use within the component
    AddressComponent,
    PowerPipe, 
    FilterPipe, 
    SharedDirective, 
    HighlightDirective
  ],
  imports: [
    CommonModule  // directives - ngif, ngfor and others
  ],
  exports: [ // make the component public to other module
    // subset of declared component 
    AddressComponent,
    PowerPipe, 
    FilterPipe, 
    SharedDirective,
    HighlightDirective
  ]
})
export class SharedModule { }
