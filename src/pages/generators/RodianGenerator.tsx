import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const RodianGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Rodian');
  
  // Set the document title and description for SEO
  const description = "Generate authentic Rodian names from Star Wars lore. Our Rodian Name Generator creates unique names for these green-skinned hunters known for their distinctive snouts, large eyes, and prominent antennae. Perfect for Star Wars roleplaying games, fan fiction, or creating new characters.";
  useDocumentTitle('Rodian Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Rodian Name Generator"
      type="Rodian"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/rodian/rodian1.jpg"
      image2="/generator-pictures/rodian/rodian2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">The Rodians are a distinctive reptilian humanoid species from the Star Wars universe, native to the planet Rodia. Known for their green skin, large multifaceted eyes, tapir-like snouts, and antennae, Rodians have a rich cultural history centered around hunting. Their society traditionally valued hunting prowess, with the greatest hunters achieving celebrity status.</p>
        <p className="text-white/70 mb-4">Rodian names often reflect their hunting culture and clan-based society, with distinctive sounds and patterns. Our Rodian Name Generator creates authentic-sounding names that fit perfectly within Star Wars lore while providing unique options for your characters.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Rodian Name?</h2>
        <p className="text-white/70 mb-4">Rodian names typically follow certain patterns that reflect their culture and heritage:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Often include hard consonants like 'k', 'd', and 'g'</li>
          <li>Frequently feature double vowels or consonants</li>
          <li>First names are typically short, often just one or two syllables</li>
          <li>Clan or family names tend to be longer and more complex</li>
          <li>May incorporate elements that hint at hunting prowess or natural elements</li>
        </ul>
        <p className="text-white/70">Rodian names should sound somewhat harsh yet distinctive, reflecting their species' predatory nature and complex clan society. The most famous Rodian in Star Wars, Greedo (who met his end at the hands of Han Solo), exemplifies the typical short, distinctive first name common to the species.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Rodian Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated Rodian names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your character's personality or role in your story. You might want to adjust spelling or combine elements from different generated names.</p>
        <p className="text-white/70">These names are perfect for Star Wars roleplaying games, fan fiction, or creating original characters within the Star Wars universe.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Rodian Naming Traditions</h2>
        <p className="text-white/70 mb-4">Rodian naming traditions reflect their hunting culture and clan-based society:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">First Names</h3>
          <p className="text-white/70">Rodian first names are typically short and punchy, often just one or two syllables. Names like Greedo, Tseela, and Neesh exemplify this tradition. These names are easy to call out during hunts or clan gatherings.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Clan Names</h3>
          <p className="text-white/70">Clan names are more complex and often indicate the Rodian's family lineage or hunting guild. Examples include Tetsu, Chattza, and Reeven. Some Rodians, particularly those who leave Rodia, may drop their clan name or use it less frequently when dealing with other species.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Titles and Honorifics</h3>
          <p className="text-white/70">Accomplished hunters may earn titles that become part of their identity. These titles often precede the name and indicate specific achievements or roles within Rodian society. For example, a Grand Protector would lead a clan or settlement.</p>
        </div>
        <p className="text-white/70">When creating a Rodian character, consider their background within Rodian society. Are they from a prestigious hunting clan? A political family? Or perhaps they've rejected traditional Rodian values altogether? Their name might reflect this heritage and personal journey.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Notable Rodian Characters</h2>
        <p className="text-white/70 mb-4">Several notable Rodian characters have appeared in Star Wars canon and legends:</p>
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Canon Characters</h3>
          <ul className="text-white/70 space-y-2">
            <li><strong>Greedo</strong> - The bounty hunter who confronted Han Solo in the Mos Eisley Cantina</li>
            <li><strong>Onaconda Farr</strong> - A Rodian senator who represented his homeworld in the Galactic Senate</li>
            <li><strong>Jakoli</strong> - A Rodian bounty hunter who worked during the Clone Wars</li>
            <li><strong>Tseela Talu</strong> - A Rodian podracer who competed in the Boonta Eve Classic</li>
            <li><strong>Greeata Jendowanian</strong> - A female Rodian singer who performed with Figrin D'an and the Modal Nodes</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Cultural Significance</h3>
          <p className="text-white/70 mb-4">The Rodian culture has several distinctive features that influence their naming traditions:</p>
          <ul className="text-white/70 space-y-2">
            <li>Their homeworld Rodia is covered in dense jungle and swampland, shaping their evolution as hunters</li>
            <li>Traditional Rodian society glorified hunting and violence, with the greatest hunters achieving celebrity status</li>
            <li>Rodians organize themselves into clans that historically competed for resources</li>
            <li>Many Rodians work as bounty hunters throughout the galaxy, applying their hunting skills</li>
            <li>Their society underwent significant changes during the Clone Wars and Imperial era</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Rodians in the Galaxy</h3>
          <p className="text-white/70">Rodians can be found throughout the galaxy in various roles:</p>
          <ul className="text-white/70 space-y-1">
            <li><strong>Bounty Hunters</strong> - Many Rodians apply their hunting skills as bounty hunters</li>
            <li><strong>Politicians</strong> - Some Rodians, like Senator Onaconda Farr, represent their people in galactic politics</li>
            <li><strong>Criminals</strong> - Rodians are often found in criminal organizations like the Hutt cartels</li>
            <li><strong>Merchants</strong> - Some Rodians operate as traders and merchants across the galaxy</li>
            <li><strong>Artists</strong> - Despite their reputation for violence, some Rodians pursue careers in music and other arts</li>
          </ul>
        </div>
        
        <p className="text-white/70">When creating a Rodian character, consider how they relate to their species' traditional hunting culture. Do they embrace it? Reject it? Or have they found a way to adapt these skills to a different profession? Their name and background can reflect this personal journey.</p>
      </Element>
    </GeneratorPage>
  );
};

export default RodianGenerator; 