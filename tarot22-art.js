// ── Tarot 22 Major Arcana — Light Seer's Tarot Style SVG Card Art ──
// Warm luminous palette, painterly gradients, human figures, nature, mystical atmosphere
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
    var y = Math.round(Math.random() * 320);
    var r = (0.3 + Math.random() * 1.2).toFixed(1);
    var o = (0.3 + Math.random() * 0.7).toFixed(1);
    s += '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#FFF" opacity="' + o + '"/>';
  }
  return s;
}

function cardFrame() {
  return '<rect x="2" y="2" width="196" height="316" rx="10" fill="none" stroke="url(#goldShine)" stroke-width="2" opacity="0.6"/>' +
    '<rect x="6" y="6" width="188" height="308" rx="7" fill="none" stroke="#DAA520" stroke-width="0.5" opacity="0.25"/>';
}

// Helper: soft particles
function particles(cx, cy, count, color, spread) {
  var s = '';
  for (var i = 0; i < count; i++) {
    var a = (i / count) * Math.PI * 2;
    var d = 10 + Math.random() * (spread || 50);
    var px = Math.round(cx + Math.cos(a) * d);
    var py = Math.round(cy + Math.sin(a) * d);
    var r = (0.5 + Math.random() * 1.5).toFixed(1);
    s += '<circle cx="' + px + '" cy="' + py + '" r="' + r + '" fill="' + (color || '#FFD700') + '" opacity="' + (0.2 + Math.random() * 0.5).toFixed(1) + '"/>';
  }
  return s;
}

// 0 — THE FOOL: Adventurer stepping into golden light, cliff edge, sunrise
TAROT_SVGS[0] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><radialGradient id="f0sun" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.8"/><stop offset="40%" stop-color="#FF8C00" stop-opacity="0.3"/><stop offset="100%" stop-color="#1a0f3a" stop-opacity="0"/></radialGradient>' +
  '<linearGradient id="f0sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF8C00"/><stop offset="40%" stop-color="#FFD700"/><stop offset="70%" stop-color="#87CEEB"/><stop offset="100%" stop-color="#1a0f3a"/></linearGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f0sky)"/>' +
  '<circle cx="100" cy="120" r="80" fill="url(#f0sun)"/>' +
  // Mountains
  '<path d="M0 240 L40 180 L70 210 L100 170 L140 200 L170 175 L200 220 L200 320 L0 320Z" fill="#2a1a3a" opacity="0.5"/>' +
  // Cliff edge
  '<path d="M0 270 Q50 250 80 265 L80 320 L0 320Z" fill="#3a2a4a" opacity="0.7"/>' +
  '<path d="M120 280 Q160 260 200 275 L200 320 L120 320Z" fill="#2a1a3a" opacity="0.6"/>' +
  // Light rays
  '<path d="M100 120 L70 30 L80 30Z" fill="#FFD700" opacity="0.1"/>' +
  '<path d="M100 120 L120 25 L130 25Z" fill="#FFD700" opacity="0.08"/>' +
  '<path d="M100 120 L40 60 L50 55Z" fill="#FFD700" opacity="0.07"/>' +
  '<path d="M100 120 L155 50 L165 55Z" fill="#FFD700" opacity="0.07"/>' +
  // Figure — adventurer stepping forward
  '<g transform="translate(88,130)" filter="url(#glow)">' +
  '<circle cx="12" cy="0" r="10" fill="#1a0a2e" stroke="#FFD700" stroke-width="1.2"/>' +
  '<path d="M12 10 L12 50 M4 22 L12 18 L24 12 M6 55 L12 50 L22 60" stroke="#FFD700" stroke-width="2.2" fill="none" stroke-linecap="round"/>' +
  '<line x1="24" y1="12" x2="30" y2="2" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round"/>' +
  '<circle cx="32" cy="0" r="3.5" fill="#FFD700" opacity="0.7"/>' +
  '</g>' +
  // Halo around figure
  '<circle cx="100" cy="130" r="40" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.25"/>' +
  '<circle cx="100" cy="130" r="55" fill="none" stroke="#FFD700" stroke-width="0.5" opacity="0.12"/>' +
  // Butterflies/birds
  '<path d="M55 90 Q58 85 61 90 Q58 88 55 90" fill="#FFD700" opacity="0.5"/>' +
  '<path d="M145 100 Q148 95 151 100 Q148 98 145 100" fill="#FFD700" opacity="0.4"/>' +
  particles(100, 130, 12, '#FFD700', 60) +
  // Ground flowers
  '<circle cx="30" cy="275" r="3" fill="#FF69B4" opacity="0.4"/>' +
  '<circle cx="45" cy="268" r="2" fill="#FFD700" opacity="0.5"/>' +
  '<circle cx="170" cy="278" r="2.5" fill="#DDA0DD" opacity="0.4"/>' +
  cardFrame() + '</svg>';

// I — THE MAGICIAN: Robed figure with wand raised, infinity symbol, table with tools
TAROT_SVGS[1] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f1bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1A0533"/><stop offset="50%" stop-color="#2a1555"/><stop offset="100%" stop-color="#0d0825"/></linearGradient>' +
  '<radialGradient id="f1aura" cx="50%" cy="40%" r="35%"><stop offset="0%" stop-color="#DAA520" stop-opacity="0.5"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f1bg)"/>' + stars(20) +
  '<ellipse cx="100" cy="140" rx="70" ry="60" fill="url(#f1aura)"/>' +
  // Infinity symbol above head
  '<path d="M85 75 Q75 65 85 55 Q100 55 100 65 Q100 55 115 55 Q125 65 115 75 Q100 75 100 65 Q100 75 85 75" fill="none" stroke="#FFD700" stroke-width="1.8" filter="url(#glow)"/>' +
  // Figure — robed magician, arm raised
  '<g transform="translate(85,90)" filter="url(#glow)">' +
  '<circle cx="15" cy="0" r="11" fill="#18103a" stroke="#DAA520" stroke-width="1.2"/>' +
  '<path d="M15 11 L15 65" stroke="#DAA520" stroke-width="2" fill="none"/>' +
  // Robe shape
  '<path d="M5 30 L15 25 L25 30 L30 70 L0 70Z" fill="#2a1555" stroke="#DAA520" stroke-width="0.8" opacity="0.6"/>' +
  // Raised wand arm
  '<path d="M15 25 L28 10 L30 -5" stroke="#DAA520" stroke-width="2" fill="none" stroke-linecap="round"/>' +
  '<circle cx="31" cy="-8" r="4" fill="#FFD700" opacity="0.8" filter="url(#glow)"/>' +
  // Other arm pointing down
  '<path d="M15 30 L0 45" stroke="#DAA520" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
  '</g>' +
  // Table with magical tools
  '<rect x="55" y="220" width="90" height="5" rx="2" fill="#DAA520" opacity="0.5"/>' +
  '<circle cx="70" cy="218" r="5" fill="none" stroke="#DAA520" stroke-width="1" opacity="0.5"/>' +
  '<path d="M90 218 L90 208 L95 208 L95 218" stroke="#DAA520" stroke-width="1" fill="none" opacity="0.5"/>' +
  '<path d="M115 218 L110 208 L120 208Z" fill="#DAA520" opacity="0.4"/>' +
  '<circle cx="132" cy="216" r="4" fill="#DAA520" opacity="0.3"/>' +
  // Roses and vines
  '<path d="M20 250 Q30 230 20 210 Q25 190 40 200" stroke="#2E8B57" stroke-width="1" fill="none" opacity="0.4"/>' +
  '<circle cx="40" cy="198" r="4" fill="#FF69B4" opacity="0.3"/>' +
  '<path d="M180 260 Q170 240 175 220 Q168 200 160 210" stroke="#2E8B57" stroke-width="1" fill="none" opacity="0.4"/>' +
  '<circle cx="160" cy="208" r="3.5" fill="#FF69B4" opacity="0.3"/>' +
  particles(100, 100, 10, '#DAA520', 55) +
  cardFrame() + '</svg>';

// II — THE HIGH PRIESTESS: Veiled woman between pillars, crescent moon, deep blue
TAROT_SVGS[2] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f2bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a1628"/><stop offset="50%" stop-color="#1B3A6B"/><stop offset="100%" stop-color="#0a0a2a"/></linearGradient>' +
  '<radialGradient id="f2moon" cx="50%" cy="30%" r="30%"><stop offset="0%" stop-color="#C0C0C0" stop-opacity="0.5"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f2bg)"/>' + stars(30) +
  '<ellipse cx="100" cy="90" rx="50" ry="45" fill="url(#f2moon)"/>' +
  // Crescent moon
  '<circle cx="100" cy="50" r="18" fill="#C0C0C0" opacity="0.8"/>' +
  '<circle cx="108" cy="47" r="15" fill="url(#f2bg)"/>' +
  // Two pillars — B and J
  '<rect x="25" y="90" width="18" height="180" rx="3" fill="#1a1a3a" stroke="#C0C0C0" stroke-width="1" opacity="0.7"/>' +
  '<rect x="157" y="90" width="18" height="180" rx="3" fill="#1a1a3a" stroke="#C0C0C0" stroke-width="1" opacity="0.7"/>' +
  '<text x="34" y="130" font-size="12" fill="#C0C0C0" text-anchor="middle" opacity="0.6" font-family="serif">B</text>' +
  '<text x="166" y="130" font-size="12" fill="#C0C0C0" text-anchor="middle" opacity="0.6" font-family="serif">J</text>' +
  // Veil between pillars
  '<path d="M43 90 Q100 110 157 90 L157 95 Q100 115 43 95Z" fill="#4169E1" opacity="0.15"/>' +
  // Seated priestess figure
  '<g transform="translate(87,110)" filter="url(#glow)">' +
  '<circle cx="13" cy="0" r="11" fill="#0d0d3a" stroke="#C0C0C0" stroke-width="1.2"/>' +
  // Veil on head
  '<path d="M2 -5 Q13 -15 24 -5 L24 5 Q13 0 2 5Z" fill="#4169E1" opacity="0.4"/>' +
  '<path d="M13 11 L13 55" stroke="#C0C0C0" stroke-width="1.5"/>' +
  // Flowing robe
  '<path d="M0 25 L13 20 L26 25 L30 70 L-4 70Z" fill="#1B3A6B" stroke="#C0C0C0" stroke-width="0.6" opacity="0.6"/>' +
  // Scroll in lap
  '<path d="M5 50 Q13 45 21 50" stroke="#C0C0C0" stroke-width="1.5" fill="none"/>' +
  // Arms holding scroll
  '<path d="M13 28 L3 42 M13 28 L23 42" stroke="#C0C0C0" stroke-width="1.2" fill="none"/>' +
  '</g>' +
  // Water at bottom
  '<path d="M0 275 Q50 265 100 275 Q150 285 200 275 L200 320 L0 320Z" fill="#1B3A6B" opacity="0.4"/>' +
  '<path d="M0 285 Q60 275 120 285 Q170 290 200 282 L200 320 L0 320Z" fill="#4169E1" opacity="0.15"/>' +
  // Pomegranate pattern on veil
  '<circle cx="70" cy="95" r="2.5" fill="#8B0000" opacity="0.3"/>' +
  '<circle cx="130" cy="95" r="2.5" fill="#8B0000" opacity="0.3"/>' +
  particles(100, 120, 10, '#C0C0C0', 50) +
  cardFrame() + '</svg>';

