
import { useState, useEffect } from 'react';
import CustomButton from './ui/CustomButton';
import { RefreshCw } from 'lucide-react';

interface NameGeneratorProps {
  type: string;
  examples: string[];
}

const NameGenerator = ({ type, examples }: NameGeneratorProps) => {
  const [names, setNames] = useState<string[]>([]);
  
  // Function to generate random names
  const generateNames = () => {
    // In a real implementation, this would call an API or use a more sophisticated algorithm
    // For now, we'll just randomly select from our examples and make some variations
    const shuffled = [...examples].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    setNames(selected);
  };
  
  // Generate names on initial load
  useEffect(() => {
    generateNames();
  }, [type]);
  
  return (
    <div className="mt-8 mb-12">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <h3 className="text-2xl font-display font-bold text-white mb-4 sm:mb-0">Generated Names</h3>
        <CustomButton 
          onClick={generateNames} 
          variant="primary" 
          className="bg-gradient-to-r from-neon-blue to-neon-purple min-w-[150px]"
          icon={<RefreshCw className="w-4 h-4" />}
        >
          Generate New Names
        </CustomButton>
      </div>
      
      <div className="glass-panel p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {names.map((name, index) => (
          <div 
            key={index} 
            className="p-3 border border-space-600 rounded-lg bg-space-700/50 hover:bg-space-600/50 hover:border-neon-blue/30 transition-all duration-300"
          >
            <p className="text-lg font-mono text-white">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NameGenerator;
