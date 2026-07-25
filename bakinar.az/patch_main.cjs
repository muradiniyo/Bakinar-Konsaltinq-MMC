const fs = require('fs');
let mainJs = fs.readFileSync('main.js', 'utf8');

mainJs = mainJs.replace(/const contentHtml = \(blog.content \|\| blog.excerpt\).replace\(\/\\\\n\/g, '<br\/>'\);/g, 'const contentHtml = blog.content || blog.excerpt;');

fs.writeFileSync('main.js', mainJs);
console.log('done patching main.js');