// III — THE EMPRESS: Woman on throne amid lush nature, green/gold
TAROT_SVGS[3] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f3bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a3a1a"/><stop offset="50%" stop-color="#2E8B57"/><stop offset="100%" stop-color="#0d1a0d"/></linearGradient>' +
  '<radialGradient id="f3glow" cx="50%" cy="45%" r="40%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.35"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f3bg)"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f3glow)"/>' +
  // Trees
  '<path d="M10 80 Q15 40 20 80 Q25 50 30 90 L30 260 L10 260Z" fill="#1a3a1a" opacity="0.6"/>' +
  '<path d="M170 70 Q175 30 180 70 Q185 45 190 85 L190 260 L170 260Z" fill="#1a3a1a" opacity="0.6"/>' +
  // Wheat/grain fields
  '<path d="M0 250 Q50 235 100 245 Q150 255 200 240 L200 320 L0 320Z" fill="#8FBC8F" opacity="0.4"/>' +
  // Throne shape
  '<path d="M60 140 L60 230 L140 230 L140 140 Q120 130 100 135 Q80 130 60 140" fill="#2E8B57" opacity="0.3" stroke="#FFD700" stroke-width="0.8"/>' +
  // Seated Empress figure
  '<g transform="translate(85,115)" filter="url(#glow)">' +
  '<circle cx="15" cy="0" r="12" fill="#1a2a1a" stroke="#FFD700" stroke-width="1.2"/>' +
  // Crown
  '<path d="M5 -8 L10 -16 L15 -10 L20 -16 L25 -8" stroke="#FFD700" stroke-width="1.5" fill="none"/>' +
  '<path d="M15 12 L15 60" stroke="#FFD700" stroke-width="1.5"/>' +
  // Flowing dress
  '<path d="M0 28 L15 22 L30 28 L38 75 L-8 75Z" fill="#2E8B57" stroke="#FFD700" stroke-width="0.6" opacity="0.5"/>' +
  // Arms resting
  '<path d="M15 30 L0 45 M15 30 L30 45" stroke="#FFD700" stroke-width="1.2" fill="none"/>' +
  '</g>' +
  // Venus symbol
  '<circle cx="100" cy="260" r="8" fill="none" stroke="#FFD700" stroke-width="1.2" opacity="0.4"/>' +
  '<line x1="100" y1="268" x2="100" y2="282" stroke="#FFD700" stroke-width="1.2" opacity="0.4"/>' +
  '<line x1="94" y1="276" x2="106" y2="276" stroke="#FFD700" stroke-width="1.2" opacity="0.4"/>' +
  // Flowers
  '<circle cx="50" cy="245" r="4" fill="#FF69B4" opacity="0.5"/><circle cx="42" cy="238" r="3" fill="#FFD700" opacity="0.4"/>' +
  '<circle cx="155" cy="248" r="3.5" fill="#FF69B4" opacity="0.4"/><circle cx="162" cy="240" r="2.5" fill="#FFD700" opacity="0.4"/>' +
  '<circle cx="80" cy="255" r="3" fill="#DDA0DD" opacity="0.35"/>' +
  particles(100, 140, 10, '#FFD700', 55) +
  cardFrame() + '</svg>';

// IV — THE EMPEROR: King on throne, mountains, crimson/gold
TAROT_SVGS[4] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f4bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4a0a0a"/><stop offset="50%" stop-color="#8B0000"/><stop offset="100%" stop-color="#1a0505"/></linearGradient>' +
  '<radialGradient id="f4aura" cx="50%" cy="40%" r="35%"><stop offset="0%" stop-color="#DAA520" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f4bg)"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f4aura)"/>' +
  // Mountain range
  '<path d="M0 160 L30 100 L55 140 L80 90 L110 130 L140 85 L170 120 L200 95 L200 320 L0 320Z" fill="#3a1515" opacity="0.5"/>' +
  // Stone throne
  '<path d="M55 150 L55 250 L145 250 L145 150 L130 140 L100 145 L70 140Z" fill="#4a2020" stroke="#DAA520" stroke-width="1" opacity="0.7"/>' +
  // Ram heads on throne
  '<path d="M55 155 Q45 145 48 135 Q55 130 58 140" stroke="#DAA520" stroke-width="1" fill="none" opacity="0.5"/>' +
  '<path d="M145 155 Q155 145 152 135 Q145 130 142 140" stroke="#DAA520" stroke-width="1" fill="none" opacity="0.5"/>' +
  // Seated Emperor figure
  '<g transform="translate(83,120)" filter="url(#glow)">' +
  '<circle cx="17" cy="0" r="12" fill="#2a0808" stroke="#DAA520" stroke-width="1.2"/>' +
  // Crown
  '<path d="M7 -8 L12 -18 L17 -10 L22 -18 L27 -8" stroke="#FFD700" stroke-width="2" fill="#DAA520" opacity="0.6"/>' +
  // Beard
  '<path d="M10 8 Q17 16 24 8" stroke="#DAA520" stroke-width="1" fill="none" opacity="0.4"/>' +
  '<path d="M17 12 L17 65" stroke="#DAA520" stroke-width="2"/>' +
  // Armor/robe
  '<path d="M2 30 L17 24 L32 30 L36 75 L-2 75Z" fill="#8B0000" stroke="#DAA520" stroke-width="0.8" opacity="0.5"/>' +
  // Scepter
  '<path d="M17 28 L32 15 L35 5" stroke="#DAA520" stroke-width="2" fill="none" stroke-linecap="round"/>' +
  '<circle cx="36" cy="3" r="4" fill="#FF4500" opacity="0.6" stroke="#DAA520" stroke-width="1"/>' +
  // Orb in other hand
  '<path d="M17 32 L2 45" stroke="#DAA520" stroke-width="1.5" fill="none"/>' +
  '<circle cx="0" cy="47" r="5" fill="#DAA520" opacity="0.4" stroke="#DAA520" stroke-width="0.8"/>' +
  '</g>' +
  particles(100, 140, 8, '#FF4500', 50) +
  cardFrame() + '</svg>';

// V — THE HIEROPHANT: Spiritual teacher with staff, pillars, flowers
TAROT_SVGS[5] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f5bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a0040"/><stop offset="50%" stop-color="#4B0082"/><stop offset="100%" stop-color="#0d0020"/></linearGradient>' +
  '<radialGradient id="f5light" cx="50%" cy="35%" r="40%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f5bg)"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f5light)"/>' + stars(12) +
  // Stained glass window arch
  '<path d="M40 50 Q100 10 160 50 L160 180 L40 180Z" fill="#4B0082" opacity="0.3" stroke="#FFD700" stroke-width="0.8"/>' +
  '<path d="M60 60 Q100 30 140 60" fill="none" stroke="#FFD700" stroke-width="0.5" opacity="0.4"/>' +
  // Standing Hierophant figure
  '<g transform="translate(83,85)" filter="url(#glow)">' +
  '<circle cx="17" cy="0" r="12" fill="#1a0040" stroke="#FFD700" stroke-width="1.2"/>' +
  // Triple crown/mitre
  '<path d="M10 -8 L17 -22 L24 -8" fill="#4B0082" stroke="#FFD700" stroke-width="1.2"/>' +
  '<line x1="17" y1="-22" x2="17" y2="-25" stroke="#FFD700" stroke-width="1"/>' +
  '<path d="M17 12 L17 80" stroke="#FFD700" stroke-width="1.5"/>' +
  // Robes
  '<path d="M0 28 L17 22 L34 28 L40 90 L-6 90Z" fill="#4B0082" stroke="#FFD700" stroke-width="0.6" opacity="0.5"/>' +
  // Blessing hand
  '<path d="M17 30 L32 22 L35 18" stroke="#FFD700" stroke-width="1.5" fill="none"/>' +
  // Staff in other hand
  '<path d="M17 28 L2 20 L-2 -10" stroke="#FFD700" stroke-width="2" fill="none" stroke-linecap="round"/>' +
  '<circle cx="-2" cy="-14" r="5" fill="none" stroke="#FFD700" stroke-width="1.5"/>' +
  '<line x1="-2" y1="-19" x2="-2" y2="-9" stroke="#FFD700" stroke-width="1"/>' +
  '<line x1="-7" y1="-14" x2="3" y2="-14" stroke="#FFD700" stroke-width="1"/>' +
  '</g>' +
  // Two kneeling figures at bottom
  '<g transform="translate(40,230)">' +
  '<circle cx="8" cy="0" r="6" fill="#1a0040" stroke="#FF69B4" stroke-width="0.8" opacity="0.5"/>' +
  '<path d="M8 6 L8 25 M2 12 L8 10 L14 12 M5 25 L8 30 L11 25" stroke="#FF69B4" stroke-width="1" fill="none" opacity="0.5"/>' +
  '</g>' +
  '<g transform="translate(140,230)">' +
  '<circle cx="8" cy="0" r="6" fill="#1a0040" stroke="#FF69B4" stroke-width="0.8" opacity="0.5"/>' +
  '<path d="M8 6 L8 25 M2 12 L8 10 L14 12 M5 25 L8 30 L11 25" stroke="#FF69B4" stroke-width="1" fill="none" opacity="0.5"/>' +
  '</g>' +
  // Flowers
  '<circle cx="30" cy="280" r="5" fill="#FF69B4" opacity="0.4"/><circle cx="170" cy="282" r="4.5" fill="#FF69B4" opacity="0.4"/>' +
  '<circle cx="50" cy="290" r="3" fill="#DDA0DD" opacity="0.3"/><circle cx="150" cy="288" r="3.5" fill="#DDA0DD" opacity="0.3"/>' +
  particles(100, 110, 10, '#FFD700', 50) +
  cardFrame() + '</svg>';

