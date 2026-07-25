const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<button[^>]*>\s*<i data-lucide="message-circle" class="w-5 h-5"><\/i>\s*WhatsApp-da Yazın\s*<\/button>/g, `<button class="w-full sm:w-auto flex items-center justify-center gap-2 bg-bakinar-red hover:bg-bakinar-red-dark hover:scale-105 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-bakinar-red/30" onclick="openLink('https://wa.me/994502051028')">
    <i data-lucide="message-circle" class="w-5 h-5"></i>
    WhatsApp-da Yazın
  </button>`);

fs.writeFileSync('index.html', html);
