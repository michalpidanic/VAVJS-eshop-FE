import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderManagementDto } from '../types/admin.types';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    constructor(private readonly httpClient: HttpClient) {}

    getOrders() {
        return this.httpClient.get<OrderManagementDto[]>(environment.baseUrl + '/order');
    }

    editState(id: number, state: string) {
        return this.httpClient.patch(environment.baseUrl + '/order', { id: id, state: state });
    }
}
