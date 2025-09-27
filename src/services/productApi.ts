// API service to interact with Python backend for real product scraping
import { Product } from '@/data/mockProducts';

export interface ScrapedProduct {
  source?: string; // "Amazon" or "Flipkart"
  site?: string; // Alternative field name
  title: string;
  price: number | string;
  url?: string;
  img?: string;
  imageUrl?: string; // Alternative field name
  asin?: string;
  rating?: number;
  reviewCount?: number;
}

export interface ApiResponse {
  results: ScrapedProduct[];
}

// Configuration for the Python backend
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:8000';

// Value score calculation function (matching the mock data logic)
const calculateValueScore = (price: number, rating: number, reviewCount: number): number => {
  return (rating * 5) + (reviewCount / 100) - (price / 500);
};

export const searchRealProducts = async (query: string): Promise<Product[]> => {
  try {
    // Call the Python backend endpoint that scrapes both Amazon and Flipkart
    const response = await fetch(`${API_BASE_URL}/scrape?product=${encodeURIComponent(query)}`);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data: ApiResponse = await response.json();
    
    // Normalize the product data structure to match Product interface
    const products: Product[] = data.results.map(product => {
      const price = typeof product.price === 'string' 
        ? parseFloat(product.price.replace(/[₹,]/g, '')) || 0
        : product.price || 0;
      const rating = product.rating || 4.0;
      const reviewCount = product.reviewCount || Math.floor(Math.random() * 1000) + 100;
      
      return {
        id: Math.random().toString(36).substr(2, 9), // Generate random ID
        title: product.title,
        price: price,
        url: product.url || '#',
        imageUrl: product.img || product.imageUrl || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
        platform: (product.source || product.site || 'Amazon') as 'Amazon' | 'Flipkart',
        rating: rating,
        reviewCount: reviewCount,
        valueScore: calculateValueScore(price, rating, reviewCount)
      };
    });
    
    // Sort by value score (highest first) and mark top recommendation
    products.sort((a, b) => b.valueScore - a.valueScore);
    if (products.length > 0) {
      products[0].isTopRecommendation = true;
    }
    
    return products;
  } catch (error) {
    console.error('Error fetching real products:', error);
    throw error;
  }
};

// Fallback function to use mock data if API is unavailable
export const searchWithFallback = async (query: string): Promise<Product[]> => {
  try {
    return await searchRealProducts(query);
  } catch (error) {
    console.warn('Real API unavailable, falling back to mock data');
    // Import and use the existing mock search function
    const { searchProducts } = await import('../data/mockProducts');
    return await searchProducts(query);
  }
};