// VI — THE LOVERS: Two figures in divine light, angel above, rose pink/gold
TAROT_SVGS[6] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f6bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.3"/><stop offset="30%" stop-color="#FF69B4" stop-opacity="0.2"/><stop offset="100%" stop-color="#1a0a2e"/></linearGradient>' +
  '<radialGradient id="f6divine" cx="50%" cy="25%" r="35%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.6"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="#1a0a2e"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f6bg)"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f6divine)"/>' +
  // Angel figure above
  '<g transform="translate(88,40)" filter="url(#glow)">' +
  '<circle cx="12" cy="0" r="9" fill="#FFD700" opacity="0.3" stroke="#FFD700" stroke-width="1"/>' +
  // Wings
  '<path d="M12 5 Q-10 -5 -5 -20 Q5 -15 12 0" fill="#FFD700" opacity="0.2" stroke="#FFD700" stroke-width="0.6"/>' +
  '<path d="M12 5 Q34 -5 29 -20 Q19 -15 12 0" fill="#FFD700" opacity="0.2" stroke="#FFD700" stroke-width="0.6"/>' +
  '</g>' +
  // Divine light rays
  '<path d="M100 50 L85 0 L90 0Z" fill="#FFD700" opacity="0.1"/>' +
  '<path d="M100 50 L110 0 L115 0Z" fill="#FFD700" opacity="0.08"/>' +
  '<path d="M100 50 L60 15 L65 10Z" fill="#FFD700" opacity="0.06"/>' +
  '<path d="M100 50 L140 15 L135 10Z" fill="#FFD700" opacity="0.06"/>' +
  // Two figures
  // Figure 1 (left)
  '<g transform="translate(45,140)">' +
  '<circle cx="15" cy="0" r="11" fill="#1a0a2e" stroke="#FF69B4" stroke-width="1.2"/>' +
  '<path d="M15 11 L15 60 M7 25 L15 20 L23 25 M10 60 L15 70 L20 60" stroke="#FF69B4" stroke-width="1.5" fill="none"/>' +
  '</g>' +
  // Figure 2 (right)
  '<g transform="translate(115,140)">' +
  '<circle cx="15" cy="0" r="11" fill="#1a0a2e" stroke="#FF1493" stroke-width="1.2"/>' +
  '<path d="M15 11 L15 60 M7 25 L15 20 L23 25 M10 60 L15 70 L20 60" stroke="#FF1493" stroke-width="1.5" fill="none"/>' +
  '</g>' +
  // Connection between figures — heart/energy
  '<path d="M75 160 Q100 140 125 160" stroke="#FFD700" stroke-width="1" fill="none" opacity="0.5" stroke-dasharray="3,3"/>' +
  // Heart shape between
  '<path d="M95 168 Q88 158 95 150 Q100 155 105 150 Q112 158 105 168 L100 175Z" fill="#FF69B4" opacity="0.3" stroke="#FFD700" stroke-width="0.5"/>' +
  // Tree of knowledge (right)
  '<path d="M165 230 L165 160 Q175 140 170 120" stroke="#2E8B57" stroke-width="2" fill="none" opacity="0.4"/>' +
  '<circle cx="170" cy="115" r="12" fill="#2E8B57" opacity="0.2"/>' +
  // Tree of life (left)
  '<path d="M35 230 L35 165 Q28 145 33 125" stroke="#2E8B57" stroke-width="2" fill="none" opacity="0.4"/>' +
  '<circle cx="33" cy="120" r="11" fill="#2E8B57" opacity="0.2"/>' +
  '<circle cx="30" cy="118" r="3" fill="#FF4500" opacity="0.4"/>' +
  // Ground
  '<path d="M0 260 Q100 245 200 260 L200 320 L0 320Z" fill="#2a1a3a" opacity="0.4"/>' +
  particles(100, 100, 12, '#FFD700', 60) +
  cardFrame() + '</svg>';

// VII — THE CHARIOT: Warrior in chariot, sphinxes, steel blue/silver
TAROT_SVGS[7] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f7bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a0a2e"/><stop offset="50%" stop-color="#1C1C2E"/><stop offset="100%" stop-color="#050515"/></linearGradient>' +
  '<radialGradient id="f7star" cx="50%" cy="20%" r="25%"><stop offset="0%" stop-color="#C0C0C0" stop-opacity="0.5"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f7bg)"/>' + stars(20) +
  '<rect width="200" height="320" rx="10" fill="url(#f7star)"/>' +
  // City skyline behind
  '<path d="M0 180 L20 160 L20 170 L35 155 L35 170 L50 145 L50 165 L60 155 L60 180 L80 165 L100 180 L120 160 L140 175 L140 155 L155 145 L160 170 L175 160 L180 170 L200 155 L200 320 L0 320Z" fill="#1C1C2E" opacity="0.5"/>' +
  // Chariot body
  '<path d="M45 210 L45 260 L155 260 L155 210 Q130 195 100 200 Q70 195 45 210Z" fill="#1C1C2E" stroke="#C0C0C0" stroke-width="1.5" opacity="0.7"/>' +
  // Wheels
  '<circle cx="55" cy="265" r="12" fill="none" stroke="#C0C0C0" stroke-width="1.5" opacity="0.5"/>' +
  '<circle cx="55" cy="265" r="2" fill="#C0C0C0" opacity="0.5"/>' +
  '<circle cx="145" cy="265" r="12" fill="none" stroke="#C0C0C0" stroke-width="1.5" opacity="0.5"/>' +
  '<circle cx="145" cy="265" r="2" fill="#C0C0C0" opacity="0.5"/>' +
  // Star canopy above
  '<path d="M50 140 Q100 115 150 140 L155 200 Q100 190 45 200Z" fill="#4682B4" opacity="0.2" stroke="#C0C0C0" stroke-width="0.5"/>' +
  // Six-pointed star on canopy
  '<path d="M100 128 L104 136 L112 136 L106 142 L108 150 L100 146 L92 150 L94 142 L88 136 L96 136Z" fill="#C0C0C0" opacity="0.4"/>' +
  // Standing warrior figure
  '<g transform="translate(85,130)" filter="url(#glow)">' +
  '<circle cx="15" cy="0" r="11" fill="#0d0d2e" stroke="#C0C0C0" stroke-width="1.2"/>' +
  // Helmet/crown
  '<path d="M8 -8 L15 -14 L22 -8" stroke="#C0C0C0" stroke-width="1.5" fill="none"/>' +
  '<path d="M15 11 L15 55" stroke="#C0C0C0" stroke-width="2"/>' +
  // Armor
  '<path d="M5 20 L15 16 L25 20 L28 55 L2 55Z" fill="#1C1C2E" stroke="#C0C0C0" stroke-width="0.8" opacity="0.5"/>' +
  '</g>' +
  // Two sphinxes (black and white)
  '<ellipse cx="55" cy="235" rx="18" ry="10" fill="#1a1a2e" stroke="#C0C0C0" stroke-width="0.8" opacity="0.6"/>' +
  '<circle cx="55" cy="228" r="6" fill="#1a1a2e" stroke="#C0C0C0" stroke-width="0.8" opacity="0.6"/>' +
  '<ellipse cx="145" cy="235" rx="18" ry="10" fill="#C0C0C0" stroke="#C0C0C0" stroke-width="0.8" opacity="0.3"/>' +
  '<circle cx="145" cy="228" r="6" fill="#C0C0C0" opacity="0.3"/>' +
  particles(100, 140, 8, '#C0C0C0', 45) +
  cardFrame() + '</svg>';

// VIII — STRENGTH: Figure embracing a lion, golden/amber warmth
TAROT_SVGS[8] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f8bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.2"/><stop offset="40%" stop-color="#DAA520" stop-opacity="0.15"/><stop offset="100%" stop-color="#1a0f0a"/></linearGradient>' +
  '<radialGradient id="f8warm" cx="50%" cy="45%" r="40%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="#1a0f0a"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f8bg)"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f8warm)"/>' +
  // Meadow hills
  '<path d="M0 230 Q50 210 100 225 Q150 240 200 220 L200 320 L0 320Z" fill="#8B7355" opacity="0.3"/>' +
  '<path d="M0 260 Q80 245 160 260 Q190 265 200 258 L200 320 L0 320Z" fill="#DAA520" opacity="0.1"/>' +
  // Infinity symbol above
  '<path d="M82 80 Q72 70 82 60 Q97 60 97 70 Q97 60 112 60 Q122 70 112 80 Q97 80 97 70 Q97 80 82 80" fill="none" stroke="#FFD700" stroke-width="1.5" filter="url(#glow)" opacity="0.6"/>' +
  // Figure gently holding lion
  '<g transform="translate(65,120)" filter="url(#glow)">' +
  // Person figure
  '<circle cx="25" cy="0" r="11" fill="#1a0f0a" stroke="#FFD700" stroke-width="1.2"/>' +
  // Flower crown
  '<path d="M17 -6 Q25 -14 33 -6" stroke="#FF6347" stroke-width="1" fill="none" opacity="0.5"/>' +
  '<circle cx="21" cy="-9" r="2" fill="#FF6347" opacity="0.4"/>' +
  '<circle cx="29" cy="-9" r="2" fill="#FF6347" opacity="0.4"/>' +
  '<path d="M25 11 L25 60 M18 25 L25 20" stroke="#FFD700" stroke-width="1.5" fill="none"/>' +
  '<path d="M5 25 L25 22 L45 25 L50 70 L0 70Z" fill="#DAA520" opacity="0.15" stroke="#FFD700" stroke-width="0.5"/>' +
  '</g>' +
  // Lion
  '<g transform="translate(60,175)">' +
  // Lion body
  '<ellipse cx="40" cy="20" rx="32" ry="18" fill="#DAA520" opacity="0.25" stroke="#FFD700" stroke-width="0.8"/>' +
  // Lion head
  '<circle cx="15" cy="8" r="14" fill="#DAA520" opacity="0.2"/>' +
  // Mane
  '<circle cx="15" cy="8" r="18" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.3"/>' +
  '<circle cx="15" cy="12" r="4" fill="#DAA520" opacity="0.3"/>' +
  // Person\'s hand on lion
  '<path d="M25 -15 Q20 -5 15 5" stroke="#FFD700" stroke-width="1.2" fill="none" opacity="0.6"/>' +
  '</g>' +
  // Sunflowers
  '<circle cx="25" cy="250" r="6" fill="#FFD700" opacity="0.3"/><circle cx="25" cy="250" r="3" fill="#8B4513" opacity="0.3"/>' +
  '<circle cx="175" cy="245" r="5" fill="#FFD700" opacity="0.3"/><circle cx="175" cy="245" r="2.5" fill="#8B4513" opacity="0.3"/>' +
  particles(100, 150, 10, '#FFD700', 50) +
  cardFrame() + '</svg>';

