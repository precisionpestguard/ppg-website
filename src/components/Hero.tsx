import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string;
}

interface HeroProps { onRequestPilot: () => void; }

const Hero: React.FC<HeroProps> = ({ onRequestPilot: _onRequestPilot }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#1ab8d4', '#4ade80', '#22c55e', '#0e6b7c'];
    particlesRef.current = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ps = particlesRef.current;
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = `rgba(26,184,212,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      ps.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, #0d1821 0%, #1a2332 40%, #0d2818 100%)',
      display: 'flex', alignItems: 'center',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

      <div style={{
        position: 'absolute', top: '20%', right: '15%', width: '400px', height: '400px',
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(26,184,212,0.08) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '10%', width: '350px', height: '350px',
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(74,222,128,0.07) 0%, transparent 70%)',
      }} />

      <div className="hero-grid" style={{
        position: 'relative', zIndex: 1, width: '100%',
        padding: '100px max(5%, calc((100% - 1400px) / 2)) 80px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center',
      }}>
        {/* Left content */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(26,184,212,0.12)', border: '1px solid rgba(26,184,212,0.3)',
            color: '#1ab8d4', padding: '6px 16px', borderRadius: '100px',
            fontSize: '12px', fontWeight: 500, letterSpacing: '0.8px',
            textTransform: 'uppercase', marginBottom: '24px',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#1ab8d4', boxShadow: '0 0 8px #1ab8d4',
              animation: 'ppgPulse 2s infinite',
            }} />
            AI-Powered Pest Management
          </div>

          <h1 style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            color: '#e2e8f0', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: '20px',
          }}>
            Spot the pest.<br /> 
            <em style={{ color: '#4ade80', fontStyle: 'italic' }}>Save the harvest.</em>
          </h1>

          <p style={{
            fontSize: '16px', color: 'rgba(226,232,240,0.65)',
            lineHeight: 1.75, maxWidth: '480px', marginBottom: '40px',
          }}>
            PrecisionPest Guard uses computer vision to detect pests early and guide 
            targeted spraying, helping greenhouse growers reduce chemical use, save 
            scouting time and protect crop yield.
          </p>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#how-it-works" style={{
              color: '#e2e8f0', textDecoration: 'none',
              fontSize: '15px', display: 'flex', alignItems: 'center', gap: '6px',
              whiteSpace: 'nowrap', padding: '13px 24px', borderRadius: '8px',
              border: '1px solid rgba(226,232,240,0.25)',
              transition: 'border-color 0.2s, color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'white';
                (e.currentTarget as HTMLElement).style.borderColor = 'white';
                (e.currentTarget as HTMLElement).style.color = '#0d1821';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(226,232,240,0.25)';
                (e.currentTarget as HTMLElement).style.color = '#e2e8f0';
              }}>
              See how it works
            </a>
          </div>
        </div>

        {/* Right: detection card */}
        <DetectionCard />
      </div>

      <style>{`
        @keyframes ppgPulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
        @keyframes scanLine { 0% { top:0; opacity:0; } 15% { opacity:1; } 85% { opacity:1; } 100% { top:100%; opacity:0; } }
        @keyframes boxPulse { 0%,100% { opacity:0.5; } 50% { opacity:1; } }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 100px 5% 60px !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

const DetectionCard: React.FC = () => {
  const detections = [
    { label: 'Aphid ×12', conf: 0.94, color: '#4ade80', x: '6%',  y: '10%', w: '34%', h: '52%' },
    { label: 'Spider mite', conf: 0.88, color: '#e9c46a', x: '36%', y: '45%', w: '32%', h: '40%' },
    { label: 'Beneficial ✓', conf: 0.91, color: '#1ab8d4', x: '62%', y: '8%',  w: '32%', h: '50%' },
  ];

  return (
    <div style={{
      background: 'rgba(13,24,33,0.8)', border: '1px solid rgba(26,184,212,0.2)',
      borderRadius: '16px', padding: '24px', backdropFilter: 'blur(12px)',
      boxShadow: '0 0 40px rgba(26,184,212,0.08)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <span style={{ fontSize: '13px', color: 'rgba(226,232,240,0.6)', fontWeight: 500 }}>Live detection scan</span>
        <span style={{
          background: 'rgba(74,222,128,0.15)', color: '#4ade80',
          fontSize: '11px', padding: '3px 10px', borderRadius: '100px', fontWeight: 500,
          display: 'flex', alignItems: 'center', gap: '5px',
        }}>
          <span style={{ width: '5px', height: '5px', background: '#4ade80', borderRadius: '50%', animation: 'ppgPulse 1.5s infinite' }} />
          Active
        </span>
      </div>

      <div style={{
        position: 'relative', height: '200px', borderRadius: '10px',
        background: 'rgba(0,0,0,0.4)', overflow: 'hidden', marginBottom: '16px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(26,184,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,184,212,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        <div style={{
          position: 'absolute', width: '100%', height: '1.5px',
          background: 'linear-gradient(90deg, transparent, #1ab8d4, transparent)',
          animation: 'scanLine 2.5s ease-in-out infinite',
        }} />
        {detections.map((d, i) => (
          <div key={i} style={{
            position: 'absolute', left: d.x, top: d.y, width: d.w, height: d.h,
            border: `1.5px solid ${d.color}`, borderRadius: '3px',
            animation: `boxPulse ${2 + i * 0.5}s ease-in-out infinite`,
          }}>
            <span style={{
              position: 'absolute', top: '-1.5px', left: '-1.5px',
              background: d.color, color: '#0d1821',
              fontSize: '9px', fontWeight: 700, padding: '2px 6px',
              borderRadius: '2px 2px 2px 0', whiteSpace: 'nowrap',
            }}>
              {d.label} · {d.conf}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {[
          { val: '> 80%', label: 'Detection accuracy', color: '#4ade80' },
          { val: '40%↓', label: 'Chemical reduction', color: '#1ab8d4' },
          { val: '3', label: 'Species detected', color: '#e9c46a' },
        ].map((m, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)', borderRadius: '8px',
            padding: '12px 8px', textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <span style={{
              display: 'block', fontFamily: '"DM Serif Display", serif',
              fontSize: '18px', color: m.color, marginBottom: '3px',
            }}>{m.val}</span>
            <span style={{ fontSize: '10px', color: 'rgba(226,232,240,0.45)', lineHeight: 1.3 }}>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;