import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Nav: React.FC<{ onRequestPilot: () => void }> = ({ onRequestPilot }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const links = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'Validation', href: '#validation' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setMenuOpen(false);

    window.history.replaceState(null, '', window.location.pathname);
  };

  const navBg = menuOpen ? 'rgba(26,35,50,0.98)' : 'rgba(26,35,50,0.95)';

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 100,
          background: navBg,
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(26,184,212,0.15)',
          padding: '0 5%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <Logo size={32} />

        {/* Desktop: links + CTA grouped on the right */}
        <div
          className="nav-desktop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <ul
            style={{
              display: 'flex',
              gap: '2rem',
              listStyle: 'none',
              margin: 0,
            }}
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  style={{
                    fontSize: '14px',
                    color: 'rgba(226,232,240,0.75)',
                    textDecoration: 'none',
                    fontWeight: 400,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#1ab8d4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(226,232,240,0.75)';
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={onRequestPilot}
            style={{
              background: 'linear-gradient(135deg, #0e6b7c, #1ab8d4)',
              color: 'white',
              padding: '9px 22px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              boxShadow: '0 0 16px rgba(26,184,212,0.3)',
              transition: 'box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 24px rgba(26,184,212,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 16px rgba(26,184,212,0.3)';
            }}
          >
            Request a pilot
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="nav-mobile"
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: 'none',
            border: '1px solid rgba(26,184,212,0.3)',
            borderRadius: '8px',
            color: '#1ab8d4',
            cursor: 'pointer',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="nav-mobile"
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            zIndex: 99,
            background: 'rgba(26,35,50,0.98)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(26,184,212,0.15)',
            padding: '20px 5% 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              style={{
                fontSize: '16px',
                color: 'rgba(226,232,240,0.8)',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid rgba(26,184,212,0.08)',
                fontWeight: 400,
              }}
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={() => {
              setMenuOpen(false);
              onRequestPilot();
            }}
            style={{
              marginTop: '16px',
              background: 'linear-gradient(135deg, #0e6b7c, #1ab8d4)',
              color: 'white',
              padding: '13px 22px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textAlign: 'center',
            }}
          >
            Request a pilot
          </button>
        </div>
      )}

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        section[id] {
          scroll-margin-top: 80px;
        }

        .nav-desktop {
          display: flex !important;
        }

        .nav-mobile {
          display: none !important;
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }

          .nav-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
