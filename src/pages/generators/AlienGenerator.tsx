import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const AlienGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Alien');
  
  // Set the document title and description for SEO
  const description = "Create unique, otherworldly names for alien species, characters, and civilizations from across the cosmos. Access our database of 10,000+ alien names perfect for sci-fi writers, gamers, and worldbuilders looking to populate their universe with diverse extraterrestrial life.";
  useDocumentTitle('Alien Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Alien Name Generator"
      type="Alien"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/alien/alien1.jpg"
      image2="/generator-pictures/alien/alien2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Alien names are essential for creating believable extraterrestrial characters in science fiction stories, games, and worldbuilding projects. Our Alien Name Generator creates unique, exotic-sounding names that evoke the mystery and otherworldliness of beings from distant star systems.</p>
        <p className="text-white/70 mb-4">Whether you're creating a benevolent species of highly evolved beings or terrifying cosmic horrors, the right name helps establish their identity and cultural background. Alien names often incorporate unusual phonetic combinations, apostrophes, and syllable patterns that would be uncommon in human languages.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What is a Good Alien Name?</h2>
        <p className="text-white/70 mb-4">A good alien name should sound distinctly non-human while still being pronounceable. The best alien names often:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Use uncommon letter combinations that create an exotic sound</li>
          <li>Incorporate apostrophes, hyphens, or other punctuation to suggest alien language structures</li>
          <li>Balance consonants and vowels in patterns unlike Earth languages</li>
          <li>Reflect something about the species' culture, biology, or homeworld</li>
          <li>Remain memorable and distinctive enough to stand out</li>
        </ul>
        <p className="text-white/70">Consider the purpose of your alien creation - are they warriors, scientists, diplomats? Their names might reflect their societal role or caste system. Names like "Kr'thaan" suggest a harsh, possibly warrior culture, while "Etherena" evokes a more mystical or advanced civilization.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Alien Name Generator is simple and intuitive:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated alien names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your specific needs. You might want to adjust spelling, add or remove apostrophes, or combine elements from different generated names.</p>
        <p className="text-white/70">Use these names for individual aliens, species names, planetary civilizations, or even starships and technology created by alien species.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Alien Naming Traditions</h2>
        <p className="text-white/70 mb-4">Across science fiction, different traditions have emerged for alien naming conventions:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Phonetic Alien Names</h3>
          <p className="text-white/70">These names use sounds that are difficult or unusual for human speech patterns (Xoraal, Vraxxian). They often include unusual consonant clusters or rare phonemes.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Apostrophe Names</h3>
          <p className="text-white/70">Common in sci-fi, these names use apostrophes to indicate glottal stops or unique pronunciations not found in Earth languages (Qu'lara, Kr'thaan). This style suggests a complex language with distinctive speech patterns.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Element-Based Names</h3>
          <p className="text-white/70">Some alien naming traditions incorporate cosmic elements or scientific terminology (Nebulox, Quazarith). These names often suggest a connection to celestial bodies or physical phenomena.</p>
        </div>
        <p className="text-white/70">When creating an alien species, consider developing consistent naming patterns that reflect their unique biology, environment, or culture. This adds depth and authenticity to your worldbuilding.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Most Popular Alien Names</h2>
        <p className="text-white/70 mb-4">Throughout science fiction, certain alien names have become iconic. While our generator creates unique names, these famous examples from literature, film, and games can provide inspiration:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Classic Alien Names</h3>
            <ul className="text-white/70 space-y-1">
              <li>Thals (Doctor Who)</li>
              <li>Vulcans (Star Trek)</li>
              <li>Wookiees (Star Wars)</li>
              <li>Xenomorphs (Alien)</li>
              <li>Prawns (District 9)</li>
              <li>Klingons (Star Trek)</li>
              <li>Daleks (Doctor Who)</li>
              <li>Hutts (Star Wars)</li>
              <li>Predators/Yautja (Predator)</li>
              <li>Asgard (Stargate)</li>
              <li>Goa'uld (Stargate)</li>
              <li>Vogons (Hitchhiker's Guide)</li>
              <li>Tralfamadorians (Slaughterhouse-Five)</li>
              <li>Martians (War of the Worlds)</li>
              <li>Formics/Buggers (Ender's Game)</li>
              <li>Tholians (Star Trek)</li>
              <li>Romulans (Star Trek)</li>
              <li>Twi'leks (Star Wars)</li>
              <li>Rodians (Star Wars)</li>
              <li>Ferengi (Star Trek)</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Modern Alien Names</h3>
            <ul className="text-white/70 space-y-1">
              <li>Na'vi (Avatar)</li>
              <li>Quarians (Mass Effect)</li>
              <li>Sangheili (Halo)</li>
              <li>Vortigaunts (Half-Life)</li>
              <li>Flerken (Marvel Universe)</li>
              <li>Asari (Mass Effect)</li>
              <li>Turians (Mass Effect)</li>
              <li>Krogan (Mass Effect)</li>
              <li>Salarians (Mass Effect)</li>
              <li>Covenant (Halo)</li>
              <li>Unggoy/Grunts (Halo)</li>
              <li>Kig-Yar/Jackals (Halo)</li>
              <li>Jiralhanae/Brutes (Halo)</li>
              <li>Skrulls (Marvel Universe)</li>
              <li>Kree (Marvel Universe)</li>
              <li>Chitauri (Marvel Universe)</li>
              <li>Xandarians (Marvel Universe)</li>
              <li>Sovereign (Mass Effect)</li>
              <li>Collectors (Mass Effect)</li>
              <li>Reapers (Mass Effect)</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Individual Alien Characters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ul className="text-white/70 space-y-1">
              <li>E.T. (E.T. the Extra-Terrestrial)</li>
              <li>Spock (Star Trek)</li>
              <li>Chewbacca (Star Wars)</li>
              <li>Yoda (Star Wars)</li>
              <li>Jar Jar Binks (Star Wars)</li>
              <li>Jabba (Star Wars)</li>
              <li>Groot (Guardians of the Galaxy)</li>
              <li>Thanos (Marvel Universe)</li>
              <li>Stitch (Lilo & Stitch)</li>
              <li>Alf (ALF)</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>Paul (Paul)</li>
              <li>Worf (Star Trek)</li>
              <li>Teal'c (Stargate)</li>
              <li>Thor (Stargate)</li>
              <li>Liara T'Soni (Mass Effect)</li>
              <li>Garrus Vakarian (Mass Effect)</li>
              <li>Tali'Zorah (Mass Effect)</li>
              <li>Arbiter Thel 'Vadam (Halo)</li>
              <li>Crypto (Destroy All Humans)</li>
              <li>Zim (Invader Zim)</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>Marvin the Martian (Looney Tunes)</li>
              <li>Klaatu (The Day the Earth Stood Still)</li>
              <li>Neytiri (Avatar)</li>
              <li>Gamora (Guardians of the Galaxy)</li>
              <li>Drax (Guardians of the Galaxy)</li>
              <li>Ahsoka Tano (Star Wars)</li>
              <li>Mordin Solus (Mass Effect)</li>
              <li>Grunt (Mass Effect)</li>
              <li>Legion (Mass Effect)</li>
              <li>The Doctor (Doctor Who)</li>
            </ul>
          </div>
        </div>
        
        <p className="text-white/70">Popular alien names often become well-known because they effectively capture the essence of their species while remaining easy enough for audiences to remember. They strike the perfect balance between exotic and accessible.</p>
      </Element>
    </GeneratorPage>
  );
};

export default AlienGenerator;
