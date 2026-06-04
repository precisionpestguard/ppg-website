import React from 'react';
import { ChevronRight, Users, Home, Clock } from 'lucide-react';
import { SectionLabel, SectionTitle, SectionSub } from './Sections';

// ─── Validation ───────────────────────────────────────────────
export const Validation: React.FC = () => {
  const cards = [
    {
      icon: <Users size={20} />, title: '135+ farmer interviews',
      desc: 'Conducted across B.C. and Ontario greenhouses validating the core pain point of labor shortage and pesticide cost.',
    },
    {
      icon: <Home size={20} />, title: '2 B.C. greenhouse pilots',
      desc: 'Active pilot partnerships with commercial greenhouses in British Columbia testing real-world detection and spraying performance.',
    },
    {
      icon: <Clock size={20} />, title: 'Automation partner secured',
      desc: 'Partnership with an established automation company to co-develop and integrate the precision sprayer hardware system.',
    },
  ];

  return (
    <section id="validation" className="section-pad" style={{ background: 'var(--slate-mid)' }}>
      <SectionLabel>Validation</SectionLabel>
      <SectionTitle>Built with growers, for growers</SectionTitle>
      <SectionSub>
        PPG is backed by extensive field research, real pilot data and expert partnerships
        across British Columbia.
      </SectionSub>

      <div className="val-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '50px',
      }}>
        {cards.map((c, i) => (
          <div key={i} style={{
            background: 'rgba(13,24,33,0.6)', borderRadius: '14px', padding: '28px 24px',
            border: '1px solid rgba(26,184,212,0.12)',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,184,212,0.35)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 24px rgba(26,184,212,0.06)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,184,212,0.12)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(14,107,124,0.5), rgba(26,184,212,0.2))',
              border: '1px solid rgba(26,184,212,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#1ab8d4', marginBottom: '18px',
            }}>
              {c.icon}
            </div>
            <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>{c.title}</h3>
            <p style={{ fontSize: '14px', color: 'rgba(226,232,240,0.5)', lineHeight: 1.65 }}>{c.desc}</p>
          </div>
        ))}
      </div>

      <div style={{
        background: 'linear-gradient(135deg, rgba(14,107,124,0.25), rgba(45,122,79,0.2))',
        border: '1px solid rgba(26,184,212,0.2)', borderRadius: '14px',
        padding: '40px', marginTop: '40px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-10px', left: '24px',
          fontFamily: '"DM Serif Display", serif', fontSize: '6rem',
          color: '#4ade80', opacity: 0.3, lineHeight: 1, pointerEvents: 'none',
        }}>"</div>
        <p style={{
          fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: '#e2e8f0', lineHeight: 1.6, fontStyle: 'italic',
          maxWidth: '700px', marginBottom: '16px', position: 'relative',
        }}>
          If it scouts and sprays, I'll sign up tomorrow.
        </p>
        <p style={{ fontSize: '13px', color: 'rgba(226,232,240,0.45)' }}>
          — Greenhouse Operator, Abbotsford, B.C.
        </p>
      </div>

      <style>{`
        .val-grid { }
        @media (max-width: 768px) {
          .val-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ─── Market ───────────────────────────────────────────────────
export const Market: React.FC = () => {
  const tiers = [
    { label: 'TAM', amount: '$4B',   desc: 'Global AI & smart greenhouse automation', pct: 100, color: '#1ab8d4' },
    { label: 'SAM', amount: '$900M', desc: 'North American smart greenhouse & automation spend', pct: 22.5, color: '#4ade80' },
    { label: 'SOM', amount: '$100M', desc: 'Canadian commercial greenhouse automation opportunity', pct: 2.5, color: '#e9c46a' },
  ];

  return (
    <section id="market" className="section-pad" style={{ background: 'rgba(13,24,33,0.7)' }}>
      <SectionLabel>Market opportunity</SectionLabel>
      <SectionTitle>A $4B global opportunity</SectionTitle>
      <SectionSub>
        The AI smart greenhouse automation market is growing rapidly. PPG enters with a focused
        Canadian beachhead and a clear path to North American scale.
      </SectionSub>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '50px' }}>
        {tiers.map((t, i) => (
          <div key={i} className="market-tier" style={{
            background: 'rgba(255,255,255,0.03)', borderRadius: '12px',
            border: '1px solid rgba(26,184,212,0.1)', padding: '24px 28px',
            display: 'grid', gridTemplateColumns: '48px 1fr auto',
            alignItems: 'center', gap: '20px',
          }}>
            <span style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '1px',
              textTransform: 'uppercase', color: t.color,
            }}>{t.label}</span>

            <div>
              <p className="market-desc" style={{ fontSize: '13px', color: 'rgba(226,232,240,0.5)', marginBottom: '10px' }}>{t.desc}</p>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '100px' }}>
                <div style={{
                  height: '100%', borderRadius: '100px',
                  background: `linear-gradient(90deg, ${t.color}88, ${t.color})`,
                  width: `${t.pct}%`, boxShadow: `0 0 8px ${t.color}44`,
                }} />
              </div>
            </div>

            <span style={{
              fontFamily: '"DM Serif Display", serif', fontSize: '1.5rem',
              color: t.color, textAlign: 'right', whiteSpace: 'nowrap',
            }}>{t.amount}</span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .market-tier {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            padding: 20px !important;
          }
          .market-tier > span:last-child {
            text-align: left !important;
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  );
};

// ─── Roadmap ──────────────────────────────────────────────────
export const Roadmap: React.FC = () => {
  const phases = [
    {
      tag: '✓ Complete', tagStyle: { background: 'rgba(74,222,128,0.15)', color: '#4ade80' },
      title: 'Validation & Detection', year: '2024–2025',
      items: ['35+ greenhouse interviews conducted', 'AI detection prototype built', '85% detection accuracy achieved', 'Automation partner secured', 'Subscription model defined'],
      cardStyle: { borderColor: 'rgba(74,222,128,0.2)' },
    },
    {
      tag: 'In progress', tagStyle: { background: 'rgba(233,196,106,0.15)', color: '#e9c46a' },
      title: 'Automation & Field Testing', year: '2025–2026',
      items: ['Build automated spraying hardware', 'Integrate AI software + hardware', 'Field trials with 2 pilot greenhouses', 'Collect & publish performance data'],
      cardStyle: { borderColor: 'rgba(233,196,106,0.2)' },
    },
    {
      tag: 'Up next', tagStyle: { background: 'rgba(26,184,212,0.15)', color: '#1ab8d4' },
      title: 'Commercial Scale-Up', year: '2026–2027',
      items: ['Secure early adopter partnerships', 'Seed funding & grants', 'Hire mechanical engineer & sales lead', 'Regional expansion across Canada & NA'],
      cardStyle: { borderColor: 'rgba(26,184,212,0.2)' },
    },
  ];

  return (
    <section className="section-pad" style={{ background: 'var(--slate-mid)' }}>
      <SectionLabel>Roadmap</SectionLabel>
      <SectionTitle>Where we're headed</SectionTitle>
      <SectionSub>A clear, phased path from validated prototype to commercial scale.</SectionSub>

      <div className="roadmap-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '50px',
      }}>
        {phases.map((p, i) => (
          <div key={i} style={{
            background: 'rgba(13,24,33,0.6)', borderRadius: '14px', padding: '28px 24px',
            border: `1px solid ${p.cardStyle.borderColor}`,
          }}>
            <span style={{
              display: 'inline-block', fontSize: '11px', fontWeight: 700,
              letterSpacing: '1px', textTransform: 'uppercase',
              padding: '4px 12px', borderRadius: '100px', marginBottom: '18px',
              ...p.tagStyle,
            }}>{p.tag}</span>
            <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0', marginBottom: '4px' }}>{p.title}</h3>
            <p style={{ fontSize: '13px', color: 'rgba(226,232,240,0.4)', marginBottom: '18px' }}>{p.year}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {p.items.map((item, j) => (
                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'rgba(226,232,240,0.6)', lineHeight: 1.5 }}>
                  <ChevronRight size={14} style={{ flexShrink: 0, marginTop: '2px', color: '#1ab8d4' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .roadmap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ─── Team ─────────────────────────────────────────────────────
export const Team: React.FC = () => {
  const members = [
    {
      initials: 'IA', name: 'Ibtehal (Ibby) Al Sallaiy', role: 'Founder',
      bio: 'MBA in Climate Action & Sustainability, PhD in Food Technology. Leads business strategy, agriculture expertise, and stakeholder partnerships.',
      color: '#4ade80',
    },
    {
      initials: 'VM', name: 'Vineet Menon', role: 'Data Analyst',
      bio: 'MBA, MBAN & B.Tech Mechanical Engineering. Drives data science, business analytics, and AI model performance evaluation.',
      color: '#1ab8d4',
    },
    {
      initials: 'RA', name: 'Raghad Alabdalla', role: 'Software Engineer',
      bio: 'B.Computer Science. Builds and maintains the cloud pipeline, detection system, dashboard, and software integrations.',
      color: '#e9c46a',
    },
  ];

  return (
    <section id="team" className="section-pad" style={{
      background: 'linear-gradient(135deg, #0d1821, #0d2818)',
    }}>
      <SectionLabel>The team</SectionLabel>
      <h2 style={{
        fontFamily: '"DM Serif Display", serif',
        fontSize: 'clamp(1.8rem, 3.5vw, 2.7rem)', color: '#e2e8f0',
        lineHeight: 1.2, letterSpacing: '-0.3px',
      }}>Science, data, and engineering</h2>
      <p style={{ fontSize: '16px', color: 'rgba(226,232,240,0.5)', lineHeight: 1.7, maxWidth: '560px', marginTop: '14px' }}>
        A multidisciplinary founding team combining sustainability leadership, data science,
        and software engineering.
      </p>

      <div className="team-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '50px',
      }}>
        {members.map((m, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.04)', borderRadius: '14px', padding: '28px 24px',
            border: '1px solid rgba(26,184,212,0.12)', transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,184,212,0.3)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(26,184,212,0.12)'}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '50%',
              background: `linear-gradient(135deg, ${m.color}33, ${m.color}55)`,
              border: `2px solid ${m.color}66`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"DM Serif Display", serif', fontSize: '1.1rem',
              color: m.color, marginBottom: '16px',
            }}>{m.initials}</div>
            <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0', marginBottom: '3px' }}>{m.name}</h3>
            <p style={{ fontSize: '12px', color: m.color, fontWeight: 500, marginBottom: '10px' }}>{m.role}</p>
            <p style={{ fontSize: '13px', color: 'rgba(226,232,240,0.45)', lineHeight: 1.65 }}>{m.bio}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

// ─── CTA ──────────────────────────────────────────────────────
export const CTA: React.FC<{ onRequestPilot: () => void }> = ({ onRequestPilot }) => (
  <section className="section-pad" style={{
    textAlign: 'center',
    background: 'linear-gradient(135deg, rgba(14,107,124,0.4), rgba(45,122,79,0.3))',
    borderTop: '1px solid rgba(26,184,212,0.15)',
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(circle at 50% 50%, rgba(26,184,212,0.06) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />
    <div style={{ position: 'relative' }}>
      <h2 style={{
        fontFamily: '"DM Serif Display", serif',
        fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#e2e8f0',
        maxWidth: '640px', margin: '0 auto 16px', lineHeight: 1.2,
      }}>
        Ready to protect your greenhouse?
      </h2>
      <p style={{ color: 'rgba(226,232,240,0.55)', fontSize: '16px', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
        Join our pilot program — be among the first to deploy AI-powered pest management.
      </p>
      <button onClick={onRequestPilot} style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        background: 'linear-gradient(135deg, #2d7a4f, #4ade80)',
        color: '#0d1821', padding: '15px 36px', borderRadius: '10px',
        fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer',
        fontFamily: 'inherit',
        boxShadow: '0 0 32px rgba(74,222,128,0.35)',
        transition: 'box-shadow 0.2s, transform 0.15s',
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 48px rgba(74,222,128,0.5)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(74,222,128,0.35)';
          (e.currentTarget as HTMLElement).style.transform = 'none';
        }}>
        Request a pilot
      </button>
      <p style={{ fontSize: '14px', color: 'rgba(226,232,240,0.35)', marginTop: '20px' }}>
        Or email{' '}
        <a href="mailto:precisionpestguard@gmail.com" style={{ color: '#1ab8d4', textDecoration: 'none' }}>
          precisionpestguard@gmail.com
        </a>
      </p>
    </div>
  </section>
);

// ─── Footer ───────────────────────────────────────────────────
export const Footer: React.FC = () => (
  <footer style={{
    background: '#0d1218',
    borderTop: '1px solid rgba(26,184,212,0.08)',
    padding: '28px 5%',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    flexWrap: 'wrap', gap: '12px',
  }}>
    <p style={{ fontSize: '13px', color: 'rgba(226,232,240,0.25)' }}>
      © 2026 PrecisionPest Guard
    </p>
    <style>{`
      @media (max-width: 600px) {
        .footer-territory { max-width: 100% !important; text-align: left !important; }
      }
    `}</style>
  </footer>
);
