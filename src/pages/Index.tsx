import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NameGenerators from '@/components/NameGenerators';
import Footer from '@/components/Footer';
import StarfieldBackground from '@/components/StarfieldBackground';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const Index = () => {
  const location = useLocation();
  const generatorsRef = useRef<HTMLDivElement>(null);
  
  // Set an amazing meta title and description for the landing page
  const description = "Discover our vast collection of 10,000+ unqiue sci-fi names in each of our 100+ generators for all your creative needs. Generate unique names for aliens, cyborgs, clones, and more from across the galaxy. Perfect for writers, gamers, and worldbuilders.";
  useDocumentTitle('Sci-Fi Name Generators | 10,000+ Unique Names For Your Universe', description);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if we should scroll to generators section
    if (location.state && location.state.scrollToGenerators) {
      setTimeout(() => {
        generatorsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col">
      <StarfieldBackground />
      <Header />
      <main className="flex-grow">
        <Hero />
        <div ref={generatorsRef}>
          <NameGenerators />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
