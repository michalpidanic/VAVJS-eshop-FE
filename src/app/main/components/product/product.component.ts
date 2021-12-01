import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { NotificationService } from 'src/app/common/services/notification.service';
import { CartService } from '../../services/cart.service';
import { ProductDto } from '../../types/main.types';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    @Input() data: ProductDto;
    quantity: number = 1;

    constructor(private readonly cartService: CartService, private readonly notificationService: NotificationService) {}

    ngOnInit(): void {}

    addToCart() {
        console.log(this.data, this.quantity);
        this.cartService
            .addToCart(this.data, this.quantity)
            .pipe(take(1))
            .subscribe(() => {
                this.notificationService.success(`Produkt ${this.data.title} (${this.quantity}ks) bol pridaný do košíka`);
            });
    }
}
