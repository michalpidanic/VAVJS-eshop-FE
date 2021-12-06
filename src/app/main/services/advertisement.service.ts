import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdvertisementDto } from '../types/main.types';

@Injectable({
    providedIn: 'root',
})
export class AdvertisementService {
    constructor(protected readonly httpClient: HttpClient) {}

    getAdvertisement() {
        return this.httpClient.get<AdvertisementDto>(environment.baseUrl + '/advertisement');
    }

    incrementCounter() {
        return this.httpClient.post(environment.baseUrl + '/advertisement/counter', {});
    }
}
