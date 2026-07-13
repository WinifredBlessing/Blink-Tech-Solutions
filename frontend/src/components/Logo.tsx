import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className = '', light = false }: LogoProps) {
  return (
    <div className={`flex items-center justify-start select-none overflow-visible ${className}`}>
      {/* High-fidelity responsive SVG reproducing the exact uploaded BTSOL logo geometry with new tagline */}
      <svg 
        viewBox="0 0 540 180" 
        className="w-auto h-full max-w-full object-contain overflow-visible" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#003f9a" />
            <stop offset="100%" stopColor="#0062eb" />
          </linearGradient>
          <linearGradient id="logoSkyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066f5" />
            <stop offset="100%" stopColor="#00b5e2" />
          </linearGradient>
        </defs>

        {/* Arc Crescent on the left */}
        {/* The deep blue outer crescent */}
        <path 
          d="M110,105 C55,108 17,80 17,55 C17,30 52,22 108,35" 
          stroke="url(#logoBlueGrad)" 
          strokeWidth="7" 
          strokeLinecap="round" 
        />
        {/* The bright lime-green inner crescent */}
        <path 
          d="M102,102 C58,98 30,78 30,56 C30,34 58,28 98,40" 
          stroke="#76c043" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
        />
        
        {/* Brand Letters: BTSUL */}
        {/* Letter B */}
        <path 
          d="M125,25 L165,25 C180,25 188,32 188,41 C188,48 181,53 170,54 C184,56 191,63 191,74 C191,85 181,92 162,92 L125,92 Z" 
          fill="url(#logoBlueGrad)" 
        />
        {/* Negative space holes for letter B */}
        <path d="M141,35 L141,49 L156,49 C162,49 166,47 166,42 C166,37 162,35 156,35 Z" fill="#ffffff" />
        <path d="M141,60 L141,81 L158,81 C165,81 169,78 169,71 C169,64 165,60 158,60 Z" fill="#ffffff" />

        {/* Letter T */}
        <path d="M192,25 L244,25 L244,38 L225,38 L225,92 L211,92 L211,38 L192,38 Z" fill="url(#logoBlueGrad)" />

        {/* Letter S */}
        <path 
          d="M288,33 C284,28 276,24 266,24 C252,24 245,31 245,40 C245,55 285,53 285,74 C285,86 274,93 258,93 C245,93 237,87 232,81 L243,71 C248,77 254,81 260,81 C269,81 273,77 273,71 C273,59 234,60 234,39 C234,28 245,21 262,21 C273,21 282,25 288,31 Z" 
          fill="url(#logoBlueGrad)" 
        />

        {/* Letter O */}
        <path 
          d="M292,65 L292,55 C292,34 306,25 324,25 C342,25 356,34 356,55 L356,65 C356,86 342,95 324,95 C306,95 292,86 292,65 Z M306,65 C306,78 314,84 324,84 C334,84 342,78 342,65 L342,55 C342,42 334,36 324,36 C314,36 306,42 306,55 L306,65 Z" 
          fill="url(#logoBlueGrad)" 
        />
        {/* Custom Green Triangle inside O */}
        <path d="M306,25 L342,25 L324,70 Z" fill="#76c043" />

        {/* Letter L */}
        <path d="M363,25 L377,25 L377,79 L409,79 L409,92 L363,92 Z" fill="url(#logoBlueGrad)" />

        {/* Full Title: BlinkTech Solutions text */}
        <text 
          x="125" 
          y="118" 
          fontFamily="'Space Grotesk', system-ui, sans-serif" 
          fontSize="21" 
          fontWeight="700" 
          letterSpacing="4.5" 
          fill={light ? '#ffffff' : '#0f172a'}
        >
          BlinkTech Solutions
        </text>
        
        {/* Horizontal Line with Center Dot */}
        <line x1="125" y1="140" x2="262" y2="140" stroke="url(#logoBlueGrad)" strokeWidth="1.5" />
        <circle cx="267" cy="140" r="3.5" fill="url(#logoBlueGrad)" />
        <line x1="272" y1="140" x2="400" y2="140" stroke="#76c043" strokeWidth="1.5" />

        {/* Tagline */}
        <text 
          x="125" 
          y="165" 
          fontFamily="'Space Grotesk', system-ui, sans-serif" 
          fontSize="13" 
          fontWeight="500" 
          letterSpacing="0.5" 
        >
          <tspan fill="url(#logoBlueGrad)">Building Skills. </tspan>
          <tspan fill={light ? '#ffffff' : '#0f172a'}>Powering the Future of </tspan>
          <tspan fill="#76c043">Business.</tspan>
        </text>
      </svg>
    </div>
  );
}

export default Logo;
