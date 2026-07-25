const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace slide 1 image structure
html = html.replace(
  /<div class="absolute inset-0 bg-bakinar-blue\/90 z-10"><\/div>\s*<img src="([^"]+)" alt="Bakinar Konsaltinq" class="absolute inset-0 w-full h-full object-cover opacity-30" \/>/g,
  '<img src="$1" alt="Bakinar Konsaltinq" class="absolute inset-0 w-full h-full object-cover z-0" />\n                    <div class="absolute inset-0 bg-slate-900/70 z-10"></div>'
);

// We should also replace other occurrences if any
fs.writeFileSync('index.html', html);
console.log('slider fixed');
