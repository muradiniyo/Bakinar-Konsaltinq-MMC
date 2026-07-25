const fs = require('fs');

let content = fs.readFileSync('blogs_data.js', 'utf8');

const unsplashImages = [
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32f7?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60',
];

let counter = 0;
content = content.replace(/image:\s*['"][^'"]+['"]/g, () => {
  const img = unsplashImages[counter % unsplashImages.length];
  counter++;
  return `image: "${img}"`;
});

fs.writeFileSync('blogs_data.js', content);
console.log('blog images fixed');
