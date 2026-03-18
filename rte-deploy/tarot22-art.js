// ── Tarot 22 Major Arcana — Original SVG Card Art ──
// Mystical style: cosmic gradients, golden halos, detailed figures, starfields
var TAROT_SVGS = {};

// Shared gradient/filter definitions
var DEFS = '<defs>' +
  '<radialGradient id="halo" cx="50%" cy="35%" r="35%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.6"/><stop offset="60%" stop-color="#DAA520" stop-opacity="0.15"/><stop offset="100%" stop-color="transparent"/></radialGradient>' +
  '<radialGradient id="cosmicBg" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#1a0f3a"/><stop offset="50%" stop-color="#0d0825"/><stop offset="100%" stop-color="#050510"/></radialGradient>' +
  '<linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFD700"/><stop offset="50%" stop-color="#FFF4CC"/><stop offset="100%" stop-color="#DAA520"/></linearGradient>' +
  '<linearGradient id="warmGlow" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stop-color="#FF8C00" stop-opacity="0.4"/><stop offset="100%" stop-color="#4B0082" stop-opacity="0.2"/></linearGradient>' +
  '<filter id="glow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
  '<filter id="softGlow"><feGaussianBlur stdDeviation="3.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>' +
  '</defs>';

function stars(count) {
  var s = '';
  for (var i = 0; i < count; i++) {
    var x = Math.round(Math.random() * 200);
    var y = Math.round(Math.random() * 300);
    var r = (0.3 + Math.random() * 1.2).toFixed(1);
    var o = (0.3 + Math.random() * 0.7).toFixed(1);
    s += '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#FFF" opacity="' + o + '"/>';
  }
  return s;
}

function cardFrame() {
  return '<rect x="2" y="2" width="196" height="296" rx="12" fill="none" stroke="url(#goldShine)" stroke-width="2.5" opacity="0.7"/>' +
    '<rect x="7" y="7" width="186" height="286" rx="9" fill="none" stroke="#DAA520" stroke-width="0.5" opacity="0.3"/>';
}

// 0 - The Fool: Figure leaping with staff, golden sun behind
TAROT_SVGS[0] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="url(#cosmicBg)"/>' + stars(25) +
  // Warm golden sunrise
  '<ellipse cx="100" cy="170" rx="80" ry="60" fill="#FFD700" opacity="0.08"/>' +
  '<circle cx="100" cy="130" r="50" fill="url(#halo)"/>' +
  // Cliff edge
  '<path d="M0 250 Q30 230 60 245 Q80 220 100 240 L0 300 Z" fill="#2a1a3a" opacity="0.6"/>' +
  '<path d="M200 260 Q170 240 140 255 Q120 230 100 250 L200 300 Z" fill="#1a0f2e" opacity="0.5"/>' +
  // Figure silhouette - leaping person
  '<g transform="translate(85,110)" filter="url(#glow)">' +
    '<circle cx="15" cy="0" r="10" fill="#1a0a2e" stroke="#DAA520" stroke-width="1"/>' + // head
    '<path d="M15 10 L15 45 M5 25 L15 20 L28 15 M8 50 L15 45 L25 55" stroke="#DAA520" stroke-width="2" fill="none" stroke-linecap="round"/>' + // body
    '<line x1="28" y1="15" x2="35" y2="5" stroke="#DAA520" stroke-width="1.5" stroke-linecap="round"/>' + // staff
    '<circle cx="37" cy="3" r="3" fill="#FFD700" opacity="0.6"/>' + // staff top
  '</g>' +
  // Golden halo around figure
  '<circle cx="100" cy="120" r="35" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.3"/>' +
  // Nebula clouds
  '<ellipse cx="40" cy="200" rx="50" ry="25" fill="#6A3D9A" opacity="0.1"/>' +
  '<ellipse cx="160" cy="190" rx="45" ry="20" fill="#FF8C00" opacity="0.08"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#DAA520" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE FOOL</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#DAA520" font-family="serif" font-size="10" opacity="0.6">0</text>' +
'</svg>';

// I - The Magician: Robed figure with staff, golden chalice, halo
TAROT_SVGS[1] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="url(#cosmicBg)"/>' + stars(20) +
  '<circle cx="100" cy="100" r="55" fill="url(#halo)"/>' +
  // Robed figure
  '<g transform="translate(70,60)" filter="url(#glow)">' +
    '<circle cx="30" cy="15" r="12" fill="#1a0a2e" stroke="#DAA520" stroke-width="1.2"/>' + // head
    '<circle cx="30" cy="15" r="18" fill="none" stroke="#FFD700" stroke-width="0.8" opacity="0.5"/>' + // halo ring
    '<path d="M18 27 L10 120 L50 120 L42 27" fill="#2a1555" stroke="#DAA520" stroke-width="0.8"/>' + // robe
    '<path d="M15 27 L0 65 M45 27 L60 55" stroke="#4B0082" stroke-width="2" fill="none"/>' + // arms
    '<line x1="60" y1="55" x2="62" y2="25" stroke="#DAA520" stroke-width="2"/>' + // staff
    '<circle cx="62" cy="22" r="5" fill="#FFD700" opacity="0.5"/>' + // staff orb
  '</g>' +
  // Chalice at bottom
  '<g transform="translate(80,195)">' +
    '<path d="M10 30 L20 0 L40 0 L30 30 Z" fill="none" stroke="#DAA520" stroke-width="1.2"/>' +
    '<ellipse cx="25" cy="0" rx="12" ry="4" fill="#FFD700" opacity="0.2"/>' +
    '<line x1="20" y1="30" x2="20" y2="40" stroke="#DAA520" stroke-width="1.5"/>' +
    '<ellipse cx="20" cy="42" rx="12" ry="3" fill="none" stroke="#DAA520" stroke-width="1"/>' +
  '</g>' +
  '<ellipse cx="100" cy="260" rx="70" ry="15" fill="#6A3D9A" opacity="0.08"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#DAA520" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE MAGICIAN</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#DAA520" font-family="serif" font-size="10" opacity="0.6">I</text>' +
'</svg>';

