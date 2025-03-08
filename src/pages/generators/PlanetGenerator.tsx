import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const PlanetGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Planet');
  
  // Set the document title and description for SEO
  const description = "Create unique and evocative names for planets, moons, and celestial bodies with our Planet Name Generator. Perfect for sci-fi writers, worldbuilders, game developers, and space enthusiasts looking to populate their fictional galaxies with distinctive worlds.";
  useDocumentTitle('Planet Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Planet Name Generator"
      type="Planet"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/planet/planet1.jpg"
      image2="/generator-pictures/planet/planet2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Planet names are essential elements in science fiction, fantasy, and speculative fiction. They serve as the foundation for worldbuilding, establishing the setting where characters live, explore, and have adventures. A well-named planet instantly evokes its environment, atmosphere, and potential for storytelling.</p>
        <p className="text-white/70 mb-4">Our Planet Name Generator creates unique, memorable names for celestial bodies of all types - from habitable Earth-like worlds to gas giants, desert planets, ice worlds, and more exotic environments. Whether you're writing a space opera, designing a game, or creating a tabletop RPG campaign, our generator provides names that will inspire your creative process.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Planet Name?</h2>
        <p className="text-white/70 mb-4">Effective planet names often share certain qualities that make them memorable and fitting:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Distinctive sound patterns that are pronounceable yet alien</li>
          <li>Evocative of the planet's physical characteristics or environment</li>
          <li>May incorporate elements from Earth languages with modifications</li>
          <li>Often include unusual consonant combinations or syllable structures</li>
          <li>Can suggest the planet's role or importance in your fictional universe</li>
        </ul>
        <p className="text-white/70 mb-4">Different sci-fi traditions have established various naming conventions. Some use Earth-like naming patterns (New Terra, Proxima), others use completely alien constructions (Arrakis, Trantor), while others incorporate descriptive elements (Hoth, Mustafar).</p>
        <p className="text-white/70">The best planet names feel natural within your fictional universe while giving readers or players an immediate sense of the world's character.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Planet Name Generator is simple and intuitive:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated planet names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your specific needs. You might want to adjust spelling, add prefixes or suffixes, or combine elements from different generated names.</p>
        <p className="text-white/70">Consider how your planet name might fit into a larger naming system for your fictional universe. Perhaps planets in the same system share certain phonetic elements, or maybe naming conventions differ by region of space or discovering civilization.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Planet Naming Traditions</h2>
        <p className="text-white/70 mb-4">Across science fiction and astronomy, different traditions have emerged for naming celestial bodies:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Scientific Naming</h3>
          <p className="text-white/70">In real astronomy, planets are often named after mythological figures (Mercury, Venus, Mars). Exoplanets typically use their star's name plus a letter (Kepler-186f, TRAPPIST-1b). This approach lends scientific credibility to fictional worlds.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Descriptive Naming</h3>
          <p className="text-white/70">Many sci-fi planets are named for their most prominent feature or environment (Waterworld, Vulcan, Hoth). This immediately communicates something essential about the planet to the audience.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Alien Linguistics</h3>
          <p className="text-white/70">Some of the most memorable planet names sound like they come from alien languages (Arrakis, Gallifrey, Raxacoricofallapatorius). These names often use unusual phonetic combinations to create an exotic feel.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Colonial Naming</h3>
          <p className="text-white/70">Planets colonized by humans might have names reflecting Earth locations or concepts (New Earth, Terra Nova, Eden). These names often suggest the colonists' hopes or memories of their original home.</p>
        </div>
        <p className="text-white/70">When creating a planet, consider which naming tradition best fits your fictional universe and the role the planet plays in your story.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Famous Fictional Planets</h2>
        <p className="text-white/70 mb-4">Throughout science fiction, certain planet names have become iconic. While our generator creates unique names, these famous examples from literature, film, and games can provide inspiration:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Classic Sci-Fi Planets</h3>
            <ul className="text-white/70 space-y-1">
              <li><strong>Arrakis</strong> (Dune) - Desert planet and source of the spice melange</li>
              <li><strong>Trantor</strong> (Foundation) - Ecumenopolis capital of the Galactic Empire</li>
              <li><strong>Solaris</strong> (Solaris) - Sentient ocean planet that communicates through memories</li>
              <li><strong>LV-426</strong> (Alien) - Desolate moon where the xenomorph was discovered</li>
              <li><strong>Magrathea</strong> (Hitchhiker's Guide) - Legendary planet that manufactured luxury planets</li>
              <li><strong>Gallifrey</strong> (Doctor Who) - Homeworld of the Time Lords</li>
              <li><strong>Krypton</strong> (Superman) - Superman's doomed homeworld</li>
              <li><strong>Caprica</strong> (Battlestar Galactica) - Advanced human colony world</li>
              <li><strong>Terminus</strong> (Foundation) - Remote planet hosting the Foundation</li>
              <li><strong>Lusitania</strong> (Ender's Game series) - Colony world with three sentient species</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Star Wars Planets</h3>
            <ul className="text-white/70 space-y-1">
              <li><strong>Tatooine</strong> - Desert planet with binary suns</li>
              <li><strong>Coruscant</strong> - City-covered capital of the Republic/Empire</li>
              <li><strong>Naboo</strong> - Lush planet with human and Gungan populations</li>
              <li><strong>Hoth</strong> - Ice planet that briefly hosted the Rebel base</li>
              <li><strong>Endor</strong> - Forest moon home to Ewoks</li>
              <li><strong>Mustafar</strong> - Volcanic planet where Anakin became Darth Vader</li>
              <li><strong>Kashyyyk</strong> - Forested homeworld of the Wookiees</li>
              <li><strong>Dagobah</strong> - Swamp planet where Yoda lived in exile</li>
              <li><strong>Jakku</strong> - Desert planet with starship graveyards</li>
              <li><strong>Exegol</strong> - Hidden Sith world of dark side secrets</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Video Game Planets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-white/70 space-y-1">
              <li><strong>Zebes</strong> (Metroid) - Hostile planet home to Space Pirates</li>
              <li><strong>Tuchanka</strong> (Mass Effect) - Harsh, irradiated Krogan homeworld</li>
              <li><strong>Pandora</strong> (Borderlands) - Dangerous frontier planet with valuable alien tech</li>
              <li><strong>Reach</strong> (Halo) - Human colony and military stronghold</li>
              <li><strong>Sera</strong> (Gears of War) - Human-colonized planet ravaged by war</li>
              <li><strong>Helghan</strong> (Killzone) - Harsh planet with toxic atmosphere</li>
              <li><strong>Stygia</strong> (Warhammer 40K) - Frozen tomb world</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li><strong>Azeroth</strong> (World of Warcraft) - Fantasy world with multiple continents</li>
              <li><strong>Noveria</strong> (Mass Effect) - Corporate-controlled ice planet</li>
              <li><strong>Rannoch</strong> (Mass Effect) - Quarian homeworld</li>
              <li><strong>Harvest</strong> (Halo) - Agricultural colony and first human world attacked</li>
              <li><strong>Char</strong> (StarCraft) - Volcanic planet serving as Zerg base</li>
              <li><strong>Aiur</strong> (StarCraft) - Lush Protoss homeworld</li>
              <li><strong>Malachor V</strong> (Knights of the Old Republic) - Shattered Sith world</li>
            </ul>
          </div>
        </div>
        
        <p className="text-white/70">These iconic planet names have become part of our cultural lexicon because they effectively evoke their environments and play crucial roles in their respective stories. When naming your own planets, consider how the name might hint at the world's nature and importance to your narrative.</p>
      </Element>
    </GeneratorPage>
  );
};

export default PlanetGenerator; 