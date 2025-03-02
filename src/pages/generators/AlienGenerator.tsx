
import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';

const AlienGenerator = () => {
  const exampleNames = [
    "Zorblax", "Qu'lara", "Nyx'thul", "Vexilon", "Thalassi",
    "Kr'thaan", "Zephyrian", "Xoraal", "Quazarith", "Etherena",
    "Zyth'mar", "Valuxia", "Omnithex", "Draconyx", "Stellara",
    "Phantasm", "Nebulox", "Vraxxian", "Xenorbia", "Kosmaar"
  ];

  return (
    <GeneratorPage
      title="Alien Name Generator"
      type="Alien"
      description="Create unique, otherworldly names for alien species, characters, and civilizations from across the cosmos. Perfect for sci-fi writers, gamers, and worldbuilders looking to populate their universe with diverse extraterrestrial life."
      examples={exampleNames}
      image1="/lovable-uploads/08114623-2d9b-42db-b532-8e8af5669008.png"
      image2="/lovable-uploads/c06bab8e-971e-40b9-924a-6b590208f96f.png"
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
            </ul>
          </div>
        </div>
        <p className="text-white/70">Popular alien names often become well-known because they effectively capture the essence of their species while remaining easy enough for audiences to remember. They strike the perfect balance between exotic and accessible.</p>
      </Element>
    </GeneratorPage>
  );
};

export default AlienGenerator;
