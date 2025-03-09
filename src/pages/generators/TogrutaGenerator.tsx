import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const TogrutaGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Togruta');
  
  // Set the document title and description for SEO
  const description = "Generate authentic Togruta names from Star Wars lore. Our Togruta Name Generator creates unique names for these colorful, montrals-bearing humanoids known for their hunting prowess and tribal society. Perfect for Star Wars roleplaying games, fan fiction, or creating new characters.";
  useDocumentTitle('Togruta Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Togruta Name Generator"
      type="Togruta"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/togruta/togruta1.jpg"
      image2="/generator-pictures/togruta/togruta2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">The Togruta are a striking humanoid species from the Star Wars universe, native to the planet Shili. Known for their vibrant skin patterns, prominent montrals (hollow horns), and head-tails (lekku), Togruta are a visually distinctive species with a rich cultural heritage. Their society values cooperation, with strong tribal structures and hunting traditions that have shaped their development.</p>
        <p className="text-white/70 mb-4">Togruta names reflect their tribal culture and connection to their homeworld. Our Togruta Name Generator creates authentic-sounding names that fit perfectly within Star Wars lore while providing unique options for your characters.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Togruta Name?</h2>
        <p className="text-white/70 mb-4">Togruta names typically follow certain patterns that reflect their culture and heritage:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Often feature soft consonants and flowing vowel sounds</li>
          <li>Frequently include 'a' and 'i' vowel sounds</li>
          <li>Names are typically melodic and relatively short</li>
          <li>May incorporate sounds that reflect their tribal heritage</li>
          <li>Often have a distinct rhythm when spoken aloud</li>
        </ul>
        <p className="text-white/70">Togruta names should sound harmonious yet distinctive, reflecting their species' communal nature and unique cultural identity. The most famous Togruta in Star Wars, Ahsoka Tano, exemplifies the typical flowing, melodic quality of Togruta naming conventions.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Togruta Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated Togruta names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your character's personality or role in your story. You might want to adjust spelling or combine elements from different generated names.</p>
        <p className="text-white/70">These names are perfect for Star Wars roleplaying games, fan fiction, or creating original characters within the Star Wars universe.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Togruta Naming Traditions</h2>
        <p className="text-white/70 mb-4">Togruta naming traditions reflect their tribal society and cultural values:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Personal Names</h3>
          <p className="text-white/70">Togruta personal names are typically melodic and flowing, with a balance of consonants and vowels. Names like Ahsoka, Shaak Ti, and Ashla demonstrate the typical sounds and patterns. These names often have a musical quality when spoken aloud.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Family Names</h3>
          <p className="text-white/70">Family or clan names like Tano (as in Ahsoka Tano) tend to be equally melodic but may be slightly shorter than personal names. These names often reflect the Togruta's tribal heritage and may indicate which community on Shili they belong to.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Tribal Connections</h3>
          <p className="text-white/70">Some Togruta may incorporate elements that reference their specific tribe or hunting pack. These might be subtle phonetic markers rather than explicit titles, reflecting the communal nature of Togruta society where individual identity is balanced with group membership.</p>
        </div>
        <p className="text-white/70">When creating a Togruta character, consider their background within Togruta society. Are they from a traditional hunting tribe on Shili? A more cosmopolitan community that has regular contact with other species? Or perhaps they were raised away from their homeworld entirely? Their name might reflect this heritage and personal journey.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Notable Togruta Characters</h2>
        <p className="text-white/70 mb-4">Several notable Togruta characters have appeared in Star Wars canon:</p>
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Famous Togruta</h3>
          <ul className="text-white/70 space-y-2">
            <li><strong>Ahsoka Tano</strong> - Former Jedi Padawan to Anakin Skywalker who left the Jedi Order and later became a key figure in the early Rebellion</li>
            <li><strong>Shaak Ti</strong> - Jedi Master who served on the Jedi Council during the Clone Wars</li>
            <li><strong>Ashla</strong> - A Togruta Jedi youngling who appeared in Attack of the Clones</li>
            <li><strong>Raana Tey</strong> - A Togruta Jedi Master from the Old Republic era (Legends)</li>
            <li><strong>Codi Ty</strong> - A male Togruta Jedi Knight who served during the Clone Wars</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Cultural Significance</h3>
          <p className="text-white/70 mb-4">The Togruta culture has several distinctive features that influence their naming traditions:</p>
          <ul className="text-white/70 space-y-2">
            <li>Their homeworld Shili is covered in vast grasslands and turu-grass, shaping their evolution as pack hunters</li>
            <li>Togruta society emphasizes cooperation and community over individual achievement</li>
            <li>Their montrals allow them to sense spatial relationships around them, aiding in hunting</li>
            <li>Traditional Togruta communities live in tribes that work together to hunt the dangerous wildlife of Shili</li>
            <li>Their distinctive skin patterns and head-tails serve as camouflage in the turu-grass of their homeworld</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Togruta in the Galaxy</h3>
          <p className="text-white/70">Togruta can be found throughout the galaxy in various roles:</p>
          <ul className="text-white/70 space-y-1">
            <li><strong>Jedi</strong> - Many Force-sensitive Togruta have served in the Jedi Order</li>
            <li><strong>Politicians</strong> - Some Togruta represent their homeworld in galactic politics</li>
            <li><strong>Hunters</strong> - Togruta hunting skills are valued across the galaxy</li>
            <li><strong>Artisans</strong> - Some Togruta create distinctive artwork reflecting their cultural heritage</li>
            <li><strong>Merchants</strong> - Togruta traders can be found on many worlds</li>
          </ul>
        </div>
        
        <p className="text-white/70">When creating a Togruta character, consider how they relate to their species' communal traditions. Do they maintain strong ties to their tribal heritage? Have they adapted to a more individualistic lifestyle among other species? Their name and background can reflect this personal journey.</p>
      </Element>
    </GeneratorPage>
  );
};

export default TogrutaGenerator; 