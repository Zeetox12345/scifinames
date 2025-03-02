
import { Rocket, Satellite, Star, Atom, CircuitBoard, Binary } from 'lucide-react';
import GeneratorCard from './GeneratorCard';

const NameGenerators = () => {
  const generators = [
    {
      title: "Starship Names",
      description: "Generate epic names for interstellar vessels, from mighty battleships to swift explorers.",
      icon: <Rocket className="w-6 h-6" />,
      to: "/generator/starship",
      color: "blue",
    },
    {
      title: "Alien Species",
      description: "Create unique names for alien civilizations from across the galaxies.",
      icon: <Atom className="w-6 h-6" />,
      to: "/generator/alien",
      color: "purple",
    },
    {
      title: "Space Stations",
      description: "Name your orbital habitats, from military outposts to civilian hubs.",
      icon: <Satellite className="w-6 h-6" />,
      to: "/generator/station",
      color: "cyan",
    },
    {
      title: "Galactic Empires",
      description: "Generate names for vast interstellar civilizations and their domains.",
      icon: <Star className="w-6 h-6" />,
      to: "/generator/empire",
      color: "red",
    },
    {
      title: "AI Entities",
      description: "Create designations for artificial intelligences, from ship computers to androids.",
      icon: <CircuitBoard className="w-6 h-6" />,
      to: "/generator/ai",
      color: "pink",
    },
    {
      title: "Space Colonies",
      description: "Name planetary settlements and frontier outposts across the stars.",
      icon: <Binary className="w-6 h-6" />,
      to: "/generator/colony",
      color: "blue",
    },
  ];
  
  return (
    <section className="container mx-auto px-4 py-16">
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
