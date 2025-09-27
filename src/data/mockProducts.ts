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
    },
    {
      id: '16',
      title: 'Apple iPhone 12 (64GB) - Purple',
      price: 39900,
      originalPrice: 59900,
      url: 'https://amazon.in/iphone-12',
      imageUrl: 'https://images.unsplash.com/photo-1605170436648-0061a71b7c85?w=400',
      rating: 4.2,
      reviewCount: 6543,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '17',
      title: 'Apple iPhone SE (128GB) - Midnight',
      price: 29900,
      originalPrice: 49900,
      url: 'https://flipkart.com/iphone-se',
      imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
      rating: 4.0,
      reviewCount: 3421,
      platform: 'Flipkart',
      valueScore: 0,
    }
  ],
  'smartphone': [
    {
      id: '18',
      title: 'Samsung Galaxy S24 Ultra (256GB) - Titanium Gray',
      price: 124999,
      originalPrice: 134999,
      url: 'https://amazon.in/samsung-galaxy-s24-ultra',
      imageUrl: 'https://images.unsplash.com/photo-1610792516307-ea5adc38e3d8?w=400',
      rating: 4.5,
      reviewCount: 2134,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '19',
      title: 'OnePlus 12 (256GB) - Flowy Emerald',
      price: 64999,
      originalPrice: 69999,
      url: 'https://flipkart.com/oneplus-12',
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      rating: 4.4,
      reviewCount: 4567,
      platform: 'Flipkart',
      valueScore: 0,
    },
    {
      id: '20',
      title: 'Google Pixel 9 (128GB) - Obsidian',
      price: 54999,
      originalPrice: 59999,
      url: 'https://amazon.in/google-pixel-9',
      imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400',
      rating: 4.3,
      reviewCount: 1876,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '21',
      title: 'Xiaomi 14 Ultra (512GB) - White',
      price: 89999,
      originalPrice: 99999,
      url: 'https://flipkart.com/xiaomi-14-ultra',
      imageUrl: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400',
      rating: 4.2,
      reviewCount: 3254,
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
    },
    {
      id: '11',
      title: 'ASUS ROG Strix G15 Gaming Laptop AMD Ryzen 7',
      price: 89990,
      originalPrice: 109990,
      url: 'https://flipkart.com/asus-rog-strix-g15',
      imageUrl: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400',
      rating: 4.3,
      reviewCount: 3421,
      platform: 'Flipkart',
      valueScore: 0,
    },
    {
      id: '12',
      title: 'Lenovo ThinkPad E14 Intel Core i5 Business Laptop',
      price: 52990,
      originalPrice: 65990,
      url: 'https://amazon.in/lenovo-thinkpad-e14',
      imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
      rating: 4.0,
      reviewCount: 1876,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '13',
      title: 'Acer Aspire 7 Gaming Laptop Intel Core i5 11th Gen',
      price: 45990,
      originalPrice: 59990,
      url: 'https://flipkart.com/acer-aspire-7',
      imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
      rating: 3.9,
      reviewCount: 2834,
      platform: 'Flipkart',
      valueScore: 0,
    },
    {
      id: '14',
      title: 'MSI Modern 14 Intel Core i5 12th Gen Laptop',
      price: 38990,
      originalPrice: 49990,
      url: 'https://amazon.in/msi-modern-14',
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
      rating: 4.2,
      reviewCount: 1234,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '15',
      title: 'MacBook Pro 14-inch M3 Chip (8GB/512GB)',
      price: 199900,
      originalPrice: 219900,
      url: 'https://flipkart.com/macbook-pro-14-m3',
      imageUrl: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400',
      rating: 4.8,
      reviewCount: 892,
      platform: 'Flipkart',
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
    },
    {
      id: '22',
      title: 'Bose QuietComfort 45 Wireless Headphones',
      price: 19990,
      originalPrice: 24990,
      url: 'https://flipkart.com/bose-qc45',
      imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400',
      rating: 4.6,
      reviewCount: 2134,
      platform: 'Flipkart',
      valueScore: 0,
    },
    {
      id: '23',
      title: 'Sennheiser HD 450BT Wireless Headphones',
      price: 8999,
      originalPrice: 12999,
      url: 'https://amazon.in/sennheiser-hd450bt',
      imageUrl: 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=400',
      rating: 4.3,
      reviewCount: 3456,
      platform: 'Amazon',
      valueScore: 0,
    }
  ],
  'tablet': [
    {
      id: '24',
      title: 'Apple iPad Pro 12.9-inch M2 (128GB) - Space Gray',
      price: 112900,
      originalPrice: 119900,
      url: 'https://amazon.in/ipad-pro-m2',
      imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
      rating: 4.7,
      reviewCount: 1543,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '25',
      title: 'Samsung Galaxy Tab S9 Ultra (256GB) - Graphite',
      price: 89999,
      originalPrice: 99999,
      url: 'https://flipkart.com/galaxy-tab-s9-ultra',
      imageUrl: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400',
      rating: 4.4,
      reviewCount: 876,
      platform: 'Flipkart',
      valueScore: 0,
    },
    {
      id: '26',
      title: 'Lenovo Tab P12 Pro (128GB) - Storm Grey',
      price: 45999,
      originalPrice: 59999,
      url: 'https://amazon.in/lenovo-tab-p12-pro',
      imageUrl: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400',
      rating: 4.1,
      reviewCount: 2345,
      platform: 'Amazon',
      valueScore: 0,
    }
  ],
  'smartwatch': [
    {
      id: '27',
      title: 'Apple Watch Series 9 GPS (45mm) - Midnight Aluminum',
      price: 45900,
      originalPrice: 49500,
      url: 'https://amazon.in/apple-watch-series-9',
      imageUrl: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400',
      rating: 4.6,
      reviewCount: 3421,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '28',
      title: 'Samsung Galaxy Watch6 Classic (47mm) - Black',
      price: 38999,
      originalPrice: 42999,
      url: 'https://flipkart.com/galaxy-watch6-classic',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      rating: 4.3,
      reviewCount: 1876,
      platform: 'Flipkart',
      valueScore: 0,
    },
    {
      id: '29',
      title: 'Amazfit GTR 4 Smart Watch - Steel Blue',
      price: 14999,
      originalPrice: 19999,
      url: 'https://amazon.in/amazfit-gtr-4',
      imageUrl: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400',
      rating: 4.2,
      reviewCount: 4567,
      platform: 'Amazon',
      valueScore: 0,
    }
  ],
  'camera': [
    {
      id: '30',
      title: 'Canon EOS R6 Mark II Mirrorless Camera Body',
      price: 189999,
      originalPrice: 199999,
      url: 'https://amazon.in/canon-eos-r6-mark-ii',
      imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400',
      rating: 4.8,
      reviewCount: 234,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '31',
      title: 'Sony Alpha A7IV Full Frame Mirrorless Camera',
      price: 234999,
      originalPrice: 249999,
      url: 'https://flipkart.com/sony-alpha-a7iv',
      imageUrl: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400',
      rating: 4.7,
      reviewCount: 156,
      platform: 'Flipkart',
      valueScore: 0,
    },
    {
      id: '32',
      title: 'Nikon D5600 DSLR Camera with 18-55mm Lens',
      price: 45990,
      originalPrice: 52990,
      url: 'https://amazon.in/nikon-d5600',
      imageUrl: 'https://images.unsplash.com/photo-1606983340077-bdc2c3d36df4?w=400',
      rating: 4.4,
      reviewCount: 1234,
      platform: 'Amazon',
      valueScore: 0,
    }
  ],
  'gaming': [
    {
      id: '33',
      title: 'PlayStation 5 Console (Standard Edition)',
      price: 54990,
      originalPrice: 59990,
      url: 'https://flipkart.com/playstation-5',
      imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
      rating: 4.9,
      reviewCount: 5678,
      platform: 'Flipkart',
      valueScore: 0,
    },
    {
      id: '34',
      title: 'Xbox Series X Gaming Console',
      price: 52990,
      originalPrice: 57990,
      url: 'https://amazon.in/xbox-series-x',
      imageUrl: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400',
      rating: 4.8,
      reviewCount: 4321,
      platform: 'Amazon',
      valueScore: 0,
    },
    {
      id: '35',
      title: 'Nintendo Switch OLED Model - White',
      price: 37999,
      originalPrice: 39999,
      url: 'https://flipkart.com/nintendo-switch-oled',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      rating: 4.6,
      reviewCount: 2890,
      platform: 'Flipkart',
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