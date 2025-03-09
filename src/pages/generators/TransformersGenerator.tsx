import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const TransformersGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Transformers');
  
  // Set the document title and description for SEO
  const description = "Generate authentic Transformers names for your Autobot or Decepticon characters. Our Transformers Name Generator creates unique names that capture the essence of these sentient robotic beings from Cybertron. Perfect for fan fiction, roleplaying games, or creating your own Transformers characters.";
  useDocumentTitle('Transformers Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Transformers Name Generator"
      type="Transformers"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/transformers/transformers1.jpg"
      image2="/generator-pictures/transformers/transformers2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Transformers are the iconic sentient robotic beings from the planet Cybertron, capable of transforming between their robot forms and alternate modes, typically vehicles or other mechanical objects. Since their introduction in 1984, these "robots in disguise" have captured the imagination of fans across generations through toys, comics, animated series, and blockbuster films.</p>
        <p className="text-white/70 mb-4">Transformer names often reflect their personalities, functions, or alternate modes. Our Transformers Name Generator creates authentic-sounding names that would fit perfectly within the Transformers universe, whether for noble Autobots, cunning Decepticons, or neutral Cybertronians.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Transformers Name?</h2>
        <p className="text-white/70 mb-4">Effective Transformers names typically share certain characteristics:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Often incorporate mechanical, technological, or scientific terms</li>
          <li>May reference the character's alternate mode or special ability</li>
          <li>Frequently include strong consonants that convey power or precision</li>
          <li>Can feature combinations of words that suggest the character's function</li>
          <li>Sometimes include prefixes or suffixes common in Cybertronian language</li>
        </ul>
        <p className="text-white/70">The best Transformers names are memorable and evocative, giving an immediate sense of the character's nature or role. Think of iconic names like Optimus Prime, Megatron, Bumblebee, or Starscream - each name instantly conveys something about the character's personality or function.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Transformers Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated Transformers names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your character's personality or function. You might want to adjust spelling or combine elements from different generated names.</p>
        <p className="text-white/70">These names are perfect for fan fiction, roleplaying games, custom toy creations, or any creative project involving Transformers characters.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Transformers Naming Traditions</h2>
        <p className="text-white/70 mb-4">Different types of Transformers often follow different naming conventions:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Autobot Names</h3>
          <p className="text-white/70">Autobot names often reflect their noble qualities or functions:</p>
          <ul className="text-white/70 space-y-1">
            <li><strong>Heroic Qualities</strong>: Names like Optimus (from "optimal"), Ironhide, or Prowl suggest strength, protection, or vigilance</li>
            <li><strong>Function-Based</strong>: Names like Ratchet (a medical officer), Wheeljack (an inventor), or Blaster (communications) directly reference their roles</li>
            <li><strong>Alt-Mode References</strong>: Names like Bumblebee, Jazz, or Sideswipe may reference their vehicle modes or characteristics</li>
          </ul>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Decepticon Names</h3>
          <p className="text-white/70">Decepticon names often have a more menacing or aggressive quality:</p>
          <ul className="text-white/70 space-y-1">
            <li><strong>Intimidating Concepts</strong>: Names like Megatron, Devastator, or Shockwave evoke power, destruction, or fear</li>
            <li><strong>Predatory References</strong>: Names like Ravage, Laserbeak, or Predaking suggest hunting or aggression</li>
            <li><strong>Sinister Qualities</strong>: Names like Starscream, Soundwave, or Barricade convey deception, stealth, or obstruction</li>
          </ul>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Special Groups</h3>
          <p className="text-white/70">Certain groups of Transformers follow their own naming patterns:</p>
          <ul className="text-white/70 space-y-1">
            <li><strong>Combiners</strong>: Teams that merge into larger robots often have thematic names (Constructicons, Aerialbots) with the combined form having its own name (Devastator, Superion)</li>
            <li><strong>Primes</strong>: Leaders often carry the honorific "Prime" (Optimus Prime, Rodimus Prime)</li>
            <li><strong>Ancient Cybertronians</strong>: Older characters may have more mythic-sounding names (Prima, Vector Prime, Alpha Trion)</li>
          </ul>
        </div>
        <p className="text-white/70">When naming your Transformer character, consider their faction, function, and personality. A scientific Autobot might have a different naming style than a warrior Decepticon or an ancient neutral Cybertronian.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Iconic Transformers Characters</h2>
        <p className="text-white/70 mb-4">The Transformers franchise has introduced many memorable characters over the decades:</p>
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Legendary Autobots</h3>
          <ul className="text-white/70 space-y-2">
            <li><strong>Optimus Prime</strong> - The noble leader of the Autobots, known for his wisdom and courage</li>
            <li><strong>Bumblebee</strong> - The loyal scout who often forms close bonds with human allies</li>
            <li><strong>Jazz</strong> - The cool, culturally adaptable special operations agent</li>
            <li><strong>Ironhide</strong> - The tough, battle-hardened weapons specialist</li>
            <li><strong>Ratchet</strong> - The skilled and sometimes grumpy medical officer</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Notable Decepticons</h3>
          <ul className="text-white/70 space-y-2">
            <li><strong>Megatron</strong> - The ruthless, power-hungry leader of the Decepticons</li>
            <li><strong>Starscream</strong> - The treacherous second-in-command who constantly schemes to overthrow Megatron</li>
            <li><strong>Soundwave</strong> - The loyal communications officer known for his monotone voice and cassette minions</li>
            <li><strong>Shockwave</strong> - The cold, logical scientist devoted to Decepticon supremacy</li>
            <li><strong>Devastator</strong> - The powerful combined form of the Constructicons</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Character Types</h3>
          <p className="text-white/70 mb-4">Transformers come in many varieties with different functions:</p>
          <ul className="text-white/70 space-y-2">
            <li><strong>Leaders</strong> - Command figures who direct their factions (Optimus Prime, Megatron)</li>
            <li><strong>Warriors</strong> - Combat specialists focused on battle (Ironhide, Sunstreaker)</li>
            <li><strong>Scouts</strong> - Fast, agile characters who gather intelligence (Bumblebee, Cliffjumper)</li>
            <li><strong>Scientists</strong> - Technical experts who develop new technologies (Wheeljack, Perceptor)</li>
            <li><strong>Medics</strong> - Specialists in repairing damaged Transformers (Ratchet, First Aid)</li>
            <li><strong>Combiners</strong> - Teams that merge into a single, powerful entity (Constructicons, Aerialbots)</li>
            <li><strong>Triple Changers</strong> - Rare Transformers with two alternate modes (Blitzwing, Astrotrain)</li>
          </ul>
        </div>
        
        <p className="text-white/70">When creating your own Transformer character, consider what role they play in their faction and what special abilities or traits make them unique. Their name should reflect these qualities while fitting into the established naming patterns of the Transformers universe.</p>
      </Element>
    </GeneratorPage>
  );
};

export default TransformersGenerator; 