// II - The High Priestess: Veiled figure between pillars, moon crown
TAROT_SVGS[2] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="url(#cosmicBg)"/>' + stars(30) +
  // Moon glow
  '<circle cx="100" cy="60" r="25" fill="#C0C0C0" opacity="0.08"/>' +
  '<circle cx="100" cy="60" r="15" fill="#E6E6FA" opacity="0.1"/>' +
  // Pillars
  '<rect x="25" y="50" width="16" height="200" rx="2" fill="#1B3A6B" opacity="0.4" stroke="#DAA520" stroke-width="0.5"/>' +
  '<rect x="159" y="50" width="16" height="200" rx="2" fill="#1B3A6B" opacity="0.4" stroke="#DAA520" stroke-width="0.5"/>' +
  '<rect x="22" y="45" width="22" height="10" rx="2" fill="none" stroke="#DAA520" stroke-width="0.8"/>' +
  '<rect x="156" y="45" width="22" height="10" rx="2" fill="none" stroke="#DAA520" stroke-width="0.8"/>' +
  // Veiled figure
  '<g transform="translate(70,55)" filter="url(#glow)">' +
    '<circle cx="30" cy="20" r="12" fill="#1B3A6B" stroke="#C0C0C0" stroke-width="1"/>' +
    '<path d="M30 5 L25 15 L35 15 Z" fill="#C0C0C0" opacity="0.4"/>' + // moon crown
    '<path d="M15 32 L5 180 L55 180 L45 32" fill="#1B3A6B" opacity="0.7" stroke="#4169E1" stroke-width="0.5"/>' + // robe
    '<path d="M18 32 Q30 45 42 32" fill="#C0C0C0" opacity="0.1"/>' + // veil
    '<path d="M10 50 L0 80 M50 50 L60 80" stroke="#4169E1" stroke-width="1.5" fill="none" opacity="0.5"/>' +
  '</g>' +
  // Clouds/mist
  '<ellipse cx="50" cy="220" rx="40" ry="15" fill="#4169E1" opacity="0.06"/>' +
  '<ellipse cx="150" cy="210" rx="35" ry="12" fill="#C0C0C0" opacity="0.05"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#C0C0C0" font-family="serif" font-size="9.5" font-weight="600" letter-spacing="1.5">THE HIGH PRIESTESS</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#C0C0C0" font-family="serif" font-size="10" opacity="0.6">II</text>' +
'</svg>';

// III - The Empress: Seated queen, nature throne, warm glow
TAROT_SVGS[3] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="url(#cosmicBg)"/>' + stars(15) +
  '<ellipse cx="100" cy="200" rx="90" ry="60" fill="#2E8B57" opacity="0.06"/>' +
  '<circle cx="100" cy="100" r="50" fill="#FFD700" opacity="0.06"/>' +
  // Throne outline
  '<path d="M45 100 L35 80 L40 60 L55 50 L70 55 M130 55 L145 50 L160 60 L165 80 L155 100" stroke="#DAA520" stroke-width="1" fill="none" opacity="0.4"/>' +
  // Seated figure
  '<g transform="translate(65,65)" filter="url(#glow)">' +
    '<circle cx="35" cy="15" r="11" fill="#2E8B57" opacity="0.3" stroke="#FFD700" stroke-width="1"/>' +
    '<path d="M35 5 L30 0 L35 -5 L40 0 Z" fill="#FFD700" opacity="0.5"/>' + // crown
    '<circle cx="35" cy="12" r="20" fill="none" stroke="#FFD700" stroke-width="0.6" opacity="0.3"/>' + // halo
    '<path d="M22 26 L15 110 L55 110 L48 26" fill="#2E8B57" opacity="0.4" stroke="#8FBC8F" stroke-width="0.5"/>' + // dress
    '<path d="M20 40 L5 70 M50 40 L65 70" stroke="#8FBC8F" stroke-width="1.5" fill="none" opacity="0.5"/>' +
  '</g>' +
  // Nature elements
  '<path d="M20 250 Q30 220 25 200 Q35 210 40 200 Q35 230 30 250" fill="#2E8B57" opacity="0.15"/>' +
  '<path d="M160 240 Q170 215 165 195 Q175 205 180 195 Q175 225 170 240" fill="#2E8B57" opacity="0.12"/>' +
  // Flowers
  '<circle cx="35" cy="230" r="4" fill="#FF69B4" opacity="0.2"/>' +
  '<circle cx="165" cy="225" r="3" fill="#FF69B4" opacity="0.15"/>' +
  '<circle cx="50" cy="245" r="3" fill="#FFD700" opacity="0.15"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#8FBC8F" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE EMPRESS</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#8FBC8F" font-family="serif" font-size="10" opacity="0.6">III</text>' +
'</svg>';

// IV - The Emperor: Armored king on throne, red/gold
TAROT_SVGS[4] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="#0a0510"/>' + stars(15) +
  '<ellipse cx="100" cy="200" rx="90" ry="80" fill="#8B0000" opacity="0.08"/>' +
  '<ellipse cx="100" cy="120" rx="60" ry="40" fill="#FF4500" opacity="0.06"/>' +
  // Throne
  '<path d="M40 90 L30 70 L35 50 L50 40 L60 45 M140 45 L150 40 L165 50 L170 70 L160 90" stroke="#DAA520" stroke-width="1.5" fill="none" opacity="0.5"/>' +
  '<rect x="42" y="90" width="116" height="120" rx="3" fill="#8B0000" opacity="0.15" stroke="#DAA520" stroke-width="0.5"/>' +
  // Seated figure
  '<g transform="translate(65,55)" filter="url(#glow)">' +
    '<circle cx="35" cy="18" r="12" fill="#1a0510" stroke="#DAA520" stroke-width="1.2"/>' +
    '<path d="M28 8 L35 -2 L42 8" fill="#FFD700" opacity="0.5"/>' + // crown
    '<rect x="15" y="30" width="40" height="80" rx="3" fill="#8B0000" opacity="0.4" stroke="#DAA520" stroke-width="0.5"/>' + // body/armor
    '<path d="M15 45 L0 75 M55 45 L70 75" stroke="#DAA520" stroke-width="1.5" fill="none"/>' + // arms
    '<line x1="70" y1="75" x2="72" y2="45" stroke="#FFD700" stroke-width="2"/>' + // ankh/scepter
    '<circle cx="72" cy="42" r="4" fill="none" stroke="#FFD700" stroke-width="1"/>' +
    '<line x1="72" y1="46" x2="72" y2="52" stroke="#FFD700" stroke-width="1"/>' +
  '</g>' +
  // Red drapery
  '<path d="M0 260 Q50 240 100 260 Q150 240 200 260 L200 300 L0 300 Z" fill="#8B0000" opacity="0.15"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#FF4500" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE EMPEROR</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#DAA520" font-family="serif" font-size="10" opacity="0.6">IV</text>' +