// IX — THE HERMIT: Cloaked figure with lantern on mountain, grey-green
TAROT_SVGS[9] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f9bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a1a2a"/><stop offset="50%" stop-color="#2F4F4F"/><stop offset="100%" stop-color="#0d0d1a"/></linearGradient>' +
  '<radialGradient id="f9lantern" cx="65%" cy="30%" r="20%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.7"/><stop offset="50%" stop-color="#DAA520" stop-opacity="0.2"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f9bg)"/>' + stars(25) +
  '<rect width="200" height="320" rx="10" fill="url(#f9lantern)"/>' +
  // Mountain peak
  '<path d="M0 320 L60 120 L100 180 L140 100 L200 200 L200 320Z" fill="#2F4F4F" opacity="0.4"/>' +
  '<path d="M0 320 L70 180 L110 220 L150 160 L200 240 L200 320Z" fill="#3a5a5a" opacity="0.3"/>' +
  // Snow caps
  '<path d="M135 100 L140 100 L145 110 L138 108Z" fill="#C0C0C0" opacity="0.2"/>' +
  '<path d="M55 120 L60 118 L65 128 L58 126Z" fill="#C0C0C0" opacity="0.2"/>' +
  // Hermit figure on peak
  '<g transform="translate(85,100)" filter="url(#glow)">' +
  '<circle cx="15" cy="0" r="11" fill="#2F4F4F" stroke="#DAA520" stroke-width="1"/>' +
  // Hood
  '<path d="M4 -5 Q15 -18 26 -5" fill="#2F4F4F" stroke="#DAA520" stroke-width="0.8"/>' +
  '<path d="M15 11 L15 70" stroke="#DAA520" stroke-width="1.5"/>' +
  // Cloak
  '<path d="M0 15 L15 10 L30 15 L38 80 L-8 80Z" fill="#2F4F4F" stroke="#696969" stroke-width="0.5" opacity="0.6"/>' +
  // Staff
  '<path d="M15 20 L2 10 L-2 -25" stroke="#DAA520" stroke-width="2" fill="none" stroke-linecap="round"/>' +
  // Lantern held high
  '<path d="M15 18 L28 5 L32 -5" stroke="#DAA520" stroke-width="1.5" fill="none"/>' +
  '<rect x="27" y="-15" width="10" height="12" rx="2" fill="#FFD700" opacity="0.5" stroke="#DAA520" stroke-width="1"/>' +
  '<circle cx="32" cy="-9" r="4" fill="#FFD700" opacity="0.8" filter="url(#glow)"/>' +
  '</g>' +
  // Lantern light rays
  '<path d="M117 91 L130 60 L135 62Z" fill="#FFD700" opacity="0.1"/>' +
  '<path d="M117 91 L145 75 L143 80Z" fill="#FFD700" opacity="0.08"/>' +
  '<path d="M117 91 L110 55 L115 55Z" fill="#FFD700" opacity="0.07"/>' +
  // Six-pointed star in lantern glow
  '<path d="M125 70 L127 75 L132 75 L128 78 L129 83 L125 80 L121 83 L122 78 L118 75 L123 75Z" fill="#FFD700" opacity="0.2"/>' +
  particles(120, 80, 8, '#FFD700', 30) +
  cardFrame() + '</svg>';

// X — WHEEL OF FORTUNE: Cosmic wheel with symbols, royal blue/gold
TAROT_SVGS[10] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f10bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a1040"/><stop offset="50%" stop-color="#4169E1"/><stop offset="100%" stop-color="#050520"/></linearGradient>' +
  '<radialGradient id="f10glow" cx="50%" cy="50%" r="35%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.3"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f10bg)"/>' + stars(30) +
  '<rect width="200" height="320" rx="10" fill="url(#f10glow)"/>' +
  // Outer wheel
  '<circle cx="100" cy="160" r="75" fill="none" stroke="#FFD700" stroke-width="2" opacity="0.5"/>' +
  '<circle cx="100" cy="160" r="65" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.3"/>' +
  '<circle cx="100" cy="160" r="55" fill="none" stroke="#9370DB" stroke-width="1" opacity="0.3"/>' +
  '<circle cx="100" cy="160" r="20" fill="#FFD700" opacity="0.1" stroke="#FFD700" stroke-width="1.5"/>' +
  // Wheel spokes
  '<line x1="100" y1="85" x2="100" y2="235" stroke="#FFD700" stroke-width="0.8" opacity="0.3"/>' +
  '<line x1="25" y1="160" x2="175" y2="160" stroke="#FFD700" stroke-width="0.8" opacity="0.3"/>' +
  '<line x1="47" y1="107" x2="153" y2="213" stroke="#FFD700" stroke-width="0.8" opacity="0.3"/>' +
  '<line x1="153" y1="107" x2="47" y2="213" stroke="#FFD700" stroke-width="0.8" opacity="0.3"/>' +
  // Alchemical symbols on wheel
  '<text x="100" y="100" font-size="14" fill="#FFD700" text-anchor="middle" opacity="0.6">\u2648</text>' +
  '<text x="162" y="165" font-size="14" fill="#FFD700" text-anchor="middle" opacity="0.6">\u264B</text>' +
  '<text x="100" y="228" font-size="14" fill="#FFD700" text-anchor="middle" opacity="0.6">\u264E</text>' +
  '<text x="38" y="165" font-size="14" fill="#FFD700" text-anchor="middle" opacity="0.6">\u2651</text>' +
  // Sphinx on top
  '<ellipse cx="100" cy="82" rx="15" ry="8" fill="#FFD700" opacity="0.2" stroke="#FFD700" stroke-width="0.8"/>' +
  '<circle cx="100" cy="76" r="5" fill="#FFD700" opacity="0.2" stroke="#FFD700" stroke-width="0.8"/>' +
  // Snake going down (left)
  '<path d="M35 140 Q30 160 35 180 Q30 195 38 210" stroke="#FF4500" stroke-width="1.5" fill="none" opacity="0.4"/>' +
  // Anubis going up (right)
  '<path d="M165 185 Q170 165 165 145 Q170 130 162 115" stroke="#DAA520" stroke-width="1.5" fill="none" opacity="0.4"/>' +
  // Four corner creatures (eagle, bull, lion, angel)
  '<text x="30" y="45" font-size="16" fill="#FFD700" opacity="0.3">\uD83E\uDD85</text>' +
  '<text x="155" y="45" font-size="16" fill="#FFD700" opacity="0.3">\uD83D\uDC02</text>' +
  '<text x="25" y="290" font-size="16" fill="#FFD700" opacity="0.3">\uD83E\uDD81</text>' +
  '<text x="155" y="290" font-size="16" fill="#FFD700" opacity="0.3">\uD83D\uDC7C</text>' +
  // Center hub detail
  '<circle cx="100" cy="160" r="8" fill="#4169E1" stroke="#FFD700" stroke-width="1.5"/>' +
  particles(100, 160, 12, '#9370DB', 80) +
  cardFrame() + '</svg>';

// XI — JUSTICE: Figure with sword and scales, crimson/gold
TAROT_SVGS[11] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f11bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3a0a0a"/><stop offset="50%" stop-color="#8B0000"/><stop offset="100%" stop-color="#1a0505"/></linearGradient>' +
  '<radialGradient id="f11aura" cx="50%" cy="40%" r="35%"><stop offset="0%" stop-color="#DAA520" stop-opacity="0.35"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f11bg)"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f11aura)"/>' +
  // Pillars
  '<rect x="20" y="60" width="14" height="220" rx="3" fill="#3a0a0a" stroke="#DAA520" stroke-width="0.8" opacity="0.5"/>' +
  '<rect x="166" y="60" width="14" height="220" rx="3" fill="#3a0a0a" stroke="#DAA520" stroke-width="0.8" opacity="0.5"/>' +
  // Curtain/veil
  '<path d="M34 60 Q100 75 166 60 L166 65 Q100 80 34 65Z" fill="#DC143C" opacity="0.2"/>' +
  // Seated Justice figure
  '<g transform="translate(83,100)" filter="url(#glow)">' +
  '<circle cx="17" cy="0" r="12" fill="#2a0808" stroke="#DAA520" stroke-width="1.2"/>' +
  // Crown/headpiece
  '<path d="M10 -8 L17 -15 L24 -8" stroke="#DAA520" stroke-width="1.5" fill="none"/>' +
  '<path d="M17 12 L17 65" stroke="#DAA520" stroke-width="1.5"/>' +
  // Robes
  '<path d="M2 28 L17 22 L32 28 L38 75 L-4 75Z" fill="#8B0000" stroke="#DAA520" stroke-width="0.5" opacity="0.4"/>' +
  // Sword raised in right hand
  '<path d="M17 25 L30 15 L32 -15" stroke="#C0C0C0" stroke-width="2" fill="none" stroke-linecap="round"/>' +
  '<path d="M28 -15 L32 -15 L36 -15" stroke="#C0C0C0" stroke-width="1.5" fill="none"/>' +
  // Scales in left hand
  '<path d="M17 28 L2 18" stroke="#DAA520" stroke-width="1.5" fill="none"/>' +
  '<line x1="-8" y1="18" x2="12" y2="18" stroke="#DAA520" stroke-width="1.5"/>' +
  // Left pan
  '<path d="M-8 18 L-12 25 L-4 25Z" fill="none" stroke="#DAA520" stroke-width="1"/>' +
  // Right pan
  '<path d="M12 18 L8 25 L16 25Z" fill="none" stroke="#DAA520" stroke-width="1"/>' +
  '</g>' +
  // Checkered floor
  '<path d="M0 275 L200 275 L200 320 L0 320Z" fill="#1a0505" opacity="0.5"/>' +
  '<rect x="20" y="280" width="20" height="20" fill="#DAA520" opacity="0.06"/>' +
  '<rect x="60" y="280" width="20" height="20" fill="#DAA520" opacity="0.06"/>' +
  '<rect x="100" y="280" width="20" height="20" fill="#DAA520" opacity="0.06"/>' +
  '<rect x="140" y="280" width="20" height="20" fill="#DAA520" opacity="0.06"/>' +
  particles(100, 130, 8, '#DC143C', 50) +
  cardFrame() + '</svg>';

