/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static HTML export for GitHub Pages
  
    // Set basePath to your repository name (if deploying to <username>.github.io/repo-name)
    basePath: '/portfolio', // Replace 'your-repo-name' with your GitHub repository name
  
    // Optional: Disable server-side image optimization if needed
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;
  