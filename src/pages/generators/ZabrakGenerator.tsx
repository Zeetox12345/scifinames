import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const ZabrakGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Zabrak');
  
  // Set the document title and description for SEO
  const description = "Generate authentic Zabrak names from Star Wars lore. Our Zabrak Name Generator creates unique names for these horned humanoids known for their resilience, determination, and distinctive facial tattoos. Perfect for Star Wars roleplaying games, fan fiction, or creating new characters.";
  useDocumentTitle('Zabrak Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Zabrak Name Generator"
      type="Zabrak"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/zabrak/zabrak1.jpg"
      image2="/generator-pictures/zabrak/zabrak2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">The Zabrak are a distinctive near-human species from the Star Wars universe, known for their crown of vestigial horns and intricate facial tattoos. Native to the planet Iridonia, with a significant population on Dathomir, Zabraks are renowned for their resilience, determination, and fierce independence. Their physiology allows them to endure extreme conditions, and their culture values self-reliance and martial prowess.</p>
        <p className="text-white/70 mb-4">Zabrak names reflect their strong cultural identity and varied heritage. Our Zabrak Name Generator creates authentic-sounding names that fit perfectly within Star Wars lore while providing unique options for your characters.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Zabrak Name?</h2>
        <p className="text-white/70 mb-4">Zabrak names typically follow certain patterns that reflect their culture and heritage:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Often include strong consonants that convey resilience and determination</li>
          <li>Frequently feature hard sounds like 'k', 'd', and 'g'</li>
          <li>May incorporate elements that hint at their warrior culture</li>
          <li>Names are typically concise and direct, reflecting Zabrak pragmatism</li>
          <li>Different Zabrak colonies may have slightly different naming conventions</li>
        </ul>
        <p className="text-white/70">Zabrak names should sound strong and distinctive, reflecting their species' resilient nature and independent spirit. The most famous Zabrak in Star Wars, Darth Maul (born as Maul), exemplifies the typical short, powerful quality of Zabrak naming conventions.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Zabrak Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated Zabrak names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your character's personality or role in your story. You might want to adjust spelling or combine elements from different generated names.</p>
        <p className="text-white/70">These names are perfect for Star Wars roleplaying games, fan fiction, or creating original characters within the Star Wars universe.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Zabrak Naming Traditions</h2>
        <p className="text-white/70 mb-4">Zabrak naming traditions reflect their varied cultural heritage:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Iridonian Zabrak Names</h3>
          <p className="text-white/70">Iridonian Zabraks often have names that are short and direct, with strong consonants. Names like Eeth, Agen, and Bao reflect this tradition. These names often have a martial quality that reflects the Iridonian focus on combat training and self-reliance.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Dathomirian Zabrak Names</h3>
          <p className="text-white/70">Dathomirian Zabraks, particularly the Nightbrothers, often have single-word names that sound aggressive or predatory. Names like Maul, Savage, and Feral exemplify this tradition. These names reflect their harsh upbringing and role in Dathomirian society.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Clan Affiliations</h3>
          <p className="text-white/70">Some Zabraks, particularly those from Iridonia, may include clan or family designations as part of their full names. These might be used primarily within Zabrak communities rather than in dealings with other species. Clan names often reflect ancestral achievements or territories.</p>
        </div>
        <p className="text-white/70">When creating a Zabrak character, consider their homeworld and cultural background. An Iridonian Zabrak might have a different naming style than a Dathomirian Nightbrother or a Zabrak raised in the cosmopolitan environment of Coruscant.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Notable Zabrak Characters</h2>
        <p className="text-white/70 mb-4">Several notable Zabrak characters have appeared in Star Wars canon and legends:</p>
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Famous Zabraks</h3>
          <ul className="text-white/70 space-y-2">
            <li><strong>Maul</strong> - Former Sith apprentice to Darth Sidious, later became a crime lord</li>
            <li><strong>Eeth Koth</strong> - Jedi Master who served on the Jedi Council during the Clone Wars</li>
            <li><strong>Agen Kolar</strong> - Jedi Master who was part of the team sent to arrest Chancellor Palpatine</li>
            <li><strong>Savage Opress</strong> - Nightbrother of Dathomir and brother to Maul</li>
            <li><strong>Sugi</strong> - A female Zabrak bounty hunter active during the Clone Wars</li>
            <li><strong>Bao-Dur</strong> - A tech specialist who fought in the Mandalorian Wars (Legends)</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Cultural Significance</h3>
          <p className="text-white/70 mb-4">The Zabrak culture has several distinctive features that influence their naming traditions:</p>
          <ul className="text-white/70 space-y-2">
            <li>Their homeworld Iridonia is known for its harsh terrain, which has shaped their evolution as a resilient species</li>
            <li>Facial tattoos are an important cultural tradition, often applied during coming-of-age ceremonies</li>
            <li>Zabrak society emphasizes self-reliance, martial prowess, and determination</li>
            <li>Dathomirian Zabraks have a distinct subculture influenced by the Nightsisters' matriarchal society</li>
            <li>Many Zabraks are naturally Force-sensitive, leading to significant representation in both Jedi and Sith orders</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Zabraks in the Galaxy</h3>
          <p className="text-white/70">Zabraks can be found throughout the galaxy in various roles:</p>
          <ul className="text-white/70 space-y-1">
            <li><strong>Jedi</strong> - Many Force-sensitive Zabraks have served in the Jedi Order</li>
            <li><strong>Warriors</strong> - Their natural combat aptitude makes them formidable fighters</li>
            <li><strong>Bounty Hunters</strong> - Some Zabraks apply their resilience and determination to bounty hunting</li>
            <li><strong>Merchants</strong> - Zabrak traders can be found on many worlds</li>
            <li><strong>Colonists</strong> - Zabraks have established colonies on multiple worlds beyond Iridonia</li>
          </ul>
        </div>
        
        <p className="text-white/70">When creating a Zabrak character, consider how they relate to their species' cultural traditions. Do they proudly display traditional facial tattoos? Have they maintained connections to Iridonia or Dathomir? Are they aware of and influenced by famous Zabraks like Maul? Their name and background can reflect this personal journey.</p>
      </Element>
    </GeneratorPage>
  );
};

export default ZabrakGenerator; 