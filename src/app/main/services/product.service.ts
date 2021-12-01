import { Injectable } from '@angular/core';
import { ProductDto } from '../types/main.types';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private readonly httpClient: HttpClient) {}

    getProducts() {
        return this.httpClient.get<ProductDto[]>(environment.baseUrl + '/product');
    }
}
