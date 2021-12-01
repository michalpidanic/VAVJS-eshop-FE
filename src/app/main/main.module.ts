import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { MaterialModule } from '../material.module';
import { CartComponent } from './components/cart/cart.component';
import { MAIN_ROUTES } from './routes/main.routes';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProductComponent, ProductOverviewComponent, CartComponent, ProductDetailComponent],
    imports: [RouterModule.forChild(MAIN_ROUTES), CommonModule, MaterialModule, FormsModule],
})
export class MainModule {}
