import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const CloneGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Clone');
  
  // Set the document title and description for SEO
  const description = "Generate authentic clone trooper designations and nicknames from the Star Wars universe. Access our database of 10,000+ clone names perfect for roleplaying games, fan fiction, or creating your own 501st Legion members.";
  useDocumentTitle('Clone Trooper Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Clone Trooper Name Generator"
      type="Clone"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/clone/clone1.jpg"
      image2="/generator-pictures/clone/clone2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Clone naming combines systematic designation with personalized identity, creating a fascinating dichotomy between institutional order and individual expression. Our Clone Name Generator creates authentic-sounding clone designations and nicknames that would fit perfectly in a military sci-fi setting.</p>
        <p className="text-white/70 mb-4">Inspired by popular franchises like Star Wars, where clone troopers received both numerical designations (CT-7567) and personalized nicknames ("Rex"), these names reflect the tension between mass production and individual identity that makes clone characters compelling.</p>
        <p className="text-white/70">Whether you're writing fan fiction, creating characters for roleplaying games, or developing your own original sci-fi universe with cloned or replicated entities, this generator provides names that feel authentic and meaningful.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What is a Good Clone Name?</h2>
        <p className="text-white/70 mb-4">A good clone name effectively balances official designation with personal identity. The most compelling clone names typically:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Include a systematic designation code (CT-7567, CC-2224)</li>
          <li>Feature a memorable nickname that reflects the clone's personality, appearance, or notable experiences</li>
          <li>Balance military precision with human individuality</li>
          <li>Suggest something about the clone's role, specialization, or batch</li>
          <li>Remain distinctive enough to stand out in a squad while fitting within established naming patterns</li>
        </ul>
        <p className="text-white/70 mb-4">For example, "CT-7567 (Rex)" combines the official systematic designation with a short, strong nickname that suggests leadership qualities (Rex having royal connotations). Meanwhile, "CT-5555 (Fives)" derives a nickname directly from the unusual repetition in the clone's number.</p>
        <p className="text-white/70">When creating clone names, consider how the nickname reflects the individual's distinguishing traits within a standardized system.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Our Clone Name Generator is designed to be straightforward:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of the page</li>
          <li>Browse through the 10 generated clone designations and nicknames</li>
          <li>If you don't find a suitable name, click again for 10 new options</li>
          <li>When you find a designation/nickname combination you like, you can use it as-is or modify it</li>
        </ol>
        <p className="text-white/70 mb-4">You can use these names for:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Fan fiction featuring clone troopers or similar replicated soldiers</li>
          <li>Original characters in science fiction stories involving cloning</li>
          <li>Tabletop or video game characters where you role-play as a clone</li>
          <li>Creating background characters for a militaristic sci-fi setting</li>
        </ul>
        <p className="text-white/70">Feel free to mix and match designation codes and nicknames, or create your own nickname that better reflects your character's unique traits or experiences.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Clone Naming Traditions</h2>
        <p className="text-white/70 mb-4">Clone naming traditions vary across different sci-fi universes, but certain patterns have become established conventions:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Military Designation Systems</h3>
          <p className="text-white/70">In Star Wars and similar settings, clones receive alphanumeric designations that typically include:</p>
          <ul className="list-disc list-inside text-white/70 mt-2">
            <li>A prefix indicating type or batch (CT for Clone Trooper, CC for Clone Commander)</li>
            <li>A hyphen followed by a numerical sequence (usually 4-5 digits)</li>
            <li>Sometimes additional suffixes for specialized roles or units</li>
          </ul>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Nickname Development</h3>
          <p className="text-white/70">Clones often develop or receive nicknames based on:</p>
          <ul className="list-disc list-inside text-white/70 mt-2">
            <li>Physical characteristics or distinguishing features</li>
            <li>Personality traits or behavioral patterns</li>
            <li>Notable actions or experiences during training or combat</li>
            <li>References to their numerical designation (like "Fives" for CT-5555)</li>
            <li>Squad or batch identification</li>
          </ul>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Rank and Specialization Indicators</h3>
          <p className="text-white/70">Many clone naming systems incorporate elements that indicate:</p>
          <ul className="list-disc list-inside text-white/70 mt-2">
            <li>Rank within the hierarchy (CC prefix for commanders vs. CT for troopers)</li>
            <li>Specialization (medic, pilot, engineer, sniper, etc.)</li>
            <li>Unit or legion affiliation (501st, 212th, etc.)</li>
          </ul>
        </div>
        <p className="text-white/70">These naming traditions reflect the tension in clone narratives between institutional control and individual identity, making them rich territory for character development in stories.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Most Popular Clone Names</h2>
        <p className="text-white/70 mb-4">Some clone designations and nicknames have become iconic in popular culture. These examples from Star Wars and other franchises can provide inspiration:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Famous Clone Troopers</h3>
            <ul className="text-white/70 space-y-1">
              <li>CT-7567 "Rex" - Captain of the 501st Legion</li>
              <li>CC-2224 "Cody" - Commander of the 212th Attack Battalion</li>
              <li>CT-5555 "Fives" - ARC Trooper of the 501st Legion</li>
              <li>CT-1409 "Echo" - ARC Trooper who later joined Bad Batch</li>
              <li>CT-99 "99" - Malformed clone who served on Kamino</li>
              <li>CT-21-0408 "Echo" - ARC Trooper, later cyborg</li>
              <li>CT-27-5555 "Fives" - ARC Trooper who discovered Order 66</li>
              <li>CT-5597 "Jesse" - 501st Legion trooper</li>
              <li>CT-6116 "Kix" - 501st Legion medic</li>
              <li>CT-782 "Hevy" - Domino Squad member</li>
              <li>CT-4040 "Cutup" - Domino Squad member</li>
              <li>CT-00-2010 "Droidbait" - Domino Squad member</li>
              <li>CC-5052 "Bly" - Commander of the 327th Star Corps</li>
              <li>CC-1004 "Gree" - Commander of the 41st Elite Corps</li>
              <li>CC-1138 "Bacara" - Commander of the Galactic Marines</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">The Bad Batch</h3>
            <ul className="text-white/70 space-y-1">
              <li>CT-9904 "Crosshair" - Sniper specialist</li>
              <li>CT-1409 "Tech" - Technical expert</li>
              <li>CT-9999 "Wrecker" - Demolitions expert</li>
              <li>CT-0000 "Hunter" - Squad leader with enhanced senses</li>
              <li>CT-1701 "Omega" - Female clone with special abilities</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Clone Commanders</h3>
            <ul className="text-white/70 space-y-1">
              <li>CC-3636 "Wolffe" - Commander of the Wolfpack</li>
              <li>CC-1010 "Fox" - Commander of the Coruscant Guard</li>
              <li>CC-8826 "Neyo" - Commander of the 91st Recon Corps</li>
              <li>CC-1119 "Appo" - Commander who led the 501st to the Jedi Temple</li>
              <li>CC-5576-39 "Gregor" - Commando who lost his memory</li>
              <li>CC-4477 "Thire" - Coruscant Guard commander</li>
              <li>CC-1993 "Jet" - Commander who served under Ki-Adi-Mundi</li>
              <li>CC-3714 "Fil" - Commander who served under Kit Fisto</li>
              <li>CC-8542 "Doom" - Commander who served under Tiplar and Tiplee</li>
              <li>CC-2237 "Odd Ball" - Clone pilot commander</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Specialized Clones</h3>
            <ul className="text-white/70 space-y-1">
              <li>CT-411 "Ponds" - Commander of the Lightning Squadron</li>
              <li>ARC-77 "Fordo" - Advanced Recon Commando</li>
              <li>CT-1157 "Havoc" - Rancor Battalion trooper</li>
              <li>CT-9529 "Rys" - Coruscant Guard trooper</li>
              <li>CT-0292 "Sketch" - Artistic clone trooper</li>
              <li>CT-4142 "Jek" - 501st Legion trooper</li>
              <li>CT-8863 "Waxer" - 212th Battalion trooper</li>
              <li>CT-6910 "Boil" - 212th Battalion trooper</li>
              <li>CT-327 "Tup" - 501st Legion trooper</li>
              <li>CT-1284 "Spark" - Clone pilot</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Delta Squad</h3>
            <ul className="text-white/70 space-y-1">
              <li>RC-1138 "Boss" - Delta Squad leader</li>
              <li>RC-1140 "Fixer" - Delta Squad tech specialist</li>
              <li>RC-1207 "Sev" - Delta Squad sniper</li>
              <li>RC-1262 "Scorch" - Delta Squad demolitions expert</li>
              <li>RC-1309 "Niner" - Omega Squad member</li>
              <li>RC-8015 "Fi" - Omega Squad member</li>
              <li>RC-3222 "Atin" - Omega Squad member</li>
              <li>RC-1136 "Darman" - Omega Squad member</li>
              <li>Alpha-17 "Alpha" - ARC Trooper trainer</li>
              <li>Null-11 "Ordo" - Null-class ARC Trooper</li>
            </ul>
          </div>
        </div>
        
        <p className="text-white/70">These popular names demonstrate how effective clone naming combines systematic designation with nickname individuality, creating memorable characters despite their genetically identical origins. The contrast between numerical designations and humanizing nicknames highlights the central theme of individuality emerging from conformity.</p>
      </Element>
    </GeneratorPage>
  );
};

export default CloneGenerator;
