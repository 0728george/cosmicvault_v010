import { Search } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  size?: 'default' | 'large';
}

export function SearchBar({ onSearch, placeholder = "Search books, authors...", className, size = 'default' }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative w-full", className)}>
      <div className={cn(
        "relative flex items-center bg-muted rounded-xl border border-border transition-all duration-300 focus-within:border-primary focus-within:glow-primary",
        size === 'large' ? 'h-14' : 'h-11'
      )}>
        <Search className={cn(
          "absolute left-4 text-muted-foreground",
          size === 'large' ? 'w-5 h-5' : 'w-4 h-4'
        )} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full h-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground",
            size === 'large' ? 'pl-12 pr-4 text-base' : 'pl-10 pr-4 text-sm'
          )}
        />
        <button
          type="submit"
          className={cn(
            "absolute right-2 bg-primary text-primary-foreground font-medium rounded-lg transition-all hover:bg-primary/90",
            size === 'large' ? 'px-6 py-2 text-sm' : 'px-4 py-1.5 text-xs'
          )}
        >
          Search
        </button>
      </div>
    </form>
  );
}
