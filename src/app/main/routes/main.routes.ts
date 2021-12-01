import { Routes } from '@angular/router';
import { CartComponent } from '../components/cart/cart.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProductOverviewComponent } from '../components/product-overview/product-overview.component';

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full',
    },
    {
        path: 'product',
        component: ProductOverviewComponent,
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    },
];