// XII — THE HANGED MAN: Suspended figure, serene, teal/green with halo
TAROT_SVGS[12] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f12bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a3a3a"/><stop offset="50%" stop-color="#4682B4"/><stop offset="100%" stop-color="#0d1a1a"/></linearGradient>' +
  '<radialGradient id="f12halo" cx="50%" cy="65%" r="20%"><stop offset="0%" stop-color="#98FB98" stop-opacity="0.5"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f12bg)"/>' + stars(15) +
  '<rect width="200" height="320" rx="10" fill="url(#f12halo)"/>' +
  // Tree/wooden beam
  '<path d="M40 60 L160 60" stroke="#8B7355" stroke-width="6" fill="none" stroke-linecap="round"/>' +
  '<path d="M40 60 L40 40 Q30 35 40 30" stroke="#8B7355" stroke-width="4" fill="none"/>' +
  '<path d="M160 60 L160 40 Q170 35 160 30" stroke="#8B7355" stroke-width="4" fill="none"/>' +
  // Leaves on tree
  '<circle cx="35" cy="28" r="8" fill="#98FB98" opacity="0.15"/>' +
  '<circle cx="165" cy="28" r="8" fill="#98FB98" opacity="0.15"/>' +
  '<circle cx="90" cy="50" r="6" fill="#98FB98" opacity="0.1"/>' +
  '<circle cx="115" cy="52" r="5" fill="#98FB98" opacity="0.1"/>' +
  // Rope
  '<path d="M100 60 L100 95" stroke="#DAA520" stroke-width="1.5"/>' +
  // Hanging figure (upside down)
  '<g transform="translate(85,95)" filter="url(#glow)">' +
  // Crossed leg (creating "4" shape)
  '<path d="M15 0 L8 40 M15 0 L22 25 L15 25" stroke="#5F9EA0" stroke-width="2" fill="none"/>' +
  // Body (going down)
  '<path d="M15 40 L15 90" stroke="#5F9EA0" stroke-width="1.5"/>' +
  // Arms spread
  '<path d="M15 60 L-5 75 M15 60 L35 75" stroke="#5F9EA0" stroke-width="1.5" fill="none"/>' +
  // Head at bottom with golden halo
  '<circle cx="15" cy="100" r="12" fill="#1a3a3a" stroke="#5F9EA0" stroke-width="1.2"/>' +
  '<circle cx="15" cy="100" r="18" fill="none" stroke="#FFD700" stroke-width="1.5" opacity="0.5" filter="url(#glow)"/>' +
  // Serene face hint
  '<path d="M11 98 Q15 102 19 98" stroke="#98FB98" stroke-width="0.8" fill="none" opacity="0.5"/>' +
  '</g>' +
  // Ground mist
  '<ellipse cx="100" cy="290" rx="80" ry="20" fill="#98FB98" opacity="0.08"/>' +
  particles(100, 190, 10, '#98FB98', 50) +
  cardFrame() + '</svg>';

// XIII — DEATH: Transformative figure, butterfly, midnight/silver
TAROT_SVGS[13] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f13bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a0a1a"/><stop offset="50%" stop-color="#1C1C2E"/><stop offset="100%" stop-color="#050510"/></linearGradient>' +
  '<radialGradient id="f13glow" cx="50%" cy="40%" r="30%"><stop offset="0%" stop-color="#C0C0C0" stop-opacity="0.3"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f13bg)"/>' + stars(20) +
  '<rect width="200" height="320" rx="10" fill="url(#f13glow)"/>' +
  // Setting sun on horizon
  '<circle cx="100" cy="240" r="30" fill="#FF4500" opacity="0.1"/>' +
  '<circle cx="100" cy="240" r="20" fill="#FFD700" opacity="0.08"/>' +
  '<path d="M0 240 L200 240 L200 320 L0 320Z" fill="#1C1C2E" opacity="0.7"/>' +
  // River
  '<path d="M70 250 Q100 245 130 255 Q160 265 200 258 L200 280 Q150 270 100 275 Q60 280 0 270 L0 258 Q40 262 70 250" fill="#4169E1" opacity="0.1"/>' +
  // Skeleton knight on horse
  '<g transform="translate(55,110)" filter="url(#glow)">' +
  // Horse silhouette
  '<path d="M50 60 Q70 40 80 55 Q85 65 80 75 L75 85 L70 80 L65 90 L55 85 L50 90 L40 80 L35 85 L25 75 Q20 65 25 55 Q35 40 50 60" fill="#1C1C2E" stroke="#C0C0C0" stroke-width="1" opacity="0.7"/>' +
  '<path d="M80 55 Q90 45 85 35 L78 40" fill="#1C1C2E" stroke="#C0C0C0" stroke-width="0.8" opacity="0.7"/>' +
  // Rider figure
  '<circle cx="50" cy="30" r="10" fill="#1C1C2E" stroke="#C0C0C0" stroke-width="1.2"/>' +
  '<path d="M50 40 L50 60" stroke="#C0C0C0" stroke-width="1.5"/>' +
  // Skull face detail
  '<circle cx="47" cy="28" r="2" fill="#C0C0C0" opacity="0.4"/>' +
  '<circle cx="53" cy="28" r="2" fill="#C0C0C0" opacity="0.4"/>' +
  // Banner/flag
  '<path d="M50 25 L45 0 L60 8 L45 16" fill="#1C1C2E" stroke="#C0C0C0" stroke-width="0.8"/>' +
  // White rose on flag
  '<circle cx="52" cy="8" r="3" fill="#C0C0C0" opacity="0.3"/>' +
  '</g>' +
  // Butterfly (transformation symbol) above
  '<g transform="translate(88,55)">' +
  '<path d="M12 8 Q0 0 5 -8 Q12 -3 12 8" fill="#C0C0C0" opacity="0.3" stroke="#C0C0C0" stroke-width="0.5"/>' +
  '<path d="M12 8 Q24 0 19 -8 Q12 -3 12 8" fill="#C0C0C0" opacity="0.3" stroke="#C0C0C0" stroke-width="0.5"/>' +
  '<line x1="12" y1="4" x2="12" y2="12" stroke="#C0C0C0" stroke-width="0.5" opacity="0.4"/>' +
  '</g>' +
  // Fallen figures/crown on ground
  '<path d="M30 260 L35 252 L38 258 L41 250 L44 260" stroke="#C0C0C0" stroke-width="0.8" fill="none" opacity="0.3"/>' +
  particles(100, 140, 10, '#C0C0C0', 55) +
  cardFrame() + '</svg>';

// XIV — TEMPERANCE: Angelic figure pouring water, lavender/gold/sky blue
TAROT_SVGS[14] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f14bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E6E6FA" stop-opacity="0.3"/><stop offset="40%" stop-color="#87CEEB" stop-opacity="0.2"/><stop offset="100%" stop-color="#1a0a2e"/></linearGradient>' +
  '<radialGradient id="f14aura" cx="50%" cy="40%" r="35%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="#1a0a2e"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f14bg)"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f14aura)"/>' +
  // Iris flowers at feet
  '<path d="M30 270 Q35 255 40 270 M35 260 L35 285" stroke="#9370DB" stroke-width="1" fill="none" opacity="0.4"/>' +
  '<path d="M160 265 Q165 250 170 265 M165 255 L165 280" stroke="#9370DB" stroke-width="1" fill="none" opacity="0.4"/>' +
  // Path to mountains
  '<path d="M80 280 Q100 260 120 280" fill="#DDA0DD" opacity="0.08"/>' +
  '<path d="M85 260 L100 220 L115 260" fill="#87CEEB" opacity="0.06"/>' +
  // Sun between mountains
  '<circle cx="100" cy="225" r="12" fill="#FFD700" opacity="0.15"/>' +
  // Water/pool at feet
  '<path d="M30 275 Q100 265 170 275 L170 300 Q100 290 30 300Z" fill="#87CEEB" opacity="0.1"/>' +
  // Angel figure
  '<g transform="translate(80,90)" filter="url(#glow)">' +
  '<circle cx="20" cy="0" r="12" fill="#1a0a2e" stroke="#DDA0DD" stroke-width="1.2"/>' +
  // Triangle on chest (sun symbol)
  '<path d="M15 25 L20 18 L25 25Z" fill="#FFD700" opacity="0.4"/>' +
  // Wings
  '<path d="M20 15 Q-15 0 -10 -20 Q5 -10 20 5" fill="#E6E6FA" opacity="0.15" stroke="#DDA0DD" stroke-width="0.6"/>' +
  '<path d="M20 15 Q55 0 50 -20 Q35 -10 20 5" fill="#E6E6FA" opacity="0.15" stroke="#DDA0DD" stroke-width="0.6"/>' +
  '<path d="M20 12 L20 70" stroke="#DDA0DD" stroke-width="1.5"/>' +
  // Robe
  '<path d="M5 30 L20 25 L35 30 L40 80 L0 80Z" fill="#87CEEB" opacity="0.15" stroke="#DDA0DD" stroke-width="0.5"/>' +
  // Two cups pouring
  '<path d="M20 35 L5 30 L0 28" stroke="#DDA0DD" stroke-width="1.5" fill="none"/>' +
  '<ellipse cx="-2" cy="26" rx="5" ry="3" fill="none" stroke="#DDA0DD" stroke-width="1"/>' +
  '<path d="M20 35 L35 30 L40 28" stroke="#DDA0DD" stroke-width="1.5" fill="none"/>' +
  '<ellipse cx="42" cy="26" rx="5" ry="3" fill="none" stroke="#DDA0DD" stroke-width="1"/>' +
  // Water stream between cups
  '<path d="M3 28 Q20 40 37 28" stroke="#87CEEB" stroke-width="1.5" fill="none" opacity="0.5"/>' +
  '</g>' +
  // Halo
  '<circle cx="100" cy="90" r="20" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.3"/>' +
  particles(100, 130, 10, '#DDA0DD', 55) +
  cardFrame() + '</svg>';

