import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
}

const StarParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);

  const colors = ['#dcb8c0', '#ffffff', '#ede0e3']; // Accent pink, white, pale pink

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const spawnParticles = (x: number, y: number, count = 5) => {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 2 + 1;
            particles.current.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 1, // Slight up drift
                life: 1.0,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    };

    // Draw Star Shape
    const drawStar = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number, color: string, alpha: number) => {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        
        // Glow effect
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        p.vy += 0.05; // Gravity
        
        if (p.life <= 0) {
            particles.current.splice(i, 1);
        } else {
            drawStar(p.x, p.y, 4, p.size * p.life, (p.size * p.life) / 2.5, p.color, p.life);
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();

    // Event Listeners
    const handleClick = (e: MouseEvent) => {
        spawnParticles(e.clientX, e.clientY, 8);
    };

    const handleTouch = (e: TouchEvent) => {
        // Handle both start and move for "swipe" effect
        for (let i = 0; i < e.touches.length; i++) {
            spawnParticles(e.touches[i].clientX, e.touches[i].clientY, 2);
        }
    };

    // Handle Scroll - Spawn random particles
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    const handleScroll = () => {
        // Throttle to avoid too many particles
        if(!scrollTimeout) {
            const x = Math.random() * window.innerWidth;
            const y = window.innerHeight; // From bottom
            spawnParticles(x, y, 2);
            scrollTimeout = setTimeout(() => {
                scrollTimeout = null; 
            }, 50);
        }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('touchmove', handleTouch);
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('wheel', handleScroll);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
};

export default StarParticles;