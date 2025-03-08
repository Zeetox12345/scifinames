import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const MiralukaGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Miraluka');
  
  // Set the document title and description for SEO
  const description = "Generate authentic Miraluka names from Star Wars lore. Our Miraluka Name Generator creates unique names for these Force-sensitive near-humans known for their lack of eyes and deep connection to the Force. Perfect for Star Wars roleplaying games, fan fiction, or creating new characters.";
  useDocumentTitle('Miraluka Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Miraluka Name Generator"
      type="Miraluka"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/miraluka/miraluka1.jpg"
      image2="/generator-pictures/miraluka/miraluka2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">The Miraluka are a fascinating near-human species from the Star Wars universe, distinguished by their lack of eyes and their deep connection to the Force. Having evolved on a world with little to no light, the Miraluka developed the ability to "see" through the Force, perceiving their surroundings through Force sight rather than visual perception.</p>
        <p className="text-white/70 mb-4">Miraluka names often reflect their spiritual and Force-sensitive nature, with melodic sounds and distinctive patterns. Our Miraluka Name Generator creates authentic-sounding names that fit perfectly within Star Wars lore while providing unique options for your characters.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Miraluka Name?</h2>
        <p className="text-white/70 mb-4">Miraluka names typically follow certain patterns that reflect their culture and Force-sensitive heritage:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Flowing, melodic sounds that evoke a sense of serenity and wisdom</li>
          <li>A balance of consonants and vowels that creates a harmonious sound</li>
          <li>Names that suggest insight, perception, or vision (ironically, given their eyeless nature)</li>
          <li>Often include soft consonants like 'l', 'm', and 'n'</li>
          <li>May incorporate elements that hint at their Force connection</li>
        </ul>
        <p className="text-white/70">Miraluka names should sound dignified and somewhat mystical, reflecting their species' deep spiritual connection to the Force and their unique perception of the galaxy.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Miraluka Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated Miraluka names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your character's personality or role in your story. You might want to adjust spelling or combine elements from different generated names.</p>
        <p className="text-white/70">These names are perfect for Star Wars roleplaying games, fan fiction, or creating original characters within the Star Wars universe.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Miraluka Naming Traditions</h2>
        <p className="text-white/70 mb-4">Miraluka naming traditions reflect their unique culture and Force-sensitive nature:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">First Names</h3>
          <p className="text-white/70">Miraluka first names often have a flowing, melodic quality with soft consonants and open vowel sounds. Names like Visas, Shoaneb, and Jerec exemplify this tradition.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Family Names</h3>
          <p className="text-white/70">Family names tend to be slightly longer and may reflect ancestral connections or lineages important to Miraluka culture. The surname "Marr" (as in Visas Marr) is one of the few canon examples.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Jedi Miraluka</h3>
          <p className="text-white/70">Many Miraluka join the Jedi Order due to their natural Force sensitivity. Those who become Jedi may adopt naming conventions that blend their Miraluka heritage with Jedi traditions.</p>
        </div>
        <p className="text-white/70">When creating a Miraluka character, consider their personal history and whether they follow traditional Miraluka customs or have adopted practices from other cultures they've encountered.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Notable Miraluka Characters</h2>
        <p className="text-white/70 mb-4">While the Miraluka are not among the most frequently featured species in Star Wars media, several notable characters have made significant appearances:</p>
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Canon and Legends Characters</h3>
          <ul className="text-white/70 space-y-2">
            <li><strong>Visas Marr</strong> - A Miraluka Sith apprentice who later joined the Jedi Exile in Knights of the Old Republic II</li>
            <li><strong>Jerec</strong> - A powerful Dark Jedi Master who appeared in the Dark Forces/Jedi Knight series</li>
            <li><strong>Shoaneb Culu</strong> - A Miraluka Jedi Knight from the Old Republic era</li>
            <li><strong>Krynda Draay</strong> - A Miraluka Jedi Master and founder of the Jedi Covenant</li>
            <li><strong>Q'Anilia</strong> - A Miraluka Jedi Consular and member of the Jedi Covenant's First WatchCircle</li>
            <li><strong>Lucien Draay</strong> - Son of Krynda Draay and a Jedi Master</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Cultural Significance</h3>
          <p className="text-white/70 mb-4">The Miraluka have a unique perspective on the Force that influences their culture and naming traditions:</p>
          <ul className="text-white/70 space-y-2">
            <li>Their homeworld, Alpheridies, has a red dwarf sun that emits light in a spectrum they cannot see</li>
            <li>They typically wear veils, masks, or blindfolds to cover their eyeless eye sockets</li>
            <li>Their Force sight allows them to perceive their surroundings in ways different from other species</li>
            <li>Many Miraluka become Jedi due to their natural Force sensitivity</li>
            <li>Their culture places high value on spiritual development and Force attunement</li>
          </ul>
        </div>
        
        <p className="text-white/70">When creating a Miraluka character, consider how their unique perception of the world through the Force might influence their personality, beliefs, and interactions with others.</p>
      </Element>
    </GeneratorPage>
  );
};

export default MiralukaGenerator; 