import { Book } from '@/data/books';
import { cn } from '@/lib/utils';
import { FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BookCardProps {
  book: Book;
  view: 'grid' | 'list';
}

export function BookCard({ book, view }: BookCardProps) {
  if (view === 'list') {
    return (
      <Link
        to={`/book/${book.id}`}
        className="flex gap-4 p-4 bg-card rounded-xl border border-border card-glow transition-all hover:border-primary/30 group"
      >
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-20 h-28 object-cover rounded-lg flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
          <p className="text-sm text-muted-foreground/70 mt-2 line-clamp-2">{book.description}</p>
          <div className="flex items-center gap-4 mt-3">
            <span className="text-xs text-muted-foreground">{book.year > 0 ? book.year : `${Math.abs(book.year)} BC`}</span>
            <span className="text-xs text-muted-foreground">{book.pages} pages</span>
            <span className={cn(
              "text-xs px-2 py-0.5 rounded-full uppercase font-medium",
              book.format === 'pdf' 
                ? "bg-destructive/20 text-destructive" 
                : "bg-primary/20 text-primary"
            )}>
              {book.format}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/book/${book.id}`}
      className="group flex flex-col bg-card rounded-xl border border-border overflow-hidden card-glow transition-all hover:border-primary/30"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className={cn(
            "text-xs px-2 py-1 rounded-full uppercase font-medium inline-flex items-center gap-1",
            book.format === 'pdf' 
              ? "bg-destructive/80 text-destructive-foreground" 
              : "bg-primary/80 text-primary-foreground"
          )}>
            {book.format === 'pdf' ? <FileText className="w-3 h-3" /> : <BookOpen className="w-3 h-3" />}
            {book.format}
          </span>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm">
          {book.title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 truncate">{book.author}</p>
        <p className="text-xs text-muted-foreground/70 mt-auto pt-2">
          {book.year > 0 ? book.year : `${Math.abs(book.year)} BC`}
        </p>
      </div>
    </Link>
  );
}
