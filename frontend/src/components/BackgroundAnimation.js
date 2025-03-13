import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.baseSpeed = 0.3;
        this.speed = this.baseSpeed;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 50%)`;
      }

      update() {
        // Mouse interaction
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          this.speed = this.baseSpeed + (200 - dist) / 200;
        } else {
          this.speed = this.baseSpeed;
        }

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

        // Add connecting lines to nearby particles
        particles.forEach(p => {
          const dx = x - ((p.x - canvas.width / 2) * (1000 / p.z) + canvas.width / 2);
          const dy = y - ((p.y - canvas.height / 2) * (1000 / p.z) + canvas.height / 2);
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(
              (p.x - canvas.width / 2) * (1000 / p.z) + canvas.width / 2,
              (p.y - canvas.height / 2) * (1000 / p.z) + canvas.height / 2
            );
            ctx.strokeStyle = `rgba(74, 144, 226, ${(1 - dist / 100) * 0.2})`;
            ctx.stroke();
          }
        });
      }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

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

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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

export default BackgroundAnimation; 