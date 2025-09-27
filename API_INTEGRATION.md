# API Integration Guide

## Overview
Your React app now supports both real web scraping and mock data. It will automatically try to use your Python backend for real Amazon & Flipkart scraping, and fall back to demo data if the backend isn't available.

## Setup Instructions

### 1. Start Your Python Backend
You have two Python backend options. Choose one:

#### Option A: Combined Amazon + Flipkart Scraper (main.py)
```bash
cd /path/to/your/python/backend
pip install fastapi uvicorn requests beautifulsoup4 selenium webdriver-manager
python main.py
```

#### Option B: Amazon-only Scraper (main-2.py)  
```bash
cd /path/to/your/python/backend
pip install fastapi uvicorn playwright
playwright install chromium
python main-2.py
```

### 2. Configure API URL (Optional)
By default, the React app looks for your Python backend at `http://localhost:8000`.

To use a different URL, create a `.env.local` file in your React project root:
```
VITE_API_URL=http://your-custom-url:8000
```

### 3. Test the Integration
1. Start your Python backend
2. Open your React app
3. You should see "Live scraping enabled" status
4. Search for products - you'll get real results from Amazon/Flipkart!

## How It Works

### Frontend Features
- **API Status Indicator**: Shows whether live scraping is available
- **Automatic Fallback**: Uses demo data if your Python backend is offline
- **Real-time Results**: Displays actual products from Amazon and Flipkart
- **Value Scoring**: Ranks products by best deals (price, ratings, reviews)

### Backend Endpoints
Your Python backend should provide:
- **GET /scrape?product={query}** - Returns combined Amazon + Flipkart results
- **Response format**:
```json
{
  "results": [
    {
      "source": "Amazon",
      "title": "Product Name",
      "price": 1299,
      "url": "https://amazon.in/...",
      "img": "https://image-url...",
      "rating": 4.5,
      "reviewCount": 1234
    }
  ]
}
```

## Troubleshooting

### "Using demo data" message
- Your Python backend isn't running or isn't accessible
- Check that the backend is running on the correct port
- Verify the API URL in your environment variables

### No results from scraping
- Website structure may have changed (update your CSS selectors)
- Rate limiting from Amazon/Flipkart (add delays between requests)
- Anti-bot measures (update user agents, use proxy rotation)

### CORS errors
- Ensure your Python backend has CORS middleware configured
- Check that your React app URL is in the allowed origins

## Next Steps
1. **Deploy your Python backend** to a cloud service (Heroku, Railway, etc.)
2. **Update environment variables** to point to your deployed backend
3. **Add error handling** for specific scraping failures
4. **Implement caching** to avoid repeated scraping of the same products