'</svg>';

// V - The Hierophant: Holy figure with keys, floral
TAROT_SVGS[5] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="url(#cosmicBg)"/>' + stars(20) +
  '<circle cx="100" cy="80" r="40" fill="#FFD700" opacity="0.06"/>' +
  // Standing figure with headdress
  '<g transform="translate(65,40)" filter="url(#glow)">' +
    '<circle cx="35" cy="22" r="12" fill="#4B0082" opacity="0.3" stroke="#FFD700" stroke-width="1"/>' +
    '<path d="M25 12 L35 -5 L45 12" fill="#FFD700" opacity="0.4"/>' + // tall hat
    '<rect x="28" y="-5" width="14" height="8" fill="#FFD700" opacity="0.2"/>' +
    '<circle cx="35" cy="18" r="22" fill="none" stroke="#FFD700" stroke-width="0.6" opacity="0.35"/>' + // halo
    '<path d="M18 34 L10 160 L60 160 L52 34" fill="#4B0082" opacity="0.3" stroke="#FF69B4" stroke-width="0.3"/>' + // robe
    '<path d="M18 55 L0 90 M52 55 L70 80" stroke="#FFD700" stroke-width="1.5" fill="none" opacity="0.5"/>' +
    '<line x1="0" y1="90" x2="-5" y2="70" stroke="#FFD700" stroke-width="1.5"/>' + // staff/key
    '<circle cx="-5" cy="67" r="4" fill="none" stroke="#FFD700" stroke-width="1"/>' +
  '</g>' +
  // Flowers
  '<circle cx="30" cy="220" r="5" fill="#FF69B4" opacity="0.15"/>' +
  '<circle cx="45" cy="235" r="4" fill="#FFD700" opacity="0.1"/>' +
  '<circle cx="155" cy="215" r="5" fill="#FF69B4" opacity="0.12"/>' +
  '<circle cx="170" cy="230" r="3" fill="#FFD700" opacity="0.1"/>' +
  '<circle cx="25" cy="205" r="3" fill="#DDA0DD" opacity="0.1"/>' +
  '<circle cx="175" cy="210" r="4" fill="#DDA0DD" opacity="0.08"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#FF69B4" font-family="serif" font-size="10" font-weight="600" letter-spacing="1.5">THE HIEROPHANT</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#FFD700" font-family="serif" font-size="10" opacity="0.6">V</text>' +
'</svg>';

// VI - The Lovers
TAROT_SVGS[6] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="url(#cosmicBg)"/>' + stars(25) +
  '<circle cx="100" cy="80" r="45" fill="#FF69B4" opacity="0.06"/>' +
  '<circle cx="100" cy="80" r="25" fill="#FFD700" opacity="0.08"/>' +
  // Angel above
  '<g transform="translate(80,30)" filter="url(#glow)">' +
    '<circle cx="20" cy="15" r="8" fill="#FFD700" opacity="0.15" stroke="#FFD700" stroke-width="0.8"/>' +
    '<path d="M5 20 L-10 35 Q-15 25 -5 18 Z M35 20 L50 35 Q55 25 45 18 Z" fill="#FFD700" opacity="0.1" stroke="#FFD700" stroke-width="0.5"/>' + // wings
  '</g>' +
  // Two figures
  '<g transform="translate(35,100)" filter="url(#glow)">' +
    '<circle cx="30" cy="15" r="10" fill="#1a0a2e" stroke="#FF69B4" stroke-width="1"/>' +
    '<path d="M20 25 L15 100 L45 100 L40 25" fill="#FF1493" opacity="0.2" stroke="#FF69B4" stroke-width="0.5"/>' +
  '</g>' +
  '<g transform="translate(105,100)" filter="url(#glow)">' +
    '<circle cx="30" cy="15" r="10" fill="#1a0a2e" stroke="#FFD700" stroke-width="1"/>' +
    '<path d="M20 25 L15 100 L45 100 L40 25" fill="#4B0082" opacity="0.2" stroke="#DAA520" stroke-width="0.5"/>' +
  '</g>' +
  // Heart glow between
  '<path d="M100 155 L90 145 Q85 135 92 135 Q100 135 100 142 Q100 135 108 135 Q115 135 110 145 Z" fill="#FF69B4" opacity="0.2" filter="url(#glow)"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#FF69B4" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE LOVERS</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#FF69B4" font-family="serif" font-size="10" opacity="0.6">VI</text>' +
'</svg>';

// VII - The Chariot
TAROT_SVGS[7] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="#080818"/>' + stars(20) +
  '<ellipse cx="100" cy="130" rx="60" ry="40" fill="#4682B4" opacity="0.08"/>' +
  // Chariot structure
  '<rect x="40" y="140" width="120" height="60" rx="5" fill="#1C1C2E" opacity="0.5" stroke="#C0C0C0" stroke-width="1"/>' +
  '<circle cx="50" cy="215" r="15" fill="none" stroke="#C0C0C0" stroke-width="1.5"/>' +
  '<circle cx="150" cy="215" r="15" fill="none" stroke="#C0C0C0" stroke-width="1.5"/>' +
  // Driver figure
  '<g transform="translate(70,60)" filter="url(#glow)">' +
    '<circle cx="30" cy="18" r="11" fill="#1C1C2E" stroke="#C0C0C0" stroke-width="1"/>' +
    '<path d="M18 29 L12 80 L48 80 L42 29" fill="#1C1C2E" opacity="0.6" stroke="#4682B4" stroke-width="0.5"/>' +
    '<path d="M30 5 L25 0 L30 -5 L35 0 Z" fill="#C0C0C0" opacity="0.4"/>' + // crown
    '<circle cx="30" cy="15" r="18" fill="none" stroke="#C0C0C0" stroke-width="0.5" opacity="0.3"/>' +
  '</g>' +
  // Lightning/energy
  '<path d="M95 30 L105 55 L95 55 L108 85" stroke="#4682B4" stroke-width="1.5" fill="none" opacity="0.3"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#C0C0C0" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE CHARIOT</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#C0C0C0" font-family="serif" font-size="10" opacity="0.6">VII</text>' +
'</svg>';

