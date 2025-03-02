import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const BionicleGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Bionicle');
  
  // Set the document title and description for SEO
  const description = "Create perfect names for biomechanical beings inspired by the legendary Bionicle universe. Browse our collection of 10,000+ Bionicle-style names ideal for fans creating original characters, writers exploring similar settings, or gamers developing new cybernetic heroes and villains.";
  useDocumentTitle('Bionicle Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Bionicle Name Generator"
      type="Bionicle"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/Bionicle/bionicle1.jpg"
      image2="/generator-pictures/Bionicle/bionicle2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Bionicle names evoke a unique blend of mechanical and organic qualities, reflecting the biomechanical nature of these beings. Our Bionicle Name Generator creates names that capture the distinctive sound and feeling of these technological entities with organic elements.</p>
        <p className="text-white/70 mb-4">Inspired by the popular Bionicle franchise, these names follow patterns that suggest ancient civilizations with advanced technology, often incorporating elements that reference elemental powers, tribal affiliations, or technological functions. Whether you're creating fan fiction, designing game characters, or building a similar universe, these names provide the perfect foundation.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What is a Good Bionicle Name?</h2>
        <p className="text-white/70 mb-4">A good Bionicle name balances technological sounds with organic or tribal elements. The most effective names often:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Use strong consonants that create a powerful mechanical feeling</li>
          <li>Incorporate Polynesian-inspired sounds that give an ancient, tribal quality</li>
          <li>Remain relatively short (1-3 syllables) for character names</li>
          <li>Include vowel patterns that make them easily pronounceable</li>
          <li>Suggest elemental affiliations or functional purposes</li>
        </ul>
        <p className="text-white/70">Names like "Tahu" (fire) and "Gali" (water) demonstrate how effective simplicity can be, while names like "Takanuva" (light) show how longer names can convey greater significance or power within the hierarchy of characters.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Bionicle Name Generator is straightforward:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of the page</li>
          <li>Review the 10 generated Bionicle-style names</li>
          <li>Generate additional sets of names until you find options you like</li>
          <li>Feel free to modify any name to better suit your character or creation</li>
        </ol>
        <p className="text-white/70 mb-4">These names work well for:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Individual characters or heroes in your stories</li>
          <li>Villains or antagonistic forces</li>
          <li>Tribes or groups of similar entities</li>
          <li>Locations or sacred sites in your biomechanical world</li>
          <li>Artifacts or powerful items with special significance</li>
        </ul>
        <p className="text-white/70">Consider the role and elemental affiliation of your character when selecting a name. For example, water-affiliated beings might have names with flowing sounds, while earth or stone beings might have more grounded, substantial names.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Bionicle Naming Traditions</h2>
        <p className="text-white/70 mb-4">Bionicle naming traditions follow several distinct patterns:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Elemental Toa Names</h3>
          <p className="text-white/70">Toa (hero) names are often short, powerful, and connected to elemental affiliations. Names like Tahu (fire), Gali (water), and Lewa (air) exemplify this pattern, with simple but distinctive sounds.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Matoran Naming</h3>
          <p className="text-white/70">Matoran (villager) names often follow similar patterns to Toa names but may be slightly longer or include different consonant patterns. Names like Jaller, Hahli, and Kongu demonstrate this tradition.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Powerful Entity Names</h3>
          <p className="text-white/70">Names for extremely powerful beings often incorporate multiple elements or have greater length and complexity. Names like Makuta Teridax or Mata Nui exemplify this pattern, suggesting greater power through more elaborate naming.</p>
        </div>
        <p className="text-white/70">When creating names for your own biomechanical universe, consider establishing similar patterns based on the hierarchy, function, or elemental affiliations of your characters.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Most Popular Bionicle Names</h2>
        <p className="text-white/70 mb-4">The Bionicle universe has given us many memorable names that have become popular among fans. These classic examples can inspire your own creations:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Original Toa</h3>
            <ul className="text-white/70 space-y-1">
              <li>Tahu - Toa of Fire</li>
              <li>Gali - Toa of Water</li>
              <li>Lewa - Toa of Air</li>
              <li>Pohatu - Toa of Stone</li>
              <li>Onua - Toa of Earth</li>
              <li>Kopaka - Toa of Ice</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Notable Entities</h3>
            <ul className="text-white/70 space-y-1">
              <li>Makuta - Primary antagonist</li>
              <li>Mata Nui - Great spirit</li>
              <li>Takanuva - Toa of Light</li>
              <li>Vakama - Toa Metru of Fire</li>
              <li>Teridax - Makuta's true name</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Toa Metru</h3>
            <ul className="text-white/70 space-y-1">
              <li>Vakama - Toa of Fire</li>
              <li>Nokama - Toa of Water</li>
              <li>Matau - Toa of Air</li>
              <li>Onewa - Toa of Stone</li>
              <li>Whenua - Toa of Earth</li>
              <li>Nuju - Toa of Ice</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Toa Inika/Mahri</h3>
            <ul className="text-white/70 space-y-1">
              <li>Jaller - Toa of Fire</li>
              <li>Hahli - Toa of Water</li>
              <li>Kongu - Toa of Air</li>
              <li>Hewkii - Toa of Stone</li>
              <li>Nuparu - Toa of Earth</li>
              <li>Matoro - Toa of Ice</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Matoran</h3>
            <ul className="text-white/70 space-y-1">
              <li>Takua - Chronicler, became Takanuva</li>
              <li>Jaller - Captain of Ta-Koro Guard</li>
              <li>Hahli - Ga-Matoran chronicler</li>
              <li>Kongu - Le-Matoran Gukko rider</li>
              <li>Matoro - Ko-Matoran translator</li>
              <li>Hewkii - Po-Matoran athlete</li>
              <li>Nuparu - Onu-Matoran inventor</li>
              <li>Kapura - Ta-Matoran with special abilities</li>
              <li>Macku - Ga-Matoran sailor</li>
              <li>Tamaru - Le-Matoran villager</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Villains & Antagonists</h3>
            <ul className="text-white/70 space-y-1">
              <li>Teridax - Leader of the Brotherhood</li>
              <li>Roodaka - Vortixx schemer</li>
              <li>Sidorak - King of the Visorak</li>
              <li>Karzahni - Ruler of the realm of the same name</li>
              <li>Icarax - Makuta warrior</li>
              <li>Antroz - Makuta of Xia</li>
              <li>Chirox - Makuta scientist</li>
              <li>Vamprah - Silent Makuta hunter</li>
              <li>Gorast - Female Makuta</li>
              <li>Bitil - Makuta with duplication powers</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Other Important Characters</h3>
            <ul className="text-white/70 space-y-1">
              <li>Axonn - Order of Mata Nui warrior</li>
              <li>Brutaka - Former guardian turned villain</li>
              <li>Hydraxon - Pit jailer</li>
              <li>Umbra - Guardian of the Mask of Life</li>
              <li>Keetongu - Healing Rahi</li>
              <li>Tren Krom - Ancient entity</li>
              <li>Artakha - Legendary craftsman</li>
              <li>Helryx - First Toa ever created</li>
              <li>Botar - Order of Mata Nui teleporter</li>
              <li>Toa Ignika - The Mask of Life's body</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Locations & Tribes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-white/70 space-y-1">
              <li>Metru Nui - City of Legends</li>
              <li>Ta-Koro - Village of Fire</li>
              <li>Ga-Koro - Village of Water</li>
              <li>Le-Koro - Village of Air</li>
              <li>Po-Koro - Village of Stone</li>
              <li>Onu-Koro - Village of Earth</li>
              <li>Ko-Koro - Village of Ice</li>
              <li>Karda Nui - Core of the Universe</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>Voya Nui - Island of Doom</li>
              <li>Mahri Nui - Underwater city</li>
              <li>Zakaz - Skakdi homeland</li>
              <li>Xia - Manufacturing island</li>
              <li>Stelt - Trading hub</li>
              <li>Artidax - Volcanic island</li>
              <li>Odina - Dark Hunter base</li>
              <li>Destral - Brotherhood of Makuta headquarters</li>
            </ul>
          </div>
        </div>
        
        <p className="text-white/70">These names have stood the test of time because they perfectly balance exotic, technological sounds with readability and memorability, making them excellent examples to follow when creating your own biomechanical characters.</p>
      </Element>
    </GeneratorPage>
  );
};

export default BionicleGenerator;