// XV — THE DEVIL: Chained figures, menacing shadow, black/dark red
TAROT_SVGS[15] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f15bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a0a0a"/><stop offset="50%" stop-color="#1C1C1C"/><stop offset="100%" stop-color="#0a0505"/></linearGradient>' +
  '<radialGradient id="f15fire" cx="50%" cy="30%" r="35%"><stop offset="0%" stop-color="#FF4500" stop-opacity="0.25"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f15bg)"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f15fire)"/>' +
  // Inverted pentagram (subtle)
  '<path d="M100 60 L120 120 L80 85 L120 85 L80 120Z" fill="none" stroke="#8B0000" stroke-width="1" opacity="0.2"/>' +
  // Dark throne/pedestal
  '<path d="M60 140 L60 220 L140 220 L140 140 Q120 130 100 135 Q80 130 60 140Z" fill="#1C1C1C" stroke="#8B0000" stroke-width="1" opacity="0.5"/>' +
  // Devil figure (seated, horned)
  '<g transform="translate(80,85)" filter="url(#glow)">' +
  '<circle cx="20" cy="10" r="13" fill="#0a0a0a" stroke="#FF4500" stroke-width="1.2"/>' +
  // Horns
  '<path d="M10 2 L5 -12 M30 2 L35 -12" stroke="#FF4500" stroke-width="2" fill="none" stroke-linecap="round"/>' +
  // Eyes
  '<circle cx="16" cy="8" r="2" fill="#FF4500" opacity="0.6"/>' +
  '<circle cx="24" cy="8" r="2" fill="#FF4500" opacity="0.6"/>' +
  '<path d="M20 23 L20 60" stroke="#FF4500" stroke-width="1.5"/>' +
  // Bat wings
  '<path d="M20 30 Q-5 15 0 0 Q10 15 20 25" fill="#1C1C1C" stroke="#8B0000" stroke-width="0.8" opacity="0.5"/>' +
  '<path d="M20 30 Q45 15 40 0 Q30 15 20 25" fill="#1C1C1C" stroke="#8B0000" stroke-width="0.8" opacity="0.5"/>' +
  // Torch/inverted pentacle
  '<path d="M20 30 L10 45 M20 30 L30 45" stroke="#FF4500" stroke-width="1" fill="none"/>' +
  '</g>' +
  // Two chained figures at base
  '<g transform="translate(38,225)">' +
  '<circle cx="10" cy="0" r="7" fill="#0a0a0a" stroke="#8B0000" stroke-width="0.8" opacity="0.5"/>' +
  '<path d="M10 7 L10 25 M4 13 L10 10 L16 13" stroke="#8B0000" stroke-width="1" fill="none" opacity="0.5"/>' +
  // Chain
  '<path d="M16 5 Q25 0 25 10 Q25 15 20 12" stroke="#696969" stroke-width="1" fill="none" opacity="0.4"/>' +
  '</g>' +
  '<g transform="translate(130,225)">' +
  '<circle cx="10" cy="0" r="7" fill="#0a0a0a" stroke="#8B0000" stroke-width="0.8" opacity="0.5"/>' +
  '<path d="M10 7 L10 25 M4 13 L10 10 L16 13" stroke="#8B0000" stroke-width="1" fill="none" opacity="0.5"/>' +
  // Chain
  '<path d="M4 5 Q-5 0 -5 10 Q-5 15 0 12" stroke="#696969" stroke-width="1" fill="none" opacity="0.4"/>' +
  '</g>' +
  // Flames at bottom
  '<path d="M60 290 Q65 275 70 290 Q75 270 80 290" fill="#FF4500" opacity="0.15"/>' +
  '<path d="M120 285 Q125 270 130 285 Q135 268 140 288" fill="#FF4500" opacity="0.12"/>' +
  particles(100, 120, 8, '#FF4500', 45) +
  cardFrame() + '</svg>';

// XVI — THE TOWER: Lightning-struck tower, figures falling, orange-red
TAROT_SVGS[16] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f16bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a0505"/><stop offset="40%" stop-color="#2a0808"/><stop offset="100%" stop-color="#0a0a0a"/></linearGradient>' +
  '<radialGradient id="f16flash" cx="60%" cy="15%" r="30%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.6"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f16bg)"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f16flash)"/>' +
  // Dark clouds
  '<ellipse cx="60" cy="40" rx="50" ry="25" fill="#2a0808" opacity="0.5"/>' +
  '<ellipse cx="150" cy="35" rx="45" ry="20" fill="#2a0808" opacity="0.4"/>' +
  // Lightning bolt
  '<path d="M120 20 L105 80 L118 78 L95 145 L110 140 L85 200" stroke="#FFD700" stroke-width="3" fill="none" filter="url(#glow)"/>' +
  '<path d="M120 20 L105 80 L118 78 L95 145" fill="#FFD700" opacity="0.15"/>' +
  // Tower
  '<path d="M70 100 L70 280 L130 280 L130 100 Q115 95 100 97 Q85 95 70 100Z" fill="#4a2020" stroke="#FF4500" stroke-width="1.2" opacity="0.7"/>' +
  // Tower windows
  '<rect x="85" y="130" width="12" height="16" rx="6" fill="#FF4500" opacity="0.3"/>' +
  '<rect x="85" y="170" width="12" height="16" rx="6" fill="#FF4500" opacity="0.2"/>' +
  '<rect x="85" y="210" width="12" height="16" rx="6" fill="#FF4500" opacity="0.15"/>' +
  // Crown being blown off
  '<path d="M75 95 Q100 80 125 95 L130 100 Q100 90 70 100Z" fill="#DAA520" opacity="0.4" stroke="#FFD700" stroke-width="0.8" transform="rotate(-15, 100, 95) translate(5, -15)"/>' +
  // Falling figures
  '<g transform="translate(40,150) rotate(-30)">' +
  '<circle cx="8" cy="0" r="6" fill="#1a0505" stroke="#FF4500" stroke-width="0.8" opacity="0.6"/>' +
  '<path d="M8 6 L8 22 M2 12 L14 12 M5 22 L11 22" stroke="#FF4500" stroke-width="1" fill="none" opacity="0.5"/>' +
  '</g>' +
  '<g transform="translate(140,170) rotate(25)">' +
  '<circle cx="8" cy="0" r="6" fill="#1a0505" stroke="#FF4500" stroke-width="0.8" opacity="0.6"/>' +
  '<path d="M8 6 L8 22 M2 12 L14 12 M5 22 L11 22" stroke="#FF4500" stroke-width="1" fill="none" opacity="0.5"/>' +
  '</g>' +
  // Flames/sparks
  '<circle cx="90" cy="110" r="3" fill="#FFD700" opacity="0.5"/>' +
  '<circle cx="110" cy="105" r="2" fill="#FF4500" opacity="0.5"/>' +
  '<circle cx="95" cy="95" r="2.5" fill="#FFD700" opacity="0.4"/>' +
  // Rocky base
  '<path d="M50 280 Q100 270 150 280 L150 320 L50 320Z" fill="#2a0808" opacity="0.5"/>' +
  particles(100, 120, 12, '#FF4500', 60) +
  cardFrame() + '</svg>';

// XVII — THE STAR: Figure pouring water under stars, soft blue/silver
TAROT_SVGS[17] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f17bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a1a3a"/><stop offset="50%" stop-color="#1a3a5a"/><stop offset="100%" stop-color="#0d1a2a"/></linearGradient>' +
  '<radialGradient id="f17star" cx="50%" cy="15%" r="20%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.6"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f17bg)"/>' + stars(35) +
  '<rect width="200" height="320" rx="10" fill="url(#f17star)"/>' +
  // Large central star
  '<path d="M100 25 L104 38 L117 38 L107 47 L110 60 L100 52 L90 60 L93 47 L83 38 L96 38Z" fill="#FFD700" opacity="0.6" filter="url(#glow)"/>' +
  // Seven smaller stars
  '<circle cx="60" cy="30" r="3" fill="#E6E6FA" opacity="0.5"/><circle cx="140" cy="35" r="3" fill="#E6E6FA" opacity="0.5"/>' +
  '<circle cx="45" cy="55" r="2.5" fill="#E6E6FA" opacity="0.4"/><circle cx="155" cy="50" r="2.5" fill="#E6E6FA" opacity="0.4"/>' +
  '<circle cx="70" cy="60" r="2" fill="#E6E6FA" opacity="0.4"/><circle cx="130" cy="58" r="2" fill="#E6E6FA" opacity="0.4"/>' +
  '<circle cx="100" cy="70" r="2" fill="#E6E6FA" opacity="0.3"/>' +
  // Water/pool
  '<path d="M0 230 Q50 220 100 230 Q150 240 200 225 L200 320 L0 320Z" fill="#4169E1" opacity="0.12"/>' +
  '<path d="M0 250 Q60 240 120 250 Q170 258 200 248 L200 320 L0 320Z" fill="#87CEEB" opacity="0.08"/>' +
  // Kneeling figure pouring water
  '<g transform="translate(72,130)" filter="url(#glow)">' +
  '<circle cx="18" cy="0" r="11" fill="#0a1a3a" stroke="#E6E6FA" stroke-width="1.2"/>' +
  // Hair flowing
  '<path d="M10 -5 Q18 -12 26 -5 Q30 0 28 5" stroke="#E6E6FA" stroke-width="0.8" fill="none" opacity="0.4"/>' +
  '<path d="M18 11 L18 45" stroke="#E6E6FA" stroke-width="1.5"/>' +
  // Kneeling pose
  '<path d="M18 45 L10 60 L5 55 M18 45 L26 55 L30 60" stroke="#E6E6FA" stroke-width="1.2" fill="none"/>' +
  // Pouring from left hand to water
  '<path d="M18 28 L2 35" stroke="#E6E6FA" stroke-width="1.5" fill="none"/>' +
  '<path d="M0 35 L-5 50 Q-3 55 0 50 L2 60 Q5 65 3 60" stroke="#87CEEB" stroke-width="1" fill="none" opacity="0.5"/>' +
  // Pouring from right hand to land
  '<path d="M18 28 L35 35" stroke="#E6E6FA" stroke-width="1.5" fill="none"/>' +
  '<path d="M37 35 L42 50 Q40 55 37 50 L35 60 Q32 65 35 60" stroke="#87CEEB" stroke-width="1" fill="none" opacity="0.5"/>' +
  '</g>' +
  // Bird on tree (ibis)
  '<path d="M160 170 L160 140 Q155 130 158 120" stroke="#8B7355" stroke-width="2" fill="none" opacity="0.4"/>' +
  '<circle cx="158" cy="117" r="4" fill="#E6E6FA" opacity="0.2" stroke="#E6E6FA" stroke-width="0.5"/>' +
  // Grass and flowers
  '<path d="M20 240 L22 230 M30 242 L32 232 M165 238 L167 228 M175 240 L177 230" stroke="#2E8B57" stroke-width="0.8" fill="none" opacity="0.3"/>' +
  particles(100, 100, 10, '#E6E6FA', 55) +
  cardFrame() + '</svg>';

