const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  /<button([^>]*?)>\s*<i data-lucide="phone-call"[^>]*><\/i>\s*Komandamızla əlaqə saxlayın\s*<\/button>/g,
  `<button$1 onclick="scrollToSection('contact')">
    <i data-lucide="phone-call" class="w-5 h-5"></i>
    Komandamızla əlaqə saxlayın
  </button>`
);

html = html.replace(
  /<button([^>]*?)>\s*Komandamızla əlaqə saxlayın\s*<i data-lucide="arrow-right"[^>]*><\/i>\s*<\/button>/g,
  `<button$1 onclick="scrollToSection('contact')">
    Komandamızla əlaqə saxlayın
    <i data-lucide="arrow-right" class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"></i>
  </button>`
);

// We should also look at other "button" instances to see if we missed any inline `onclick` that main.js was targeting.
// e.g. "Ana Səhifə", "+994 (12) 465-88-04", "+994 (50) 205-10-28", "WhatsApp-da Yazın", "info@bakinar.com"

fs.writeFileSync('index.html', html);
