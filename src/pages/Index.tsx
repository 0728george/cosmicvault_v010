import { Layout } from '@/components/Layout';
import { SearchBar } from '@/components/SearchBar';
import { CategoryCard } from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/books';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Globe } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/library?search=${encodeURIComponent(query)}`);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 cosmic-gradient opacity-50" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">100% Free & Open Access</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Explore the <span className="text-glow text-primary">Universe</span> of{' '}
              <span className="text-secondary">Knowledge</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover thousands of public domain books, articles, and documents. 
              From ancient philosophy to classic literature—all free to read and download.
            </p>
            
            <SearchBar 
              onSearch={handleSearch} 
              size="large"
              className="max-w-2xl mx-auto mb-8"
              placeholder="Search by title, author, or keyword..."
            />
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="xl" onClick={() => navigate('/library')}>
                Browse Library
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl" onClick={() => navigate('/about')}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">10,000+</h3>
              <p className="text-muted-foreground mt-1">Free Books</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">50,000+</h3>
              <p className="text-muted-foreground mt-1">Monthly Readers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">150+</h3>
              <p className="text-muted-foreground mt-1">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our collection organized by genre. From timeless classics to scientific treatises.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cosmic-gradient opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start Your Literary Journey
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of readers exploring the vast cosmos of public domain literature. 
              No sign-up required.
            </p>
            <Button variant="cosmic" size="xl" onClick={() => navigate('/library')}>
              Enter the Library
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
