import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [ProductComponent, ProductOverviewComponent],
    imports: [CommonModule, MaterialModule],
})
export class MainModule {}
