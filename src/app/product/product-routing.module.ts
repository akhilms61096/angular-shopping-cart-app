import { ProductModule } from './product.module';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: 'edit/:id',
        component: ProductEditComponent
    },
    {
        path: 'create',
        component: ProductEditComponent
    },
    {
        path: 'search',
        component: ProductSearchComponent
    }
];

@NgModule({
    imports: [
        ProductModule,
        RouterModule.forChild(routes)
    ]
})
export class ProductRoutingModule {

}