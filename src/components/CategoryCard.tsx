import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    icon: string;
    count: number;
  };
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/library?category=${category.id}`}
      className="group flex flex-col items-center p-6 bg-card rounded-xl border border-border card-glow transition-all hover:border-primary/30 hover:scale-105"
    >
      <span className="text-4xl mb-3 group-hover:animate-float">{category.icon}</span>
      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-center">
        {category.name}
      </h3>
      <p className="text-sm text-muted-foreground mt-1">{category.count} books</p>
    </Link>
  );
}
