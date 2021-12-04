export interface ProductDto {
    id: number;
    title: string;
    image: string;
    price: number;
}

export interface CartItemDto {
    item: ProductDto;
    quantity: number;
}

export interface OrderDto {
    customer: CustomerDto;
    items: OrderItemDto[];
    state: string;
}

export interface CustomerDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    zipCode: string;
    street: string;
}

export interface OrderItemDto {
    id: number;
    quantity: number;
}
