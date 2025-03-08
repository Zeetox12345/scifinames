import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const PacificRimGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Pacific Rim');
  
  // Set the document title and description for SEO
  const description = "Generate epic Jaeger and Kaiju names inspired by the Pacific Rim universe. Our Pacific Rim Name Generator creates unique names for giant mechs and monstrous creatures perfect for fan fiction, roleplaying games, or creative worldbuilding in the style of the popular sci-fi franchise.";
  useDocumentTitle('Pacific Rim Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Pacific Rim Name Generator"
      type="Pacific Rim"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/pacific-rim/pacific-rim1.jpg"
      image2="/generator-pictures/pacific-rim/pacific-rim2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">The Pacific Rim universe features an epic battle between humanity and massive alien monsters known as Kaiju. To combat these threats, humans developed equally massive mechanical warriors called Jaegers. Both Kaiju and Jaegers have distinctive naming conventions that reflect their nature and origins.</p>
        <p className="text-white/70 mb-4">Our Pacific Rim Name Generator creates authentic-sounding names for both Jaegers and Kaiju that capture the epic scale and distinctive style of the franchise. Whether you're writing fan fiction, creating content for roleplaying games, or just exploring the Pacific Rim universe, our generator provides unique and fitting names.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Pacific Rim Name?</h2>
        <p className="text-white/70 mb-4">Pacific Rim names follow distinct patterns depending on whether they're for Jaegers or Kaiju:</p>
        
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Jaeger Names</h3>
          <p className="text-white/70 mb-4">Good Jaeger names typically:</p>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Combine two strong, evocative words (like "Gipsy Danger" or "Crimson Typhoon")</li>
            <li>Often include references to weather phenomena, weapons, or mythological figures</li>
            <li>May reflect the country of origin (e.g., "Cherno Alpha" for Russia)</li>
            <li>Sound powerful, resilient, and heroic</li>
            <li>Sometimes incorporate metallic elements or colors</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Kaiju Names</h3>
          <p className="text-white/70 mb-4">Effective Kaiju names typically:</p>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Sound monstrous, threatening, or otherworldly</li>
            <li>Often use harsh consonants and guttural sounds</li>
            <li>May reference mythological monsters or natural disasters</li>
            <li>Sometimes describe physical characteristics or abilities</li>
            <li>Can incorporate Japanese-inspired elements (as "Kaiju" is a Japanese term)</li>
          </ul>
        </div>
        
        <p className="text-white/70">The best Pacific Rim names evoke the epic scale of the conflict and the distinctive characteristics of these massive entities, whether mechanical or biological.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Pacific Rim Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated Pacific Rim names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">The generator creates both Jaeger and Kaiju names. You can usually tell which is which by their style - Jaegers typically have two-part names with adjective-noun combinations, while Kaiju names are often single, monstrous-sounding words.</p>
        <p className="text-white/70">Feel free to modify any generated name to better fit your creative needs. You might want to adjust spelling or combine elements from different generated names to create something truly unique.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Pacific Rim Naming Traditions</h2>
        <p className="text-white/70 mb-4">The Pacific Rim universe has established distinct naming conventions:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Jaeger Naming Conventions</h3>
          <p className="text-white/70 mb-4">Jaegers are typically named following these patterns:</p>
          <ul className="text-white/70 space-y-2">
            <li><strong>Two-Part Structure</strong>: Most Jaegers have a two-word name (adjective + noun)</li>
            <li><strong>National Identity</strong>: Names often reflect the Jaeger's country of origin</li>
            <li><strong>Symbolic Elements</strong>: Names frequently incorporate symbols of strength, power, or natural forces</li>
            <li><strong>Military Inspiration</strong>: Some names draw from military terminology or weaponry</li>
          </ul>
          <p className="text-white/70 mt-2">Examples: Gipsy Danger, Striker Eureka, Crimson Typhoon, Cherno Alpha, Coyote Tango</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Kaiju Naming Conventions</h3>
          <p className="text-white/70 mb-4">Kaiju are typically named following these patterns:</p>
          <ul className="text-white/70 space-y-2">
            <li><strong>Codenames</strong>: In-universe, Kaiju are given codenames by the Defense Corps</li>
            <li><strong>Category System</strong>: Kaiju are classified by categories (I-V) based on size and threat level</li>
            <li><strong>Monstrous Qualities</strong>: Names often evoke their terrifying nature or abilities</li>
            <li><strong>Ancient References</strong>: Some names reference mythological monsters or ancient threats</li>
          </ul>
          <p className="text-white/70 mt-2">Examples: Knifehead, Otachi, Leatherback, Raiju, Slattern, Onibaba</p>
        </div>
        <p className="text-white/70">When creating your own Pacific Rim characters, consider how their names might reflect their design, capabilities, or origin story.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Famous Pacific Rim Names</h2>
        <p className="text-white/70 mb-4">The Pacific Rim franchise has introduced several memorable Jaegers and Kaiju:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Notable Jaegers</h3>
            <ul className="text-white/70 space-y-1">
              <li><strong>Gipsy Danger</strong> - The iconic Mark-3 American Jaeger piloted by Raleigh Becket and Mako Mori</li>
              <li><strong>Striker Eureka</strong> - The advanced Mark-5 Australian Jaeger piloted by the Hansen family</li>
              <li><strong>Crimson Typhoon</strong> - The three-armed Chinese Jaeger piloted by the Wei Tang triplets</li>
              <li><strong>Cherno Alpha</strong> - The heavily armored Russian Jaeger piloted by Sasha and Aleksis Kaidonovsky</li>
              <li><strong>Coyote Tango</strong> - The Japanese Jaeger once piloted by Stacker Pentecost</li>
              <li><strong>Gipsy Avenger</strong> - The Mark-6 Jaeger that succeeded Gipsy Danger in the sequel</li>
              <li><strong>Bracer Phoenix</strong> - A heavily-armed Mark-5 Jaeger featured in the sequel</li>
              <li><strong>Saber Athena</strong> - The elegant, agile Mark-7 Jaeger from the sequel</li>
              <li><strong>Guardian Bravo</strong> - The electric whip-wielding Mark-6 Jaeger from the sequel</li>
              <li><strong>Obsidian Fury</strong> - The mysterious black Jaeger from the sequel</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Notable Kaiju</h3>
            <ul className="text-white/70 space-y-1">
              <li><strong>Knifehead</strong> - The Category III Kaiju that defeated Gipsy Danger in its first battle</li>
              <li><strong>Otachi</strong> - The flying Category IV Kaiju with acid spray abilities</li>
              <li><strong>Leatherback</strong> - The EMP-emitting Category IV Kaiju that paired with Otachi</li>
              <li><strong>Raiju</strong> - The fast-moving, crocodile-like Category IV Kaiju</li>
              <li><strong>Slattern</strong> - The massive Category V Kaiju, the largest and most powerful seen</li>
              <li><strong>Onibaba</strong> - The crab-like Kaiju that attacked Tokyo</li>
              <li><strong>Scunner</strong> - The bull-like Category IV Kaiju that fought in the final battle</li>
              <li><strong>Trespasser</strong> - The first Kaiju to emerge, also known as "Axehead"</li>
              <li><strong>Mutavore</strong> - The Category IV Kaiju that breached the Sydney Wall</li>
              <li><strong>Kaiceph</strong> - A Category III Kaiju defeated by Striker Eureka</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Creating Your Own Pacific Rim Characters</h3>
          <p className="text-white/70 mb-4">When creating your own Pacific Rim-inspired characters, consider these elements:</p>
          <ul className="text-white/70 space-y-2">
            <li><strong>For Jaegers</strong>: Consider the country of origin, special weapons or abilities, and design philosophy</li>
            <li><strong>For Kaiju</strong>: Think about unique physical features, attack methods, and threat level</li>
            <li><strong>For Pilots</strong>: Develop their background, relationship with their co-pilot, and fighting style</li>
            <li><strong>For Support Characters</strong>: Consider their role in the PPDC (Pan Pacific Defense Corps) and expertise</li>
          </ul>
          <p className="text-white/70 mt-2">The names you choose should reflect these characteristics and add to the rich worldbuilding of your Pacific Rim-inspired stories.</p>
        </div>
        
        <p className="text-white/70">The Pacific Rim universe offers endless possibilities for creative expansion. Whether you're creating new Jaegers to defend humanity or terrifying new Kaiju threats, the right name helps establish your creation's place in this epic world of monsters and machines.</p>
      </Element>
    </GeneratorPage>
  );
};

export default PacificRimGenerator; 