import React from 'react';
import { Camera, Brain, BarChart2, Zap } from 'lucide-react';

// ─── Problem Strip ───────────────────────────────────────────
export const ProblemStrip: React.FC = () => {
  const stats = [
    { num: '40%', desc: 'of global crop production destroyed by pests annually', src: 'FAO, 2023' },
    { num: 'Hours', desc: 'lost per week to manual scouting in each greenhouse', src: 'GreenMethods, 2022' },
    { num: '<60%', desc: 'effective pest coverage with conventional uniform spraying', src: 'EPA, 2021' },
  ];

  return (
    <div className="stat-strip" style={{
      background: 'linear-gradient(90deg, #0d1821, #0d2818)',
      borderTop: '1px solid rgba(26,184,212,0.1)',
      borderBottom: '1px solid rgba(74,222,128,0.1)',
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
    }}>
      {stats.map((s, i) => (
        <div key={i} className={`stat-item ${i < 2 ? 'stat-border' : ''}`} style={{
          padding: '48px 5%', textAlign: 'center',
        }}>
          <div style={{
            fontFamily: '"DM Serif Display", serif', fontSize: '3.2rem',
            background: 'linear-gradient(135deg, #1ab8d4, #4ade80)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            lineHeight: 1, marginBottom: '12px',
          }}>{s.num}</div>
          <p style={{ fontSize: '14px', color: 'rgba(226,232,240,0.6)', lineHeight: 1.6 }}>{s.desc}</p>
          <p style={{ fontSize: '11px', color: 'rgba(226,232,240,0.25)', marginTop: '6px' }}>{s.src}</p>
        </div>
      ))}
      <style>{`
        .stat-strip { }
        .stat-border { border-right: 1px solid rgba(26,184,212,0.08); }
        @media (max-width: 768px) {
          .stat-strip { grid-template-columns: 1fr !important; }
          .stat-border { border-right: none !important; border-bottom: 1px solid rgba(26,184,212,0.08); }
          .stat-item { padding: 32px 8% !important; }
        }
      `}</style>
    </div>
  );
};

