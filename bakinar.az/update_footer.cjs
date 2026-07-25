const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const targetStr = html.substring(html.indexOf('<div class="flex space-x-3 pt-2">'), html.indexOf('<!-- Column 2: Quick Links -->'));

const newIcons = `<div class="flex space-x-3 pt-2">
                <button onclick="openLink('https://www.facebook.com/BakinarConsulting/')" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Facebook">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </button>
                <button onclick="openLink('https://www.instagram.com/bakinarconsulting/')" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </button>
                <button onclick="openLink('https://az.linkedin.com/company/bakinar-konsaltinq')" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="LinkedIn">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </button>
                <button onclick="openLink('https://wa.me/994502051028')" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="WhatsApp">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </button>
                <button onclick="openLink('https://www.youtube.com/@bakinar')" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="YouTube">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </button>
                <button onclick="openLink('https://x.com/bakinarconsult')" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-slate-800" aria-label="X (Twitter)">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </button>
              </div>
            </div>
            `;

html = html.replace(targetStr, newIcons);
fs.writeFileSync('index.html', html);
console.log('done');