// VIII - Strength: Figure with lion
TAROT_SVGS[8] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="url(#cosmicBg)"/>' + stars(15) +
  '<circle cx="100" cy="120" r="50" fill="#FFD700" opacity="0.06"/>' +
  '<ellipse cx="100" cy="180" rx="70" ry="40" fill="#DAA520" opacity="0.04"/>' +
  // Figure
  '<g transform="translate(55,60)" filter="url(#glow)">' +
    '<circle cx="40" cy="18" r="11" fill="#1a0a2e" stroke="#FFD700" stroke-width="1"/>' +
    '<circle cx="40" cy="15" r="18" fill="none" stroke="#FFD700" stroke-width="0.6" opacity="0.3"/>' +
    '<path d="M28 29 L22 100 L58 100 L52 29" fill="#DAA520" opacity="0.15" stroke="#FFD700" stroke-width="0.5"/>' +
    '<path d="M28 45 L15 70 M52 45 L65 60" stroke="#FFD700" stroke-width="1.2" fill="none" opacity="0.5"/>' +
  '</g>' +
  // Lion silhouette
  '<g transform="translate(40,160)">' +
    '<ellipse cx="60" cy="30" rx="40" ry="22" fill="#DAA520" opacity="0.1"/>' +
    '<circle cx="45" cy="18" r="15" fill="#FFD700" opacity="0.06"/>' + // mane
    '<circle cx="45" cy="22" r="10" fill="#DAA520" opacity="0.08"/>' + // head
    '<path d="M55 32 L90 35 L95 45 L85 48 L55 42 Z" fill="#DAA520" opacity="0.08"/>' + // body
    '<circle cx="42" cy="20" r="2" fill="#FFD700" opacity="0.2"/>' + // eye
  '</g>' +
  // Infinity symbol above
  '<path d="M85 55 Q100 45 115 55 Q130 65 115 75 Q100 65 85 75 Q70 65 85 55" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.3"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#FFD700" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">STRENGTH</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#FFD700" font-family="serif" font-size="10" opacity="0.6">VIII</text>' +
'</svg>';

// IX - The Hermit: Cloaked figure with lantern
TAROT_SVGS[9] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="#050510"/>' + stars(35) +
  // Lantern glow
  '<circle cx="130" cy="90" r="30" fill="#DAA520" opacity="0.08"/>' +
  '<circle cx="130" cy="90" r="15" fill="#FFD700" opacity="0.1"/>' +
  // Mountain path
  '<path d="M0 280 L60 200 L100 230 L140 180 L200 220 L200 300 L0 300 Z" fill="#2F4F4F" opacity="0.15"/>' +
  // Cloaked figure
  '<g transform="translate(50,70)" filter="url(#glow)">' +
    '<circle cx="35" cy="15" r="10" fill="#2F4F4F" opacity="0.5" stroke="#DAA520" stroke-width="0.8"/>' +
    '<path d="M15 25 Q35 20 55 25 L60 170 L10 170 Z" fill="#2F4F4F" opacity="0.4" stroke="#696969" stroke-width="0.5"/>' + // cloak
    '<path d="M55 30 L75 15" stroke="#DAA520" stroke-width="1.5" fill="none"/>' + // arm to lantern
    // Lantern
    '<rect x="72" y="5" width="12" height="16" rx="2" fill="none" stroke="#DAA520" stroke-width="1"/>' +
    '<circle cx="78" cy="13" r="4" fill="#FFD700" opacity="0.4"/>' +
    '<line x1="78" y1="5" x2="78" y2="-2" stroke="#DAA520" stroke-width="1"/>' +
  '</g>' +
  // Staff
  '<line x1="80" y1="95" x2="75" y2="240" stroke="#DAA520" stroke-width="1.5" opacity="0.4"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#DAA520" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE HERMIT</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#DAA520" font-family="serif" font-size="10" opacity="0.6">IX</text>' +
'</svg>';

// X - Wheel of Fortune
TAROT_SVGS[10] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="url(#cosmicBg)"/>' + stars(25) +
  '<circle cx="100" cy="150" r="70" fill="#4169E1" opacity="0.04"/>' +
  // Wheel
  '<g transform="translate(100,150)" filter="url(#glow)">' +
    '<circle cx="0" cy="0" r="55" fill="none" stroke="#FFD700" stroke-width="1.5" opacity="0.5"/>' +
    '<circle cx="0" cy="0" r="40" fill="none" stroke="#9370DB" stroke-width="1" opacity="0.4"/>' +
    '<circle cx="0" cy="0" r="20" fill="none" stroke="#FFD700" stroke-width="0.8" opacity="0.5"/>' +
    '<circle cx="0" cy="0" r="5" fill="#FFD700" opacity="0.3"/>' +
    // Spokes
    '<line x1="0" y1="-55" x2="0" y2="55" stroke="#DAA520" stroke-width="0.5" opacity="0.3"/>' +
    '<line x1="-55" y1="0" x2="55" y2="0" stroke="#DAA520" stroke-width="0.5" opacity="0.3"/>' +
    '<line x1="-39" y1="-39" x2="39" y2="39" stroke="#DAA520" stroke-width="0.5" opacity="0.25"/>' +
    '<line x1="39" y1="-39" x2="-39" y2="39" stroke="#DAA520" stroke-width="0.5" opacity="0.25"/>' +
    // Symbols on wheel
    '<text x="0" y="-30" text-anchor="middle" fill="#FFD700" font-size="8" opacity="0.5">✦</text>' +
    '<text x="30" y="3" text-anchor="middle" fill="#FFD700" font-size="8" opacity="0.5">☆</text>' +
    '<text x="0" y="35" text-anchor="middle" fill="#FFD700" font-size="8" opacity="0.5">✧</text>' +
    '<text x="-30" y="3" text-anchor="middle" fill="#FFD700" font-size="8" opacity="0.5">⚝</text>' +
  '</g>' +
  // Clouds
  '<ellipse cx="40" cy="80" rx="30" ry="12" fill="#9370DB" opacity="0.06"/>' +
  '<ellipse cx="160" cy="85" rx="25" ry="10" fill="#4169E1" opacity="0.06"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#9370DB" font-family="serif" font-size="9" font-weight="600" letter-spacing="1">WHEEL OF FORTUNE</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#9370DB" font-family="serif" font-size="10" opacity="0.6">X</text>' +
'</svg>';

