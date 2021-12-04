import { CustomerDto, ProductDto } from 'src/app/main/types/main.types';

export interface OrderManagementDto {
    id: number;
    state: string;
    createdAt: string;
    updatedAt: string;
    customerId: number;
    orderItems: OrderManagementItemDto[];
    Customer: CustomerDto;
}

export interface OrderManagementItemDto {
    id: number;
    quantity: number;
    Product: ProductDto;
}
