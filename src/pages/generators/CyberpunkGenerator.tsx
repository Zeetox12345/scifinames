
import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';

const CyberpunkGenerator = () => {
  const exampleNames = [
    "Neon Viper", "Zero Cool", "Chrome Raven", "Glitch", "Proxy",
    "Cipher", "Neuromancer", "Phantom Byte", "Void Runner", "Static",
    "Crash Override", "Trinity", "Acid Burn", "Flatline", "Deckard",
    "Synapse", "Blackout", "Mainframe", "Hex", "Pulse"
  ];

  return (
    <GeneratorPage
      title="Cyberpunk Name Generator"
      type="Cyberpunk"
      description="Create edgy, tech-noir handles for hackers, mercs, fixers, and street samurai in your cyberpunk universe. Perfect for roleplaying games, fiction writing, or creating digital avatars in neon-soaked dystopian settings."
      examples={exampleNames}
      image1="/generator-pictures/cyberpunk/cyberpunk1.jpg"
      image2="/generator-pictures/cyberpunk/cyberpunk2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Cyberpunk names, often called "handles" or "street names," embody the gritty fusion of high technology and low life that defines the genre. Our Cyberpunk Name Generator creates evocative nicknames that would feel right at home in the neon-lit alleyways of Night City or the virtual realms of the Net.</p>
        <p className="text-white/70 mb-4">In cyberpunk settings, characters rarely use their birth names. Instead, they adopt handles that reflect their skills, appearance, reputation, or digital persona. These names serve as both personal branding and protection – in a world where corporations wield immense power, keeping your true identity hidden is often a matter of survival.</p>
        <p className="text-white/70">Whether you're creating a character for Cyberpunk 2077, Shadowrun, a tabletop RPG, or original fiction, a strong cyberpunk name helps establish your character's place in this tech-noir world of megacorporations, street gangs, and digital frontiers.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What is a Good Cyberpunk Name?</h2>
        <p className="text-white/70 mb-4">A strong cyberpunk name captures the essence of the genre while reflecting your character's identity. The most effective cyberpunk handles typically:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Blend technological terminology with counterculture elements</li>
          <li>Sound edgy, memorable, and distinctive in both the physical and digital world</li>
          <li>Reflect the character's role, skills, or reputation (hacker, street samurai, fixer, etc.)</li>
          <li>Include references to digital culture, technology, or cybernetic enhancements</li>
          <li>Often use simple, impactful words that create a strong mental image</li>
        </ul>
        <p className="text-white/70 mb-4">Names like "Glitch," "Chrome Raven," or "Neuromancer" work well because they combine technological references with imagery that establishes a character's mystique. The best cyberpunk names are both believable as street handles and reflective of the character's identity in this dystopian future.</p>
        <p className="text-white/70">Consider what aspect of your character you want to emphasize: their technical skills, physical appearance, augmentations, reputation, or background. A netrunner might have a name referencing code or digital systems, while a street samurai might choose something that evokes speed, precision, or danger.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Cyberpunk Name Generator is straightforward:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of the page</li>
          <li>Browse through the 10 generated cyberpunk handles</li>
          <li>If you don't find one that fits your character concept, generate another set</li>
          <li>Once you find a name you like, you can use it as-is or modify it to better suit your character</li>
        </ol>
        <p className="text-white/70 mb-4">These names work well for:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Player characters in Cyberpunk 2020, Cyberpunk RED, or Cyberpunk 2077</li>
          <li>Shadowrun runners or other cyberpunk RPG characters</li>
          <li>Original characters in cyberpunk fiction or fan fiction</li>
          <li>Online personas or gamer tags with a cyberpunk aesthetic</li>
          <li>Digital artists or content creators with cyberpunk themes</li>
        </ul>
        <p className="text-white/70">Feel free to combine elements from different generated names or add your own twists to create something unique that perfectly captures your character's essence in the neon-soaked future.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Cyberpunk Naming Traditions</h2>
        <p className="text-white/70 mb-4">Cyberpunk naming follows several recognizable patterns across different media and games:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Tech-Based Handles</h3>
          <p className="text-white/70">Names that directly reference technology, programming, or digital systems. Examples include "Mainframe," "Proxy," "Cipher," and "Hex." These names often appeal to netrunners, hackers, and tech specialists, suggesting expertise in digital realms.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Material/Physical Handles</h3>
          <p className="text-white/70">Names that reference cybernetic enhancements or physical attributes, often using materials or substances. Examples include "Chrome," "Steel," "Titanium," or "Quicksilver." These handles tend to be favored by characters with extensive body modifications or those who emphasize physical prowess.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Compound Handles</h3>
          <p className="text-white/70">Names that combine two elements for greater impact, like "Neon Viper," "Chrome Raven," or "Phantom Byte." This approach creates distinctive identities that stand out in both physical and virtual spaces, often juxtaposing technological and organic/natural elements.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Glitch/Malfunction Handles</h3>
          <p className="text-white/70">Names that reference digital errors, system failures, or technological breakdown. Examples include "Glitch," "Static," "Crash," and "Flatline." These names often suggest dangerous, unpredictable characters who thrive in chaos or exploit system weaknesses.</p>
        </div>
        <p className="text-white/70">When creating your cyberpunk persona, consider which tradition best reflects your character's role and personality in this high-tech, low-life world.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Most Popular Cyberpunk Names</h2>
        <p className="text-white/70 mb-4">Some cyberpunk handles have become iconic through influential works in the genre. These examples from classic cyberpunk media can provide inspiration:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">From Literature & Film</h3>
            <ul className="text-white/70 space-y-1">
              <li>Case - Protagonist from Neuromancer</li>
              <li>Molly Millions - Razorgirl from Neuromancer</li>
              <li>Johnny Mnemonic - Data courier</li>
              <li>Trinity - Hacker from The Matrix</li>
              <li>Neo - The One from The Matrix</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">From Games & Media</h3>
            <ul className="text-white/70 space-y-1">
              <li>V - Protagonist from Cyberpunk 2077</li>
              <li>Johnny Silverhand - Rockerboy from Cyberpunk</li>
              <li>Rache Bartmoss - Legendary netrunner</li>
              <li>Crash Override - Hacker from "Hackers" film</li>
              <li>Acid Burn - Hacker from "Hackers" film</li>
            </ul>
          </div>
        </div>
        <p className="text-white/70">These iconic names have helped define the cyberpunk genre and demonstrate how effective handles capture a character's essence while fitting seamlessly into these dystopian worlds. The best cyberpunk names feel authentic to the setting while being memorable enough to build a reputation around – whether in the concrete jungle or the digital frontier.</p>
      </Element>
    </GeneratorPage>
  );
};

export default CyberpunkGenerator;
