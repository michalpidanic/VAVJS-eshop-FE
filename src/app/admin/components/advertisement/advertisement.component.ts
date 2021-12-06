import { Component, OnInit } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { takeUntil, startWith, concatMap, take, catchError } from 'rxjs/operators';
import { DisposableComponent } from 'src/app/common/components/disposable.component';
import { NotificationService } from 'src/app/common/services/notification.service';
import { OrderService } from 'src/app/admin/services/order.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdvertisementAdminService } from '../../services/advertisement-admin.service';

@Component({
    selector: 'app-advertisement',
    templateUrl: './advertisement.component.html',
    styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent extends DisposableComponent implements OnInit {
    advertisementForm: FormGroup;
    fetchAdvertisement$ = new Subject();
    counter = 0;

    constructor(
        private readonly orderService: OrderService,
        private readonly notificationService: NotificationService,
        private readonly advertisementService: AdvertisementAdminService
    ) {
        super();

        this.advertisementForm = new FormGroup({
            url: new FormControl('', Validators.required),
            image: new FormControl('', Validators.required),
        });
    }

    ngOnInit(): void {
        this.fetchAdvertisement$
            .asObservable()
            .pipe(
                takeUntil(this.destroySignal$),
                startWith([]),
                concatMap(() => this.advertisementService.getAdvertisement())
            )
            .subscribe(res => {
                console.log(res);
                this.counter = res.counter;
                this.advertisementForm.controls['url'].setValue(res.url);
                this.advertisementForm.controls['image'].setValue(res.image);
            });
    }

    onSubmit() {
        this.advertisementService
            .updateAdvertisement(this.advertisementForm.value)
            .pipe(
                take(1),
                catchError(err => {
                    this.notificationService.error(`Error: ${err.message}`);
                    return throwError(err);
                })
            )
            .subscribe(() => {
                this.notificationService.success(`Reklama bola úspešne zmenená`);
                this.fetchAdvertisement$.next();
            });
    }
}
