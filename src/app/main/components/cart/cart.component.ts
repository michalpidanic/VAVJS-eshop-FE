import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { concatMap, map, startWith, take, takeUntil, tap } from 'rxjs/operators';
import { DisposableComponent } from 'src/app/common/components/disposable.component';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { CartItemDto, OrderDto } from '../../types/main.types';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent extends DisposableComponent implements OnInit {
    fetchItems$ = new Subject();
    items: CartItemDto[] = [];
    price: number = 0;
    customerDataForm: FormGroup;
    paymentMethods = ['Kartou online', 'Kartou kuriérovi pri prevzatí', 'V hotovosti kuriérovi pri prevzatí'];
    paymentMethodSelected = null;

    constructor(private readonly cartService: CartService, private readonly orderService: OrderService) {
        super();

        this.customerDataForm = new FormGroup({
            firstName: new FormControl('', Validators.compose([Validators.required])),
            lastName: new FormControl('', Validators.compose([Validators.required])),
            email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
            phone: new FormControl('', Validators.compose([Validators.required])),
            city: new FormControl('', Validators.compose([Validators.required])),
            street: new FormControl('', Validators.compose([Validators.required])),
            zipCode: new FormControl('', Validators.compose([Validators.required])),
        });
    }

    ngOnInit(): void {
        this.fetchItems$
            .asObservable()
            .pipe(
                takeUntil(this.destroySignal$),
                tap(() => {
                    this.items = [];
                    this.price = 0;
                }),
                startWith({}),
                concatMap(() => this.cartService.getCartItems()),
                tap((data: CartItemDto) => {
                    this.items.push(data);
                })
            )
            .subscribe(() => {
                this.price =
                    this.items.length > 0
                        ? this.items
                              .map(i => {
                                  return i.item.price * i.quantity;
                              })
                              .reduce((accumulator, a) => {
                                  return accumulator + a;
                              }, 0)
                        : 0;
            });
    }

    addQuantity(item: CartItemDto) {
        this.cartService
            .addToCart(item.item, item.quantity + 1)
            .pipe(take(1))
            .subscribe(() => this.fetchItems$.next());
    }

    subtractQuantity(item: CartItemDto) {
        if (item.quantity > 1) {
            this.cartService
                .addToCart(item.item, item.quantity - 1)
                .pipe(take(1))
                .subscribe(() => this.fetchItems$.next());
        } else {
            this.removeItem(item);
        }
    }

    removeItem(item: CartItemDto) {
        this.cartService
            .removeFromCart(item.item)
            .pipe(take(1))
            .subscribe(() => this.fetchItems$.next());
    }

    createOrder() {
        let orderData: OrderDto = {
            customer: this.customerDataForm.value,
            items: this.items.map(i => {
                return { id: i.item.id, quantity: i.quantity };
            }),
            state: this.paymentMethodSelected == 'Kartou online' ? 'payed' : 'not payed',
        };
        console.log(orderData);
        this.orderService
            .postOrder(orderData)
            .pipe(take(1))
            .subscribe(res => console.log(res));

        this.cartService.clearCart();
    }
}
