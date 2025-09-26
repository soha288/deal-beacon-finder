import { useState } from 'react';
import { Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with query:', query);
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Input change detected:', e.target.value);
    setQuery(e.target.value);
  };

  const handleInputFocus = () => {
    console.log('Input focused');
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for products (e.g., iPhone, laptop, headphones...)"
            value={query}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="pl-12 pr-4 h-14 text-lg border-2 transition-all duration-300 focus:shadow-lg focus-visible:ring-2 focus-visible:ring-primary"
            disabled={isLoading}
            autoComplete="off"
            autoFocus={false}
          />
        </div>
        <Button 
          type="submit" 
          size="lg"
          disabled={isLoading || !query.trim()}
          className="px-8 py-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Searching...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Find Deals
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};