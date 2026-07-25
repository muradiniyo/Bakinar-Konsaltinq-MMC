const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const facebookSvg = `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;
const instagramSvg = `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;
const linkedinSvg = `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
const youtubeSvg = `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>`;

html = html.replace('<i data-lucide="facebook" class="w-5 h-5"></i>', facebookSvg);
html = html.replace('<i data-lucide="instagram" class="w-5 h-5"></i>', instagramSvg);
html = html.replace('<i data-lucide="linkedin" class="w-5 h-5"></i>', linkedinSvg);
html = html.replace('<i data-lucide="youtube" class="w-5 h-5"></i>', youtubeSvg);

// Now for the buttons: "Bizə Ziyarət Edin" and "Xidmətlərə Baxın"
// We will find them using a regex that matches the button containing these words.

html = html.replace(
  /<button([^>]*?)>\s*<i data-lucide="map-pin" class="w-5 h-5"><\/i>\s*Bizə Ziyarət Edin\s*<\/button>/g,
  `<button$1 onclick="openLink('https://maps.app.goo.gl/LLYo3jviJ1FfWe426')">
    <i data-lucide="map-pin" class="w-5 h-5"></i>
    Bizə Ziyarət Edin
  </button>`
);

html = html.replace(
  /<button([^>]*?)>\s*Xidmətlərə Baxın\s*<\/button>/g,
  `<button$1 onclick="scrollToSection('services')">
    Xidmətlərə Baxın
  </button>`
);

html = html.replace(
  /<button([^>]*?)>\s*Komandamızla əlaqə saxlayın\s*<\/button>/g,
  `<button$1 onclick="scrollToSection('contact')">
    Komandamızla əlaqə saxlayın
  </button>`
);

html = html.replace(
  /<button([^>]*?)>\s*Bütün bloqlara bax\s*<i data-lucide="arrow-right"[^>]*><\/i>\s*<\/button>/g,
  `<button$1 onclick="navigateTo('blogs')">
    Bütün bloqlara bax <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
  </button>`
);

// We need to make sure the hover classes look good
// I think hover classes in tailwind should work out of the box if they are specified.
// e.g., hover:bg-bakinar-red-dark hover:scale-105 transition-all duration-300
// Wait, the SVG for facebook needs to be pure SVG not lucide, in case it failed.

fs.writeFileSync('index.html', html);
console.log('done fixing buttons and svgs');

