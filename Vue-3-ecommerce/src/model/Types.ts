export interface Product{
    name: string;
    price: number;   
    image: string;
    id: number; 
}

export interface CartDetail{
    productId: number;
    quantity: number;
}