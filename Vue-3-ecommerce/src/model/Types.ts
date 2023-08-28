export interface Product{
    name: string;
    price: number;   
    image: string;
    id: number; 
    categoryId: number;
}

export interface CartDetail{
    product: Product;
    quantity: number;
}
export interface Category{

    id: number;
    name: string;
    description: string;
}
