import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AdvertisementService } from '../../services/advertisement.service';
import { AdvertisementDto } from '../../types/main.types';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
    advertisement: AdvertisementDto = null;

    constructor(private readonly advertisementService: AdvertisementService) {}

    ngOnInit(): void {
        this.advertisementService
            .getAdvertisement()
            .pipe(take(1))
            .subscribe(res => (this.advertisement = res));
    }

    onAdvertisementClick() {
        this.advertisementService
            .incrementCounter()
            .pipe(take(1))
            .subscribe(() => {
                window.open(this.advertisement.url);
            });
    }
}
