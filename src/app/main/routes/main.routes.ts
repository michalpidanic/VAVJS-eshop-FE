import { Routes } from '@angular/router';
import { CartComponent } from '../components/cart/cart.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { ProductOverviewComponent } from '../components/product-overview/product-overview.component';

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
    },
    {
        path: 'products',
        component: ProductOverviewComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
    },
];