// XVIII — THE MOON: Moon over water, dogs/wolves, mystical path
TAROT_SVGS[18] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f18bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a0a30"/><stop offset="50%" stop-color="#191970"/><stop offset="100%" stop-color="#050515"/></linearGradient>' +
  '<radialGradient id="f18moon" cx="50%" cy="18%" r="18%"><stop offset="0%" stop-color="#FFF4CC" stop-opacity="0.7"/><stop offset="50%" stop-color="#C0C0C0" stop-opacity="0.2"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f18bg)"/>' + stars(25) +
  '<rect width="200" height="320" rx="10" fill="url(#f18moon)"/>' +
  // Full moon with face
  '<circle cx="100" cy="55" r="28" fill="#FFF4CC" opacity="0.15"/>' +
  '<circle cx="100" cy="55" r="22" fill="#C0C0C0" opacity="0.25" stroke="#C0C0C0" stroke-width="1"/>' +
  // Moon face suggestion
  '<circle cx="93" cy="50" r="3" fill="#191970" opacity="0.15"/>' +
  '<circle cx="107" cy="50" r="3" fill="#191970" opacity="0.15"/>' +
  '<path d="M93 62 Q100 66 107 62" stroke="#191970" stroke-width="0.8" fill="none" opacity="0.1"/>' +
  // Drops falling from moon
  '<path d="M85 80 Q83 88 85 95 Q87 100 85 108" stroke="#C0C0C0" stroke-width="0.8" fill="none" opacity="0.2"/>' +
  '<path d="M115 82 Q113 90 115 97 Q117 102 115 110" stroke="#C0C0C0" stroke-width="0.8" fill="none" opacity="0.2"/>' +
  // Twin towers
  '<rect x="25" y="150" width="22" height="80" rx="2" fill="#191970" stroke="#C0C0C0" stroke-width="0.8" opacity="0.5"/>' +
  '<rect x="153" y="150" width="22" height="80" rx="2" fill="#191970" stroke="#C0C0C0" stroke-width="0.8" opacity="0.5"/>' +
  // Winding path
  '<path d="M100 310 Q90 280 100 260 Q110 240 100 220 Q90 200 100 180 Q105 170 100 155" stroke="#C0C0C0" stroke-width="2" fill="none" opacity="0.15"/>' +
  // Pool/crayfish
  '<ellipse cx="100" cy="280" rx="35" ry="15" fill="#483D8B" opacity="0.2" stroke="#C0C0C0" stroke-width="0.5"/>' +
  // Crayfish hint
  '<path d="M95 280 Q100 275 105 280 M92 278 L88 272 M108 278 L112 272" stroke="#C0C0C0" stroke-width="0.8" fill="none" opacity="0.3"/>' +
  // Wolf (left) howling
  '<g transform="translate(50,195)">' +
  '<ellipse cx="12" cy="15" rx="12" ry="8" fill="#191970" stroke="#C0C0C0" stroke-width="0.8" opacity="0.5"/>' +
  '<path d="M5 10 L5 5 L10 8" fill="#191970" stroke="#C0C0C0" stroke-width="0.5" opacity="0.5"/>' +
  '<path d="M3 6 L-2 -5" stroke="#C0C0C0" stroke-width="0.8" fill="none" opacity="0.4"/>' +
  '</g>' +
  // Dog (right) howling
  '<g transform="translate(125,195)">' +
  '<ellipse cx="12" cy="15" rx="12" ry="8" fill="#C0C0C0" opacity="0.15" stroke="#C0C0C0" stroke-width="0.8"/>' +
  '<path d="M19 10 L19 5 L14 8" fill="#C0C0C0" stroke="#C0C0C0" stroke-width="0.5" opacity="0.3"/>' +
  '<path d="M21 6 L26 -5" stroke="#C0C0C0" stroke-width="0.8" fill="none" opacity="0.4"/>' +
  '</g>' +
  particles(100, 55, 10, '#C0C0C0', 45) +
  cardFrame() + '</svg>';

// XIX — THE SUN: Joyful figure, sunflowers, brilliant gold/orange
TAROT_SVGS[19] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><radialGradient id="f19sun" cx="50%" cy="25%" r="40%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.8"/><stop offset="30%" stop-color="#FF8C00" stop-opacity="0.4"/><stop offset="70%" stop-color="#FFA500" stop-opacity="0.1"/><stop offset="100%" stop-color="transparent"/></radialGradient>' +
  '<linearGradient id="f19bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFA500" stop-opacity="0.3"/><stop offset="40%" stop-color="#FFD700" stop-opacity="0.15"/><stop offset="100%" stop-color="#1a1a05"/></linearGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="#1a1a05"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f19bg)"/>' +
  '<rect width="200" height="320" rx="10" fill="url(#f19sun)"/>' +
  // Sun with rays
  '<circle cx="100" cy="70" r="35" fill="#FFD700" opacity="0.3"/>' +
  '<circle cx="100" cy="70" r="25" fill="#FFA500" opacity="0.3"/>' +
  // Sun rays
  '<line x1="100" y1="25" x2="100" y2="10" stroke="#FFD700" stroke-width="2" opacity="0.4"/>' +
  '<line x1="130" y1="40" x2="140" y2="28" stroke="#FFD700" stroke-width="2" opacity="0.35"/>' +
  '<line x1="140" y1="70" x2="155" y2="70" stroke="#FFD700" stroke-width="2" opacity="0.3"/>' +
  '<line x1="130" y1="100" x2="140" y2="112" stroke="#FFD700" stroke-width="2" opacity="0.25"/>' +
  '<line x1="70" y1="40" x2="60" y2="28" stroke="#FFD700" stroke-width="2" opacity="0.35"/>' +
  '<line x1="60" y1="70" x2="45" y2="70" stroke="#FFD700" stroke-width="2" opacity="0.3"/>' +
  '<line x1="70" y1="100" x2="60" y2="112" stroke="#FFD700" stroke-width="2" opacity="0.25"/>' +
  // Sun face
  '<circle cx="93" cy="65" r="3" fill="#FF8C00" opacity="0.3"/>' +
  '<circle cx="107" cy="65" r="3" fill="#FF8C00" opacity="0.3"/>' +
  '<path d="M90 78 Q100 85 110 78" stroke="#FF8C00" stroke-width="1.5" fill="none" opacity="0.3"/>' +
  // Wall
  '<path d="M0 220 L200 220 L200 250 L0 250Z" fill="#DAA520" opacity="0.12"/>' +
  // Joyful child figure on horse
  '<g transform="translate(60,135)" filter="url(#glow)">' +
  // Horse
  '<path d="M45 55 Q60 40 65 50 Q68 58 65 65 L60 72 L55 68 L50 75 L40 70 L35 75 L25 65 Q22 58 25 50 Q35 40 45 55" fill="#FFA500" opacity="0.2" stroke="#FFD700" stroke-width="0.8"/>' +
  '<path d="M65 50 Q72 42 70 35 L64 40" fill="#FFA500" opacity="0.2" stroke="#FFD700" stroke-width="0.6"/>' +
  // Child figure with arms raised
  '<circle cx="42" cy="25" r="10" fill="#1a1a05" stroke="#FFD700" stroke-width="1.2"/>' +
  '<path d="M42 35 L42 55" stroke="#FFD700" stroke-width="1.5"/>' +
  // Arms raised joyfully
  '<path d="M42 42 L30 30 M42 42 L54 30" stroke="#FFD700" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
  // Banner/flag
  '<path d="M52 25 L58 15 L70 20 L58 25" fill="#FF4500" opacity="0.3" stroke="#FFD700" stroke-width="0.5"/>' +
  '</g>' +
  // Sunflowers
  '<g transform="translate(15,230)">' +
  '<circle cx="15" cy="0" r="10" fill="#FFD700" opacity="0.4"/><circle cx="15" cy="0" r="5" fill="#8B4513" opacity="0.4"/>' +
  '<path d="M15 10 L15 40" stroke="#2E8B57" stroke-width="2" opacity="0.4"/>' +
  '<path d="M15 25 L8 18 M15 30 L22 22" stroke="#2E8B57" stroke-width="1" fill="none" opacity="0.3"/>' +
  '</g>' +
  '<g transform="translate(155,235)">' +
  '<circle cx="15" cy="0" r="9" fill="#FFD700" opacity="0.4"/><circle cx="15" cy="0" r="4.5" fill="#8B4513" opacity="0.4"/>' +
  '<path d="M15 9 L15 38" stroke="#2E8B57" stroke-width="2" opacity="0.4"/>' +
  '</g>' +
  '<g transform="translate(35,242)">' +
  '<circle cx="10" cy="0" r="7" fill="#FFD700" opacity="0.3"/><circle cx="10" cy="0" r="3.5" fill="#8B4513" opacity="0.3"/>' +
  '<path d="M10 7 L10 30" stroke="#2E8B57" stroke-width="1.5" opacity="0.3"/>' +
  '</g>' +
  '<g transform="translate(140,245)">' +
  '<circle cx="10" cy="0" r="7" fill="#FFD700" opacity="0.3"/><circle cx="10" cy="0" r="3.5" fill="#8B4513" opacity="0.3"/>' +
  '<path d="M10 7 L10 28" stroke="#2E8B57" stroke-width="1.5" opacity="0.3"/>' +
  '</g>' +
  particles(100, 70, 12, '#FFD700', 65) +
  cardFrame() + '</svg>';

