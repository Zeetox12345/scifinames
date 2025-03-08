import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const HackerGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Hacker');
  
  // Set the document title and description for SEO
  const description = "Generate authentic-sounding hacker handles and pseudonyms for your cyberpunk stories, games, or creative projects. Our database contains 10,000+ hacker names inspired by cyberpunk culture, perfect for creating digital rebels, netrunners, and tech specialists.";
  useDocumentTitle('Hacker Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Hacker Name Generator"
      type="Hacker"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/hacker/hacker1.jpg"
      image2="/generator-pictures/hacker/hacker2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">In the digital underground, your real name is the last thing you'd use. Hackers, netrunners, and digital outlaws adopt handles or pseudonyms that reflect their skills, personality, or reputation in cyberspace. These digital aliases serve both as personal branding and as protection against those who might track them down.</p>
        <p className="text-white/70 mb-4">Our Hacker Name Generator creates authentic-sounding handles that would feel at home in the neon-lit streets of Night City or the digital realms of the Matrix. Whether you're creating characters for cyberpunk fiction, tabletop RPGs like Shadowrun or Cyberpunk 2077, or just need a cool online alias, our generator provides names with the perfect blend of tech savvy and counterculture edge.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Hacker Name?</h2>
        <p className="text-white/70 mb-4">A good hacker handle stands out in the digital underground while conveying something about the individual's skills, personality, or reputation. The best hacker names typically:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Are memorable and unique within their community</li>
          <li>Often incorporate tech terminology, coding references, or digital culture</li>
          <li>May use leetspeak substitutions (replacing letters with numbers or symbols)</li>
          <li>Sometimes reference their specialty or preferred method of hacking</li>
          <li>Can be intimidating, mysterious, or playfully ironic</li>
        </ul>
        <p className="text-white/70">The most effective hacker names balance being technical enough to establish credibility while still having a creative edge that makes them memorable. Names like "Zer0Cool," "Acid_Burn," or "Gh0st" exemplify this balance between technical reference and distinctive personality.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Hacker Name Generator is straightforward:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated hacker handles</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your specific needs. You might want to adjust the spelling, add numbers or symbols, or combine elements from different generated names to create something unique.</p>
        <p className="text-white/70">Consider the type of hacker you're naming. Is this character a white hat security specialist, a corporate data thief, a hacktivist fighting for a cause, or a digital anarchist? Their handle might reflect their motivations and methods.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Hacker Naming Conventions</h2>
        <p className="text-white/70 mb-4">Throughout cyberpunk fiction and real hacker culture, different styles of handles have emerged:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Leetspeak Names</h3>
          <p className="text-white/70">These names substitute letters with numbers or symbols that resemble them (e.g., "3" for "E", "4" for "A", "0" for "O"). Examples include "Tr4c3r", "Cyph3r", or "Bl4ckH4t". This style emerged from early internet culture and remains popular in hacker communities.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Technical Reference Names</h3>
          <p className="text-white/70">These handles incorporate programming terms, network protocols, or computer components. Examples include "NullPointer", "SSH_Phantom", or "KernelPanic". These names signal technical knowledge and often hint at the hacker's specialty.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Anarchist/Rebel Names</h3>
          <p className="text-white/70">These names evoke rebellion, chaos, or anti-establishment sentiments. Examples include "Anarchyx", "Disruptor", or "Renegade". They often reflect the countercultural aspects of hacker communities and their opposition to authority.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Mythological/Cultural References</h3>
          <p className="text-white/70">Many hackers adopt names from mythology, literature, or pop culture, often with a twist. Examples include "Loki_Overflow", "NecroByte", or "Morpheus_Prime". These names add depth and can hint at the hacker's worldview or interests.</p>
        </div>
        <p className="text-white/70">When creating a hacker character, consider which naming style best reflects their background, skills, and personality in the digital underground.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Famous Hacker Names</h2>
        <p className="text-white/70 mb-4">Throughout cyberpunk fiction and media, certain hacker characters have become iconic. While our generator creates unique names, these famous examples can provide inspiration:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Fictional Hackers</h3>
            <ul className="text-white/70 space-y-1">
              <li>Neo/Thomas Anderson (The Matrix)</li>
              <li>Trinity (The Matrix)</li>
              <li>Morpheus (The Matrix)</li>
              <li>Case (Neuromancer)</li>
              <li>Molly Millions (Neuromancer)</li>
              <li>Acid Burn/Kate Libby (Hackers)</li>
              <li>Crash Override/Zero Cool/Dade Murphy (Hackers)</li>
              <li>The Plague/Eugene Belford (Hackers)</li>
              <li>Cereal Killer/Emmanuel Goldstein (Hackers)</li>
              <li>Lord Nikon (Hackers)</li>
              <li>Phantom Phreak (Hackers)</li>
              <li>V (Cyberpunk 2077)</li>
              <li>Alt Cunningham (Cyberpunk 2077)</li>
              <li>T-Bug (Cyberpunk 2077)</li>
              <li>Rache Bartmoss (Cyberpunk 2020)</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Real-World Hacker Handles</h3>
            <ul className="text-white/70 space-y-1">
              <li>Dark Dante (Kevin Poulsen)</li>
              <li>Mafiaboy (Michael Calce)</li>
              <li>Condor (Kevin Mitnick)</li>
              <li>Mudge (Peiter Zatko)</li>
              <li>Guccifer (Marcel Lazăr Lehel)</li>
              <li>Sabu (Hector Monsegur)</li>
              <li>Topiary (Jake Davis)</li>
              <li>Kayla (Ryan Ackroyd)</li>
              <li>Tflow (Mustafa Al-Bassam)</li>
              <li>Acid Phreak (Elias Ladopoulos)</li>
              <li>Phiber Optik (Mark Abene)</li>
              <li>Captain Crunch (John Draper)</li>
              <li>Moxie Marlinspike (Matthew Rosenfeld)</li>
              <li>The Mentor (Loyd Blankenship)</li>
              <li>The Prophet (Robert Riggs)</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Hacker Types and Specialties</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ul className="text-white/70 space-y-1">
              <li>Black Hat (Malicious hacker)</li>
              <li>White Hat (Security professional)</li>
              <li>Grey Hat (Ethically ambiguous)</li>
              <li>Hacktivist (Politically motivated)</li>
              <li>Script Kiddie (Inexperienced)</li>
              <li>Netrunner (Cyberpunk specialist)</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>Phreaker (Phone system hacker)</li>
              <li>Cryptographer (Encryption specialist)</li>
              <li>Social Engineer (Human manipulation)</li>
              <li>Penetration Tester (Security tester)</li>
              <li>Malware Developer (Virus creator)</li>
              <li>Data Miner (Information extractor)</li>
            </ul>
            <ul className="text-white/70 space-y-1">
              <li>System Cracker (Access specialist)</li>
              <li>Decker (Shadowrun hacker)</li>
              <li>Ghost (Stealth specialist)</li>
              <li>Rigger (Hardware/drone specialist)</li>
              <li>Technomancer (Magical hacker)</li>
              <li>ICE Breaker (Security bypass)</li>
            </ul>
          </div>
        </div>
        
        <p className="text-white/70">The most memorable hacker names often become synonymous with their digital personas and exploits. A good handle becomes part of the character's legend in both the physical world and cyberspace.</p>
      </Element>
    </GeneratorPage>
  );
};

export default HackerGenerator; 