const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<span class="text-slate-700 font-medium">Hərtərəfli çoxsahəli təcrübə<\/span>/g, '<span class="text-slate-700 font-medium">Professional xidmət</span>');
html = html.replace(/<span class="text-slate-700 font-medium">Bakıdakı yerli bazarı dərindən anlama<\/span>/g, '<span class="text-slate-700 font-medium">Vaxtınıza qənaət</span>');
html = html.replace(/<span class="text-slate-700 font-medium">Davamlı inkişaf üçün xüsusi strategiyalar<\/span>/g, '<span class="text-slate-700 font-medium">İnnovativ həllər</span>');
fs.writeFileSync('index.html', html);
console.log('texts updated');
