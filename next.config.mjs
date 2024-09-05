// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static HTML export for GitHub Pages
    basePath: '/your-repo-name', // Replace 'your-repo-name' with your GitHub repository name
    images: {
      unoptimized: true, // Disable server-side image optimization
    },
  };
  
  // Use ES module syntax to export the config
  export default nextConfig;
  