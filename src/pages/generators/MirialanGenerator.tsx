import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const MirialanGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Mirialan');
  
  // Set the document title and description for SEO
  const description = "Generate authentic Mirialan names from Star Wars lore. Our Mirialan Name Generator creates unique names for these near-human species known for their green skin, facial tattoos, and strong connection to the Force. Perfect for Star Wars roleplaying games, fan fiction, or creating new characters.";
  useDocumentTitle('Mirialan Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Mirialan Name Generator"
      type="Mirialan"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/mirialan/mirialan1.jpg"
      image2="/generator-pictures/mirialan/mirialan2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">The Mirialans are a near-human species from the Star Wars universe, native to the planet Mirial. They are easily recognized by their green-yellow skin tones and distinctive geometric facial tattoos that mark significant life achievements. Mirialans are known for their deep spirituality and strong connection to the Force, with many becoming Jedi Knights throughout galactic history.</p>
        <p className="text-white/70 mb-4">Mirialan names often reflect their disciplined, spiritual culture with distinctive sounds and patterns. Our Mirialan Name Generator creates authentic-sounding names that fit perfectly within Star Wars lore while providing unique options for your characters.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Mirialan Name?</h2>
        <p className="text-white/70 mb-4">Mirialan names typically follow certain patterns that reflect their culture and spiritual heritage:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Often include soft consonants balanced with strong vowel sounds</li>
          <li>May feature doubled consonants (like "ss" or "rr")</li>
          <li>First names are typically 2-3 syllables</li>
          <li>Surnames tend to be shorter, often just one syllable</li>
          <li>Names may reflect virtues important in Mirialan culture like discipline, patience, or spiritual awareness</li>
        </ul>
        <p className="text-white/70">Mirialan names should sound graceful yet strong, reflecting their species' disciplined nature and spiritual connection to the Force.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Mirialan Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated Mirialan names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your character's personality or role in your story. You might want to adjust spelling or combine elements from different generated names.</p>
        <p className="text-white/70">These names are perfect for Star Wars roleplaying games, fan fiction, or creating original characters within the Star Wars universe.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Mirialan Naming Traditions</h2>
        <p className="text-white/70 mb-4">Mirialan naming traditions reflect their disciplined culture and spiritual beliefs:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">First Names</h3>
          <p className="text-white/70">Mirialan first names often have a flowing quality with a balance of soft and strong sounds. Names like Barriss, Luminara, and Teela exemplify this tradition.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Family Names</h3>
          <p className="text-white/70">Family names tend to be shorter and more direct, often just one syllable. Examples include Offee (as in Barriss Offee) and Unduli (as in Luminara Unduli).</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Tattoo Traditions</h3>
          <p className="text-white/70">While not directly related to naming, Mirialan facial tattoos are an important part of their identity. Each geometric pattern represents achievements and life milestones. A Mirialan's name and their tattoos together form their complete identity in their culture.</p>
        </div>
        <p className="text-white/70">When creating a Mirialan character, consider how their name might reflect their personal achievements, spiritual journey, or family traditions.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Notable Mirialan Characters</h2>
        <p className="text-white/70 mb-4">Several notable Mirialan characters have appeared in Star Wars canon and legends:</p>
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Canon Characters</h3>
          <ul className="text-white/70 space-y-2">
            <li><strong>Luminara Unduli</strong> - A wise and powerful Jedi Master who served during the Clone Wars</li>
            <li><strong>Barriss Offee</strong> - Luminara's Padawan who later became disillusioned with the Jedi Order</li>
            <li><strong>Teela Kaarz</strong> - A Mirialan prisoner forced to work on the Death Star construction</li>
            <li><strong>Seventh Sister</strong> - A Mirialan Inquisitor who hunted Jedi after Order 66</li>
            <li><strong>Arindha Shanjen</strong> - A Mirialan Jedi Master who served on the Jedi Council</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Cultural Significance</h3>
          <p className="text-white/70 mb-4">The Mirialan culture has several distinctive features that influence their naming traditions:</p>
          <ul className="text-white/70 space-y-2">
            <li>Their homeworld Mirial is a harsh, cold planet that shaped their disciplined approach to life</li>
            <li>Mirialans believe strongly in fate and that one's actions contribute to their destiny</li>
            <li>Their geometric tattoos represent achievements and life milestones</li>
            <li>Many Mirialans are naturally Force-sensitive, with a significant number becoming Jedi</li>
            <li>They value discipline, patience, and spiritual growth</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Mirialan Jedi</h3>
          <p className="text-white/70">Mirialans have a strong tradition of Force sensitivity, with many joining the Jedi Order. Notable Mirialan Jedi include:</p>
          <ul className="text-white/70 space-y-1">
            <li>Luminara Unduli - Jedi Master during the Clone Wars</li>
            <li>Barriss Offee - Jedi Padawan and later Knight</li>
            <li>Arindha Shanjen - Jedi Council member</li>
            <li>Teela Kaarz - Jedi Knight (in some Legends material)</li>
          </ul>
        </div>
        
        <p className="text-white/70">When creating a Mirialan character, consider their relationship with the Force and how that might influence their role in your story, whether they're a Jedi, a Force-sensitive civilian, or someone with no connection to the Force at all.</p>
      </Element>
    </GeneratorPage>
  );
};

export default MirialanGenerator; 