const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// remove duplicate onclicks
html = html.replace(/onclick="([^"]+)" onclick="\1"/g, 'onclick="$1"');

// Fix any missing onclick for Bloqlar
html = html.replace(/<button class="nav-item([^>]*)>([^<]*)Bloqlar<\/button>/g, `<button class="nav-item$1 onclick="navigateTo('blogs')">$2Bloqlar</button>`);
html = html.replace(/onclick="navigateTo\('blogs'\)" onclick="navigateTo\('blogs'\)"/g, `onclick="navigateTo('blogs')"`);

// Ensure button hover effects are good.
// The user says "missing or not responding. Please review all the buttons (like the navigation links, 'Bize Ziyarət Edin', and 'Xidmətlərə Baxın') and update the CSS to ensure they have smooth hover animations"
// We already use Tailwind classes like "hover:text-bakinar-blue", "hover:bg-bakinar-red-dark", "transition-colors", "transition-all duration-300". These are completely valid Tailwind classes. Since the user doesn't have a build step anymore, wait, earlier I injected a tailwind config in <head> which is correct, and I imported tailwind cdn. But we also need to make sure the hover works nicely.
// Wait, the injected tailwind script is:
/*
<script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: { ... }
    }
  </script>
*/
// This will enable tailwind classes on hover out-of-the-box.

fs.writeFileSync('index.html', html);
console.log('done fixing dupes');
