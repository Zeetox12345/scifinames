import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const SithGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Sith');
  
  // Set the document title and description for SEO
  const description = "Generate authentic Sith names from Star Wars lore. Our Sith Name Generator creates unique names for these dark side Force users known for their red lightsabers and passion-fueled powers. Perfect for Star Wars roleplaying games, fan fiction, or creating new characters.";
  useDocumentTitle('Sith Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Sith Name Generator"
      type="Sith"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/sith/sith1.jpg"
      image2="/generator-pictures/sith/sith2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">The Sith are the iconic dark side Force users from the Star Wars universe, ancient enemies of the Jedi Order. Driven by passion, emotion, and the pursuit of power, the Sith harness the dark side of the Force through their hatred, fear, and anger. Their philosophy centers around personal strength, the breaking of chains, and the accumulation of power.</p>
        <p className="text-white/70 mb-4">Sith names often reflect their dark, imposing nature and their break from their former identities. Our Sith Name Generator creates authentic-sounding names that fit perfectly within Star Wars lore while providing unique options for your characters.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Sith Name?</h2>
        <p className="text-white/70 mb-4">Sith names typically follow certain patterns that reflect their dark nature and ancient traditions:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Often include harsh, strong consonants that convey power and dominance</li>
          <li>Frequently feature dark, ominous sounds that evoke fear or dread</li>
          <li>Many Sith abandon their birth names and adopt a new "Darth" title followed by a single name</li>
          <li>The "Darth" title is followed by a name that often reflects an aspect of their character or philosophy</li>
          <li>Names may incorporate elements that hint at darkness, destruction, or power</li>
        </ul>
        <p className="text-white/70">Sith names should sound imposing and memorable, reflecting their users' embrace of the dark side and rejection of their former identities. Famous examples like Darth Vader, Darth Sidious, and Darth Maul demonstrate how these names can become synonymous with power and fear throughout the galaxy.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Sith Name Generator is simple:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated Sith names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your character's personality or role in your story. You might want to adjust spelling or combine elements from different generated names.</p>
        <p className="text-white/70">These names are perfect for Star Wars roleplaying games, fan fiction, or creating original characters within the Star Wars universe.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Sith Naming Traditions</h2>
        <p className="text-white/70 mb-4">Sith naming traditions reflect their dark philosophy and ancient heritage:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">The Darth Title</h3>
          <p className="text-white/70">The "Darth" title is a significant part of Sith identity, bestowed upon those who have fully embraced the dark side. It signifies a complete break from one's former identity and full commitment to the Sith way. Not all Sith use this title, particularly in ancient Sith society, but it became standard practice in the later eras.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Chosen Names</h3>
          <p className="text-white/70">The name that follows "Darth" is typically chosen to reflect some aspect of the Sith's character, philosophy, or destiny. For example, Darth Vader (from "invader"), Darth Sidious (from "insidious"), and Darth Tyranus (from "tyrant") all have names that hint at their nature or role.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Ancient Sith Names</h3>
          <p className="text-white/70">In the ancient Sith Empire, names often reflected the species' native naming conventions, particularly among the original Sith species. Names like Naga Sadow, Marka Ragnos, and Ludo Kressh demonstrate the distinctive sounds of ancient Sith culture.</p>
        </div>
        <p className="text-white/70">When creating a Sith character, consider their background and when they lived in the Star Wars timeline. A Sith from the Old Republic era might have a different naming style than one from the Rule of Two period or the Sith Eternal on Exegol.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Notable Sith Lords</h2>
        <p className="text-white/70 mb-4">Several notable Sith Lords have left their mark on the Star Wars galaxy:</p>
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Iconic Sith Lords</h3>
          <ul className="text-white/70 space-y-2">
            <li><strong>Darth Vader</strong> - The fallen Jedi Anakin Skywalker, who became the feared enforcer of the Galactic Empire</li>
            <li><strong>Darth Sidious</strong> - Also known as Emperor Palpatine, the mastermind behind the fall of the Republic</li>
            <li><strong>Darth Maul</strong> - The agile, deadly apprentice known for his double-bladed lightsaber</li>
            <li><strong>Darth Tyranus</strong> - The former Jedi Master Count Dooku who led the Separatist movement</li>
            <li><strong>Darth Bane</strong> - The Sith Lord who established the Rule of Two, ensuring the Sith's survival</li>
          </ul>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Sith Philosophy</h3>
          <p className="text-white/70 mb-4">The Sith Code encapsulates their core philosophy:</p>
          <blockquote className="text-white/90 italic border-l-4 border-red-500 pl-4 mb-4">
            Peace is a lie. There is only Passion.<br/>
            Through Passion, I gain Strength.<br/>
            Through Strength, I gain Power.<br/>
            Through Power, I gain Victory.<br/>
            Through Victory, my chains are Broken.<br/>
            The Force shall free me.
          </blockquote>
          <p className="text-white/70">This philosophy influences Sith naming conventions, with many names evoking concepts of power, passion, and the breaking of limitations.</p>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Sith Throughout History</h3>
          <p className="text-white/70">The Sith have existed in various forms throughout galactic history:</p>
          <ul className="text-white/70 space-y-1">
            <li><strong>Ancient Sith Empire</strong> - The original empire ruled by the red-skinned Sith species and Dark Jedi exiles</li>
            <li><strong>Old Sith Empire</strong> - The resurgent empire that waged war against the Old Republic</li>
            <li><strong>Brotherhood of Darkness</strong> - The Sith army that fought in the New Sith Wars</li>
            <li><strong>Rule of Two</strong> - The secretive lineage established by Darth Bane: one master, one apprentice</li>
            <li><strong>Sith Eternal</strong> - The cult that served the resurrected Darth Sidious on Exegol</li>
          </ul>
        </div>
        
        <p className="text-white/70">When creating a Sith character, consider which era they belong to and how that might influence their name and identity. A Sith from the ancient empire might have a very different name than one who followed the Rule of Two.</p>
      </Element>
    </GeneratorPage>
  );
};

export default SithGenerator; 