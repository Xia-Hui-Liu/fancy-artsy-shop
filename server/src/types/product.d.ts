export interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    salesCount: number;
    stockCount: number;
    imageUrl: string;
    createdAt: string;
  }
  
  export interface Subcategory {
    id: number;
    name: string;
    products: Product[];
  }
  
  export interface Category {
    id: number;
    name: string;
    subcategories: Subcategory[];
  }
  
  export const products: Category[];