
import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';

const CyborgGenerator = () => {
  const exampleNames = [
    "Unit ARK-7", "Nexus-6", "Cypher MX9", "Epsilon-12", "Omega Protocol",
    "Genesis Prime", "Atlas X-1", "Helix-V7", "Guardian M.K.II", "Synapse",
    "Cortex Nova", "Apex-IX", "Vanguard Z3RO", "Titan Core", "Sentinel-7",
    "Cipher Matrix", "Omni-Tech", "Quantum Pulse", "Meridian X", "Echo Protocol"
  ];

  return (
    <GeneratorPage
      title="Cyborg Name Generator"
      type="Cyborg"
      description="Create perfect designations for human-machine hybrids, augmented humans, and technological entities. Ideal for science fiction writers, gamers, and worldbuilders developing stories with enhanced beings and synthetic humanoids."
      examples={exampleNames}
      image1="/lovable-uploads/08114623-2d9b-42db-b532-8e8af5669008.png"
      image2="/lovable-uploads/c06bab8e-971e-40b9-924a-6b590208f96f.png"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Cyborg names bridge the gap between humanity and technology, reflecting the dual nature of these enhanced beings. Our Cyborg Name Generator creates designations that convey both technological precision and a connection to human identity.</p>
        <p className="text-white/70 mb-4">Cyborgs—cybernetic organisms that combine biological and mechanical elements—occupy a unique space in science fiction. Unlike pure robots or AI, cyborgs retain some element of humanity, whether physically or psychologically. Their names often reflect this duality, incorporating both systematic designations and personal identifiers.</p>
        <p className="text-white/70">Whether you're writing a story about militarized super-soldiers with cybernetic enhancements, medical cyborgs created to survive extreme conditions, or transhumanist beings who've chosen augmentation for personal evolution, the right name helps establish their place in your fictional world.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What is a Good Cyborg Name?</h2>
        <p className="text-white/70 mb-4">A compelling cyborg name balances technological precision with human elements. The most effective cyborg designations typically:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Combine alphanumeric codes with word elements that have meaning</li>
          <li>Reference technological components, functions, or capabilities</li>
          <li>Include model numbers, version identifiers, or manufacturing series</li>
          <li>Balance clinical precision with memorable distinctiveness</li>
          <li>Suggest something about the cyborg's purpose, abilities, or origin</li>
        </ul>
        <p className="text-white/70 mb-4">Names like "Nexus-6," "Unit ARK-7," or "Guardian M.K.II" work well because they suggest technological sophistication while remaining pronounceable and memorable. The best cyborg names hint at the character's capabilities or purpose while conveying their position between human and machine.</p>
        <p className="text-white/70">Consider the context of your cyborg character: Was their enhancement voluntary or forced? Are they mass-produced or unique? Military, medical, or exploratory? Their name should reflect these aspects of their identity and origin.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Our Cyborg Name Generator is designed to be straightforward:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of the page</li>
          <li>Review the 10 generated cyborg designations</li>
          <li>Click again if you want to see more options</li>
          <li>Once you find a name that resonates with your character concept, you can use it as-is or modify it</li>
        </ol>
        <p className="text-white/70 mb-4">These names work well for:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Characters in science fiction novels, short stories, or scripts</li>
          <li>Player characters or NPCs in futuristic tabletop or video games</li>
          <li>Entities in worldbuilding projects involving advanced technology</li>
          <li>Military cyborg units in dystopian or post-apocalyptic settings</li>
          <li>Medical cyborgs created to survive extreme environments</li>
          <li>Transhumanist characters who've chosen augmentation</li>
        </ul>
        <p className="text-white/70">Feel free to combine elements from different generated names or add your own modifications to create the perfect designation for your cyborg character.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Cyborg Naming Traditions</h2>
        <p className="text-white/70 mb-4">Across science fiction, several cyborg naming conventions have become established:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Military/Industrial Designations</h3>
          <p className="text-white/70">These names emphasize function and manufacturing, typically including:</p>
          <ul className="list-disc list-inside text-white/70 mt-2">
            <li>Model prefixes (Unit, Series, Mark)</li>
            <li>Alphanumeric identifiers (ARK-7, MX9)</li>
            <li>Version numbers (M.K.II, V7)</li>
            <li>Function indicators (Guardian, Vanguard)</li>
          </ul>
          <p className="text-white/70 mt-2">Examples: "Unit ARK-7," "Guardian M.K.II," "Vanguard Z3RO"</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Conceptual/Scientific Names</h3>
          <p className="text-white/70">These designations reference scientific or philosophical concepts:</p>
          <ul className="list-disc list-inside text-white/70 mt-2">
            <li>Cognitive terms (Cortex, Nexus, Synapse)</li>
            <li>Existential concepts (Genesis, Apex, Prime)</li>
            <li>Scientific terminology (Quantum, Matrix, Protocol)</li>
            <li>Often paired with technical identifiers</li>
          </ul>
          <p className="text-white/70 mt-2">Examples: "Nexus-6," "Cortex Nova," "Quantum Pulse"</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Human-Machine Hybrid Names</h3>
          <p className="text-white/70">These names more explicitly bridge human and technological elements:</p>
          <ul className="list-disc list-inside text-white/70 mt-2">
            <li>Human name + technical designation</li>
            <li>Preserved birth name with added technical suffix</li>
            <li>Nicknames that reference cyborg nature</li>
            <li>Names that reflect transformation or evolution</li>
          </ul>
          <p className="text-white/70 mt-2">Examples: "Adam-X1," "Sarah Protocol," "James 'Wireframe' Chen"</p>
        </div>
        <p className="text-white/70">The naming tradition you choose should reflect the origin, purpose, and self-identity of your cyborg character. Military cyborgs might have more standardized designations, while those who chose augmentation might retain more human-like names.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Most Popular Cyborg Names</h2>
        <p className="text-white/70 mb-4">Throughout science fiction, certain cyborg characters have become iconic. These examples from literature, film, and games can provide inspiration:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">From Film & TV</h3>
            <ul className="text-white/70 space-y-1">
              <li>T-800 (Terminator)</li>
              <li>RoboCop (Officer Murphy)</li>
              <li>Darth Vader (Anakin Skywalker)</li>
              <li>Seven of Nine (Star Trek)</li>
              <li>Winter Soldier (Bucky Barnes)</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">From Games & Literature</h3>
            <ul className="text-white/70 space-y-1">
              <li>Adam Jensen (Deus Ex)</li>
              <li>Jack Harper (Mass Effect)</li>
              <li>Motoko Kusanagi (Ghost in the Shell)</li>
              <li>Victor Stone (Cyborg from DC Comics)</li>
              <li>Raiden (Metal Gear)</li>
            </ul>
          </div>
        </div>
        <p className="text-white/70">These iconic cyborgs demonstrate the range of naming approaches, from purely technical designations (T-800) to preserved human names (Adam Jensen) to callsigns that reference their cyborg nature (Cyborg). The most memorable cyborg names often reflect the character's journey between human and machine identities, creating a compelling tension that defines their story arc.</p>
      </Element>
    </GeneratorPage>
  );
};

export default CyborgGenerator;