// XI - Justice
TAROT_SVGS[11] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="#0a0510"/>' + stars(15) +
  '<circle cx="100" cy="100" r="40" fill="#8B0000" opacity="0.06"/>' +
  // Figure with scales and sword
  '<g transform="translate(65,55)" filter="url(#glow)">' +
    '<circle cx="35" cy="18" r="11" fill="#1a0510" stroke="#DAA520" stroke-width="1"/>' +
    '<circle cx="35" cy="15" r="18" fill="none" stroke="#DAA520" stroke-width="0.6" opacity="0.3"/>' +
    '<path d="M22 29 L16 130 L54 130 L48 29" fill="#8B0000" opacity="0.25" stroke="#DC143C" stroke-width="0.5"/>' +
    // Sword
    '<line x1="35" y1="-5" x2="35" y2="50" stroke="#DAA520" stroke-width="2"/>' +
    '<line x1="25" y1="10" x2="45" y2="10" stroke="#DAA520" stroke-width="1.5"/>' + // crossguard
    // Scales
    '<line x1="0" y1="55" x2="70" y2="55" stroke="#DAA520" stroke-width="1"/>' +
    '<path d="M-5 55 L-10 70 L5 70 Z" fill="none" stroke="#DAA520" stroke-width="0.8"/>' +
    '<path d="M65 55 L60 70 L75 70 Z" fill="none" stroke="#DAA520" stroke-width="0.8"/>' +
  '</g>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#DC143C" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">JUSTICE</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#DAA520" font-family="serif" font-size="10" opacity="0.6">XI</text>' +
'</svg>';

// XII - The Hanged Man
TAROT_SVGS[12] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="url(#cosmicBg)"/>' + stars(20) +
  '<circle cx="100" cy="180" r="40" fill="#98FB98" opacity="0.05"/>' +
  // Tree/beam
  '<line x1="50" y1="50" x2="150" y2="50" stroke="#5F9EA0" stroke-width="3" opacity="0.4"/>' +
  '<line x1="50" y1="50" x2="50" y2="30" stroke="#5F9EA0" stroke-width="2" opacity="0.3"/>' +
  '<line x1="150" y1="50" x2="150" y2="30" stroke="#5F9EA0" stroke-width="2" opacity="0.3"/>' +
  // Hanging figure (upside down)
  '<g transform="translate(100,55)" filter="url(#glow)">' +
    '<line x1="0" y1="0" x2="0" y2="40" stroke="#DAA520" stroke-width="1"/>' + // rope
    '<path d="M-8 40 L-15 45 M8 40 L15 45" stroke="#4682B4" stroke-width="1.5" fill="none"/>' + // legs
    '<path d="M0 60 L0 120" stroke="#4682B4" stroke-width="1.5" fill="none"/>' + // body
    '<path d="M0 80 L-20 100 M0 80 L20 100" stroke="#4682B4" stroke-width="1.5" fill="none"/>' + // arms
    '<circle cx="0" cy="130" r="11" fill="#4682B4" opacity="0.2" stroke="#DAA520" stroke-width="1"/>' + // head
    '<circle cx="0" cy="130" r="18" fill="none" stroke="#98FB98" stroke-width="0.8" opacity="0.3"/>' + // halo
  '</g>' +
  // Leaves
  '<circle cx="35" cy="60" r="3" fill="#98FB98" opacity="0.12"/>' +
  '<circle cx="165" cy="55" r="2" fill="#98FB98" opacity="0.1"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#5F9EA0" font-family="serif" font-size="10" font-weight="600" letter-spacing="1">THE HANGED MAN</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#5F9EA0" font-family="serif" font-size="10" opacity="0.6">XII</text>' +
'</svg>';

// XIII - Death: Transformation butterfly, dark
TAROT_SVGS[13] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="#030308"/>' + stars(30) +
  '<circle cx="100" cy="140" r="45" fill="#C0C0C0" opacity="0.04"/>' +
  // Cloaked figure
  '<g transform="translate(55,60)" filter="url(#glow)">' +
    '<circle cx="45" cy="18" r="10" fill="#1C1C2E" stroke="#C0C0C0" stroke-width="0.8"/>' +
    '<path d="M25 28 Q45 20 65 28 L70 170 L20 170 Z" fill="#1C1C2E" opacity="0.6" stroke="#2F2F4F" stroke-width="0.5"/>' +
  '</g>' +
  // Butterfly (transformation)
  '<g transform="translate(80,60)" filter="url(#glow)">' +
    '<path d="M20 0 Q5 -15 0 -5 Q5 5 20 0" fill="#C0C0C0" opacity="0.15" stroke="#C0C0C0" stroke-width="0.5"/>' +
    '<path d="M20 0 Q35 -15 40 -5 Q35 5 20 0" fill="#C0C0C0" opacity="0.15" stroke="#C0C0C0" stroke-width="0.5"/>' +
  '</g>' +
  // Rose
  '<g transform="translate(85,220)">' +
    '<circle cx="15" cy="0" r="6" fill="#C0C0C0" opacity="0.08" stroke="#C0C0C0" stroke-width="0.5"/>' +
    '<line x1="15" y1="6" x2="15" y2="30" stroke="#2F4F4F" stroke-width="1" opacity="0.3"/>' +
  '</g>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#C0C0C0" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">DEATH</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#C0C0C0" font-family="serif" font-size="10" opacity="0.6">XIII</text>' +
'</svg>';

// XIV - Temperance
TAROT_SVGS[14] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="url(#cosmicBg)"/>' + stars(20) +
  '<circle cx="100" cy="110" r="50" fill="#FFD700" opacity="0.05"/>' +
  '<ellipse cx="100" cy="200" rx="60" ry="30" fill="#87CEEB" opacity="0.05"/>' +
  // Angel figure with wings
  '<g transform="translate(60,50)" filter="url(#glow)">' +
    '<circle cx="40" cy="20" r="12" fill="#DDA0DD" opacity="0.15" stroke="#FFD700" stroke-width="1"/>' +
    '<circle cx="40" cy="17" r="20" fill="none" stroke="#FFD700" stroke-width="0.6" opacity="0.3"/>' +
    // Wings
    '<path d="M25 30 L-5 15 Q-15 20 -10 35 Q0 40 25 35" fill="#87CEEB" opacity="0.1" stroke="#FFD700" stroke-width="0.5"/>' +
    '<path d="M55 30 L85 15 Q95 20 90 35 Q80 40 55 35" fill="#87CEEB" opacity="0.1" stroke="#FFD700" stroke-width="0.5"/>' +
    '<path d="M28 32 L20 130 L60 130 L52 32" fill="#DDA0DD" opacity="0.15" stroke="#FFD700" stroke-width="0.3"/>' +
    // Two cups with flowing water
    '<path d="M15 60 L10 75 L25 75 Z" fill="none" stroke="#FFD700" stroke-width="0.8"/>' +
    '<path d="M55 75 L50 90 L65 90 Z" fill="none" stroke="#FFD700" stroke-width="0.8"/>' +
    '<path d="M20 75 Q38 65 55 75" stroke="#87CEEB" stroke-width="1" fill="none" opacity="0.4"/>' +
  '</g>' +
  // Rainbow arc
  '<path d="M30 250 Q100 200 170 250" fill="none" stroke="#FFD700" stroke-width="0.5" opacity="0.2"/>' +
  '<path d="M35 252 Q100 205 165 252" fill="none" stroke="#DDA0DD" stroke-width="0.5" opacity="0.15"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#DDA0DD" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">TEMPERANCE</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#FFD700" font-family="serif" font-size="10" opacity="0.6">XIV</text>' +
