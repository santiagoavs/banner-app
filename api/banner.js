export default function handler(req, res) {
  const svg = `<svg width="1200" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Radial gradients for animated effect -->
    <radialGradient id="grad1" cx="20%" cy="20%" r="50%">
      <stop offset="0%" style="stop-color:rgba(102, 190, 134, 0.6);stop-opacity:1">
        <animate attributeName="cx" values="20%;25%;30%;25%;20%" dur="15s" repeatCount="indefinite"/>
        <animate attributeName="cy" values="20%;25%;30%;25%;20%" dur="15s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0"/>
    </radialGradient>
    
    <radialGradient id="grad2" cx="80%" cy="30%" r="45%">
      <stop offset="0%" style="stop-color:rgba(67, 166, 140, 0.5);stop-opacity:1">
        <animate attributeName="cx" values="80%;75%;70%;75%;80%" dur="15s" repeatCount="indefinite"/>
        <animate attributeName="cy" values="30%;35%;40%;35%;30%" dur="15s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0"/>
    </radialGradient>
    
    <radialGradient id="grad3" cx="15%" cy="75%" r="55%">
      <stop offset="0%" style="stop-color:rgba(70, 128, 149, 0.7);stop-opacity:1">
        <animate attributeName="cx" values="15%;20%;25%;20%;15%" dur="15s" repeatCount="indefinite"/>
        <animate attributeName="cy" values="75%;70%;65%;70%;75%" dur="15s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0"/>
    </radialGradient>
    
    <radialGradient id="grad4" cx="75%" cy="80%" r="50%">
      <stop offset="0%" style="stop-color:rgba(65, 115, 136, 0.6);stop-opacity:1">
        <animate attributeName="cx" values="75%;70%;65%;70%;75%" dur="15s" repeatCount="indefinite"/>
        <animate attributeName="cy" values="80%;75%;70%;75%;80%" dur="15s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0"/>
    </radialGradient>
    
    <radialGradient id="grad5" cx="90%" cy="55%" r="40%">
      <stop offset="0%" style="stop-color:rgba(65, 82, 104, 0.8);stop-opacity:1">
        <animate attributeName="cx" values="90%;85%;80%;85%;90%" dur="15s" repeatCount="indefinite"/>
        <animate attributeName="cy" values="55%;60%;65%;60%;55%" dur="15s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0"/>
    </radialGradient>
    
    <linearGradient id="baseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#33384a;stop-opacity:1"/>
      <stop offset="20%" style="stop-color:#3d4a5e;stop-opacity:1"/>
      <stop offset="40%" style="stop-color:#417388;stop-opacity:1"/>
      <stop offset="60%" style="stop-color:#468095;stop-opacity:1"/>
      <stop offset="80%" style="stop-color:#43a68c;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#66be86;stop-opacity:1"/>
    </linearGradient>
    
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <style>
      .title {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        font-size: 52px;
        font-weight: 700;
        fill: white;
        text-anchor: middle;
        letter-spacing: 2px;
        filter: url(#glow);
      }
      .subtitle {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        font-size: 24px;
        font-weight: 300;
        fill: rgba(255, 255, 255, 0.95);
        text-anchor: middle;
      }
      .description {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        font-weight: 300;
        fill: rgba(255, 255, 255, 0.85);
        text-anchor: middle;
      }
    </style>
  </defs>
  
  <!-- Base gradient -->
  <rect width="1200" height="300" fill="url(#baseGrad)"/>
  
  <!-- Animated radial gradients -->
  <rect width="1200" height="300" fill="url(#grad1)"/>
  <rect width="1200" height="300" fill="url(#grad2)"/>
  <rect width="1200" height="300" fill="url(#grad3)"/>
  <rect width="1200" height="300" fill="url(#grad4)"/>
  <rect width="1200" height="300" fill="url(#grad5)"/>
  
  <!-- Content -->
  <text x="600" y="100" class="title">Santiago Ávila</text>
  <text x="600" y="150" class="subtitle">Full Stack Developer</text>
  <text x="600" y="190" class="description">Nivel avanzado en inglés (C1)</text>
</svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.status(200).send(svg);
}
