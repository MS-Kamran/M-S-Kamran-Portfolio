import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const NeuralNetwork = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.speed = 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.z -= this.speed;
        if (this.z <= 1) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }

      draw() {
        const scale = 1000 / (this.z);
        const x = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = this.size * scale;

        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.1, size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 144, 226, ${Math.min(1, 1 - this.z / 1000)})`;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(5, 11, 24, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle scroll
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        navigate('/about');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050b18]">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.8 }}
      />
    </div>
  );
};

export default NeuralNetwork; 