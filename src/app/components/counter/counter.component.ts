import { Component, OnInit, Input,
         Output, EventEmitter,
         OnChanges,
         SimpleChange,
         SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnChanges {

  // input, used for property binding []

  // input, accept input from immediate parent component

  @Input()
  counter = 0; //type inference, assume type from assignment

  // output variable is input name + 'Change' - angular way of 2 way binding
  @Output()
  counterChange: EventEmitter<number> = new EventEmitter();

  // Output is used for child to parent communication
  // Output is basically a () event binding
  // emit the event, with value as $event
  // string is value type, passed as $event
  @Output()
  resetEvent: EventEmitter<string> = new EventEmitter;

  handle: any;
  highlight: boolean = false;

  constructor() { 
    console.log('Counter component created');
  }

  ngOnInit() {
    console.log('Counter component initialized');
    
    this.handle = setInterval(() => { // bcz of fat arrow this refers to proper object count and not some global count .. callback function 
     //   this.counter++; - because you should not change in child as it is getting from parent
     this.counterChange.emit(this.counter + 1);
     console.log('incrementing counter');
    },5000);
  }

  // called before destroying the component
  ngOnDestroy() {
    console.log('Counter component destroyed');
    clearInterval(this.handle);  //stops the timer which is running in the background as it is maintained from a independent function
  }

  increment(e: Event) {
    e.stopPropagation(); // stop event bubble up
    console.log("increment called", e);
   // this.counter++;
    this.counterChange.emit(this.counter + 1);
  }

  divClick(e: Event) {
    console.log('div checked', e)
  }

  incrementBy(n: number) {
   // this.counter += n;
   this.counterChange.emit(this.counter + n);
  }

  resetValue() {
   // not a right approach as this is being received from parent
   // this.counter = 0;

   // emit an event to the parent component
   // "resetCounter" is passed as $event
   this.resetEvent.emit("resetCounter");
  }

  // called on initialization time
  // whenever parent property to child got changed
  ngOnChanges(changes: SimpleChanges) {
    console.log('changed are ', changes);
  }
}
