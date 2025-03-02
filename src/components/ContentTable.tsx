
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

interface ContentTableProps {
  type: string;
}

const ContentTable = ({ type }: ContentTableProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'good-name', label: `What is a Good ${type} Name?` },
    { id: 'how-to-use', label: 'How to Use the Generator' },
    { id: 'naming-traditions', label: `${type} Naming Traditions` },
    { id: 'popular-names', label: `Most Popular ${type} Names` }
  ];

  return (
    <div className="glass-panel p-6 mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-xl font-display font-bold text-white mb-4"
      >
        <span>Contents</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={section.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-white/70 hover:text-neon-blue cursor-pointer transition-colors duration-300 block py-1"
                onClick={() => setIsOpen(false)}
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentTable;
