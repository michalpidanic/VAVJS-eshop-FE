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
