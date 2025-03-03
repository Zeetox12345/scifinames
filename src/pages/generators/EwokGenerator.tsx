import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const EwokGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Ewok');
  
  // Set the document title and description for SEO
  const description = "Create authentic-sounding Ewok names for your Star Wars fan fiction, RPG characters, or creative projects. Our database contains 5,000+ Ewok names inspired by the furry inhabitants of the forest moon of Endor, perfect for expanding the Star Wars universe.";
  useDocumentTitle('Ewok Name Generator | 5,000+ Names', description);

  return (
    <GeneratorPage
      title="Ewok Name Generator"
      type="Ewok"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/ewok/ewok1.jpg"
      image2="/generator-pictures/ewok/ewok2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Ewoks are the small, furry, tribal creatures that inhabit the forest moon of Endor in the Star Wars universe. First appearing in "Return of the Jedi," these primitive but resourceful beings quickly became fan favorites for their courage, community spirit, and adorable appearance.</p>
        <p className="text-white/70 mb-4">Our Ewok Name Generator creates authentic-sounding names that match the phonetic patterns established in Star Wars canon. Whether you're writing fan fiction, creating characters for a role-playing game, or just exploring the rich diversity of the Star Wars universe, our generator provides names that feel like they belong among the treetop villages of Endor.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Ewok Name?</h2>
        <p className="text-white/70 mb-4">Ewok names have distinctive characteristics that make them immediately recognizable as belonging to these forest dwellers. The best Ewok names typically:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Are short, often just one or two syllables</li>
          <li>Contain soft consonants and vowel sounds that are easy to pronounce</li>
          <li>Often include repeated sounds (like "Wicket" or "Teebo")</li>
          <li>Have a primitive, tribal quality that reflects Ewok culture</li>
          <li>Sound cute and approachable, matching the Ewoks' appearance</li>
        </ul>
        <p className="text-white/70">Ewok names should evoke a sense of simplicity and naturalness, as these beings live in harmony with their forest environment. Names that sound too technological or sophisticated would feel out of place for these primitive hunter-gatherers.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Ewok Name Generator is straightforward:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated Ewok names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your specific needs. You might want to adjust the spelling, add or remove letters, or combine elements from different generated names to create something unique.</p>
        <p className="text-white/70">Consider the role your Ewok character will play in your story or game. Is this Ewok a warrior, a shaman, a chief, or perhaps a scout? The name might reflect their role in Ewok society.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Ewok Naming Traditions</h2>
        <p className="text-white/70 mb-4">While the Star Wars canon doesn't explicitly detail Ewok naming conventions, we can observe patterns from the named Ewoks in films, TV shows, and expanded universe materials:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Simple Phonetic Names</h3>
          <p className="text-white/70">Most Ewok names consist of simple sounds that are easy to pronounce, like Wicket, Teebo, and Logray. These names often have a playful, childlike quality that matches the Ewoks' appearance.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Role-Based Names</h3>
          <p className="text-white/70">Some Ewok names may reflect their role in the tribe. For example, "Logray" was the tribe's medicine man or shaman, and his name has a mystical quality to it.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Nature-Inspired Names</h3>
          <p className="text-white/70">As forest dwellers with a close connection to nature, some Ewok names may be inspired by natural elements, plants, or animals found in their environment.</p>
        </div>
        <p className="text-white/70">When creating an Ewok character, consider how their name might reflect their personality, role in the tribe, or special skills they possess.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Famous Ewok Names</h2>
        <p className="text-white/70 mb-4">Throughout Star Wars media, several Ewoks have been named and developed as characters. While our generator creates unique names, these canonical examples can provide inspiration:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Film and TV Ewoks</h3>
            <ul className="text-white/70 space-y-1">
              <li>Wicket W. Warrick (The most prominent Ewok, who first found Princess Leia)</li>
              <li>Chief Chirpa (Leader of the Bright Tree Village)</li>
              <li>Logray (Medicine man/shaman of the tribe)</li>
              <li>Paploo (Stole an Imperial speeder bike)</li>
              <li>Teebo (Warrior who helped in the Battle of Endor)</li>
              <li>Romba (Mourned his friend Nanta during the battle)</li>
              <li>Nanta (Killed during the Battle of Endor)</li>
              <li>Kneesaa (Daughter of Chief Chirpa)</li>
              <li>Chukha-Trok (Woodcutter who helped the Ewoks)</li>
              <li>Deej Warrick (Wicket's father)</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Expanded Universe Ewoks</h3>
            <ul className="text-white/70 space-y-1">
              <li>Shodu Warrick (Wicket's mother)</li>
              <li>Weechee Warrick (Wicket's older brother)</li>
              <li>Willy (Wicket's youngest brother)</li>
              <li>Asha (A female Ewok who lived alone in the forest)</li>
              <li>Latara (Kneesaa's best friend)</li>
              <li>Malani (Young female Ewok with a crush on Teebo)</li>
              <li>Warok (Teebo's father)</li>
              <li>Bozzie (Teebo's mother)</li>
              <li>Lumat (Latara's father)</li>
              <li>Zephee (Latara's mother)</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Ewok Tribal Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ul className="text-white/70 space-y-1">
              <li>Chief (Tribal leader)</li>
              <li>Medicine Man/Shaman</li>
              <li>Scout</li>
              <li>Hunter</li>
              <li>Warrior</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>Woodcutter</li>
              <li>Craftsman/Artisan</li>
              <li>Storyteller</li>
              <li>Musician</li>
              <li>Healer</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>Basket Weaver</li>
              <li>Food Gatherer</li>
              <li>Lookout</li>
              <li>Elder/Council Member</li>
              <li>Apprentice Shaman</li>
            </ul>
          </div>
        </div>
        
        <p className="text-white/70">The most memorable Ewok names are those that capture the childlike innocence and tribal nature of these forest dwellers while remaining easy to pronounce and remember. When creating your own Ewok characters, consider how their names might reflect their personality and role within their community.</p>
      </Element>
    </GeneratorPage>
  );
};

export default EwokGenerator; 