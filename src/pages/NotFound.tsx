
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import CustomButton from "@/components/ui/CustomButton";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <StarfieldBackground />
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="glass-panel p-8 md:p-12 max-w-xl w-full text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 text-white">404</h1>
          
          <div className="h-1 w-16 bg-neon-blue mx-auto mb-6 rounded-full"></div>
          
          <h2 className="text-2xl md:text-3xl font-display mb-4 text-white">
            Signal <span className="text-neon-blue">Lost</span>
          </h2>
          
          <p className="text-lg text-white/70 mb-8">
            This cosmic sector appears to be uncharted. The coordinates you're looking for might have been moved to another system or never existed in this universe.
          </p>
          
          <CustomButton to="/" size="lg" icon={<Home size={18} />}>
            Return to Base
          </CustomButton>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
