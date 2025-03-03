import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const DroidGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Droid');
  
  // Set the document title and description for SEO
  const description = "Generate unique droid designations and model numbers for your Star Wars stories, games, and fan fiction. Our database contains 10,000+ droid names inspired by the iconic droids of the Star Wars universe, from astromech and protocol droids to battle droids and beyond.";
  useDocumentTitle('Droid Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Droid Name Generator"
      type="Droid"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/droid/droid1.jpg"
      image2="/generator-pictures/droid/droid2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Droids are an integral part of the Star Wars universe, serving as companions, workers, and sometimes even heroes in their own right. From the lovable R2-D2 and C-3PO to the menacing battle droids of the Trade Federation, these mechanical beings each have their own unique designations that reflect their purpose, model, and sometimes personality.</p>
        <p className="text-white/70 mb-4">Our Droid Name Generator creates authentic-sounding droid designations that fit perfectly within the established naming conventions of the Star Wars universe. Whether you need a name for your fan fiction, role-playing game, or just want to imagine what your own personal droid might be called, our generator has you covered.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Droid Name?</h2>
        <p className="text-white/70 mb-4">A good droid name in the Star Wars universe typically follows certain conventions that help identify the droid's type, purpose, and sometimes manufacturer. The best droid names often:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Combine letters and numbers in a specific pattern (like R2-D2 or BB-8)</li>
          <li>Include a manufacturer prefix or model series (like IG-88 or HK-47)</li>
          <li>Reflect the droid's primary function (medical, protocol, astromech, etc.)</li>
          <li>Are pronounceable or have a nickname that organic beings can easily use</li>
          <li>Sometimes include a personality indicator for more individualized droids</li>
        </ul>
        <p className="text-white/70">The most iconic droid names are simple enough to remember but unique enough to stand out. They often become shorthand for the droid's personality, like how "Artoo" evokes a plucky, brave character, while "Threepio" suggests someone more formal and anxious.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Droid Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated droid designations</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your specific needs. You might want to adjust the letters or numbers, change the hyphenation pattern, or combine elements from different generated names.</p>
        <p className="text-white/70">Remember that in the Star Wars universe, many droids are given nicknames by their owners or companions, so you can always create a more personalized version of the formal designation.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Droid Naming Conventions</h2>
        <p className="text-white/70 mb-4">Throughout the Star Wars universe, different manufacturers and droid types follow specific naming conventions:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Astromech Droids</h3>
          <p className="text-white/70">Typically follow the R-series pattern (R2-D2, R5-D4). The first part indicates the series, while the following parts may indicate the production batch and individual unit number.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Protocol Droids</h3>
          <p className="text-white/70">Often use the 3PO or similar designation (C-3PO, TC-14). The prefix letter may indicate the manufacturer or specific model line.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Battle Droids</h3>
          <p className="text-white/70">Trade Federation and Separatist battle droids often have simple numerical designations (B1, B2) or serial numbers. Specialized units might have unique designations like OOM-9 for officer units.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Assassin and Bounty Hunter Droids</h3>
          <p className="text-white/70">Often use the IG (IG-88, IG-11) or HK (HK-47) prefix, followed by a number that may indicate the production sequence.</p>
        </div>
        <p className="text-white/70">When creating a droid name, consider what type of droid you're naming and try to follow the appropriate convention for authenticity.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Famous Droid Names</h2>
        <p className="text-white/70 mb-4">Throughout Star Wars media, certain droids have become iconic. While our generator creates unique names, these famous examples can provide inspiration:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Classic Star Wars Droids</h3>
            <ul className="text-white/70 space-y-1">
              <li>R2-D2 (Astromech)</li>
              <li>C-3PO (Protocol)</li>
              <li>IG-88 (Assassin)</li>
              <li>R5-D4 (Astromech)</li>
              <li>2-1B (Medical)</li>
              <li>4-LOM (Protocol turned bounty hunter)</li>
              <li>EV-9D9 (Supervisor)</li>
              <li>8D8 (Torture)</li>
              <li>R4-P17 (Obi-Wan's astromech)</li>
              <li>FX-7 (Medical assistant)</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Modern Star Wars Droids</h3>
            <ul className="text-white/70 space-y-1">
              <li>BB-8 (Astromech)</li>
              <li>K-2SO (Security)</li>
              <li>L3-37 (Navigation)</li>
              <li>D-O (Companion)</li>
              <li>BD-1 (Exploration)</li>
              <li>IG-11 (Bounty hunter/Nurse)</li>
              <li>AP-5 (Inventory)</li>
              <li>Chopper/C1-10P (Astromech)</li>
              <li>BB-9E (First Order astromech)</li>
              <li>0-0-0/Triple Zero (Protocol/Assassin)</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Droid Models and Series</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ul className="text-white/70 space-y-1">
              <li>B1 Battle Droids</li>
              <li>B2 Super Battle Droids</li>
              <li>Droideka/Destroyer Droids</li>
              <li>ASP Labor Droids</li>
              <li>GNK/Gonk Power Droids</li>
              <li>KX-series Security Droids</li>
              <li>R-series Astromech Droids</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>3PO-series Protocol Droids</li>
              <li>IG-series Assassin Droids</li>
              <li>HK-series Hunter-Killer Droids</li>
              <li>BB-series Astromech Droids</li>
              <li>DUM-series Pit Droids</li>
              <li>EG-series Power Droids</li>
              <li>2-1B Surgical Droids</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>LOM-series Protocol Droids</li>
              <li>BT-1 Assassin Droids</li>
              <li>Vulture Droids</li>
              <li>Probe Droids</li>
              <li>Mouse Droids</li>
              <li>Viper Probe Droids</li>
              <li>MagnaGuards</li>
            </ul>
          </div>
        </div>
        
        <p className="text-white/70">The most memorable droid names in Star Wars often become synonymous with their personalities and roles in the story. While their designations may be alphanumeric, fans come to associate them with distinct characters and traits.</p>
      </Element>
    </GeneratorPage>
  );
};

export default DroidGenerator; 