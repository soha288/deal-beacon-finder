// Mock data simulating the backend API response with calculated value scores
export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  url: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  platform: 'Amazon' | 'Flipkart';
  valueScore: number;
  isTopRecommendation?: boolean;
}

// Value score calculation function (simulating backend logic)
const calculateValueScore = (price: number, rating: number, reviewCount: number): number => {
  return (rating * 5) + (reviewCount / 100) - (price / 500);
};

// Mock product data for different search terms
export const mockProductDatabase: Record<string, Product[]> = {
  'iphone': [
    {
      id: '1',
      title: 'Apple iPhone 15 (128GB) - Natural Titanium',
      price: 79900,
      originalPrice: 99900,
      url: 'https://amazon.in/iphone-15',
      imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      rating: 4.6,
      reviewCount: 2847,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '2',
      title: 'Apple iPhone 15 (128GB) - Natural Titanium',
      price: 82900,
      originalPrice: 99900,
      url: 'https://flipkart.com/iphone-15',
      imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      rating: 4.5,
      reviewCount: 1923,
      platform: 'Flipkart',
      valueScore: 0,
    },
    {
      id: '3',
      title: 'Apple iPhone 14 (128GB) - Blue',
      price: 59900,
      originalPrice: 79900,
      url: 'https://amazon.in/iphone-14',
      imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=400',
      rating: 4.4,
      reviewCount: 5632,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '4',
      title: 'Apple iPhone 13 (128GB) - Pink',
      price: 49900,
      originalPrice: 69900,
      url: 'https://flipkart.com/iphone-13',
      imageUrl: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=400',
      rating: 4.3,
      reviewCount: 8247,
      platform: 'Flipkart',
      valueScore: 0,
    }
  ],
  'laptop': [
    {
      id: '5',
      title: 'Dell XPS 13 Plus Intel Core i7 12th Gen Laptop',
      price: 139990,
      originalPrice: 169990,
      url: 'https://amazon.in/dell-xps-13',
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
      rating: 4.2,
      reviewCount: 847,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '6',
      title: 'MacBook Air M2 Chip (8GB/256GB) - Midnight',
      price: 114900,
      originalPrice: 119900,
      url: 'https://flipkart.com/macbook-air-m2',
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
      rating: 4.7,
      reviewCount: 1534,
      platform: 'Flipkart',
      valueScore: 0,
    },
    {
      id: '7',
      title: 'HP Pavilion Gaming Laptop Intel i5 12th Gen',
      price: 67990,
      originalPrice: 79990,
      url: 'https://amazon.in/hp-pavilion-gaming',
      imageUrl: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400',
      rating: 4.1,
      reviewCount: 2156,
      platform: 'Amazon',
      valueScore: 0,
    }
  ],
  'headphones': [
    {
      id: '8',
      title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
      price: 24990,
      originalPrice: 29990,
      url: 'https://amazon.in/sony-wh1000xm5',
      imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
      rating: 4.5,
      reviewCount: 3247,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '9',
      title: 'Apple AirPods Pro (2nd Generation)',
      price: 22900,
      originalPrice: 24900,
      url: 'https://flipkart.com/airpods-pro',
      imageUrl: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400',
      rating: 4.4,
      reviewCount: 1876,
      platform: 'Flipkart',
      valueScore: 0,
    },
    {
      id: '10',
      title: 'JBL Tune 760NC Wireless Over-Ear Headphones',
      price: 5999,
      originalPrice: 8999,
      url: 'https://amazon.in/jbl-tune-760nc',
      imageUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400',
      rating: 4.2,
      reviewCount: 5843,
      platform: 'Amazon',
      valueScore: 0,
    }
  ]
};

// Calculate value scores and sort products
const processProducts = (products: Product[]): Product[] => {
  const processedProducts = products.map(product => ({
    ...product,
    valueScore: calculateValueScore(product.price, product.rating, product.reviewCount)
  }));

  // Sort by value score (highest first)
  processedProducts.sort((a, b) => b.valueScore - a.valueScore);

  // Mark the first product as top recommendation
  if (processedProducts.length > 0) {
    processedProducts[0].isTopRecommendation = true;
  }

  return processedProducts;
};

// Simulate API search function
export const searchProducts = async (query: string): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const searchTerm = query.toLowerCase();
  
  // Find matching products
  let matchedProducts: Product[] = [];
  
  Object.entries(mockProductDatabase).forEach(([category, products]) => {
    if (searchTerm.includes(category) || category.includes(searchTerm)) {
      matchedProducts = [...matchedProducts, ...products];
    }
  });

  // If no specific category match, return a mix of products
  if (matchedProducts.length === 0) {
    const allProducts = Object.values(mockProductDatabase).flat();
    matchedProducts = allProducts.filter(product => 
      product.title.toLowerCase().includes(searchTerm)
    );
  }

  // If still no matches, return iPhone results as default
  if (matchedProducts.length === 0) {
    matchedProducts = mockProductDatabase['iphone'] || [];
  }

  return processProducts(matchedProducts);
};