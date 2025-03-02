
import { useState, useEffect } from 'react';
import CustomButton from './ui/CustomButton';
import { RefreshCw, Copy, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface NameGeneratorProps {
  type: string;
  examples: string[];
}

const NameGenerator = ({ type, examples }: NameGeneratorProps) => {
  const [names, setNames] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();
  
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
  
  // Function to copy name to clipboard
  const copyToClipboard = (name: string, index: number) => {
    navigator.clipboard.writeText(name).then(() => {
      setCopiedIndex(index);
      
      toast({
        title: "Name copied!",
        description: `"${name}" has been copied to your clipboard.`,
        duration: 2000,
      });
      
      // Reset copy icon after 2 seconds
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    });
  };
  
  return (
    <div className="mt-8 mb-12">
      <div className="flex justify-center mb-6">
        <CustomButton 
          onClick={generateNames} 
          variant="primary" 
          className="bg-gradient-to-r from-neon-blue to-neon-purple min-w-[200px]"
          icon={<RefreshCw className="w-4 h-4" />}
        >
          Generate New Names
        </CustomButton>
      </div>
      
      <div className="glass-panel p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {names.map((name, index) => (
          <div 
            key={index} 
            className="p-3 border border-space-600 rounded-lg bg-space-700/50 hover:bg-space-600/50 hover:border-neon-blue/30 transition-all duration-300 flex justify-between items-center group cursor-pointer"
            onClick={() => copyToClipboard(name, index)}
          >
            <p className="text-lg font-mono text-white">{name}</p>
            <button 
              className="text-white/40 hover:text-neon-blue transition-colors duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Copy name"
            >
              {copiedIndex === index ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NameGenerator;
