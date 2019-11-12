import { CartService } from './../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // providers: [
  //   CartService // private to this component
  // ]
})
export class HeaderComponent implements OnInit {

  count: number;

  amount$: Observable<number>;

  constructor(private cartService: CartService) {

   this.amount$ = this.cartService.amount$;

    // value type
   this.count = this.cartService.count;
    // observer 
    // subscribe waits for publish event else it wont do anything
    // BehaviorSubject gives immmidiate callback and doesn't wait for publish
   this.cartService.count$
                        .subscribe ( value => {
                          this.count = value;
                          console.log('subscriber ',this.count);
                        })
  }

  ngOnInit() {
  }

  highlightStatus (status: boolean) {
    console.log('directive event', status);
  }
}
