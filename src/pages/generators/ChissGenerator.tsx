import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const ChissGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Chiss');
  
  // Set the document title and description for SEO
  const description = "Generate authentic Chiss names from the Star Wars universe with our database of 10,000+ names. Perfect for roleplaying games, fan fiction, or creating your own characters from the mysterious blue-skinned species of the Unknown Regions.";
  useDocumentTitle('Chiss Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Chiss Name Generator"
      type="Chiss"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/chiss/chiss1.jpg"
      image2="/generator-pictures/chiss/chiss2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Chiss names are distinctive and complex, reflecting the sophisticated culture of these blue-skinned, red-eyed humanoids from the Star Wars universe. Our Chiss Name Generator creates authentic-sounding names that follow the unique naming conventions established for this species.</p>
        <p className="text-white/70 mb-4">The Chiss Ascendancy, a powerful political entity in the Unknown Regions, is known for its advanced technology, strategic brilliance, and complex social structures. These elements are reflected in their naming traditions, which include family associations, positional identifiers, and personal core names.</p>
        <p className="text-white/70">Made famous by Grand Admiral Thrawn (Mitth'raw'nuruodo), Chiss names follow specific patterns that our generator accurately replicates for your creative projects.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What is a Good Chiss Name?</h2>
        <p className="text-white/70 mb-4">A good Chiss name adheres to the established conventions of Chiss society while remaining distinctive and memorable. The best Chiss names typically:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Follow the formal pattern of Family name + Core name + Family line</li>
          <li>Use apostrophes to separate the three components of a full name</li>
          <li>Include a recognizable family prefix (Mitth, Csapla, Irizi, etc.)</li>
          <li>Feature a pronounceable but exotic-sounding core name</li>
          <li>Balance complexity with memorability</li>
        </ul>
        <p className="text-white/70 mb-4">Full formal Chiss names can be quite long, which is why they often use shortened versions in everyday interactions with non-Chiss. For example, Mitth'raw'nuruodo became known simply as "Thrawn" when dealing with the Galactic Empire.</p>
        <p className="text-white/70">When creating a Chiss character, consider both their full formal name and the abbreviated version they might use in different contexts.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Our Chiss Name Generator is designed to be intuitive and easy to use:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of the page</li>
          <li>Review the 10 generated Chiss names</li>
          <li>Generate additional sets until you find a name that resonates with your character concept</li>
          <li>For roleplaying or writing, consider selecting both a full formal name and its abbreviated version</li>
        </ol>
        <p className="text-white/70 mb-4">You can use these names for:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Star Wars fan fiction characters</li>
          <li>Tabletop roleplaying game characters (e.g., Star Wars RPGs)</li>
          <li>Original science fiction with similar species</li>
          <li>Video game character creation where custom naming is allowed</li>
        </ul>
        <p className="text-white/70">Remember that in Chiss culture, the full name carries information about family associations and status, so choose thoughtfully for character development.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Chiss Naming Traditions</h2>
        <p className="text-white/70 mb-4">Chiss naming conventions follow specific structural patterns that reflect their societal organization:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Full Formal Names</h3>
          <p className="text-white/70">A full Chiss name consists of three parts separated by apostrophes: [Family name]'[core name]'[family line name]. For example, in Mitth'raw'nuruodo, "Mitth" is the family name, "raw" is the core name, and "nuruodo" is the specific family line within the Mitth family.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Core Names</h3>
          <p className="text-white/70">The core name (like "raw" in Thrawn's name) is the individual's personal identifier and is often used as a shortened name among close associates or when interacting with other species who might struggle with full Chiss names.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Merit Adoptives</h3>
          <p className="text-white/70">Chiss can be adopted into families for merit or political reasons, which changes their family name. For example, Thrawn was born a Kivu but was adopted into the Mitth family, changing his name from Kivu'raw'nuru to Mitth'raw'nuruodo.</p>
        </div>
        <p className="text-white/70">These naming traditions reflect the complex social structure of Chiss society, where family associations, merit, and political alliances all play important roles.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Most Popular Chiss Names</h2>
        <p className="text-white/70 mb-4">Several Chiss characters have become notable in Star Wars canon and legends material. These popular examples can inspire your own character creations:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Canonical Characters</h3>
            <ul className="text-white/70 space-y-1">
              <li>Mitth'raw'nuruodo (Thrawn) - Grand Admiral</li>
              <li>Ar'alani - Admiral of the Chiss Defense Fleet</li>
              <li>Thalias - Sky-walker trainer</li>
              <li>Vurawn - Chiss officer</li>
              <li>Samakro - Senior Captain</li>
              <li>Che'ri - Sky-walker navigator</li>
              <li>Vah'nya - Senior Sky-walker</li>
              <li>Ziinda - Sky-walker</li>
              <li>Thalias - Caregiver</li>
              <li>Thurfian - Aristocra</li>
              <li>Lakuviv - Syndic</li>
              <li>Plikh'ar'illmorf (Plik) - Caregiver</li>
              <li>Clarr - Warrior</li>
              <li>Khresh - Warrior</li>
              <li>Wutroow - Mid Captain</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Notable Family Names</h3>
            <ul className="text-white/70 space-y-1">
              <li>Mitth - Powerful ruling family</li>
              <li>Csapla - One of the Nine Ruling Families</li>
              <li>Irizi - Ruling family focused on education</li>
              <li>Sabosen - Prominent family</li>
              <li>Chaf - Family known for diplomatic roles</li>
              <li>Nuruodo - Military and foreign affairs</li>
              <li>Inrokini - Science and technology</li>
              <li>Dasklo - Manufacturing</li>
              <li>Ufsa - Transportation</li>
              <li>Kivu - Lesser family (Thrawn's birth family)</li>
              <li>Boadil - Lesser family</li>
              <li>Clarr - Military family</li>
              <li>Erighal - Lesser family</li>
              <li>Xodlak - Lesser family</li>
              <li>Pommrio - Lesser family</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Legends Characters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ul className="text-white/70 space-y-1">
              <li>Sev'rance Tann - Dark Acolyte</li>
              <li>Hess'irolia'nuruodo - Commander</li>
              <li>Kres'ten'tarthi - Commander</li>
              <li>Brast'alshi'barku - Aristocra</li>
              <li>Prard'ras'kleoni - General</li>
              <li>Fehlaaur'aitel'loro - Ambassador</li>
              <li>Mitth'ras'safis (Thrass) - Syndic</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>Dreel - Bounty Hunter</li>
              <li>Stent - Force-sensitive Chiss</li>
              <li>Talshib - Warrior</li>
              <li>Prakk - Warrior</li>
              <li>Karyce - Diplomat</li>
              <li>Chaf'orm'bintrano (Formbi) - Aristocra</li>
              <li>Csapla'ar'yllanin (Clarsi) - Aristocra</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>Dasklo'ar'nusokto (Darnus) - Aristocra</li>
              <li>Inrokini'dri'nallesh (Indrin) - Aristocra</li>
              <li>Irizi'stal'mustro (Istam) - Aristocra</li>
              <li>Nuruodo'resh'tallos (Nuresht) - Aristocra</li>
              <li>Laenan'vesu'reen - Captain</li>
              <li>Mith'ele'anik (Thelea) - Pilot</li>
              <li>Ina'ganet'nuruodo - Commander</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Chiss Naming Structure</h3>
          <p className="text-white/70 mb-2">Chiss full names consist of three parts:</p>
          <ol className="list-decimal list-inside text-white/70 mb-4 pl-4 space-y-1">
            <li><strong>Family name prefix</strong> - Indicates the family (e.g., Mitth', Csapla', Irizi')</li>
            <li><strong>Core name</strong> - The individual's personal identifier (e.g., raw', ras', orm')</li>
            <li><strong>Family name suffix</strong> - Completes the family name (e.g., nuruodo, safis, bintrano)</li>
          </ol>
          <p className="text-white/70">Core names are often used as informal address between close associates. For example, Mitth'raw'nuruodo is commonly called "Raw" or "Thrawn" by those familiar with him.</p>
        </div>
        
        <p className="text-white/70">These characters and families demonstrate the distinctive naming patterns of the Chiss while showcasing the variety possible within their conventions. Grand Admiral Thrawn remains the most recognizable Chiss character, bringing this species to prominence in the Star Wars universe.</p>
      </Element>
    </GeneratorPage>
  );
};

export default ChissGenerator;
