// import axios from "axios";
// import { Product } from '../types/product'

// export const fetchProducts = async ():Promise<Product[]> => {
//     try {
//         const response = await axios.get<Product[]>('/api/products');
//         return response.data
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         throw error;
//     }
// }

import axios from "axios";
import { Product, Category, Subcategory } from '../types/product'

// Fetch all categories
export const fetchCategories = async (): Promise<Category[]> => {
    try {
        const response = await axios.get<Category[]>('/api/collections');
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}

// Fetch a specific category by ID
export const fetchCategoryById = async (categoryId: number): Promise<Category> => {
    try {
        const response = await axios.get<Category>(`/api/collections/category/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching category ${categoryId}:`, error);
        throw error;
    }
}

// Fetch subcategories for a specific category
export const fetchSubcategoriesByCategoryId = async (categoryId: number): Promise<Subcategory[]> => {
    try {
        const response = await axios.get<Subcategory[]>(`/api/collections/category/${categoryId}/subcategories`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching subcategories for category ${categoryId}:`, error);
        throw error;
    }
}

// Fetch a specific subcategory by ID
export const fetchSubcategoryById = async (subcategoryId: number): Promise<Subcategory> => {
    try {
        const response = await axios.get<Subcategory>(`/api/collections/subcategory/${subcategoryId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching subcategory ${subcategoryId}:`, error);
        throw error;
    }
}

// Fetch products for a specific subcategory
export const fetchProductsBySubcategoryId = async (subcategoryId: number): Promise<Product[]> => {
    try {
        const response = await axios.get<Product[]>(`/api/collections/subcategory/${subcategoryId}/products`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching products for subcategory ${subcategoryId}:`, error);
        throw error;
    }
}

// Fetch a specific product by ID
export const fetchProductById = async (productId: number): Promise<Product> => {
    try {
        const response = await axios.get<Product>(`/api/collections/item/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product ${productId}:`, error);
        throw error;
    }
}