// ─── How It Works ────────────────────────────────────────────
export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Camera size={20} />, num: '01', title: 'Capture',
      desc: 'iPhone cameras mounted on greenhouse rails continuously capture high-resolution leaf imagery throughout the canopy.',
    },
    {
      icon: <Brain size={20} />, num: '02', title: 'Detect',
      desc: 'Images are processed through our fine-tuned YOLOv8 model, detecting aphids, spider mites and beneficial insects with bounding boxes and density maps.',
    },
    {
      icon: <BarChart2 size={20} />, num: '03', title: 'Decide',
      desc: 'The dashboard surfaces pest counts by type, leaf area density (aphids/cm²) and actionable spray recommendations with no expertise required.',
    },
    {
      icon: <Zap size={20} />, num: '04', title: 'Spray',
      desc: 'Our automated sprayer targets only affected zones, protecting beneficial insects while reducing chemical use compared to uniform spraying.',
    },
  ];

  return (
    <section id="how-it-works" className="section-pad" style={{ background: 'var(--slate-mid)' }}>
      <SectionLabel>How it works</SectionLabel>
      <SectionTitle>AI sees what humans miss</SectionTitle>
      <SectionSub>
        PPG combines camera-based detection with precision automated spraying — a seamless,
        plug-and-play system for commercial greenhouses.
      </SectionSub>

      <div style={{ marginTop: '60px' }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            display: 'flex', gap: '20px', padding: '24px 0',
            borderBottom: i < steps.length - 1 ? '1px solid rgba(26,184,212,0.1)' : 'none',
          }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
              background: 'linear-gradient(135deg, rgba(14,107,124,0.4), rgba(26,184,212,0.2))',
              border: '1px solid rgba(26,184,212,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#1ab8d4',
            }}>
              {s.icon}
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#1ab8d4', fontWeight: 600, marginBottom: '4px', letterSpacing: '1px' }}>{s.num}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(226,232,240,0.55)', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── Comparison ───────────────────────────────────────────────
export const Comparison: React.FC = () => {
  const rows = [
    { feature: 'Detection method', old: 'Manual scouting', ppg: 'Camera + AI (real-time)' },
    { feature: 'Spray application', old: 'Uniform blanket spray', ppg: 'Precision zone targeting' },
    { feature: 'Data & reporting', old: 'Pencil & paper logs', ppg: 'Cloud dashboard + analytics' },
    { feature: 'Beneficial insects', old: 'Harmed by uniform spray', ppg: 'Protected — AI identifies them' },
    { feature: 'Labor requirement', old: 'High — hours per week', ppg: 'Minimal — automated alerts' },
  ];

  return (
    <section id="comparison" className="section-pad" style={{ background: 'rgba(13,24,33,0.8)' }}>
      <SectionLabel>The difference</SectionLabel>
      <SectionTitle>Current methods vs. PPG</SectionTitle>
      <SectionSub>A side-by-side look at traditional greenhouse pest management against the PPG system.</SectionSub>

      {/* Desktop table */}
      <div className="comp-table-desktop" style={{
        marginTop: '50px', borderRadius: '16px', overflow: 'hidden',
        border: '1px solid rgba(26,184,212,0.15)',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
          background: 'rgba(13,24,33,0.95)',
          borderBottom: '1px solid rgba(26,184,212,0.15)',
        }}>
          {['Feature', 'Current standard', '✦ PrecisionPest Guard'].map((h, i) => (
            <div key={i} style={{
              padding: '16px 24px', fontSize: '13px', fontWeight: 600,
              color: i === 2 ? '#4ade80' : i === 1 ? 'rgba(226,232,240,0.45)' : 'rgba(226,232,240,0.3)',
            }}>{h}</div>
          ))}
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
            background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.01)',
            borderBottom: i < rows.length - 1 ? '1px solid rgba(26,184,212,0.06)' : 'none',
          }}>
            <div style={{ padding: '16px 24px', fontSize: '13px', color: 'rgba(226,232,240,0.45)' }}>{r.feature}</div>
            <div style={{ padding: '16px 24px', fontSize: '14px', color: '#f87171' }}>{r.old}</div>
            <div style={{ padding: '16px 24px', fontSize: '14px', color: '#4ade80', fontWeight: 500 }}>{r.ppg}</div>
          </div>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="comp-table-mobile" style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.03)', borderRadius: '12px',
            border: '1px solid rgba(26,184,212,0.1)', overflow: 'hidden',
          }}>
            <div style={{ padding: '10px 16px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px', color: 'rgba(226,232,240,0.4)', textTransform: 'uppercase', borderBottom: '1px solid rgba(26,184,212,0.08)' }}>
              {r.feature}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ padding: '14px 16px', borderRight: '1px solid rgba(26,184,212,0.08)' }}>
                <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.3)', marginBottom: '4px' }}>Current</div>
                <div style={{ fontSize: '13px', color: '#f87171' }}>{r.old}</div>
              </div>
              <div style={{ padding: '14px 16px' }}>
                <div style={{ fontSize: '10px', color: 'rgba(74,222,128,0.6)', marginBottom: '4px' }}>PPG</div>
                <div style={{ fontSize: '13px', color: '#4ade80', fontWeight: 500 }}>{r.ppg}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .section-pad { padding: 100px 5%; }
        .comp-table-mobile { display: none !important; }
        @media (max-width: 768px) {
          .section-pad { padding: 70px 5% !important; }
          .comp-table-desktop { display: none !important; }
          .comp-table-mobile { display: flex !important; }
        }
      `}</style>
    </section>
  );
};

// ─── Shared helpers ───────────────────────────────────────────
export const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p style={{
    fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
    color: '#1ab8d4', marginBottom: '14px',
  }}>{children}</p>
);
export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 style={{
    fontFamily: '"DM Serif Display", serif',
    fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)', color: '#e2e8f0',
    lineHeight: 1.2, letterSpacing: '-0.3px',
  }}>{children}</h2>
);
export const SectionSub: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p style={{
    fontSize: '16px', color: 'rgba(226,232,240,0.55)', lineHeight: 1.7,
    marginTop: '14px',
  }}>{children}</p>
);