// XX — JUDGEMENT: Angel with trumpet, figures rising, purple/gold
TAROT_SVGS[20] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f20bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.15"/><stop offset="30%" stop-color="#4B0082"/><stop offset="100%" stop-color="#0d0020"/></linearGradient>' +
  '<radialGradient id="f20divine" cx="50%" cy="20%" r="30%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.6"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f20bg)"/>' + stars(15) +
  '<rect width="200" height="320" rx="10" fill="url(#f20divine)"/>' +
  // Clouds
  '<ellipse cx="50" cy="80" rx="45" ry="18" fill="#9370DB" opacity="0.12"/>' +
  '<ellipse cx="150" cy="75" rx="40" ry="16" fill="#9370DB" opacity="0.1"/>' +
  '<ellipse cx="100" cy="90" rx="50" ry="15" fill="#4B0082" opacity="0.15"/>' +
  // Angel figure above
  '<g transform="translate(80,25)" filter="url(#glow)">' +
  '<circle cx="20" cy="10" r="12" fill="#4B0082" stroke="#FFD700" stroke-width="1.2"/>' +
  // Halo
  '<circle cx="20" cy="10" r="17" fill="none" stroke="#FFD700" stroke-width="1.5" opacity="0.5"/>' +
  // Wings
  '<path d="M20 22 Q-10 10 -5 -10 Q10 5 20 15" fill="#9370DB" opacity="0.2" stroke="#FFD700" stroke-width="0.6"/>' +
  '<path d="M20 22 Q50 10 45 -10 Q30 5 20 15" fill="#9370DB" opacity="0.2" stroke="#FFD700" stroke-width="0.6"/>' +
  '<path d="M20 22 L20 55" stroke="#FFD700" stroke-width="1.5"/>' +
  // Robe
  '<path d="M10 30 L20 26 L30 30 L35 60 L5 60Z" fill="#4B0082" opacity="0.3" stroke="#FFD700" stroke-width="0.5"/>' +
  // Trumpet
  '<path d="M20 30 L38 25 L45 20" stroke="#FFD700" stroke-width="2" fill="none" stroke-linecap="round"/>' +
  '<path d="M45 18 L50 15 L48 22 L45 18" fill="#FFD700" opacity="0.6"/>' +
  // Cross on banner from trumpet
  '<rect x="38" y="22" width="8" height="12" rx="1" fill="#FFD700" opacity="0.2"/>' +
  '<line x1="42" y1="24" x2="42" y2="32" stroke="#FFD700" stroke-width="0.5" opacity="0.4"/>' +
  '<line x1="39" y1="28" x2="45" y2="28" stroke="#FFD700" stroke-width="0.5" opacity="0.4"/>' +
  '</g>' +
  // Divine light rays downward
  '<path d="M100 80 L70 150 L75 150Z" fill="#FFD700" opacity="0.06"/>' +
  '<path d="M100 80 L125 155 L130 155Z" fill="#FFD700" opacity="0.05"/>' +
  '<path d="M100 80 L90 160 L95 160Z" fill="#FFD700" opacity="0.06"/>' +
  // Mountain/coffins at bottom
  '<path d="M0 240 Q100 220 200 240 L200 320 L0 320Z" fill="#2a1a3a" opacity="0.5"/>' +
  // Rising figures
  '<g transform="translate(55,200)">' +
  '<circle cx="10" cy="0" r="7" fill="#0d0020" stroke="#9370DB" stroke-width="1" opacity="0.6"/>' +
  '<path d="M10 7 L10 30 M4 15 L10 12 L16 8" stroke="#9370DB" stroke-width="1" fill="none" opacity="0.5"/>' +
  '</g>' +
  '<g transform="translate(95,210)">' +
  '<circle cx="10" cy="0" r="7" fill="#0d0020" stroke="#9370DB" stroke-width="1" opacity="0.6"/>' +
  '<path d="M10 7 L10 30 M4 15 L10 12 L16 8" stroke="#9370DB" stroke-width="1" fill="none" opacity="0.5"/>' +
  '</g>' +
  '<g transform="translate(130,205)">' +
  '<circle cx="10" cy="0" r="7" fill="#0d0020" stroke="#9370DB" stroke-width="1" opacity="0.6"/>' +
  '<path d="M10 7 L10 30 M4 15 L10 12 L16 8" stroke="#9370DB" stroke-width="1" fill="none" opacity="0.5"/>' +
  '</g>' +
  // Coffin/boxes
  '<rect x="48" y="235" width="24" height="10" rx="2" fill="#4B0082" opacity="0.2" stroke="#9370DB" stroke-width="0.5"/>' +
  '<rect x="90" y="240" width="24" height="10" rx="2" fill="#4B0082" opacity="0.2" stroke="#9370DB" stroke-width="0.5"/>' +
  '<rect x="125" y="237" width="24" height="10" rx="2" fill="#4B0082" opacity="0.2" stroke="#9370DB" stroke-width="0.5"/>' +
  particles(100, 60, 10, '#FFD700', 50) +
  cardFrame() + '</svg>';

// XXI — THE WORLD: Dancing figure in laurel wreath, four elements, green/blue/gold
TAROT_SVGS[21] = '<svg viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">' + DEFS +
  '<defs><linearGradient id="f21bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a2a1a"/><stop offset="40%" stop-color="#2E8B57" stop-opacity="0.3"/><stop offset="70%" stop-color="#4169E1" stop-opacity="0.2"/><stop offset="100%" stop-color="#0d0d2a"/></linearGradient>' +
  '<radialGradient id="f21glow" cx="50%" cy="50%" r="35%"><stop offset="0%" stop-color="#FFD700" stop-opacity="0.35"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs>' +
  '<rect width="200" height="320" rx="10" fill="url(#f21bg)"/>' + stars(25) +
  '<rect width="200" height="320" rx="10" fill="url(#f21glow)"/>' +
  // Laurel wreath (oval)
  '<ellipse cx="100" cy="160" rx="55" ry="75" fill="none" stroke="#2E8B57" stroke-width="6" opacity="0.3"/>' +
  '<ellipse cx="100" cy="160" rx="55" ry="75" fill="none" stroke="#FFD700" stroke-width="1" opacity="0.3"/>' +
  // Leaf details on wreath
  '<path d="M45 130 Q50 125 48 120" stroke="#2E8B57" stroke-width="1" fill="none" opacity="0.4"/>' +
  '<path d="M45 160 Q40 155 42 148" stroke="#2E8B57" stroke-width="1" fill="none" opacity="0.4"/>' +
  '<path d="M45 190 Q50 195 48 200" stroke="#2E8B57" stroke-width="1" fill="none" opacity="0.4"/>' +
  '<path d="M155 130 Q150 125 152 120" stroke="#2E8B57" stroke-width="1" fill="none" opacity="0.4"/>' +
  '<path d="M155 160 Q160 155 158 148" stroke="#2E8B57" stroke-width="1" fill="none" opacity="0.4"/>' +
  '<path d="M155 190 Q150 195 152 200" stroke="#2E8B57" stroke-width="1" fill="none" opacity="0.4"/>' +
  // Red ribbons at top and bottom of wreath
  '<path d="M85 87 Q100 82 115 87" stroke="#FF4500" stroke-width="2" fill="none" opacity="0.3"/>' +
  '<path d="M85 233 Q100 238 115 233" stroke="#FF4500" stroke-width="2" fill="none" opacity="0.3"/>' +
  // Dancing figure inside wreath
  '<g transform="translate(83,115)" filter="url(#glow)">' +
  '<circle cx="17" cy="0" r="11" fill="#0a2a1a" stroke="#FFD700" stroke-width="1.2"/>' +
  '<path d="M17 11 L17 55" stroke="#FFD700" stroke-width="1.5"/>' +
  // Scarf/sash flowing
  '<path d="M5 20 Q17 15 29 20 Q35 30 30 40 Q17 35 4 40 Q-1 30 5 20" fill="#9370DB" opacity="0.12" stroke="#FFD700" stroke-width="0.4"/>' +
  // Arms with wands
  '<path d="M17 25 L2 15 M17 25 L32 15" stroke="#FFD700" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
  '<circle cx="0" cy="13" r="3" fill="#FFD700" opacity="0.3"/>' +
  '<circle cx="34" cy="13" r="3" fill="#FFD700" opacity="0.3"/>' +
  // Dancing legs
  '<path d="M17 55 L8 75 L4 72 M17 55 L26 70 L30 75" stroke="#FFD700" stroke-width="1.2" fill="none"/>' +
  '</g>' +
  // Four corner creatures (elements)
  // Eagle (top-right — Air)
  '<g transform="translate(155,30)">' +
  '<path d="M10 15 Q15 5 20 15 Q15 10 10 15" fill="#87CEEB" opacity="0.3" stroke="#87CEEB" stroke-width="0.8"/>' +
  '<circle cx="15" cy="12" r="4" fill="#87CEEB" opacity="0.2"/>' +
  '</g>' +
  // Bull (top-left — Earth)
  '<g transform="translate(20,30)">' +
  '<circle cx="15" cy="12" r="7" fill="#8B4513" opacity="0.15" stroke="#DAA520" stroke-width="0.8"/>' +
  '<path d="M9 8 L6 2 M21 8 L24 2" stroke="#DAA520" stroke-width="1" fill="none" opacity="0.4"/>' +
  '</g>' +
  // Lion (bottom-left — Fire)
  '<g transform="translate(20,270)">' +
  '<circle cx="15" cy="10" r="7" fill="#FF8C00" opacity="0.15" stroke="#FFD700" stroke-width="0.8"/>' +
  '<circle cx="15" cy="10" r="10" fill="none" stroke="#FFD700" stroke-width="0.5" opacity="0.2"/>' +
  '</g>' +
  // Angel (bottom-right — Water)
  '<g transform="translate(155,270)">' +
  '<circle cx="15" cy="10" r="6" fill="#4169E1" opacity="0.15" stroke="#87CEEB" stroke-width="0.8"/>' +
  '<path d="M15 16 Q8 10 12 4 M15 16 Q22 10 18 4" stroke="#87CEEB" stroke-width="0.5" fill="none" opacity="0.3"/>' +
  '</g>' +
  particles(100, 160, 14, '#FFD700', 70) +
  cardFrame() + '</svg>';
