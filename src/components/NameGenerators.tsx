import { Bot, User, Aperture, Cpu, Terminal, CircuitBoard, Cog, Leaf, Shield, Rocket } from 'lucide-react';
import GeneratorCard from './GeneratorCard';

const NameGenerators = () => {
  const generators = [
    {
      title: "Alien Name Generator",
      description: "Generate unique names for alien species from across the universe.",
      icon: <Aperture className="w-6 h-6" />,
      to: "/alien",
      color: "green",
    },
    {
      title: "Bionicle Name Generator",
      description: "Create powerful names for mechanical beings with organic elements.",
      icon: <Bot className="w-6 h-6" />,
      to: "/bionicle",
      color: "blue",
    },
    {
      title: "Chiss Name Generator",
      description: "Generate names for the blue-skinned, red-eyed humanoid species.",
      icon: <User className="w-6 h-6" />,
      to: "/chiss",
      color: "purple",
    },
    {
      title: "Clone Name Generator",
      description: "Create designations for clone troopers and other replicated entities.",
      icon: <Cpu className="w-6 h-6" />,
      to: "/clone",
      color: "cyan",
    },
    {
      title: "Cyberpunk Name Generator",
      description: "Generate names for hackers, street mercs, and other denizens of the neon future.",
      icon: <Terminal className="w-6 h-6" />,
      to: "/cyberpunk",
      color: "pink",
    },
    {
      title: "Cyborg Name Generator",
      description: "Create designations for human-machine hybrids and enhanced individuals.",
      icon: <CircuitBoard className="w-6 h-6" />,
      to: "/cyborg",
      color: "red",
    },
    {
      title: "Droid Name Generator",
      description: "Generate authentic droid designations and model numbers for your Star Wars universe.",
      icon: <Cog className="w-6 h-6" />,
      to: "/droid",
      color: "yellow",
    },
    {
      title: "Ewok Name Generator",
      description: "Create authentic-sounding names for the furry inhabitants of the forest moon of Endor.",
      icon: <Leaf className="w-6 h-6" />,
      to: "/ewok",
      color: "brown",
    },
    {
      title: "Hacker Name Generator",
      description: "Generate unique handles and pseudonyms for digital rebels and netrunners.",
      icon: <Terminal className="w-6 h-6" />,
      to: "/hacker",
      color: "green",
    },
    {
      title: "Mandalorian Name Generator",
      description: "Create authentic names for the warrior culture of Mandalore and its clans.",
      icon: <Shield className="w-6 h-6" />,
      to: "/mandalorian",
      color: "blue",
    },
    {
      title: "Mecha Name Generator",
      description: "Generate powerful names for giant robots, mechs, and mechanical combat suits.",
      icon: <Rocket className="w-6 h-6" />,
      to: "/mecha",
      color: "red",
    },
  ];
  
  return (
    <section id="generators" className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-12 text-center">
        <span className="text-neon-blue font-mono text-sm tracking-wider uppercase mb-2">Explore Generators</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Create Your <span className="text-gradient">Cosmic Identity</span>
        </h2>
        <p className="text-white/70 max-w-2xl">
          Choose from our specialized name generators to find the perfect designation for your sci-fi universe.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {generators.map((generator, index) => (
          <GeneratorCard
            key={index}
            title={generator.title}
            description={generator.description}
            icon={generator.icon}
            to={generator.to}
            color={generator.color as any}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default NameGenerators;
