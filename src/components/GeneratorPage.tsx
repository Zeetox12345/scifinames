
import { ReactNode } from 'react';
import { Element } from 'react-scroll';
import Header from './Header';
import Footer from './Footer';
import StarfieldBackground from './StarfieldBackground';
import ContentTable from './ContentTable';
import NameGenerator from './NameGenerator';

interface GeneratorPageProps {
  title: string;
  type: string;
  description: string;
  examples: string[];
  children: ReactNode;
  image1: string;
  image2: string;
}

const GeneratorPage = ({ title, type, description, examples, children, image1, image2 }: GeneratorPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <StarfieldBackground />
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">{title}</h1>
            <p className="text-white/70 text-lg mb-6 max-w-3xl">{description}</p>
            
            {/* Generator at the top for mobile users */}
            <NameGenerator type={type} examples={examples} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <aside className="lg:col-span-1">
              <ContentTable type={type} />
              
              <div className="glass-panel p-4 overflow-hidden rounded-xl mb-8">
                <img 
                  src={image1} 
                  alt={`${type} concept art`} 
                  className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </aside>
            
            <div className="lg:col-span-2">
              {children}
              
              <div className="glass-panel p-4 overflow-hidden rounded-xl my-8">
                <img 
                  src={image2} 
                  alt={`${type} illustration`} 
                  className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GeneratorPage;
