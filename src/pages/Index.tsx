import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { ProductCard } from '@/components/ProductCard';
import { searchProducts, Product } from '@/data/mockProducts';
import { Zap, TrendingUp, Award, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-deals.jpg';

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      const results = await searchProducts(query);
      setProducts(results);
      
      toast({
        title: "Search Complete!",
        description: `Found ${results.length} deals across Amazon and Flipkart`,
      });
    } catch (error) {
      toast({
        title: "Search Failed",
        description: "Unable to fetch deals. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const topDeal = products.find(p => p.isTopRecommendation);
  const savings = topDeal?.originalPrice && topDeal.price 
    ? topDeal.originalPrice - topDeal.price 
    : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                Smart Deal Finder
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Find the Best Deals on
                <span className="bg-gradient-to-r from-success to-warning bg-clip-text text-transparent block mt-2">
                  Amazon & Flipkart
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Our AI-powered system compares prices, ratings, and reviews to find you the absolute best deals across platforms
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <SearchBar onSearch={handleSearch} isLoading={isLoading} />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <TrendingUp className="h-8 w-8 mx-auto text-success" />
                <div className="text-2xl font-bold">50M+</div>
                <div className="text-white/80">Products Compared</div>
              </div>
              <div className="text-center space-y-2">
                <Award className="h-8 w-8 mx-auto text-warning" />
                <div className="text-2xl font-bold">₹2.3Cr</div>
                <div className="text-white/80">Total Savings</div>
              </div>
              <div className="text-center space-y-2">
                <Users className="h-8 w-8 mx-auto text-success" />
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-white/80">Happy Shoppers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {hasSearched && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="text-center space-y-8">
                <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">Searching for the best deals...</h2>
                  <p className="text-muted-foreground">This may take a few seconds while we scan Amazon and Flipkart</p>
                </div>
              </div>
            ) : products.length > 0 ? (
              <div className="space-y-12">
                {/* Results Header */}
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold">
                    Found {products.length} Amazing Deals
                  </h2>
                  {topDeal && savings > 0 && (
                    <div className="inline-flex items-center gap-2 bg-success/10 text-success px-6 py-3 rounded-full font-semibold">
                      <Award className="h-5 w-5" />
                      Best Deal Saves You ₹{savings.toLocaleString('en-IN')}!
                    </div>
                  )}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* How It Works */}
                <div className="bg-muted/30 rounded-2xl p-8 mt-16">
                  <div className="text-center space-y-6">
                    <h3 className="text-2xl font-bold">How PriceWise Finds the Best Deals</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                          1
                        </div>
                        <h4 className="font-semibold">Smart Scanning</h4>
                        <p className="text-sm text-muted-foreground">
                          We scan millions of products across Amazon and Flipkart in real-time
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                          2
                        </div>
                        <h4 className="font-semibold">Value Scoring</h4>
                        <p className="text-sm text-muted-foreground">
                          Our AI calculates value scores based on price, ratings, and reviews
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                          3
                        </div>
                        <h4 className="font-semibold">Best Deals First</h4>
                        <p className="text-sm text-muted-foreground">
                          Results are ranked by value, showing you the absolute best deals first
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-semibold">No deals found</h2>
                <p className="text-muted-foreground">
                  Try searching for a different product or check your spelling
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;