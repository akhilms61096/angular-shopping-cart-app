import { HttpClient } from '@angular/common/http';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {FormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
// import { CartModule } from './cart/cart.module';  // for code split and lazy loading

// simple route
import { Route, Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
    {
        path: '', // default: localhost:4200
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }, // Cart related will be put in cartmodule as we don't want to overload the app module

    //lazy loading
    {
        path: 'cart',
        loadChildren: './cart/cart.module#CartModule' // # for angular to know which module to load when there are multiple modules
    },
    {
        path: 'products',
        loadChildren: './product/product-routing.module#ProductRoutingModule'
    },

    // end of routes
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        //other module dependencies
        BrowserModule, //includes compiler, commonmodule
        FormsModule ,   //will go to vendor module as it is not having any dot and it is from node modules ... @ang.....
        SharedModule,
        HttpClientModule,
      //  CartModule,
        RouterModule.forRoot(routes) // angular come to know about our routes 
    ],
    declarations: [
        //set of components, directives, pipes
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        CounterComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent
        //HomeComponent
        //FooterComponent
    ],
    bootstrap: [
        AppComponent //root component
    ]
})
export class AppModule {

}