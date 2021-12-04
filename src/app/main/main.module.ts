import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { MaterialModule } from '../material.module';
import { CartComponent } from './components/cart/cart.component';
import { MAIN_ROUTES } from './routes/main.routes';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
    declarations: [ProductComponent, ProductOverviewComponent, CartComponent, CheckoutComponent],
    imports: [RouterModule.forChild(MAIN_ROUTES), CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
})
export class MainModule {}
