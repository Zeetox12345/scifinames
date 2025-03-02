
import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkling: boolean;
  twinkleSpeed: number;
  twinkleDirection: boolean;
}

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };
    
    // Create stars
    const initStars = () => {
      const numStars = Math.floor((window.innerWidth * window.innerHeight) / 2000);
      stars.current = [];
      
      for (let i = 0; i < numStars; i++) {
        stars.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.1,
          twinkling: Math.random() > 0.7,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleDirection: Math.random() > 0.5,
        });
      }
    };
    
    // Draw stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.current.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        // Choose color based on size for a more realistic starfield
        let color;
        if (star.size < 0.6) {
          color = `rgba(248, 250, 252, ${star.opacity})`; // White for small stars
        } else if (star.size < 1.2) {
          color = `rgba(224, 242, 254, ${star.opacity})`; // Light blue for medium stars
        } else {
          color = `rgba(243, 232, 255, ${star.opacity})`; // Light purple for large stars
        }
        
        ctx.fillStyle = color;
        ctx.fill();
        
        // Twinkling effect
        if (star.twinkling) {
          if (star.twinkleDirection) {
            star.opacity += star.twinkleSpeed;
            if (star.opacity >= 0.9) {
              star.twinkleDirection = false;
            }
          } else {
            star.opacity -= star.twinkleSpeed;
            if (star.opacity <= 0.2) {
              star.twinkleDirection = true;
            }
          }
        }
        
        // Subtle movement
        star.y += star.speed;
        
        // Wrap around when star reaches bottom
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId.current = requestAnimationFrame(drawStars);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    drawStars();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70"
    />
  );
};

export default StarfieldBackground;
