import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { ProductDto } from '../../types/main.types';

@Component({
    selector: 'app-product-overview',
    templateUrl: './product-overview.component.html',
    styleUrls: ['./product-overview.component.scss'],
})
export class ProductOverviewComponent implements OnInit {
    products: ProductDto[] = [];

    constructor(private readonly productService: ProductService) {}

    ngOnInit(): void {
        this.productService
            .getProducts()
            .pipe(take(1))
            .subscribe(res => {
                this.products = res;
            });
    }
}
