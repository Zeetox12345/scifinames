
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NameGenerators from '@/components/NameGenerators';
import Footer from '@/components/Footer';
import StarfieldBackground from '@/components/StarfieldBackground';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <StarfieldBackground />
      <Header />
      <main className="flex-grow">
        <Hero />
        <NameGenerators />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
