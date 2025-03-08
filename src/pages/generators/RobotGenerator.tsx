import GeneratorPage from '@/components/GeneratorPage';
import { Element } from 'react-scroll';
import { getExampleNames } from '@/lib/nameData';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const RobotGenerator = () => {
  // Get example names from our data utility
  const exampleNames = getExampleNames('Robot');
  
  // Set the document title and description for SEO
  const description = "Generate unique and creative robot names for your sci-fi stories, games, or creative projects. Our Robot Name Generator creates distinctive designations for mechanical beings, AI entities, and synthetic characters that range from industrial to sentient.";
  useDocumentTitle('Robot Name Generator | 10,000+ Names', description);

  return (
    <GeneratorPage
      title="Robot Name Generator"
      type="Robot"
      description={description}
      examples={exampleNames}
      image1="/generator-pictures/robot/robot1.jpg"
      image2="/generator-pictures/robot/robot2.jpg"
    >
      <Element name="introduction" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Introduction</h2>
        <p className="text-white/70 mb-4">Robot names are crucial elements in science fiction, technology, and futuristic storytelling. They help establish the personality, function, and level of sophistication of mechanical or artificial intelligence characters. From friendly companions to menacing antagonists, the right robot name can instantly communicate important information about the character.</p>
        <p className="text-white/70 mb-4">Our Robot Name Generator creates unique, memorable names for all types of mechanical beings - from industrial robots and service droids to advanced AI systems and sentient mechanical lifeforms. Whether you're writing a sci-fi novel, designing a game, creating a character for roleplaying, or even naming a real-world robot project, our generator provides names that spark the imagination.</p>
      </Element>

      <Element name="good-name" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">What Makes a Good Robot Name?</h2>
        <p className="text-white/70 mb-4">Effective robot names often share certain qualities that make them memorable and fitting:</p>
        <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
          <li>Alphanumeric combinations that suggest model numbers or production series</li>
          <li>Acronyms that spell out words related to the robot's function</li>
          <li>Human-like names that humanize more advanced or sentient robots</li>
          <li>Names that reflect the robot's primary function or capability</li>
          <li>Sounds that evoke mechanical or electronic associations</li>
        </ul>
        <p className="text-white/70 mb-4">Different sci-fi traditions have established various naming conventions. Some use technical designations (C-3PO, R2-D2), others use human names (Data, Bishop), while others use function-based names (Robby, Robocop) or acronyms (WALL-E for Waste Allocation Load Lifter Earth-Class).</p>
        <p className="text-white/70">The best robot names reflect the level of sophistication, intended purpose, and personality of the mechanical character while fitting naturally within your fictional universe.</p>
      </Element>

      <Element name="how-to-use" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">How to Use the Generator</h2>
        <p className="text-white/70 mb-4">Using our Robot Name Generator is simple and intuitive:</p>
        <ol className="list-decimal list-inside text-white/70 mb-4 space-y-2">
          <li>Click the "Generate New Names" button at the top of this page</li>
          <li>Browse through the 10 generated robot names</li>
          <li>If you don't find a name you like, click again for 10 new options</li>
          <li>When you find a name you love, simply copy it for your use</li>
        </ol>
        <p className="text-white/70 mb-4">Feel free to modify any generated name to better fit your specific needs. You might want to adjust spelling, add numbers or symbols, or combine elements from different generated names.</p>
        <p className="text-white/70">Consider how your robot name might reflect the character's role in your story. Is it a military robot, a household assistant, an exploration droid, or a sentient being with its own goals and desires? The name should give hints about its nature and purpose.</p>
      </Element>

      <Element name="naming-traditions" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Robot Naming Traditions</h2>
        <p className="text-white/70 mb-4">Across science fiction and robotics, different traditions have emerged for naming mechanical beings:</p>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Technical Designations</h3>
          <p className="text-white/70">Many robots are given alphanumeric designations that suggest they are products of manufacturing (C-3PO, R2-D2, K-2SO). These names often include letters representing series or model types, followed by numbers indicating the specific unit.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Acronyms</h3>
          <p className="text-white/70">Clever acronyms that spell out words related to the robot's function are popular (WALL-E, TARS, CASE). These names often hide technical descriptions within more pronounceable and memorable words.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Humanized Names</h3>
          <p className="text-white/70">More advanced or sentient robots often receive human or human-like names (Data, Bishop, David). This naming convention suggests a higher level of sophistication and often implies the robot has or is developing human-like qualities.</p>
        </div>
        <div className="glass-panel p-6 mb-4">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Functional Names</h3>
          <p className="text-white/70">Some robots are simply named after their primary function or a characteristic (Robby, Ash, Baymax). These straightforward names immediately communicate something essential about the robot's purpose.</p>
        </div>
        <p className="text-white/70">When creating a robot character, consider which naming tradition best fits your fictional universe and the role the robot plays in your story.</p>
      </Element>

      <Element name="popular-names" className="mb-10">
        <h2 className="text-3xl font-display font-bold mb-4 text-white">Famous Robot Names</h2>
        <p className="text-white/70 mb-4">Throughout science fiction, certain robot names have become iconic. While our generator creates unique names, these famous examples from literature, film, and games can provide inspiration:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Classic Robot Characters</h3>
            <ul className="text-white/70 space-y-1">
              <li><strong>R2-D2 & C-3PO</strong> (Star Wars) - The iconic droid duo</li>
              <li><strong>HAL 9000</strong> (2001: A Space Odyssey) - The rogue AI system</li>
              <li><strong>Data</strong> (Star Trek) - The android seeking humanity</li>
              <li><strong>Robby the Robot</strong> (Forbidden Planet) - Classic 50s sci-fi robot</li>
              <li><strong>WALL-E</strong> (WALL-E) - The waste-collecting robot who falls in love</li>
              <li><strong>T-800</strong> (Terminator) - Arnold Schwarzenegger's killer robot</li>
              <li><strong>Optimus Prime</strong> (Transformers) - Leader of the Autobots</li>
              <li><strong>Marvin</strong> (Hitchhiker's Guide) - The paranoid android</li>
              <li><strong>Gort</strong> (The Day the Earth Stood Still) - Powerful alien robot</li>
              <li><strong>Johnny 5</strong> (Short Circuit) - Robot who gains sentience</li>
            </ul>
          </div>
          <div className="glass-panel p-4">
            <h3 className="text-lg font-display font-bold mb-2 text-white">Modern Robot Characters</h3>
            <ul className="text-white/70 space-y-1">
              <li><strong>Baymax</strong> (Big Hero 6) - Healthcare companion robot</li>
              <li><strong>GLaDOS</strong> (Portal) - Malevolent AI test supervisor</li>
              <li><strong>Legion</strong> (Mass Effect) - Geth platform seeking understanding</li>
              <li><strong>BB-8</strong> (Star Wars) - Spherical astromech droid</li>
              <li><strong>K-2SO</strong> (Rogue One) - Reprogrammed Imperial security droid</li>
              <li><strong>Dolores</strong> (Westworld) - Host who achieves consciousness</li>
              <li><strong>Ava</strong> (Ex Machina) - Advanced AI in humanoid form</li>
              <li><strong>TARS & CASE</strong> (Interstellar) - Adaptable military robots</li>
              <li><strong>Ultron</strong> (Marvel) - AI with destructive goals</li>
              <li><strong>Chappie</strong> (Chappie) - Police robot who develops sentience</li>
            </ul>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-6">
          <h3 className="text-xl font-display font-bold mb-2 text-white">Robot Types and Naming Patterns</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-white mb-1">Industrial/Service Robots</h4>
              <p className="text-white/70 mb-2">Often have functional, alphanumeric names:</p>
              <ul className="text-white/70 space-y-1">
                <li>UR-10 (Universal Robots)</li>
                <li>ASIMO (Honda)</li>
                <li>Roomba (iRobot)</li>
                <li>Spot (Boston Dynamics)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">AI Systems</h4>
              <p className="text-white/70 mb-2">Tend toward human-like names or acronyms:</p>
              <ul className="text-white/70 space-y-1">
                <li>JARVIS (Iron Man)</li>
                <li>Samantha (Her)</li>
                <li>VIKI (I, Robot)</li>
                <li>Mother (Alien)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className="text-white/70">These iconic robot names have become part of our cultural lexicon because they effectively communicate the nature, function, and personality of their characters. When naming your own robots, consider how the name might hint at the character's capabilities, origin, and role in your narrative.</p>
      </Element>
    </GeneratorPage>
  );
};

export default RobotGenerator; 