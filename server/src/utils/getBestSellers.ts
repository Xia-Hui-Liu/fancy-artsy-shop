import products from '../data/products.json';

// Function to get the top N best-selling products
export const getBestSellers = (limit: number = 10) => {
  return products
    .flatMap(category => 
      category.categories.flatMap(subcategory => 
        subcategory.subcategories.flatMap(sub => 
          sub.products.filter(product => product.salesCount > 0)
        )
      )
    )
    .sort((a, b) => b.salesCount - a.salesCount) 
    .slice(0, limit); 
};
