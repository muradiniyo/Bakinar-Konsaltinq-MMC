const fs = require('fs');

let mainJs = fs.readFileSync('main.js', 'utf8');

// Remove the generic button click listener block that might double-bind or mess up clicks
const blockStart = mainJs.indexOf('// Find all buttons and attach handlers based on their text content');
if (blockStart !== -1) {
  const blockEnd = mainJs.indexOf('// Initialize Swiper');
  if (blockEnd !== -1) {
    mainJs = mainJs.substring(0, blockStart) + mainJs.substring(blockEnd);
  }
}

// Add optional chaining to mobileMenu to prevent errors
mainJs = mainJs.replace(/mobileMenu\.classList\.add\('hidden'\);/g, "if(mobileMenu) mobileMenu.classList.add('hidden');");

fs.writeFileSync('main.js', mainJs);
console.log('main.js patched');

