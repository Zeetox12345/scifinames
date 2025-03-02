import { useEffect, useRef } from 'react';
import CustomButton from './ui/CustomButton';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Generate random particles
    const container = particlesRef.current;
    if (!container) return;
    
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Create particles
    const particleCount = Math.min(40, Math.floor((containerWidth * containerHeight) / 15000));
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Random size (weighted towards smaller particles)
      const sizeRandom = Math.random();
      const size = sizeRandom < 0.7 ? 1 + sizeRandom : 2 + sizeRandom;
      
      // Random opacity
      const opacity = 0.1 + Math.random() * 0.5;
      
      // Random animation delay
      const animDelay = Math.random() * 5;
      
      // Random animation duration
      const animDuration = 3 + Math.random() * 7;
      
      // Set properties
      particle.style.position = 'absolute';
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = opacity.toString();
      particle.style.animation = `twinkle ${animDuration}s ease-in-out ${animDelay}s infinite`;
      
      // 80% are white, 10% are blue, 10% are purple
      const colorRandom = Math.random();
      if (colorRandom < 0.8) {
        particle.style.backgroundColor = 'white';
      } else if (colorRandom < 0.9) {
        particle.style.backgroundColor = '#0EA5E9'; // neon-blue
      } else {
        particle.style.backgroundColor = '#8B5CF6'; // neon-purple
      }
      
      particle.className = 'rounded-full absolute';
      container.appendChild(particle);
    }
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Particles container */}
      <div 
        ref={particlesRef}
        className="absolute inset-0 z-0 overflow-hidden opacity-70"
      ></div>
      
      {/* Radial gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[800px] h-[800px] -left-[200px] -top-[200px] rounded-full bg-neon-blue/5 blur-[100px]"></div>
        <div className="absolute w-[600px] h-[600px] -right-[100px] top-[20%] rounded-full bg-neon-purple/5 blur-[80px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-space-700 border border-space-600 mb-6 animate-fade-in-up">
            <Sparkles size={16} className="text-neon-blue mr-2" />
            <span className="text-white/80 text-sm">Your Gateway to Infinite Galactic Identities</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Discover Your Perfect
            <br />
            <span className="text-gradient">Sci-Fi Name</span>
          </h1>
          
          <p className="text-lg text-white/70 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Generate unique and compelling names for characters, ships, planets, and more. 
            From space explorers to alien species, find the perfect name for your sci-fi universe.
          </p>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <a 
              href="#generators" 
              className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-neon text-base px-6 py-3"
            >
              Explore All Generators
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space-800 to-transparent"></div>
    </section>
  );
};

export default Hero;
