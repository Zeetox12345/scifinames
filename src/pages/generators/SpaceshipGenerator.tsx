import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const SpaceshipGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Spaceship');
  
  // Set the document title and description for SEO
  const description = "Generate creative and memorable spaceship names for your sci-fi adventures. Our Spaceship Name Generator creates unique names for vessels of all types, from nimble fighters to massive capital ships. Perfect for sci-fi writing, gaming, or worldbuilding projects.";
  useDocumentTitle('Spaceship Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Spaceship Name Generator"
      type="Spaceship"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/spaceship/spaceship1.jpg"
      image2="/generator-pictures/spaceship/spaceship2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Spaceships are the iconic vessels that carry characters across the stars in science fiction. From small, agile fighters to massive capital ships and everything in between, these vessels are often as memorable as the characters who pilot them. A great spaceship name can instantly convey the vessel's purpose, history, or the personality of its crew.</p>
        <p className="text-white/70 mb-4">Our Spaceship Name Generator creates unique, evocative names for vessels of all types and sizes. Whether you need a name for a personal transport, a military vessel, or a legendary flagship, our generator will provide options that feel authentic and memorable.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Spaceship Name?</h2>
        <p className="text-white/70 mb-4">Effective spaceship names often share certain characteristics:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Convey something about the ship's purpose or capabilities</li>
          <li>Reflect the personality or values of the owner or crew</li>
          <li>May include prefixes that denote military rank or classification</li>
          <li>Often incorporate concepts of speed, power, exploration, or freedom</li>
          <li>Can reference mythological figures, historical vessels, or natural phenomena</li>
        </ul>
        <p className="text-white/70">The best spaceship names are memorable and evocative, giving an immediate sense of the vessel's character. Think of iconic ships like the Millennium Falcon, Enterprise, or Serenity - each name instantly conjures an image and feeling that matches the ship's role in its story.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Spaceship Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated spaceship names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your ship's role or your story's setting. You might want to add prefixes like "USS" or "HMSS" for military vessels, or combine elements from different generated names.</p>
        <p className="text-white/70">These names are perfect for science fiction writing, roleplaying games, video games, or any creative project that involves spaceships.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Spaceship Naming Traditions</h2>
        <p className="text-white/70 mb-4">Different types of spaceships often follow different naming conventions:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Military Vessels</h3>
          <p className="text-white/70">Military ships often include prefixes (USS, HMSS, ISD) and are frequently named after:</p>
          <ul className="text-white/70 space-y-1">
            <li>Historical battles or victories (Lexington, Victory, Intrepid)</li>
            <li>Virtues or ideals (Courage, Justice, Liberty)</li>
            <li>Powerful natural phenomena (Thunder, Tempest, Avalanche)</li>
            <li>Predatory animals (Tiger, Raptor, Shark)</li>
          </ul>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Civilian and Personal Ships</h3>
          <p className="text-white/70">Civilian vessels often have more personal or whimsical names that might reflect:</p>
          <ul className="text-white/70 space-y-1">
            <li>The owner's personality or aspirations (Second Chance, Dream Chaser)</li>
            <li>Ironic or humorous observations (Rusty Bucket, Flying Brick)</li>
            <li>Literary or cultural references (Rocinante, Serenity)</li>
            <li>Personal connections or memories (Lady Luck, Hometown)</li>
          </ul>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Exploration Vessels</h3>
          <p className="text-white/70">Ships designed for exploration often have names that evoke:</p>
          <ul className="text-white/70 space-y-1">
            <li>Discovery and curiosity (Pathfinder, Horizon, Discovery)</li>
            <li>Scientific concepts (Quantum, Parallax, Helix)</li>
            <li>Astronomical objects (Nova, Polaris, Celestial)</li>
            <li>Historical explorers or scientists (Magellan, Darwin, Hubble)</li>
          </ul>
        </div>
        <p className="text-white/70">When naming your spaceship, consider its primary purpose, who built it, and who operates it. A military cruiser will likely have a very different name than a smuggler's freighter or a scientific research vessel.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Iconic Spaceship Names</h2>
        <p className="text-white/70 mb-4">Science fiction is filled with memorable spacecraft that have become cultural icons:</p>
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Famous Fictional Spaceships</h3>
          <ul className="text-white/70 space-y-2">
            <li><strong>Millennium Falcon</strong> - Han Solo's iconic freighter from Star Wars</li>
            <li><strong>USS Enterprise</strong> - The flagship vessel from Star Trek</li>
            <li><strong>Serenity</strong> - The Firefly-class transport ship from the show of the same name</li>
            <li><strong>Nostromo</strong> - The commercial towing vessel from Alien</li>
            <li><strong>Battlestar Galactica</strong> - The military carrier and last defense of humanity</li>
            <li><strong>Rocinante</strong> - The converted Martian gunship from The Expanse</li>
            <li><strong>Heart of Gold</strong> - The improbability drive ship from The Hitchhiker's Guide to the Galaxy</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Ship Classes and Types</h3>
          <p className="text-white/70 mb-4">Different types of spaceships serve different functions:</p>
          <ul className="text-white/70 space-y-2">
            <li><strong>Fighters</strong> - Small, agile combat craft designed for dogfighting</li>
            <li><strong>Frigates</strong> - Medium-sized warships that balance firepower and maneuverability</li>
            <li><strong>Cruisers</strong> - Large warships designed for independent operations</li>
            <li><strong>Dreadnoughts</strong> - Massive battleships with heavy armaments</li>
            <li><strong>Carriers</strong> - Large vessels designed to transport and launch smaller craft</li>
            <li><strong>Freighters</strong> - Cargo ships designed to transport goods</li>
            <li><strong>Explorers</strong> - Ships equipped for long-range exploration and scientific research</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Naming Inspiration</h3>
          <p className="text-white/70">When creating your own spaceship name, consider drawing inspiration from:</p>
          <ul className="text-white/70 space-y-1">
            <li><strong>Mythology</strong> - Gods, heroes, and legendary creatures (Phoenix, Pegasus, Valkyrie)</li>
            <li><strong>Astronomy</strong> - Stars, constellations, and celestial phenomena (Orion, Polaris, Eclipse)</li>
            <li><strong>Nature</strong> - Animals, weather, and natural features (Falcon, Tempest, Mountain)</li>
            <li><strong>Emotions</strong> - Feelings and states of mind (Serenity, Defiance, Vengeance)</li>
            <li><strong>Languages</strong> - Words from other languages that have powerful meanings or sounds</li>
          </ul>
        </div>
        
        <p className="text-white/70">Remember that the best spaceship names often tell a story or create an immediate impression. Whether you're naming a massive battleship or a small personal transport, the right name can make your vessel memorable and meaningful.</p>
      </Element>
    </GeneratorPage>
  );
};

export default SpaceshipGenerator; 