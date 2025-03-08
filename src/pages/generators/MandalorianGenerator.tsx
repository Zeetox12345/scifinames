import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const MandalorianGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Mandalorian');
  
  // Set the document title and description for SEO
  const description = "Generate authentic Mandalorian names for your Star Wars fan fiction, RPG characters, or creative projects. Our database contains 10,000+ Mandalorian names inspired by the warrior culture of Mandalore, perfect for creating bounty hunters, warriors, and clan members.";
  useDocumentTitle('Mandalorian Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Mandalorian Name Generator"
      type="Mandalorian"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/mandalorian/mandalorian1.jpg"
      image2="/generator-pictures/mandalorian/mandalorian2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Mandalorians are one of the most iconic warrior cultures in the Star Wars universe. Known for their distinctive armor, combat prowess, and strict code of honor, Mandalorians have captured the imagination of fans across generations. From Boba Fett to Din Djarin (The Mandalorian), these characters embody a rich cultural heritage that extends beyond their fearsome reputation.</p>
        <p className="text-white/70 mb-4">Our Mandalorian Name Generator creates authentic-sounding names that fit within the established naming conventions of Mandalorian culture. Whether you're creating a character for fan fiction, a role-playing game, or just exploring the Star Wars universe, our generator provides names that would feel at home among the clans of Mandalore.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Mandalorian Name?</h2>
        <p className="text-white/70 mb-4">Mandalorian names have distinctive characteristics that reflect their warrior culture and complex heritage. The best Mandalorian names typically:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Are strong and direct, often with hard consonants</li>
          <li>Typically consist of a first name and clan name (e.g., Paz Vizsla)</li>
          <li>Sometimes include titles or honorifics that reflect their status</li>
          <li>May incorporate elements that hint at their combat specialty or achievements</li>
          <li>Balance being distinctive while fitting within established Mandalorian naming patterns</li>
        </ul>
        <p className="text-white/70">Mandalorian names should evoke a sense of strength and honor, reflecting the culture's values of combat prowess, loyalty to clan, and adherence to "The Way." Names that sound too soft or elaborate would feel out of place for these battle-hardened warriors.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Mandalorian Name Generator is straightforward:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated Mandalorian names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your specific needs. You might want to adjust the spelling, combine elements from different generated names, or add a clan name if one isn't included.</p>
        <p className="text-white/70">Remember that in Mandalorian culture, many warriors are known by their clan name, a title, or even just "Mando" to outsiders. Your character might use different names in different contexts.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Mandalorian Naming Conventions</h2>
        <p className="text-white/70 mb-4">Throughout Star Wars canon and legends, Mandalorian naming follows several traditions:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Clan Names</h3>
          <p className="text-white/70">Many Mandalorians are identified by their clan name, which is passed down through generations. Famous clan names include Vizsla, Wren, Saxon, Kryze, and Fett. Clan names often carry significant history and reputation within Mandalorian society.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">First Names</h3>
          <p className="text-white/70">Mandalorian first names are typically short, strong, and direct. Examples include Paz, Bo, Pre, Sabine, and Tristan. These names often contain hard consonants that reflect the warrior culture's straightforward nature.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Foundling Names</h3>
          <p className="text-white/70">Mandalorians who are adopted into the culture (foundlings) may keep their birth name, take on a new Mandalorian name, or adopt the clan name of their mentor. Din Djarin is an example of a foundling who maintained his birth name while becoming Mandalorian.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Titles and Honorifics</h3>
          <p className="text-white/70">Some Mandalorians are known by titles that reflect their status or role, such as "Mand'alor" (the sole leader), "Alor" (leader), or "Ver'alor" (lieutenant). These titles can become part of how they are addressed.</p>
        </div>
        <p className="text-white/70">When creating a Mandalorian character, consider their background, clan affiliation, and whether they were born into Mandalorian culture or adopted as a foundling, as these factors would influence their name.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Famous Mandalorian Names</h2>
        <p className="text-white/70 mb-4">Throughout Star Wars media, several Mandalorians have become iconic characters. While our generator creates unique names, these canonical examples can provide inspiration:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Canon Mandalorians</h3>
            <ul className="text-white/70 space-y-1">
              <li>Din Djarin (The Mandalorian)</li>
              <li>Bo-Katan Kryze (Clone Wars, Rebels, The Mandalorian)</li>
              <li>Sabine Wren (Rebels)</li>
              <li>Paz Vizsla (The Mandalorian)</li>
              <li>The Armorer (The Mandalorian)</li>
              <li>Koska Reeves (The Mandalorian)</li>
              <li>Axe Woves (The Mandalorian)</li>
              <li>Pre Vizsla (Clone Wars)</li>
              <li>Satine Kryze (Clone Wars)</li>
              <li>Ursa Wren (Rebels)</li>
              <li>Tristan Wren (Rebels)</li>
              <li>Gar Saxon (Rebels)</li>
              <li>Rook Kast (Clone Wars)</li>
              <li>Tarre Vizsla (First Mandalorian Jedi)</li>
              <li>Fenn Rau (Rebels)</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Legends & Expanded Universe</h3>
            <ul className="text-white/70 space-y-1">
              <li>Jango Fett (Attack of the Clones)</li>
              <li>Boba Fett (Original Trilogy, The Mandalorian)</li>
              <li>Canderous Ordo (Knights of the Old Republic)</li>
              <li>Shae Vizla (The Old Republic)</li>
              <li>Cassus Fett (Expanded Universe)</li>
              <li>Mandalore the Ultimate (Expanded Universe)</li>
              <li>Mandalore the Preserver (Expanded Universe)</li>
              <li>Mandalore the Indomitable (Expanded Universe)</li>
              <li>Torian Cadera (The Old Republic)</li>
              <li>Akaavi Spar (The Old Republic)</li>
              <li>Mira (Knights of the Old Republic II)</li>
              <li>Rohlan Dyre (Comics)</li>
              <li>Hondo Karr (Comics)</li>
              <li>Kal Skirata (Republic Commando novels)</li>
              <li>Walon Vau (Republic Commando novels)</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Notable Mandalorian Clans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ul className="text-white/70 space-y-1">
              <li>Clan Vizsla</li>
              <li>Clan Wren</li>
              <li>Clan Kryze</li>
              <li>Clan Saxon</li>
              <li>Clan Eldar</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>Clan Fett</li>
              <li>Clan Ordo</li>
              <li>Clan Rook</li>
              <li>Clan Awaud</li>
              <li>Clan Cadera</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>Clan Skirata</li>
              <li>Clan Vau</li>
              <li>Clan Spar</li>
              <li>Clan Farr</li>
              <li>Clan Itera</li>
            </ul>
          </div>
        </div>
        
        <p className="text-white/70">The most memorable Mandalorian names often reflect the character's strength, honor, and place within their clan structure. When creating your own Mandalorian character, consider how their name might connect to their personal history and role within Mandalorian society.</p>
      </Element>
    </GeneratorPage>
  );
};

export default MandalorianGenerator; 