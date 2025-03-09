import { Bot, User, Aperture, Cpu, Terminal, CircuitBoard, Cog, Leaf, Shield, Rocket, Eye, Palette, Fish, Swords, Globe, Zap, Skull, Sword, Ship, Clock, Flame, Truck, Footprints, Landmark } from 'lucide-react';
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
    {
      title: "Miraluka Name Generator",
      description: "Create names for the eyeless Force-sensitive near-humans from Star Wars.",
      icon: <Eye className="w-6 h-6" />,
      to: "/miraluka",
      color: "purple",
    },
    {
      title: "Mirialan Name Generator",
      description: "Generate names for the green-skinned, tattooed near-humans with Force affinity.",
      icon: <Palette className="w-6 h-6" />,
      to: "/mirialan",
      color: "green",
    },
    {
      title: "Mon Calamari Name Generator",
      description: "Create names for the amphibious species known for their shipbuilding expertise.",
      icon: <Fish className="w-6 h-6" />,
      to: "/mon-calamari",
      color: "blue",
    },
    {
      title: "Pacific Rim Name Generator",
      description: "Generate epic names for Jaegers and Kaiju from the Pacific Rim universe.",
      icon: <Swords className="w-6 h-6" />,
      to: "/pacific-rim",
      color: "cyan",
    },
    {
      title: "Planet Name Generator",
      description: "Create unique and evocative names for planets, moons, and celestial bodies.",
      icon: <Globe className="w-6 h-6" />,
      to: "/planet",
      color: "blue",
    },
    {
      title: "Robot Name Generator",
      description: "Generate distinctive designations for robots, AI entities, and synthetic beings.",
      icon: <Zap className="w-6 h-6" />,
      to: "/robot",
      color: "yellow",
    },
    {
      title: "Rodian Name Generator",
      description: "Create authentic names for the green-skinned hunters known for their distinctive snouts.",
      icon: <Skull className="w-6 h-6" />,
      to: "/rodian",
      color: "green",
    },
    {
      title: "Sith Name Generator",
      description: "Generate powerful names for dark side Force users with a penchant for red lightsabers.",
      icon: <Sword className="w-6 h-6" />,
      to: "/sith",
      color: "red",
    },
    {
      title: "Spaceship Name Generator",
      description: "Create memorable names for vessels of all types, from nimble fighters to massive capital ships.",
      icon: <Ship className="w-6 h-6" />,
      to: "/spaceship",
      color: "blue",
    },
    {
      title: "Steampunk Name Generator",
      description: "Generate Victorian-inspired names for characters in brass-and-steam alternate realities.",
      icon: <Clock className="w-6 h-6" />,
      to: "/steampunk",
      color: "brown",
    },
    {
      title: "Togruta Name Generator",
      description: "Create authentic names for the colorful, montrals-bearing humanoids from Star Wars.",
      icon: <Flame className="w-6 h-6" />,
      to: "/togruta",
      color: "orange",
    },
    {
      title: "Transformers Name Generator",
      description: "Generate distinctive names for Autobots, Decepticons, and other robots in disguise.",
      icon: <Truck className="w-6 h-6" />,
      to: "/transformers",
      color: "yellow",
    },
    {
      title: "Wookiee Name Generator",
      description: "Create authentic names for the tall, furry warriors from Kashyyyk known for their strength.",
      icon: <Footprints className="w-6 h-6" />,
      to: "/wookiee",
      color: "brown",
    },
    {
      title: "Zabrak Name Generator",
      description: "Generate names for the horned humanoids known for their resilience and facial tattoos.",
      icon: <Landmark className="w-6 h-6" />,
      to: "/zabrak",
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
