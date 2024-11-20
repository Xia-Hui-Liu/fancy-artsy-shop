import { Product } from '../types/product';

export const extractProducts = (data: any): Product[] => {
  const products: Product[] = [];

  data.forEach((category: any) => {
    category.categories.forEach((subcategory: any) => {
      subcategory.subcategories.forEach((subcategoryDetail: any) => {
        products.push(...subcategoryDetail.products);
      });
    });
  });

  return products;
};

export const getNewArrivals = (data: any, daysAgo: number = 30): Product[] => {
  const allProducts = extractProducts(data);
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysAgo);

  return allProducts.filter((product) => {
    const createdAt = new Date(product.createdAt);
    return createdAt >= cutoffDate;
  });
};
