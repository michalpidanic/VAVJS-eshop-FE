import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemDto } from '../../types/main.types';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    items: CartItemDto[] = [];

    constructor(private readonly cartService: CartService) {}

    ngOnInit(): void {
        this.items = this.cartService.getCartItems();
    }

    addQuantity(id: number) {
        const index = this.items.indexOf(this.items.find(i => i.item.id == id));
        this.items[index].quantity += 1;
        this.cartService.addToCart(this.items[index].item, this.items[index].quantity);
    }

    subtractQuantity(id: number) {
        const index = this.items.indexOf(this.items.find(i => i.item.id == id));
        if (this.items[index].quantity > 1) {
            this.items[index].quantity -= 1;
            this.cartService.addToCart(this.items[index].item, this.items[index].quantity);
        } else {
            this.removeItem(id);
        }
    }

    removeItem(id: number) {
        const index = this.items.indexOf(this.items.find(i => i.item.id == id));
        this.cartService.removeFromCart(this.items[index].item);
        this.items.splice(index, 1);
    }

    clearCart() {
        this.cartService.clearCart();
    }
}
