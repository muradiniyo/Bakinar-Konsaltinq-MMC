const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const mapping = {
  'WhatsApp-da Yazın': `onclick="openLink('https://wa.me/994502051028')"`,
  'Xidmətlər<': `onclick="scrollToSection('services')"`,
  'Haqqımızda<': `onclick="scrollToSection('about')"`,
  'Bloqlar<': `onclick="navigateTo('blogs')"`,
  'Əlaqə<': `onclick="scrollToSection('contact')"`
};

// Also any button missing onclick but we can just use simple regex
html = html.replace(/<button([^>]*)>([^<]*)WhatsApp-da Yazın([^<]*)<\/button>/g, `<button$1 onclick="openLink('https://wa.me/994502051028')">$2WhatsApp-da Yazın$3</button>`);

// Quick links in footer
html = html.replace(/<button class="nav-item([^>]*)>([^<]*)Xidmətlər<\/button>/g, `<button class="nav-item$1 onclick="scrollToSection('services')">$2Xidmətlər</button>`);
html = html.replace(/<button class="nav-item([^>]*)>([^<]*)Haqqımızda<\/button>/g, `<button class="nav-item$1 onclick="scrollToSection('about')">$2Haqqımızda</button>`);
html = html.replace(/<button class="nav-item nav-blogs([^>]*)>([^<]*)Bloqlar<\/button>/g, `<button class="nav-item nav-blogs$1 onclick="navigateTo('blogs')">$2Bloqlar</button>`);
html = html.replace(/<button class="nav-item([^>]*)>([^<]*)Əlaqə<\/button>/g, `<button class="nav-item$1 onclick="scrollToSection('contact')">$2Əlaqə</button>`);

// What else?
// The icons with 'tel' or 'mailto'.
// In main.js:
// text.includes('+994 (12) 465-88-04') -> tel:+994124658804
// text.includes('+994 (50) 205-10-28') -> https://wa.me/994502051028
// text.includes('info@bakinar.com') -> mailto:info@bakinar.com

html = html.replace(/<button([^>]*)>\+994 \(12\) 465-88-04<\/button>/g, `<button$1 onclick="openLink('tel:+994124658804')">+994 (12) 465-88-04</button>`);
html = html.replace(/<button([^>]*)>\+994 \(50\) 205-10-28<\/button>/g, `<button$1 onclick="openLink('https://wa.me/994502051028')">+994 (50) 205-10-28</button>`);
html = html.replace(/<button([^>]*)>info@bakinar.com<\/button>/g, `<button$1 onclick="openLink('mailto:info@bakinar.com')">info@bakinar.com</button>`);

// Fix any missing arrow icon buttons
html = html.replace(/<button([^>]*)>\s*Xəritədə Baxın\s*<i[^>]*><\/i>\s*<\/button>/g, `<button$1 onclick="openLink('https://maps.app.goo.gl/LLYo3jviJ1FfWe426')">Xəritədə Baxın <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i></button>`);


fs.writeFileSync('index.html', html);
console.log('done fixing buttons round 3');
