'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    const loadParticlesConfig = async () => {
      const response = await fetch('/demo/particles.json');
      const particlesConfig = await response.json();

      if (typeof window !== 'undefined' && window.particlesJS) {
        window.particlesJS('particles-js', particlesConfig);
      }
    };

    loadParticlesConfig();
  }, []);

  return (
    <>
      {/* Load the necessary scripts */}
      <Script
        src="/particles.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          console.log('particles.js loaded');
        }}
      />
      <Script
        src="/demo/js/lib/stats.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('stats.js loaded');
        }}
      />

      {/* The particles container */}
      <div
        id="particles-js"
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
      />
    </>
  );
};

export default ParticlesBackground;
