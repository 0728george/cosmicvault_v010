import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Heart, Globe, Mail, Send } from 'lucide-react';

const About = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">CosmicLibrary</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe that knowledge should be free and accessible to everyone. 
            Our mission is to preserve and share humanity's literary heritage.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card rounded-2xl border border-border p-8 card-glow">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Preserve Knowledge
            </h3>
            <p className="text-muted-foreground">
              We curate and digitize public domain works to ensure timeless literature 
              remains accessible for generations to come.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 card-glow">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Free Forever
            </h3>
            <p className="text-muted-foreground">
              Every book in our library is copyright-free and available to read, 
              download, and share at no cost whatsoever.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 card-glow">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Global Access
            </h3>
            <p className="text-muted-foreground">
              Our platform is designed to be accessible worldwide, breaking down barriers 
              to education and literature.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
            Our Story
          </h2>
          <div className="prose prose-invert mx-auto">
            <p className="text-muted-foreground mb-4">
              CosmicLibrary was founded with a simple yet powerful vision: to create a 
              universal digital library where anyone, anywhere, can access the world's 
              greatest literary works without barriers.
            </p>
            <p className="text-muted-foreground mb-4">
              We focus exclusively on public domain and copyright-free content, including 
              classic novels, philosophical treatises, scientific papers, poetry collections, 
              and historical documents. These works have shaped human thought and culture, 
              and we believe they should remain freely available to all.
            </p>
            <p className="text-muted-foreground">
              Our team is dedicated to providing a seamless reading experience with our 
              built-in PDF and EPUB readers, ensuring you can enjoy these timeless works 
              on any device, anywhere in the universe.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                Have questions, suggestions, or want to contribute? We'd love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="bg-muted border-border"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-muted border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-muted border-border resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
