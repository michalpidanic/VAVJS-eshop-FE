import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { OrderDto } from '../types/main.types';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    constructor(private readonly httpClient: HttpClient) {}

    postOrder(data: OrderDto) {
        return this.httpClient.post(environment.baseUrl + '/order', data);
    }
}
