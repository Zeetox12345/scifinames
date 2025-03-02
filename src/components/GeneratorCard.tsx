
import { ReactNode } from 'react';
import CustomButton from './ui/CustomButton';
import { ArrowRight } from 'lucide-react';

interface GeneratorCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  to: string;
  color?: 'blue' | 'purple' | 'pink' | 'cyan' | 'red';
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
  };
  
  const neonColor = colorMap[color];
  
  return (
    <div 
      className="glass-panel p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-neon group overflow-hidden h-full"
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
      
      {/* Button */}
      <CustomButton 
        to={to} 
        variant="outline" 
        size="sm"
        className={`w-full justify-center border-${neonColor}/30 hover:border-${neonColor}/80 hover:text-${neonColor}`}
        icon={<ArrowRight size={16} />}
        iconPosition="right"
      >
        Generate
      </CustomButton>
    </div>
  );
};

export default GeneratorCard;
