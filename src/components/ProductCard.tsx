import { Star, ExternalLink, Award, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
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

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatReviews = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const platformColors = {
    Amazon: 'bg-platform-amazon text-white',
    Flipkart: 'bg-platform-flipkart text-white',
  };

  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      product.isTopRecommendation 
        ? 'ring-2 ring-success shadow-lg bg-gradient-to-br from-card to-success/5' 
        : 'hover:shadow-lg'
    }`}>
      {product.isTopRecommendation && (
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="bg-gradient-to-r from-success to-success/80 text-success-foreground px-4 py-2 text-sm font-semibold flex items-center gap-2">
            <Award className="h-4 w-4" />
            Best Deal!
          </div>
        </div>
      )}

      {discountPercentage > 0 && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-warning text-warning-foreground font-bold px-2 py-1">
            {discountPercentage}% OFF
          </Badge>
        </div>
      )}

      <CardContent className={`p-0 ${product.isTopRecommendation ? 'pt-12' : ''}`}>
        <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-muted/30 to-muted/50">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>

        <div className="p-5 space-y-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <Badge className={`${platformColors[product.platform]} text-xs shrink-0`}>
                {product.platform}
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-warning">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-medium text-sm">{product.rating}</span>
              </div>
              <span className="text-muted-foreground text-sm">
                ({formatReviews(product.reviewCount)} reviews)
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-success">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-success" />
              <span>Value Score: {product.valueScore.toFixed(1)}</span>
            </div>
          </div>

          <Button
            asChild
            className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              View Deal
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};