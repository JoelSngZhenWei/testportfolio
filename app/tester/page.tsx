'use client'; // This must be the first line in your component file

import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

const Page: React.FC = () => {
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
    <div>
      <Head>
        <title>Particles Background</title>
        <link rel="stylesheet" href="/demo/css/style.css" />
      </Head>
      {/* Use the Script component for proper loading strategy */}
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
      <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>Welcome to My Portfolio</h1>
        <p>This is a sample page with a particles.js background.</p>
      </div>
    </div>
  );
};

export default Page;
