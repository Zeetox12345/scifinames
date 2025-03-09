import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const SteampunkGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Steampunk');
  
  // Set the document title and description for SEO
  const description = "Generate authentic steampunk names for your Victorian-inspired sci-fi characters. Our Steampunk Name Generator creates unique names that blend Victorian elegance with industrial flair. Perfect for steampunk novels, roleplaying games, or cosplay characters.";
  useDocumentTitle('Steampunk Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Steampunk Name Generator"
      type="Steampunk"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/steampunk/steampunk1.jpg"
      image2="/generator-pictures/steampunk/steampunk2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Steampunk is a captivating subgenre of science fiction that combines Victorian-era aesthetics with retro-futuristic technology powered by steam. This unique blend creates a world where brass gears, copper pipes, and mechanical marvels exist alongside top hats, corsets, and Victorian sensibilities. The genre often explores alternate histories where steam power remained the dominant technology.</p>
        <p className="text-white/70 mb-4">Steampunk names reflect this fascinating fusion, often combining Victorian elegance with industrial elements or scientific terminology. Our Steampunk Name Generator creates authentic-sounding names that would feel right at home in the smoke-filled, gear-driven worlds of steampunk fiction.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Steampunk Name?</h2>
        <p className="text-white/70 mb-4">Effective steampunk names typically share certain characteristics:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Blend Victorian naming conventions with industrial or mechanical elements</li>
          <li>Often include proper, formal first names common in the Victorian era</li>
          <li>May incorporate surnames related to machinery, science, or invention</li>
          <li>Can feature titles that denote social status or scientific achievement</li>
          <li>Sometimes include hyphenated surnames or compound names</li>
        </ul>
        <p className="text-white/70">The best steampunk names evoke both the refined sensibilities of Victorian society and the brass-and-steam aesthetic of the genre. They should sound like they belong to inventors, explorers, aristocrats with secret laboratories, or daring airship captains.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Steampunk Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated steampunk names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your character's background or role. You might want to add titles like "Professor," "Captain," or "Lady," or combine elements from different generated names.</p>
        <p className="text-white/70">These names are perfect for steampunk novels, roleplaying games, cosplay characters, or any creative project set in a Victorian-inspired alternate reality.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Steampunk Naming Traditions</h2>
        <p className="text-white/70 mb-4">Steampunk naming conventions draw from several sources:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Victorian Influence</h3>
          <p className="text-white/70">Victorian-era names form the foundation of many steampunk characters:</p>
          <ul className="text-white/70 space-y-1">
            <li><strong>First Names</strong>: Formal names like Archibald, Bartholomew, Cornelius, Eliza, Josephine, or Wilhelmina</li>
            <li><strong>Surnames</strong>: Traditional English surnames like Blackwood, Harrington, or Wellington</li>
            <li><strong>Formality</strong>: Full names rather than nicknames in formal settings (though close friends might use shortened forms)</li>
          </ul>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Industrial Elements</h3>
          <p className="text-white/70">The industrial revolution influences steampunk naming, particularly for surnames:</p>
          <ul className="text-white/70 space-y-1">
            <li><strong>Mechanical Terms</strong>: Names incorporating words like Gear, Copper, Brass, or Steam</li>
            <li><strong>Scientific References</strong>: Surnames related to physics, chemistry, or engineering</li>
            <li><strong>Inventions</strong>: Names that suggest innovation or invention</li>
          </ul>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Titles and Honorifics</h3>
          <p className="text-white/70">Titles play an important role in steampunk naming, reflecting both social hierarchy and scientific achievement:</p>
          <ul className="text-white/70 space-y-1">
            <li><strong>Aristocratic</strong>: Lord, Lady, Baron, Countess</li>
            <li><strong>Military</strong>: Captain, Admiral, Colonel</li>
            <li><strong>Academic</strong>: Professor, Doctor</li>
            <li><strong>Unique</strong>: Artificer, Chief Engineer, Sky Marshal</li>
          </ul>
        </div>
        <p className="text-white/70">When creating a steampunk character, consider their social standing, profession, and background. An aristocratic inventor might have a different naming style than a working-class airship engineer or a mysterious adventurer.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Steampunk Character Archetypes</h2>
        <p className="text-white/70 mb-4">Steampunk fiction features several common character types, each with their own naming styles:</p>
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">The Eccentric Inventor</h3>
          <p className="text-white/70 mb-4">These brilliant minds create the fantastic contraptions that define the steampunk world:</p>
          <ul className="text-white/70 space-y-2">
            <li><strong>Professor Thaddeus Coppersmith</strong> - Creator of the Atmospheric Harmonizer</li>
            <li><strong>Dr. Eliza Cogsworth</strong> - Pioneer in mechanical augmentation</li>
            <li><strong>Bartholomew Steamwright</strong> - Master of pressure-powered locomotion</li>
            <li><strong>Minerva Brassbolt</strong> - Inventor of the pocket calculating engine</li>
          </ul>
          <p className="text-white/70">Inventor names often combine scholarly first names with surnames that suggest their mechanical expertise.</p>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">The Daring Adventurer</h3>
          <p className="text-white/70 mb-4">Explorers, airship captains, and globetrotters who seek adventure:</p>
          <ul className="text-white/70 space-y-2">
            <li><strong>Captain Horatio Ironside</strong> - Commander of the airship Relentless</li>
            <li><strong>Lady Amelia Windcatcher</strong> - Renowned explorer of uncharted territories</li>
            <li><strong>Sebastian Blackwood</strong> - Gentleman adventurer and collector of rare artifacts</li>
            <li><strong>Josephine Stormchaser</strong> - Navigator of the treacherous Northern Skies</li>
          </ul>
          <p className="text-white/70">Adventurer names often suggest boldness, resilience, or a connection to travel and exploration.</p>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">The Aristocrat with Secrets</h3>
          <p className="text-white/70 mb-4">Upper-class characters who lead double lives or harbor hidden knowledge:</p>
          <ul className="text-white/70 space-y-2">
            <li><strong>Lord Edmund Thornfield-Gearhart</strong> - Publicly a socialite, secretly a mechanical genius</li>
            <li><strong>Duchess Victoria Nightshade</strong> - Hostess of London's finest salons and covert resistance leader</li>
            <li><strong>Sir Reginald Copperbottom</strong> - Collector of forbidden technological artifacts</li>
            <li><strong>Lady Wilhelmina Ravencroft</strong> - Society darling with a laboratory hidden beneath her manor</li>
          </ul>
          <p className="text-white/70">Aristocratic names often feature hyphenated surnames, family names with long histories, or subtle hints at their secret pursuits.</p>
        </div>
        
        <p className="text-white/70">When creating your steampunk character, consider which archetype they most closely resemble, or how they might combine elements from different archetypes. Their name should reflect both their public persona and any hidden aspects of their character.</p>
      </Element>
    </GeneratorPage>
  );
};

export default SteampunkGenerator; 