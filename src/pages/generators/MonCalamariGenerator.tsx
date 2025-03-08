import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const MonCalamariGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Mon Calamari');
  
  // Set the document title and description for SEO
  const description = "Generate authentic Mon Calamari names from Star Wars lore. Our Mon Calamari Name Generator creates unique names for these amphibious species known for their ship-building expertise, tactical brilliance, and contributions to the Rebel Alliance. Perfect for Star Wars roleplaying games, fan fiction, or creating new characters.";
  useDocumentTitle('Mon Calamari Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Mon Calamari Name Generator"
      type="Mon Calamari"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/mon-calamari/mon-calamari1.jpg"
      image2="/generator-pictures/mon-calamari/mon-calamari2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">The Mon Calamari are an amphibious species from the Star Wars universe, native to the ocean planet of Mon Cala (also called Dac). Known for their exceptional shipbuilding skills, tactical brilliance, and strong sense of honor, the Mon Calamari played a crucial role in the Rebel Alliance, providing much-needed capital ships to the rebel fleet.</p>
        <p className="text-white/70 mb-4">Mon Calamari names often reflect their aquatic heritage and cultural values, with distinctive sounds and patterns. Our Mon Calamari Name Generator creates authentic-sounding names that fit perfectly within Star Wars lore while providing unique options for your characters.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Mon Calamari Name?</h2>
        <p className="text-white/70 mb-4">Mon Calamari names typically follow certain patterns that reflect their aquatic culture and heritage:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Often include liquid consonants like 'l', 'm', and 'r' that evoke flowing water</li>
          <li>Frequently feature short, abrupt syllables that might represent the splash of waves</li>
          <li>May include apostrophes to indicate glottal stops or unique pronunciations</li>
          <li>First names are typically 2-3 syllables</li>
          <li>Names often have a melodic quality when spoken aloud</li>
        </ul>
        <p className="text-white/70">Mon Calamari names should sound fluid yet dignified, reflecting their species' thoughtful, strategic nature and their deep connection to the oceans of their homeworld.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Mon Calamari Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated Mon Calamari names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your character's personality or role in your story. You might want to adjust spelling or combine elements from different generated names.</p>
        <p className="text-white/70">These names are perfect for Star Wars roleplaying games, fan fiction, or creating original characters within the Star Wars universe.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Mon Calamari Naming Traditions</h2>
        <p className="text-white/70 mb-4">Mon Calamari naming traditions reflect their aquatic culture and societal structure:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">First Names</h3>
          <p className="text-white/70">Mon Calamari first names often have a flowing quality with liquid consonants. Names like Ackbar, Raddus, and Gial exemplify this tradition.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Family Names</h3>
          <p className="text-white/70">Family names may indicate lineage, profession, or region of origin on Mon Cala. Some Mon Calamari use their first name as their primary identifier, with their family name used in formal situations.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Titles and Honorifics</h3>
          <p className="text-white/70">Mon Calamari society values leadership and service. Titles like "Admiral," "Captain," or "Councilor" may become closely associated with an individual's identity, sometimes even replacing their birth name in common usage.</p>
        </div>
        <p className="text-white/70">When creating a Mon Calamari character, consider their role in society, whether they're a shipbuilder, military leader, diplomat, or something else entirely, as this might influence their name or how they're addressed.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Notable Mon Calamari Characters</h2>
        <p className="text-white/70 mb-4">Several notable Mon Calamari characters have appeared in Star Wars canon and legends:</p>
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Canon Characters</h3>
          <ul className="text-white/70 space-y-2">
            <li><strong>Admiral Gial Ackbar</strong> - The most famous Mon Calamari, who led Rebel and Resistance fleets</li>
            <li><strong>Admiral Raddus</strong> - A military leader who participated in the Battle of Scarif</li>
            <li><strong>Captain Aftab Ackbar</strong> - Son of Gial Ackbar who served in the Resistance</li>
            <li><strong>Lee-Char</strong> - A young king of Mon Cala during the Clone Wars</li>
            <li><strong>Meena Tills</strong> - A Mon Calamari senator in the Galactic Republic</li>
            <li><strong>Kardue'sai'Malloc</strong> - A Mon Calamari seen in the Mos Eisley cantina</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Cultural Significance</h3>
          <p className="text-white/70 mb-4">The Mon Calamari culture has several distinctive features that influence their naming traditions:</p>
          <ul className="text-white/70 space-y-2">
            <li>Their homeworld Mon Cala is shared with the Quarren species, leading to cultural exchange</li>
            <li>They are renowned shipbuilders, creating the iconic Mon Calamari cruisers</li>
            <li>Their society values leadership, strategic thinking, and cooperation</li>
            <li>They have a strong tradition of democracy and representative government</li>
            <li>Their amphibious nature influences their perspective and cultural expressions</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Mon Calamari in the Rebellion</h3>
          <p className="text-white/70">The Mon Calamari made crucial contributions to the Rebel Alliance:</p>
          <ul className="text-white/70 space-y-1">
            <li>Provided essential capital ships to the Rebel fleet</li>
            <li>Admiral Ackbar served as the Supreme Commander of the Rebel Fleet</li>
            <li>Mon Calamari cruisers participated in the Battle of Endor</li>
            <li>Their engineering expertise helped maintain and repair Rebel vessels</li>
            <li>Many Mon Calamari served as officers, pilots, and crew in the Rebellion</li>
          </ul>
        </div>
        
        <p className="text-white/70">When creating a Mon Calamari character, consider their relationship with galactic politics and whether they served in military, diplomatic, or civilian roles during the various conflicts of the Star Wars saga.</p>
      </Element>
    </GeneratorPage>
  );
};

export default MonCalamariGenerator; 