'</svg>';

// XV - The Devil
TAROT_SVGS[15] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="#050505"/>' + stars(10) +
  '<ellipse cx="100" cy="150" rx="60" ry="50" fill="#8B0000" opacity="0.06"/>' +
  // Dark figure
  '<g transform="translate(60,50)" filter="url(#glow)">' +
    '<circle cx="40" cy="22" r="13" fill="#1C1C1C" stroke="#8B0000" stroke-width="1"/>' +
    '<path d="M30 12 L25 0 M50 12 L55 0" stroke="#8B0000" stroke-width="1.5"/>' + // horns
    '<path d="M20 35 L10 160 L70 160 L60 35" fill="#1C1C1C" opacity="0.6" stroke="#FF4500" stroke-width="0.3"/>' +
    '<path d="M20 55 L0 80 M60 55 L80 80" stroke="#8B0000" stroke-width="1.5" fill="none" opacity="0.5"/>' +
  '</g>' +
  // Chains
  '<g opacity="0.3">' +
    '<circle cx="60" cy="230" r="3" fill="none" stroke="#FF4500" stroke-width="1"/>' +
    '<circle cx="66" cy="233" r="3" fill="none" stroke="#FF4500" stroke-width="1"/>' +
    '<circle cx="72" cy="236" r="3" fill="none" stroke="#FF4500" stroke-width="1"/>' +
    '<circle cx="128" cy="236" r="3" fill="none" stroke="#FF4500" stroke-width="1"/>' +
    '<circle cx="134" cy="233" r="3" fill="none" stroke="#FF4500" stroke-width="1"/>' +
    '<circle cx="140" cy="230" r="3" fill="none" stroke="#FF4500" stroke-width="1"/>' +
  '</g>' +
  // Flames
  '<path d="M90 250 Q95 235 100 250 Q105 235 110 250" fill="#FF4500" opacity="0.1"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#FF4500" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE DEVIL</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#8B0000" font-family="serif" font-size="10" opacity="0.6">XV</text>' +
'</svg>';

// XVI - The Tower
TAROT_SVGS[16] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="#0a0505"/>' + stars(15) +
  '<ellipse cx="100" cy="100" rx="50" ry="40" fill="#FF4500" opacity="0.08"/>' +
  // Tower
  '<g filter="url(#glow)">' +
    '<rect x="70" y="60" width="60" height="170" rx="2" fill="#1a0a0a" stroke="#8B0000" stroke-width="1"/>' +
    '<rect x="85" y="45" width="30" height="20" rx="1" fill="#1a0a0a" stroke="#8B0000" stroke-width="0.8"/>' +
    // Windows
    '<rect x="85" y="90" width="10" height="15" rx="5" fill="#FF4500" opacity="0.15"/>' +
    '<rect x="105" y="90" width="10" height="15" rx="5" fill="#FF4500" opacity="0.15"/>' +
    '<rect x="85" y="130" width="10" height="15" rx="5" fill="#FF4500" opacity="0.1"/>' +
    '<rect x="105" y="130" width="10" height="15" rx="5" fill="#FF4500" opacity="0.1"/>' +
  '</g>' +
  // Lightning bolt
  '<path d="M100 10 L90 45 L105 42 L85 75" stroke="#FFD700" stroke-width="2.5" fill="none" filter="url(#glow)"/>' +
  // Falling figures
  '<circle cx="55" cy="180" r="5" fill="#8B0000" opacity="0.15"/>' +
  '<circle cx="145" cy="200" r="5" fill="#8B0000" opacity="0.12"/>' +
  // Flames
  '<path d="M70 230 Q80 210 90 230 Q100 210 110 230 Q120 210 130 230" fill="#FF4500" opacity="0.1"/>' +
  '<path d="M75 235 Q85 220 95 235 Q105 220 115 235 Q125 220 125 235" fill="#FFD700" opacity="0.06"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#FF4500" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE TOWER</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#FF4500" font-family="serif" font-size="10" opacity="0.6">XVI</text>' +
'</svg>';

// XVII - The Star
TAROT_SVGS[17] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="#050520"/>' + stars(40) +
  // Large star
  '<g transform="translate(100,70)" filter="url(#softGlow)">' +
    '<polygon points="0,-25 6,-8 24,-8 10,3 16,20 0,10 -16,20 -10,3 -24,-8 -6,-8" fill="#FFD700" opacity="0.15" stroke="#FFD700" stroke-width="0.8"/>' +
    '<circle cx="0" cy="0" r="8" fill="#FFD700" opacity="0.2"/>' +
  '</g>' +
  // Smaller stars
  '<circle cx="50" cy="50" r="3" fill="#E6E6FA" opacity="0.3" filter="url(#glow)"/>' +
  '<circle cx="150" cy="45" r="2" fill="#87CEEB" opacity="0.25" filter="url(#glow)"/>' +
  '<circle cx="60" cy="90" r="2" fill="#FFD700" opacity="0.2"/>' +
  '<circle cx="140" cy="100" r="2.5" fill="#E6E6FA" opacity="0.2"/>' +
  '<circle cx="170" cy="70" r="1.5" fill="#FFD700" opacity="0.25"/>' +
  '<circle cx="30" cy="75" r="1.5" fill="#87CEEB" opacity="0.2"/>' +
  // Figure pouring water
  '<g transform="translate(55,110)" filter="url(#glow)">' +
    '<circle cx="40" cy="18" r="11" fill="#E6E6FA" opacity="0.1" stroke="#87CEEB" stroke-width="0.8"/>' +
    '<path d="M28 29 L22 100 L58 100 L52 29" fill="#87CEEB" opacity="0.1" stroke="#E6E6FA" stroke-width="0.3"/>' +
    '<path d="M52 50 L70 60 L72 80" stroke="#87CEEB" stroke-width="1" fill="none" opacity="0.4"/>' + // arm pouring
    '<path d="M72 80 Q75 100 70 120" stroke="#87CEEB" stroke-width="0.8" fill="none" opacity="0.3"/>' + // water
    '<path d="M28 50 L10 60 L8 80" stroke="#87CEEB" stroke-width="1" fill="none" opacity="0.4"/>' +
    '<path d="M8 80 Q5 100 10 120" stroke="#87CEEB" stroke-width="0.8" fill="none" opacity="0.3"/>' +
  '</g>' +
  // Pool of water
  '<ellipse cx="100" cy="250" rx="50" ry="10" fill="#87CEEB" opacity="0.06"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#87CEEB" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE STAR</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#E6E6FA" font-family="serif" font-size="10" opacity="0.6">XVII</text>' +
