import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { books } from '@/data/books';
import { ArrowLeft, Download, BookOpen, FileText, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const BookReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === id);
  
  const [isReading, setIsReading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    if (!book) {
      navigate('/library');
    }
  }, [book, navigate]);

  if (!book) {
    return null;
  }

  const totalPages = book.pages;

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(200, prev + 25));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(50, prev - 25));
  };

  if (isReading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Reader Header */}
        <header className="h-14 bg-card border-b border-border flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => setIsReading(false)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <span className="text-sm text-muted-foreground hidden sm:block">
              {book.title}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleZoomOut}>
              <ZoomOut className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground w-12 text-center">{zoom}%</span>
            <Button variant="ghost" size="icon" onClick={handleZoomIn}>
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>
        </header>

        {/* Reader Content */}
        <div className="flex-1 overflow-auto bg-muted/50 p-4 md:p-8">
          <div 
            className="max-w-4xl mx-auto bg-card rounded-lg shadow-xl p-8 md:p-12 min-h-[70vh]"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
          >
            {/* Simulated book content */}
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display text-2xl text-foreground mb-6">
                {book.title}
              </h2>
              <p className="text-muted-foreground italic mb-8">by {book.author}</p>
              
              <div className="text-foreground/90 space-y-4">
                <p>
                  This is a preview of "{book.title}" by {book.author}. 
                  In a full implementation, the actual {book.format.toUpperCase()} content would be rendered here.
                </p>
                <p>
                  The book contains {book.pages} pages of rich content exploring themes of 
                  {book.category === 'philosophy' && ' wisdom, ethics, and the nature of existence.'}
                  {book.category === 'fiction' && ' human nature, society, and storytelling.'}
                  {book.category === 'horror' && ' fear, the unknown, and the dark corners of imagination.'}
                  {book.category === 'romance' && ' love, relationships, and the human heart.'}
                  {book.category === 'mystery' && ' intrigue, deduction, and solving the unsolvable.'}
                  {book.category === 'science' && ' discovery, natural laws, and understanding our world.'}
                  {book.category === 'mythology' && ' gods, heroes, and timeless legends.'}
                  {book.category === 'children' && ' wonder, imagination, and youthful adventure.'}
                  {book.category === 'drama' && ' conflict, emotion, and the human condition.'}
                  {!['philosophy', 'fiction', 'horror', 'romance', 'mystery', 'science', 'mythology', 'children', 'drama'].includes(book.category) && ' fascinating topics and ideas.'}
                </p>
                <p>
                  Published in {book.year > 0 ? book.year : `${Math.abs(book.year)} BC`}, 
                  this work has stood the test of time and continues to inspire readers around the world.
                </p>
                <p className="text-muted-foreground text-sm mt-8">
                  [Page {currentPage} of {totalPages}]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reader Footer */}
        <footer className="h-16 bg-card border-t border-border flex items-center justify-center gap-4 px-4">
          <Button variant="ghost" size="icon" onClick={handlePrevPage} disabled={currentPage === 1}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button variant="ghost" size="icon" onClick={handleNextPage} disabled={currentPage === totalPages}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </footer>
      </div>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/library')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Library
        </Button>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Book Cover */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-[3/4] rounded-xl overflow-hidden card-glow">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="hero" size="lg" className="w-full" onClick={() => setIsReading(true)}>
                  {book.format === 'pdf' ? <FileText className="w-5 h-5 mr-2" /> : <BookOpen className="w-5 h-5 mr-2" />}
                  Read Now
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Download className="w-5 h-5 mr-2" />
                  Download {book.format.toUpperCase()}
                </Button>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="md:col-span-2">
            <span className={cn(
              "text-xs px-3 py-1 rounded-full uppercase font-medium inline-block mb-4",
              book.format === 'pdf' 
                ? "bg-destructive/20 text-destructive" 
                : "bg-primary/20 text-primary"
            )}>
              {book.format}
            </span>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              {book.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">by {book.author}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 bg-muted rounded-lg">
                <span className="text-xs text-muted-foreground block">Published</span>
                <span className="text-sm font-medium text-foreground">
                  {book.year > 0 ? book.year : `${Math.abs(book.year)} BC`}
                </span>
              </div>
              <div className="px-4 py-2 bg-muted rounded-lg">
                <span className="text-xs text-muted-foreground block">Pages</span>
                <span className="text-sm font-medium text-foreground">{book.pages}</span>
              </div>
              <div className="px-4 py-2 bg-muted rounded-lg">
                <span className="text-xs text-muted-foreground block">Category</span>
                <span className="text-sm font-medium text-foreground capitalize">{book.category}</span>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 mb-8">
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                About this book
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {book.description}
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="font-display font-semibold text-foreground mb-2">
                Public Domain Notice
              </h3>
              <p className="text-sm text-muted-foreground">
                This work is in the public domain and free of known copyright restrictions. 
                You may copy, modify, and distribute this work, even for commercial purposes, 
                without asking permission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookReader;
