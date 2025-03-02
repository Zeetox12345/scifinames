
import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';

const BionicleGenerator = () => {
  const exampleNames = [
    "Tahu", "Makuta", "Kopaka", "Pohatu", "Onua",
    "Gali", "Lewa", "Takanuva", "Vakama", "Nokama",
    "Matau", "Nuju", "Whenua", "Onewa", "Teridax",
    "Mata Nui", "Jaller", "Hahli", "Kongu", "Axonn"
  ];

  return (
    <GeneratorPage
      title="Bionicle Name Generator"
      type="Bionicle"
      description="Create perfect names for biomechanical beings inspired by the legendary Bionicle universe. Ideal for fans creating original characters, writers exploring similar settings, or gamers developing new cybernetic heroes and villains."
      examples={exampleNames}
      image1="/lovable-uploads/08114623-2d9b-42db-b532-8e8af5669008.png"
      image2="/lovable-uploads/c06bab8e-971e-40b9-924a-6b590208f96f.png"
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
        <p className="text-white/70">These names have stood the test of time because they perfectly balance exotic, technological sounds with readability and memorability, making them excellent examples to follow when creating your own biomechanical characters.</p>
      </Element>
    </GeneratorPage>
  );
};

export default BionicleGenerator;
