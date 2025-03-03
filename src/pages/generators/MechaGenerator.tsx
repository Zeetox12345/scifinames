import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const MechaGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Mecha');
  
  // Set the document title and description for SEO
  const description = "Generate powerful and evocative names for giant robots, mechs, and mechanical combat suits. Our database contains 1,500+ mecha names inspired by anime, science fiction, and military terminology, perfect for your stories, games, or creative projects.";
  useDocumentTitle('Mecha Name Generator | 1,500+ Names', description);

  return (
    <GeneratorPage
      title="Mecha Name Generator"
      type="Mecha"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/mecha/mecha1.jpg"
      image2="/generator-pictures/mecha/mecha2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Mechas are giant, piloted robots or mechanical suits that have become iconic in science fiction, particularly in Japanese anime and manga. From the towering Jaegers of Pacific Rim to the nimble Gundams of the Mobile Suit series, these mechanical marvels combine cutting-edge technology with human piloting skills to create formidable combat machines.</p>
        <p className="text-white/70 mb-4">Our Mecha Name Generator creates powerful, evocative names for these mechanical giants. Whether you're designing a mech for a story, game, or artwork, the right name helps establish its identity, capabilities, and the technological aesthetic of your world. A good mecha name balances technical terminology with a memorable, often intimidating quality that befits these massive war machines.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Mecha Name?</h2>
        <p className="text-white/70 mb-4">A good mecha name conveys power, technological sophistication, and often a hint of the machine's purpose or capabilities. The best mecha names typically:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Sound powerful and imposing, befitting a massive war machine</li>
          <li>Often incorporate military terminology, weapon references, or technical jargon</li>
          <li>May include model numbers or classification codes (MK-II, Type-0, etc.)</li>
          <li>Sometimes reference mythological or historical warriors and weapons</li>
          <li>Can include elements that hint at the mech's special abilities or armaments</li>
        </ul>
        <p className="text-white/70">The most effective mecha names balance technical authenticity with creative flair. Names like "Striker Eureka," "Wing Zero," or "Evangelion Unit-01" exemplify this balance between technical designation and distinctive identity.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Mecha Name Generator is straightforward:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated mecha names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your specific needs. You might want to adjust the spelling, add model numbers or designations, or combine elements from different generated names to create something unique.</p>
        <p className="text-white/70">Consider the role your mecha will play in your story or game. Is it a mass-produced military unit, a unique prototype, or a custom-built machine? Its name might reflect its origin, purpose, or the personality of its pilot.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Mecha Naming Conventions</h2>
        <p className="text-white/70 mb-4">Throughout science fiction and mecha anime, different naming styles have emerged:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Military Designation Names</h3>
          <p className="text-white/70">These names follow military-style classification systems, often with alphanumeric codes. Examples include "VF-1 Valkyrie," "RX-78-2 Gundam," or "Mark-V Jaeger." This style emphasizes the mecha as military hardware and often includes manufacturer codes, model numbers, and version designations.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Mythological/Historical Names</h3>
          <p className="text-white/70">Many mechas are named after mythological figures, legendary warriors, or historical weapons. Examples include "Excalibur," "Thor," or "Susanoo." These names connect the modern war machine to ancient traditions of combat and heroism, suggesting power and legendary status.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Descriptive/Capability Names</h3>
          <p className="text-white/70">Some mechas are named for their special abilities, weapons, or design features. Names like "Thunderbolt," "Destroyer," or "Stealth Shadow" immediately convey something about the mecha's combat role or special capabilities.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Emotional/Psychological Impact Names</h3>
          <p className="text-white/70">These names are chosen to evoke specific emotions or psychological responses. Examples include "Dreadnought," "Nemesis," or "Harbinger." They're designed to intimidate enemies or inspire allies, focusing on the psychological aspect of warfare.</p>
        </div>
        <p className="text-white/70">When creating a mecha, consider which naming convention best fits the technological level, cultural background, and overall aesthetic of your science fiction world.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Famous Mecha Names</h2>
        <p className="text-white/70 mb-4">Throughout science fiction and anime, certain mechas have become iconic. While our generator creates unique names, these famous examples can provide inspiration:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Anime Mechas</h3>
            <ul className="text-white/70 space-y-1">
              <li>RX-78-2 Gundam (Mobile Suit Gundam)</li>
              <li>EVA Unit-01 (Neon Genesis Evangelion)</li>
              <li>VF-1 Valkyrie (Macross/Robotech)</li>
              <li>Gurren Lagann (Tengen Toppa Gurren Lagann)</li>
              <li>Mazinger Z (Mazinger Z)</li>
              <li>Voltron/GoLion (Voltron)</li>
              <li>Escaflowne (The Vision of Escaflowne)</li>
              <li>Lancelot (Code Geass)</li>
              <li>Nirvash typeZERO (Eureka Seven)</li>
              <li>Shin Getter Robo (Getter Robo)</li>
              <li>Gunbuster (Gunbuster)</li>
              <li>Tachikoma (Ghost in the Shell)</li>
              <li>Alphonse (Full Metal Panic!)</li>
              <li>Big O (The Big O)</li>
              <li>Zeta Gundam (Mobile Suit Zeta Gundam)</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Film & Game Mechas</h3>
            <ul className="text-white/70 space-y-1">
              <li>Gipsy Danger (Pacific Rim)</li>
              <li>Striker Eureka (Pacific Rim)</li>
              <li>Cherno Alpha (Pacific Rim)</li>
              <li>Crimson Typhoon (Pacific Rim)</li>
              <li>ED-209 (RoboCop)</li>
              <li>Metal Gear REX (Metal Gear Solid)</li>
              <li>Metal Gear RAY (Metal Gear Solid 2)</li>
              <li>Atlas (Titanfall)</li>
              <li>Ogre (Titanfall)</li>
              <li>Stryder (Titanfall)</li>
              <li>Liberty Prime (Fallout)</li>
              <li>Armored Core (Armored Core series)</li>
              <li>Wanzer (Front Mission series)</li>
              <li>Titan (Titanfall/Apex Legends)</li>
              <li>Mantis (Halo)</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Mecha Types and Classifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ul className="text-white/70 space-y-1">
              <li>Mobile Suit (Gundam)</li>
              <li>Evangelion (EVA)</li>
              <li>Variable Fighter (Macross)</li>
              <li>Jaeger (Pacific Rim)</li>
              <li>Knightmare Frame (Code Geass)</li>
              <li>Arm Slave (Full Metal Panic)</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>Labor (Patlabor)</li>
              <li>Landmate (Appleseed)</li>
              <li>Tactical Surface Fighter (Muv-Luv)</li>
              <li>Armored Trooper (VOTOMS)</li>
              <li>Gear (Xenogears)</li>
              <li>Orbital Frame (Zone of the Enders)</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>Heavy Gear (Heavy Gear)</li>
              <li>BattleMech (BattleTech/MechWarrior)</li>
              <li>Titan (Titanfall)</li>
              <li>Metal Gear (Metal Gear Solid)</li>
              <li>Powered Suit (Starship Troopers)</li>
              <li>Sentinel (The Matrix)</li>
            </ul>
          </div>
        </div>
        
        <p className="text-white/70">The most memorable mecha names often become synonymous with their distinctive designs, capabilities, and the stories they're part of. A well-named mecha becomes an icon that fans instantly recognize and associate with specific battles, pilots, and moments in their favorite series.</p>
      </Element>
    </GeneratorPage>
  );
};

export default MechaGenerator; 