'</svg>';

// XVIII - The Moon
TAROT_SVGS[18] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="#030315"/>' + stars(35) +
  // Moon
  '<g transform="translate(100,70)" filter="url(#softGlow)">' +
    '<circle cx="0" cy="0" r="28" fill="#C0C0C0" opacity="0.08"/>' +
    '<circle cx="0" cy="0" r="22" fill="#E6E6FA" opacity="0.06"/>' +
    '<circle cx="8" cy="-5" r="18" fill="#030315"/>' + // crescent shadow
  '</g>' +
  // Path between towers
  '<rect x="25" y="130" width="18" height="80" rx="2" fill="#191970" opacity="0.3" stroke="#483D8B" stroke-width="0.5"/>' +
  '<rect x="157" y="130" width="18" height="80" rx="2" fill="#191970" opacity="0.3" stroke="#483D8B" stroke-width="0.5"/>' +
  // Winding path
  '<path d="M100 260 Q80 240 100 220 Q120 200 100 180 Q80 160 100 140" fill="none" stroke="#C0C0C0" stroke-width="1" opacity="0.15"/>' +
  // Water/pool
  '<ellipse cx="100" cy="260" rx="60" ry="15" fill="#483D8B" opacity="0.1"/>' +
  // Dog and wolf silhouettes
  '<g transform="translate(50,210)" opacity="0.15">' +
    '<path d="M0 20 L5 10 L10 5 L15 8 L20 5 L25 12 L30 20 Z" fill="#C0C0C0"/>' +
  '</g>' +
  '<g transform="translate(120,205)" opacity="0.12">' +
    '<path d="M0 20 L5 8 L10 3 L15 6 L20 3 L25 10 L30 20 Z" fill="#C0C0C0"/>' +
  '</g>' +
  // Drops from moon
  '<circle cx="90" cy="110" r="1.5" fill="#C0C0C0" opacity="0.15"/>' +
  '<circle cx="95" cy="125" r="1" fill="#C0C0C0" opacity="0.1"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#C0C0C0" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE MOON</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#C0C0C0" font-family="serif" font-size="10" opacity="0.6">XVIII</text>' +
'</svg>';

// XIX - The Sun
TAROT_SVGS[19] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="#0a0815"/>' + stars(10) +
  // Sun with rays
  '<g transform="translate(100,90)" filter="url(#softGlow)">' +
    '<circle cx="0" cy="0" r="35" fill="#FFD700" opacity="0.1"/>' +
    '<circle cx="0" cy="0" r="22" fill="#FFA500" opacity="0.12"/>' +
    '<circle cx="0" cy="0" r="12" fill="#FFD700" opacity="0.15"/>' +
    // Rays
    '<line x1="0" y1="-40" x2="0" y2="-55" stroke="#FFD700" stroke-width="2" opacity="0.3"/>' +
    '<line x1="0" y1="40" x2="0" y2="55" stroke="#FFD700" stroke-width="2" opacity="0.3"/>' +
    '<line x1="-40" y1="0" x2="-55" y2="0" stroke="#FFD700" stroke-width="2" opacity="0.3"/>' +
    '<line x1="40" y1="0" x2="55" y2="0" stroke="#FFD700" stroke-width="2" opacity="0.3"/>' +
    '<line x1="-28" y1="-28" x2="-40" y2="-40" stroke="#FFA500" stroke-width="1.5" opacity="0.25"/>' +
    '<line x1="28" y1="-28" x2="40" y2="-40" stroke="#FFA500" stroke-width="1.5" opacity="0.25"/>' +
    '<line x1="-28" y1="28" x2="-40" y2="40" stroke="#FFA500" stroke-width="1.5" opacity="0.25"/>' +
    '<line x1="28" y1="28" x2="40" y2="40" stroke="#FFA500" stroke-width="1.5" opacity="0.25"/>' +
  '</g>' +
  // Child figure
  '<g transform="translate(75,155)" filter="url(#glow)">' +
    '<circle cx="25" cy="12" r="9" fill="#FF8C00" opacity="0.1" stroke="#FFD700" stroke-width="1"/>' +
    '<path d="M16 21 L12 70 L38 70 L34 21" fill="#FFA500" opacity="0.12" stroke="#FFD700" stroke-width="0.3"/>' +
    '<path d="M16 30 L5 50 M34 30 L45 50" stroke="#FFD700" stroke-width="1" fill="none" opacity="0.4"/>' +
  '</g>' +
  // Sunflowers
  '<circle cx="40" cy="230" r="7" fill="#FFD700" opacity="0.1" stroke="#FFA500" stroke-width="0.5"/>' +
  '<circle cx="40" cy="230" r="3" fill="#FF8C00" opacity="0.15"/>' +
  '<circle cx="160" cy="225" r="7" fill="#FFD700" opacity="0.08" stroke="#FFA500" stroke-width="0.5"/>' +
  '<circle cx="160" cy="225" r="3" fill="#FF8C00" opacity="0.12"/>' +
  '<line x1="40" y1="237" x2="40" y2="260" stroke="#2E8B57" stroke-width="1" opacity="0.2"/>' +
  '<line x1="160" y1="232" x2="160" y2="258" stroke="#2E8B57" stroke-width="1" opacity="0.15"/>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#FFD700" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE SUN</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#FFD700" font-family="serif" font-size="10" opacity="0.6">XIX</text>' +
