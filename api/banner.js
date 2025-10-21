export default function handler(req, res) {
  const svg = `<svg width="1200" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#33384a;stop-opacity:1"/>
      <stop offset="25%" style="stop-color:#417388;stop-opacity:1"/>
      <stop offset="50%" style="stop-color:#468095;stop-opacity:1"/>
      <stop offset="75%" style="stop-color:#43a68c;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#66be86;stop-opacity:1"/>
    </linearGradient>
    
    <style>
      .title {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        font-size: 52px;
        font-weight: 700;
        fill: white;
        text-anchor: middle;
        letter-spacing: 2px;
      }
      .subtitle {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        font-size: 24px;
        font-weight: 300;
        fill: rgba(255, 255, 255, 0.9);
        text-anchor: middle;
      }
      .description {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        font-weight: 300;
        fill: rgba(255, 255, 255, 0.8);
        text-anchor: middle;
      }
    </style>
  </defs>
  
  <rect width="1200" height="300" fill="url(#gradient)"/>
  
  <text x="600" y="100" class="title">Santiago Avendaño</text>
  <text x="600" y="150" class="subtitle">Full Stack Developer</text>
  <text x="600" y="190" class="description">Building amazing web experiences with React, Node.js &amp; MongoDB</text>
  <text x="600" y="220" class="description">🚀 Passionate about clean code and innovative solutions</text>
</svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.status(200).send(svg);
}
