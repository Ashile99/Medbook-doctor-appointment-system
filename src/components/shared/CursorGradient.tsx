'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorGradient() {
  const trailCount = 15;
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Use Array.from to create unique object references for each trail point
  const coords = useRef(Array.from({ length: trailCount }, () => ({ x: 0, y: 0 })));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
    
    let rafId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    // Initialize coords to center of screen to avoid flying from top-left
    coords.current.forEach(point => {
      point.x = targetX;
      point.y = targetY;
    });

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      let x = targetX;
      let y = targetY;

      coords.current.forEach((point, index) => {
        // Physics lerp: each point follows the one in front of it
        const dx = x - point.x;
        const dy = y - point.y;
        
        point.x += dx * 0.3; // 0.3 determines how "stiff" the trail is
        point.y += dy * 0.3;

        if (trailRefs.current[index]) {
          // Shrink the tail slightly towards the end
          const scale = 1 - (index / trailCount) * 0.5;
          trailRefs.current[index].style.transform = `translate3d(calc(${point.x}px - 50%), calc(${point.y}px - 50%), 0) scale(${scale})`;
        }

        // The next point follows this point
        x = point.x;
        y = point.y;
      });

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isClient) return null;

  return (
    <>
      <style>{`
        @keyframes blob-drift-1 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob-drift-2 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-50px, 30px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes blob-drift-3 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(40px, 40px) scale(1.05); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
      
      {/* Ambient Background Layer */}
      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-[#fafafa]">
        {/* Animated looping blob 1 */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[100px] opacity-40 mix-blend-multiply top-[-10%] left-[50%]"
          style={{
            background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 60%)',
            animation: 'blob-drift-1 15s infinite ease-in-out',
          }}
        />
        {/* Animated looping blob 2 */}
        <div 
          className="absolute w-[700px] h-[700px] rounded-full blur-[100px] opacity-30 mix-blend-multiply top-[50%] left-[10%]"
          style={{
            background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 60%)',
            animation: 'blob-drift-2 18s infinite ease-in-out',
          }}
        />
        {/* Animated looping blob 3 */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 mix-blend-multiply top-[40%] left-[70%]"
          style={{
            background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 60%)',
            animation: 'blob-drift-3 20s infinite ease-in-out',
          }}
        />
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 backdrop-blur-[80px] bg-white/40" />
      </div>

      {/* Cursor Tracking Overlay Layer - Visible over all tabs/layers with Trailing Effect */}
      <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
        {Array.from({ length: trailCount }).map((_, i) => {
          // Calculate opacity: head is bright, tail fades out. Reduced base opacity to 0.05 for subtlety.
          const opacity = 0.05 * Math.pow(1 - i / trailCount, 2); // non-linear fade
          
          return (
            <div 
              key={i}
              ref={el => { trailRefs.current[i] = el; }}
              className="absolute w-[400px] h-[400px] rounded-full blur-[40px] mix-blend-multiply"
              style={{
                opacity: opacity,
                background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 60%)',
                top: 0,
                left: 0,
                willChange: 'transform',
              }}
            />
          );
        })}
      </div>
    </>
  );
}
