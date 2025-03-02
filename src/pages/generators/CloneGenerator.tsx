
import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';

const CloneGenerator = () => {
  const exampleNames = [
    "CT-7567 (Rex)", "CC-2224 (Cody)", "CT-5555 (Fives)", "CT-1409 (Echo)", "CT-6116 (Kix)",
    "CT-4040 (Cutup)", "CC-5052 (Bly)", "CT-0292 (Gree)", "CT-2701 (Boomer)", "CT-7701 (Waxer)",
    "CT-8633 (Hardcase)", "CC-1010 (Fox)", "CT-1312 (Sketch)", "CC-3636 (Wolffe)", "CT-9521 (Crosshair)",
    "CT-4169 (Cannon)", "CT-2003 (Dredd)", "CC-0078 (Spire)", "CT-6454 (Havoc)", "CT-1702 (Bulwark)"
  ];

  return (
    <GeneratorPage
      title="Clone Name Generator"
      type="Clone"
      description="Create authentic designation codes and nicknames for clone troopers, replicants, or any replicated entities in your sci-fi universe. Perfect for Star Wars fan fiction, roleplaying games, or original stories featuring genetically identical soldiers."
      examples={exampleNames}
      image1="/lovable-uploads/08114623-2d9b-42db-b532-8e8af5669008.png"
      image2="/lovable-uploads/c06bab8e-971e-40b9-924a-6b590208f96f.png"
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
        <p className="text-white/70">These popular names demonstrate how effective clone naming combines systematic designation with nickname individuality, creating memorable characters despite their genetically identical origins. The contrast between numerical designations and humanizing nicknames highlights the central theme of individuality emerging from conformity.</p>
      </Element>
    </GeneratorPage>
  );
};

export default CloneGenerator;
