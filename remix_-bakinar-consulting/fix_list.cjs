const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const listContent = `
                        <li class="flex items-start gap-4">
                          <div class="flex-shrink-0 w-6 h-6 rounded-full bg-bakinar-blue/10 text-bakinar-blue flex items-center justify-center mt-1">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span class="text-slate-700 font-medium">Professional xidmət</span>
                        </li>
                        <li class="flex items-start gap-4">
                          <div class="flex-shrink-0 w-6 h-6 rounded-full bg-bakinar-blue/10 text-bakinar-blue flex items-center justify-center mt-1">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span class="text-slate-700 font-medium">Vaxtınıza qənaət</span>
                        </li>
                        <li class="flex items-start gap-4">
                          <div class="flex-shrink-0 w-6 h-6 rounded-full bg-bakinar-blue/10 text-bakinar-blue flex items-center justify-center mt-1">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span class="text-slate-700 font-medium">İnnovativ həllər</span>
                        </li>
`;

html = html.replace(/<ul class="space-y-6 relative z-10">[\s\S]*?<\/ul>/, `<ul class="space-y-6 relative z-10">${listContent}                    </ul>`);
fs.writeFileSync('index.html', html);
console.log('list restored');