'</svg>';

// XX - Judgement
TAROT_SVGS[20] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="url(#cosmicBg)"/>' + stars(20) +
  '<circle cx="100" cy="70" r="40" fill="#FFD700" opacity="0.06"/>' +
  // Angel with trumpet at top
  '<g transform="translate(65,25)" filter="url(#glow)">' +
    '<circle cx="35" cy="15" r="10" fill="#4B0082" opacity="0.15" stroke="#FFD700" stroke-width="0.8"/>' +
    '<circle cx="35" cy="12" r="16" fill="none" stroke="#FFD700" stroke-width="0.5" opacity="0.3"/>' +
    // Wings
    '<path d="M22 22 L0 10 Q-5 18 5 25 Z" fill="#9370DB" opacity="0.1" stroke="#FFD700" stroke-width="0.3"/>' +
    '<path d="M48 22 L70 10 Q75 18 65 25 Z" fill="#9370DB" opacity="0.1" stroke="#FFD700" stroke-width="0.3"/>' +
    '<path d="M25 25 L20 70 L50 70 L45 25" fill="#4B0082" opacity="0.2" stroke="#9370DB" stroke-width="0.3"/>' +
    // Trumpet
    '<path d="M50 35 L70 45 L75 40 L75 50 L70 45" fill="none" stroke="#FFD700" stroke-width="1.2"/>' +
  '</g>' +
  // Sound waves
  '<path d="M145 70 Q155 65 155 75" fill="none" stroke="#FFD700" stroke-width="0.5" opacity="0.2"/>' +
  '<path d="M150 65 Q165 60 165 80" fill="none" stroke="#FFD700" stroke-width="0.5" opacity="0.15"/>' +
  // Rising figures below
  '<g transform="translate(40,160)" opacity="0.2">' +
    '<rect x="0" y="20" width="25" height="2" fill="#9370DB"/>' +
    '<circle cx="12" cy="10" r="5" fill="none" stroke="#FFD700" stroke-width="0.8"/>' +
    '<line x1="12" y1="15" x2="12" y2="20" stroke="#FFD700" stroke-width="0.8"/>' +
  '</g>' +
  '<g transform="translate(85,155)" opacity="0.2">' +
    '<rect x="0" y="20" width="25" height="2" fill="#9370DB"/>' +
    '<circle cx="12" cy="8" r="5" fill="none" stroke="#FFD700" stroke-width="0.8"/>' +
    '<line x1="12" y1="13" x2="12" y2="20" stroke="#FFD700" stroke-width="0.8"/>' +
    '<path d="M5 5 L12 0 L19 5" stroke="#FFD700" stroke-width="0.5" fill="none"/>' +
  '</g>' +
  '<g transform="translate(130,160)" opacity="0.2">' +
    '<rect x="0" y="20" width="25" height="2" fill="#9370DB"/>' +
    '<circle cx="12" cy="10" r="5" fill="none" stroke="#FFD700" stroke-width="0.8"/>' +
    '<line x1="12" y1="15" x2="12" y2="20" stroke="#FFD700" stroke-width="0.8"/>' +
  '</g>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#9370DB" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">JUDGEMENT</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#9370DB" font-family="serif" font-size="10" opacity="0.6">XX</text>' +
'</svg>';

// XXI - The World
TAROT_SVGS[21] = '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<rect width="200" height="300" rx="12" fill="url(#cosmicBg)"/>' + stars(25) +
  // Wreath/laurel circle
  '<g transform="translate(100,145)" filter="url(#glow)">' +
    '<ellipse cx="0" cy="0" rx="55" ry="65" fill="none" stroke="#2E8B57" stroke-width="2" opacity="0.3"/>' +
    '<ellipse cx="0" cy="0" rx="50" ry="60" fill="none" stroke="#FFD700" stroke-width="0.5" opacity="0.2"/>' +
    // Figure dancing inside
    '<circle cx="0" cy="-20" r="10" fill="#4169E1" opacity="0.1" stroke="#FFD700" stroke-width="0.8"/>' +
    '<circle cx="0" cy="-23" r="16" fill="none" stroke="#FFD700" stroke-width="0.5" opacity="0.25"/>' +
    '<path d="M-10 -10 L-15 40 L15 40 L10 -10" fill="#2E8B57" opacity="0.1" stroke="#FFD700" stroke-width="0.3"/>' +
    '<path d="M-10 0 L-25 15 M10 0 L25 15" stroke="#FFD700" stroke-width="1" fill="none" opacity="0.3"/>' +
    // Sashes
    '<path d="M-20 25 Q-30 30 -25 40" stroke="#4169E1" stroke-width="1" fill="none" opacity="0.2"/>' +
    '<path d="M20 25 Q30 30 25 40" stroke="#4169E1" stroke-width="1" fill="none" opacity="0.2"/>' +
  '</g>' +
  // Four corners (elements)
  '<circle cx="30" cy="40" r="6" fill="none" stroke="#FFD700" stroke-width="0.8" opacity="0.2"/>' + // star
  '<circle cx="170" cy="40" r="6" fill="none" stroke="#4169E1" stroke-width="0.8" opacity="0.2"/>' + // eagle
  '<circle cx="30" cy="255" r="6" fill="none" stroke="#2E8B57" stroke-width="0.8" opacity="0.2"/>' + // bull
  '<circle cx="170" cy="255" r="6" fill="none" stroke="#8B0000" stroke-width="0.8" opacity="0.2"/>' + // lion
  '<text x="30" y="43" text-anchor="middle" fill="#FFD700" font-size="7" opacity="0.3">☆</text>' +
  '<text x="170" y="43" text-anchor="middle" fill="#4169E1" font-size="7" opacity="0.3">♒</text>' +
  '<text x="30" y="258" text-anchor="middle" fill="#2E8B57" font-size="7" opacity="0.3">♉</text>' +
  '<text x="170" y="258" text-anchor="middle" fill="#8B0000" font-size="7" opacity="0.3">♌</text>' +
  cardFrame() +
  '<text x="100" y="285" text-anchor="middle" fill="#2E8B57" font-family="serif" font-size="11" font-weight="600" letter-spacing="2">THE WORLD</text>' +
  '<text x="100" y="22" text-anchor="middle" fill="#2E8B57" font-family="serif" font-size="10" opacity="0.6">XXI</text>' +
'</svg>';
