import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 40, showText = true }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon background */}
        <polygon
          points="24,2 42,13 42,35 24,46 6,35 6,13"
          fill="url(#hexGrad)"
          stroke="url(#hexStroke)"
          strokeWidth="1.5"
        />
        {/* Circuit lines */}
        <line x1="3" y1="13" x2="10" y2="13" stroke="#1ab8d4" strokeWidth="0.8" opacity="0.6" />
        <line x1="3" y1="35" x2="10" y2="35" stroke="#1ab8d4" strokeWidth="0.8" opacity="0.6" />
        <line x1="38" y1="13" x2="45" y2="13" stroke="#1ab8d4" strokeWidth="0.8" opacity="0.6" />
        <line x1="38" y1="35" x2="45" y2="35" stroke="#1ab8d4" strokeWidth="0.8" opacity="0.6" />
        <circle cx="3" cy="13" r="1.2" fill="#1ab8d4" opacity="0.7" />
        <circle cx="3" cy="35" r="1.2" fill="#1ab8d4" opacity="0.7" />
        <circle cx="45" cy="13" r="1.2" fill="#1ab8d4" opacity="0.7" />
        <circle cx="45" cy="35" r="1.2" fill="#1ab8d4" opacity="0.7" />
        {/* Insect body */}
        <ellipse cx="24" cy="24" rx="3.5" ry="7" fill="#1ab8d4" opacity="0.9" />
        {/* Stripes */}
        <line x1="20.8" y1="21" x2="27.2" y2="21" stroke="#1a2332" strokeWidth="1.2" />
        <line x1="20.5" y1="23.5" x2="27.5" y2="23.5" stroke="#1a2332" strokeWidth="1.2" />
        <line x1="20.8" y1="26" x2="27.2" y2="26" stroke="#1a2332" strokeWidth="1.2" />
        {/* Head */}
        <circle cx="24" cy="16.5" r="2.5" fill="#1ab8d4" />
        {/* Wings - left */}
        <ellipse cx="17" cy="20" rx="6" ry="3.5" fill="url(#wingGradL)" opacity="0.85" transform="rotate(-15 17 20)" />
        <ellipse cx="17.5" cy="27" rx="5" ry="2.8" fill="url(#wingGradL)" opacity="0.7" transform="rotate(10 17.5 27)" />
        {/* Wings - right */}
        <ellipse cx="31" cy="20" rx="6" ry="3.5" fill="url(#wingGradR)" opacity="0.85" transform="rotate(15 31 20)" />
        <ellipse cx="30.5" cy="27" rx="5" ry="2.8" fill="url(#wingGradR)" opacity="0.7" transform="rotate(-10 30.5 27)" />
        {/* Leaf accent top-left */}
        <ellipse cx="11" cy="11" rx="4" ry="2.2" fill="#4ade80" opacity="0.8" transform="rotate(-35 11 11)" />
        <line x1="11" y1="11" x2="14" y2="8.5" stroke="#22c55e" strokeWidth="0.7" opacity="0.6" />
        <defs>
          <linearGradient id="hexGrad" x1="6" y1="2" x2="42" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e3a4a" />
            <stop offset="100%" stopColor="#1a2e1e" />
          </linearGradient>
          <linearGradient id="hexStroke" x1="6" y1="2" x2="42" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1ab8d4" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
          <linearGradient id="wingGradL" x1="11" y1="18" x2="23" y2="29" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1ab8d4" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="wingGradR" x1="37" y1="18" x2="25" y2="29" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1ab8d4" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      {showText && (
        <span style={{
          fontFamily: '"DM Serif Display", serif',
          fontSize: size * 0.42 + 'px',
          color: '#e2e8f0',
          letterSpacing: '-0.3px',
          whiteSpace: 'nowrap',
        }}>
          PrecisionPest<span style={{ color: '#1ab8d4' }}> Guard</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
