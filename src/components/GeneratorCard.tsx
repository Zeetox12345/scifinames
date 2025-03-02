import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface GeneratorCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  to: string;
  color?: 'blue' | 'purple' | 'pink' | 'cyan' | 'red' | 'green';
  delay?: number;
}

const GeneratorCard = ({ 
  title, 
  description, 
  icon, 
  to,
  color = 'blue',
  delay = 0
}: GeneratorCardProps) => {
  
  const colorMap = {
    blue: 'neon-blue',
    purple: 'neon-purple',
    pink: 'neon-pink',
    cyan: 'neon-cyan',
    red: 'neon-red',
    green: 'neon-green',
  };
  
  const neonColor = colorMap[color];
  
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <Link 
      to={to}
      onClick={handleClick}
      className="glass-panel p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon group overflow-hidden h-full block"
      style={{ 
        animationDelay: `${delay}ms`, 
        animation: 'fade-in-up 0.6s ease-out forwards',
        opacity: 0
      }}
    >
      <div className="relative">
        {/* Glowing circle behind icon */}
        <div className={`absolute -top-2 -left-2 w-16 h-16 rounded-full bg-${neonColor}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Icon */}
        <div className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-lg bg-space-700 border border-space-600 text-${neonColor} mb-4 transition-all duration-300 group-hover:border-${neonColor}/50 group-hover:shadow-inner-glow`}>
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-display font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/70 mb-6">{description}</p>
      
      {/* Button styling at bottom of card */}
      <div className={`flex items-center justify-center font-medium text-sm text-${neonColor}/80 group-hover:text-${neonColor}`}>
        <span>Generate</span>
        <ArrowRight size={16} className="ml-2" />
      </div>
    </Link>
  );
};

export default GeneratorCard;
