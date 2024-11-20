export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
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

export interface ProductData {
  id: number;
  name: string;
  categories: Category[];
}