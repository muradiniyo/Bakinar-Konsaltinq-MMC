const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<button([^>]*)>\s*Google Xəritələri Açın/g, `<button$1 onclick="openLink('https://maps.app.goo.gl/LLYo3jviJ1FfWe426')">\n                          Google Xəritələri Açın`);

// For the contact buttons at the top or wherever they are
html = html.replace(/<button([^>]*)>\s*<div[^>]*>\s*<i data-lucide="phone" class="w-5 h-5"><\/i>\s*<\/div>\s*<span class="font-semibold text-slate-900" onclick="openLink\('tel:\+994124658804'\)">/g, 
  `<button$1 onclick="openLink('tel:+994124658804')">\n                    <div class="w-12 h-12 bg-blue-50 text-bakinar-blue rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">\n                      <i data-lucide="phone" class="w-5 h-5"></i>\n                    </div>\n                    <span class="font-semibold text-slate-900">+994 (12) 465-88-04</span>`);

html = html.replace(/<button([^>]*)>\s*<div[^>]*>\s*<i data-lucide="message-circle" class="w-5 h-5"><\/i>\s*<\/div>\s*<span class="font-semibold text-slate-900" onclick="openLink\('https:\/\/wa\.me\/994502051028'\)">/g, 
  `<button$1 onclick="openLink('https://wa.me/994502051028')">\n                    <div class="w-12 h-12 bg-blue-50 text-bakinar-blue rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">\n                      <i data-lucide="message-circle" class="w-5 h-5"></i>\n                    </div>\n                    <span class="font-semibold text-slate-900">+994 (50) 205-10-28</span>`);

html = html.replace(/<button([^>]*)>\s*<div[^>]*>\s*<i data-lucide="mail" class="w-5 h-5"><\/i>\s*<\/div>\s*<span class="font-semibold text-slate-900" onclick="openLink\('mailto:info@bakinar\.com'\)">/g, 
  `<button$1 onclick="openLink('mailto:info@bakinar.com')">\n                    <div class="w-12 h-12 bg-blue-50 text-bakinar-blue rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">\n                      <i data-lucide="mail" class="w-5 h-5"></i>\n                    </div>\n                    <span class="font-semibold text-slate-900">info@bakinar.com</span>`);


// Also I need to make sure I don't break anything.
fs.writeFileSync('index.html', html);
console.log('done fixing buttons round 5');
