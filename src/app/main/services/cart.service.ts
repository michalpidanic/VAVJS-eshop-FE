import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { LocalStorageService } from 'src/app/common/services/local-storage.service';
import { ProductDto } from '../types/main.types';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor(private localStorageService: LocalStorageService) {}

    getCartItems() {
        return JSON.parse(this.localStorageService.getItem('cart'))?.items;
    }

    addToCart(item: ProductDto, quantity: number) {
        let items = this.getCartItems() ?? [];
        const itemInCart = items.find(i => i.item.id == item.id);
        if (itemInCart) {
            let updatedItem = itemInCart;
            updatedItem.quantity = quantity;
            items[items.indexOf(itemInCart)] = updatedItem;
        } else {
            items.push({ item: item, quantity: quantity });
        }
        this.localStorageService.setItem('cart', JSON.stringify({ items: items }));
        return of(1);
    }
}
