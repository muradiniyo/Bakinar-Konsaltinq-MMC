const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<button class="nav-item([^>]*)><i data-lucide="chevron-right" class="w-4 h-4 text-bakinar-red"><\/i> Xidmətlər<\/button>/g, `<button class="nav-item$1 onclick="scrollToSection('services')"><i data-lucide="chevron-right" class="w-4 h-4 text-bakinar-red"></i> Xidmətlər</button>`);
html = html.replace(/<button class="nav-item([^>]*)><i data-lucide="chevron-right" class="w-4 h-4 text-bakinar-red"><\/i> Haqqımızda<\/button>/g, `<button class="nav-item$1 onclick="scrollToSection('about')"><i data-lucide="chevron-right" class="w-4 h-4 text-bakinar-red"></i> Haqqımızda</button>`);
html = html.replace(/<button class="nav-item nav-blogs([^>]*)><i data-lucide="chevron-right" class="w-4 h-4 text-bakinar-red"><\/i> Bloqlar<\/button>/g, `<button class="nav-item nav-blogs$1 onclick="navigateTo('blogs')"><i data-lucide="chevron-right" class="w-4 h-4 text-bakinar-red"></i> Bloqlar</button>`);
html = html.replace(/<button class="nav-item([^>]*)><i data-lucide="chevron-right" class="w-4 h-4 text-bakinar-red"><\/i> Əlaqə<\/button>/g, `<button class="nav-item$1 onclick="scrollToSection('contact')"><i data-lucide="chevron-right" class="w-4 h-4 text-bakinar-red"></i> Əlaqə</button>`);

fs.writeFileSync('index.html', html);
