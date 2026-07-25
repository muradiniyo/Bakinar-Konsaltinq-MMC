const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  /<button([^>]*?)>\s*Xidmətlərə Baxın\s*<i data-lucide="arrow-right"[^>]*><\/i>\s*<\/button>/g,
  `<button$1 onclick="scrollToSection('services')">
    Xidmətlərə Baxın
    <i data-lucide="arrow-right" class="w-5 h-5"></i>
  </button>`
);

html = html.replace(
  /<button([^>]*?)>\s*Xidmətlərə Baxın\s*<\/button>/g,
  `<button$1 onclick="scrollToSection('services')">
    Xidmətlərə Baxın
  </button>`
);

// Bize ziyaretedin also had a map-pin? Wait, `Bizə Ziyarət Edin` might be matched correctly.
// Let's also check for navigation links like `<button class="nav-item...">Xidmətlər</button>`
// Those are hooked via main.js: `document.querySelectorAll('.nav-item').forEach...`
// I'll make sure they have valid onclicks directly to be safe.

html = html.replace(
  /<button class="nav-item([^>]*?)>([^<]*?)Xidmətlər([^<]*?)<\/button>/g,
  `<button class="nav-item$1 onclick="scrollToSection('services')">$2Xidmətlər$3</button>`
);
html = html.replace(
  /<button class="nav-item([^>]*?)>([^<]*?)Haqqımızda([^<]*?)<\/button>/g,
  `<button class="nav-item$1 onclick="scrollToSection('about')">$2Haqqımızda$3</button>`
);
html = html.replace(
  /<button class="nav-item nav-blogs([^>]*?)>([^<]*?)Bloqlar([^<]*?)<\/button>/g,
  `<button class="nav-item nav-blogs$1 onclick="navigateTo('blogs')">$2Bloqlar$3</button>`
);
html = html.replace(
  /<button class="nav-item([^>]*?)>([^<]*?)Əlaqə([^<]*?)<\/button>/g,
  `<button class="nav-item$1 onclick="scrollToSection('contact')">$2Əlaqə$3</button>`
);

fs.writeFileSync('index.html', html);
console.log('done fixing buttons more carefully');
