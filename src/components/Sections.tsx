import React from 'react';

export const ProblemStrip: React.FC = () => {
  const stats = [
    { num: '40%', desc: 'of global crop production destroyed by pests annually', src: 'FAO, 2023' },
    { num: 'Hours', desc: 'lost per week to manual scouting in each greenhouse', src: 'GreenMethods, 2022' },
    { num: '<60%', desc: 'effective pest coverage with conventional uniform spraying', src: 'EPA, 2021' },
  ];

  return (
    <div
      className="stat-strip"
      style={{
        background: 'linear-gradient(90deg, #0d1821, #0d2818)',
        borderTop: '1px solid rgba(26,184,212,0.1)',
        borderBottom: '1px solid rgba(74,222,128,0.1)',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className={`stat-item ${i < 2 ? 'stat-border' : ''}`}
          style={{ padding: '48px 5%', textAlign: 'center' }}
        >
          <div
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: '3.2rem',
              background: 'linear-gradient(135deg, #1ab8d4, #4ade80)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              marginBottom: '12px',
            }}
          >
            {s.num}
          </div>
          <p style={{ fontSize: '14px', color: 'rgba(226,232,240,0.6)', lineHeight: 1.6 }}>{s.desc}</p>
          <p style={{ fontSize: '11px', color: 'rgba(226,232,240,0.25)', marginTop: '6px' }}>{s.src}</p>
        </div>
      ))}

      <style>{`
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

export const HowItWorks: React.FC = () => {
  const steps = [
    { num: '01', title: 'Capture', desc: 'Continuous imaging across your greenhouse.' },
    { num: '02', title: 'Detect', desc: 'AI identifies pest species and severity in real time.' },
    { num: '03', title: 'Decide', desc: 'Instant actionable alerts, no expertise needed.' },
    { num: '04', title: 'Spray', desc: "Targeted treatment only where it's needed." },
  ];

  return (
    <section id="how-it-works" className="section-pad" style={{ background: 'var(--slate-mid)' }}>
      <SectionLabel>How it works</SectionLabel>
      <SectionTitle>AI sees what humans miss</SectionTitle>
      <SectionSub>
        PPG combines automated detection with precision spraying, creating a seamless system for commercial greenhouses.
      </SectionSub>

      <div
        className="hiw-card"
        style={{
          marginTop: '60px',
          border: '1px solid rgba(26,184,212,0.15)',
          borderRadius: '18px',
          padding: '48px',
          background: 'rgba(13,24,33,0.45)',
          overflow: 'hidden',
        }}
      >
        <div
          className="hiw-steps-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              className="hiw-step"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '32px',
                padding:
                  i === 0
                    ? '0 48px 40px 0'
                    : i === 1
                      ? '0 0 40px 48px'
                      : i === 2
                        ? '40px 48px 0 0'
                        : '40px 0 0 48px',
                borderBottom: i < 2 ? '1px solid rgba(26,184,212,0.1)' : 'none',
                borderRight: i % 2 === 0 ? '1px solid rgba(26,184,212,0.1)' : 'none',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(4rem, 8vw, 6rem)',
                  fontWeight: 700,
                  lineHeight: 0.85,
                  color: 'rgba(226,232,240,0.18)',
                  letterSpacing: '-4px',
                  flexShrink: 0,
                }}
              >
                {s.num}
              </div>

              <div style={{ paddingTop: '8px' }}>
                <h3
                  style={{
                    fontSize: 'clamp(1.35rem, 2vw, 1.9rem)',
                    fontWeight: 700,
                    color: '#e2e8f0',
                    marginBottom: '10px',
                    lineHeight: 1.1,
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontSize: 'clamp(1rem, 1.3vw, 1.35rem)',
                    color: 'rgba(226,232,240,0.55)',
                    lineHeight: 1.25,
                    fontWeight: 500,
                    maxWidth: '390px',
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .section-pad { padding: 100px 5%; }

        @media (max-width: 768px) {
          .section-pad { padding: 70px 5% !important; }

          .hiw-card {
            padding: 28px !important;
          }

          .hiw-steps-grid {
            grid-template-columns: 1fr !important;
          }

          .hiw-step {
            border-right: none !important;
            border-bottom: 1px solid rgba(26,184,212,0.1) !important;
            padding: 28px 0 !important;
            gap: 22px !important;
          }

          .hiw-step:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export const Comparison: React.FC = () => {
  const rows = [
    { feature: 'Detection', old: 'Manual scouting', ppg: 'Automated AI detection' },
    { feature: 'Spraying', old: 'Uniform spraying', ppg: 'Targeted zones only' },
    { feature: 'Reporting', old: 'Manual logs', ppg: 'Real-time dashboard' },
    { feature: 'Beneficial insects', old: 'At risk', ppg: 'Protected' },
    { feature: 'Labor', old: 'High', ppg: 'Minimal' },
  ];

  return (
    <section id="comparison" className="section-pad" style={{ background: 'rgba(13,24,33,0.8)' }}>
      <SectionLabel>The difference</SectionLabel>
      <SectionTitle>Current methods vs. PPG</SectionTitle>
      <SectionSub>A side-by-side look at traditional greenhouse pest management against the PPG system.</SectionSub>

      <div
        className="comp-table-desktop"
        style={{
          marginTop: '50px',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(26,184,212,0.15)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            background: 'rgba(13,24,33,0.95)',
            borderBottom: '1px solid rgba(26,184,212,0.15)',
          }}
        >
          {['Feature', 'Current standard', '✦ PrecisionPest Guard'].map((h, i) => (
            <div
              key={i}
              style={{
                padding: '18px 24px',
                fontSize: '13px',
                fontWeight: 600,
                color: i === 2 ? '#4ade80' : i === 1 ? 'rgba(226,232,240,0.45)' : 'rgba(226,232,240,0.3)',
                textAlign: i === 0 ? 'left' : 'center',
              }}
            >
              {h}
            </div>
          ))}
        </div>

        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.01)',
              borderBottom: i < rows.length - 1 ? '1px solid rgba(26,184,212,0.06)' : 'none',
            }}
          >
            <div style={{ padding: '18px 24px', fontSize: '15px', color: 'rgba(226,232,240,0.45)', textAlign: 'left' }}>{r.feature}</div>
            <div style={{ padding: '18px 24px', fontSize: '15px', color: '#f87171', textAlign: 'center', fontWeight: 500 }}>{r.old}</div>
            <div style={{ padding: '18px 24px', fontSize: '15px', color: '#4ade80', fontWeight: 600, textAlign: 'center' }}>{r.ppg}</div>
          </div>
        ))}
      </div>

      <div className="comp-table-mobile" style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(26,184,212,0.1)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                padding: '10px 16px',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.5px',
                color: 'rgba(226,232,240,0.4)',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(26,184,212,0.08)',
              }}
            >
              {r.feature}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <div style={{ padding: '14px 16px', borderRight: '1px solid rgba(26,184,212,0.08)', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: 'rgba(226,232,240,0.3)', marginBottom: '4px' }}>Current</div>
                <div style={{ fontSize: '13px', color: '#f87171' }}>{r.old}</div>
              </div>
              <div style={{ padding: '14px 16px', textAlign: 'center' }}>
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

export const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p
    style={{
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: '#1ab8d4',
      marginBottom: '14px',
    }}
  >
    {children}
  </p>
);

export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2
    style={{
      fontFamily: '"DM Serif Display", serif',
      fontSize: 'clamp(2rem, 4vw, 3.2rem)',
      color: '#e2e8f0',
      lineHeight: 1.2,
      letterSpacing: '-0.3px',
    }}
  >
    {children}
  </h2>
);

export const SectionSub: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p
    style={{
      fontSize: 'clamp(15px, 1.2vw, 18px)',
      color: 'rgba(226,232,240,0.55)',
      lineHeight: 1.7,
      marginTop: '14px',
    }}
  >
    {children}
  </p>
);
