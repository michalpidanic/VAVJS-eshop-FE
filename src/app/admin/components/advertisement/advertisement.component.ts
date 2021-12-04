import { Component, OnInit } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { takeUntil, startWith, concatMap, take, catchError } from 'rxjs/operators';
import { DisposableComponent } from 'src/app/common/components/disposable.component';
import { NotificationService } from 'src/app/common/services/notification.service';
import { OrderService } from 'src/app/admin/services/order.service';
import { OrderManagementDto } from '../../types/admin.types';

@Component({
    selector: 'app-advertisement',
    templateUrl: './advertisement.component.html',
    styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent extends DisposableComponent implements OnInit {
    constructor(private readonly orderService: OrderService, private readonly notificationService: NotificationService) {
        super();
    }

    ngOnInit(): void {}
}
