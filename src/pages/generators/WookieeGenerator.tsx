import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const WookieeGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Wookiee');
  
  // Set the document title and description for SEO
  const description = "Generate authentic Wookiee names from Star Wars lore. Our Wookiee Name Generator creates unique names for these tall, furry warriors from Kashyyyk known for their strength, loyalty, and distinctive roars. Perfect for Star Wars roleplaying games, fan fiction, or creating new characters.";
  useDocumentTitle('Wookiee Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Wookiee Name Generator"
      type="Wookiee"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/wookiee/wookiee1.jpg"
      image2="/generator-pictures/wookiee/wookiee2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Wookiees are one of the most iconic species in the Star Wars universe, known for their impressive height, strength, and distinctive fur-covered appearance. Native to the lush forest planet Kashyyyk, Wookiees are renowned as loyal friends, skilled mechanics, and formidable warriors. Their most famous representative, Chewbacca, co-pilot of the Millennium Falcon, has endeared the species to fans worldwide.</p>
        <p className="text-white/70 mb-4">Wookiee names reflect their unique language, Shyriiwook, which consists of growls, roars, and howls that are difficult for most other species to pronounce. Our Wookiee Name Generator creates authentic-sounding names that fit perfectly within Star Wars lore while providing unique options for your characters.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Wookiee Name?</h2>
        <p className="text-white/70 mb-4">Wookiee names typically follow certain patterns that reflect their unique language and culture:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Often include multiple consonants that suggest growls or roars</li>
          <li>Frequently feature double letters, especially 'r', 'w', and 'h'</li>
          <li>Usually contain apostrophes that indicate specific vocalizations</li>
          <li>Tend to be relatively short, typically one or two syllables</li>
          <li>Often begin with consonants like 'Ch', 'G', 'K', or 'W'</li>
        </ul>
        <p className="text-white/70">Wookiee names should look and sound like they could be pronounced with the distinctive vocalizations of Shyriiwook. The most famous Wookiee name, Chewbacca (often shortened to "Chewie"), exemplifies the typical sounds and patterns of Wookiee naming conventions.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Wookiee Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated Wookiee names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your character's personality or role in your story. You might want to adjust spelling or combine elements from different generated names.</p>
        <p className="text-white/70">These names are perfect for Star Wars roleplaying games, fan fiction, or creating original characters within the Star Wars universe.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Wookiee Naming Traditions</h2>
        <p className="text-white/70 mb-4">Wookiee naming conventions reflect their unique culture and language:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Personal Names</h3>
          <p className="text-white/70">Wookiee personal names are typically short and guttural, designed to be pronounced in Shyriiwook. Names like Chewbacca, Tarfful, and Lowbacca demonstrate the typical sounds. Many Wookiees have nicknames used by non-Wookiees who cannot properly pronounce their full names (like "Chewie" for Chewbacca).</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Family Names</h3>
          <p className="text-white/70">Wookiee family or clan names are less commonly used in interactions with other species but are important within Wookiee society. These names often reflect the clan's history or notable achievements. Chewbacca's full name, for instance, includes his clan designation.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Honor Names</h3>
          <p className="text-white/70">Wookiees sometimes receive honor names for great achievements or acts of bravery. These additional names might be bestowed by tribal elders or earned through specific rites of passage. Honor names often reference specific qualities or deeds.</p>
        </div>
        <p className="text-white/70">When creating a Wookiee character, consider their background within Wookiee society. Are they from a traditional clan on Kashyyyk? A Wookiee who has spent most of their life among other species? A warrior, a mechanic, or perhaps a rare Force-sensitive Wookiee? Their name might reflect this heritage and personal journey.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Notable Wookiee Characters</h2>
        <p className="text-white/70 mb-4">Several notable Wookiee characters have appeared in Star Wars canon and legends:</p>
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Famous Wookiees</h3>
          <ul className="text-white/70 space-y-2">
            <li><strong>Chewbacca</strong> - The legendary co-pilot of the Millennium Falcon and loyal friend to Han Solo</li>
            <li><strong>Tarfful</strong> - A Wookiee chieftain who fought alongside Yoda during the Clone Wars</li>
            <li><strong>Gungi</strong> - A rare Force-sensitive Wookiee who trained as a Jedi youngling</li>
            <li><strong>Lowbacca</strong> - Chewbacca's nephew who became a Jedi Knight (Legends)</li>
            <li><strong>Black Krrsantan</strong> - A fearsome Wookiee bounty hunter who worked for the Hutt crime syndicate</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Wookiee Culture</h3>
          <p className="text-white/70 mb-4">The Wookiee culture has several distinctive features that influence their naming traditions:</p>
          <ul className="text-white/70 space-y-2">
            <li>Their homeworld Kashyyyk features massive wroshyr trees where Wookiees build their cities in the upper canopies</li>
            <li>Wookiees observe a sacred tradition called the Life Debt, where they pledge lifelong loyalty to those who save their lives</li>
            <li>They celebrate Life Day, an important holiday that honors family bonds and Wookiee culture</li>
            <li>Wookiee society values strength and honor, with leadership often determined through feats of courage</li>
            <li>They are known for their technological aptitude, particularly in mechanics and engineering</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Wookiees in the Galaxy</h3>
          <p className="text-white/70">Wookiees can be found throughout the galaxy in various roles:</p>
          <ul className="text-white/70 space-y-1">
            <li><strong>Mechanics</strong> - Many Wookiees apply their natural technical aptitude as starship mechanics</li>
            <li><strong>Warriors</strong> - Wookiee strength and courage make them formidable fighters</li>
            <li><strong>Pilots</strong> - Some Wookiees, like Chewbacca, become skilled pilots</li>
            <li><strong>Smugglers</strong> - Wookiees sometimes work in the galactic underworld, often due to Imperial persecution</li>
            <li><strong>Slaves</strong> - During the Imperial era, many Wookiees were enslaved for their strength and technical skills</li>
          </ul>
        </div>
        
        <p className="text-white/70">When creating a Wookiee character, consider how they relate to their species' traditions and history. Do they maintain strong ties to Kashyyyk? Are they fulfilling a Life Debt? Have they been affected by Imperial enslavement? Their name and background can reflect this personal journey.</p>
      </Element>
    </GeneratorPage>
  );
};

export default WookieeGenerator; 