import { Component, OnInit } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { Subject, throwError } from 'rxjs';
import { catchError, concatMap, startWith, take, takeUntil, tap } from 'rxjs/operators';
import { OrderService } from 'src/app/admin/services/order.service';
import { DisposableComponent } from 'src/app/common/components/disposable.component';
import { NotificationService } from 'src/app/common/services/notification.service';
import { OrderManagementDto } from '../../types/admin.types';

@Component({
    selector: 'app-order-management',
    templateUrl: './order-management.component.html',
    styleUrls: ['./order-management.component.scss'],
})
export class OrderManagementComponent extends DisposableComponent implements OnInit {
    orders: OrderManagementDto[] = [];
    fetchOrders$ = new Subject();

    constructor(private readonly orderService: OrderService, private readonly notificationService: NotificationService) {
        super();
    }

    ngOnInit(): void {
        this.fetchOrders$
            .asObservable()
            .pipe(
                takeUntil(this.destroySignal$),
                startWith([]),
                concatMap(() => this.orderService.getOrders())
            )
            .subscribe(data => {
                this.orders = data;
            });
    }

    getOrderTotalPrice(order) {
        return order.orderItems.map(i => i.Product.price * i.quantity).reduce((accumulator, a) => accumulator + a, 0);
    }

    editOrderState(orderId: number, state: string) {
        this.orderService
            .editState(orderId, state)
            .pipe(
                take(1),
                catchError(err => {
                    this.notificationService.error(`Error: ${err.message}`);
                    return throwError(err);
                })
            )
            .subscribe(() => {
                this.notificationService.success(`Stav objedávky č.${orderId} bol zmenený na ${state}`);
                this.fetchOrders$.next();
            });
    }
}
