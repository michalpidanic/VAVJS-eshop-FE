import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdvertisementService } from 'src/app/main/services/advertisement.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AdvertisementAdminService extends AdvertisementService {
    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    updateAdvertisement(data) {
        return this.httpClient.post(environment.baseUrl + '/advertisement', data);
    }
}
