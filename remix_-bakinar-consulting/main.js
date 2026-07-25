// Initialize Lucide icons
lucide.createIcons();

// Elements
const homePage = document.getElementById('home-page');
const blogsPage = document.getElementById('blogs-page');
const blogDetailPage = document.getElementById('blog-detail-page');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

const latestBlogsContainer = document.getElementById('latest-blogs-container');
const blogsContainer = document.getElementById('blogs-container');
const blogDetailContainer = document.getElementById('blog-detail-container');

// State
let currentPage = 'home';
let selectedBlogId = null;

// Routing
window.navigateTo = (page) => {
  currentPage = page;
  
  homePage.classList.add('hidden');
  blogsPage.classList.add('hidden');
  blogDetailPage.classList.add('hidden');
  
  if (page === 'home') {
    homePage.classList.remove('hidden');
  } else if (page === 'blogs') {
    blogsPage.classList.remove('hidden');
  } else if (page === 'blogDetail') {
    blogDetailPage.classList.remove('hidden');
    renderBlogDetail();
  }

  // Close mobile menu if open
  if(mobileMenu) mobileMenu.classList.add('hidden');
  
  window.scrollTo({ top: 0, behavior: 'auto' });
  
  // Update active nav links
  document.querySelectorAll('.nav-blogs').forEach(el => {
    if (page === 'blogs') {
      el.classList.add('text-bakinar-blue');
      el.classList.remove('text-slate-600');
    } else {
      el.classList.remove('text-bakinar-blue');
      el.classList.add('text-slate-600');
    }
  });
};

window.viewBlog = (id) => {
  selectedBlogId = id;
  navigateTo('blogDetail');
};

window.scrollToSection = (id) => {
  if (currentPage !== 'home') {
    navigateTo('home');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
  if(mobileMenu) mobileMenu.classList.add('hidden');
};

window.openLink = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Navigation events
document.querySelectorAll('.nav-item').forEach(btn => {
  const text = btn.innerText.trim();
  btn.addEventListener('click', () => {
    if (text.includes('Xidmətlər')) scrollToSection('services');
    else if (text.includes('Haqqımızda')) scrollToSection('about');
    else if (text.includes('Bloqlar')) navigateTo('blogs');
    else if (text.includes('Əlaqə')) scrollToSection('contact');
  });
});
document.querySelectorAll('.nav-blogs').forEach(btn => {
  btn.addEventListener('click', () => navigateTo('blogs'));
});

// Render Blog Card HTML
function renderBlogCard(blog) {
  return `
    <div
      class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
      onclick="viewBlog(${blog.id})"
    >
      <div class="h-56 overflow-hidden relative">
        <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div class="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-bakinar-blue shadow-sm">
          ${blog.category}
        </div>
      </div>
      <div class="p-6">
        <div class="flex items-center gap-2 text-slate-400 text-sm mb-3 font-medium">
          <i data-lucide="calendar" class="w-4 h-4"></i>
          ${blog.date}
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-bakinar-red transition-colors line-clamp-2">${blog.title}</h3>
        <p class="text-slate-600 text-sm line-clamp-3 mb-6">${blog.excerpt}</p>
        
        <button onclick="event.stopPropagation(); viewBlog(${blog.id})" class="flex items-center gap-2 text-bakinar-blue font-semibold hover:text-bakinar-red transition-colors text-sm group/btn w-fit">
          Ətraflı oxu
          <i data-lucide="arrow-right" class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </div>
  `;
}

// Render Initial Blogs
if (latestBlogsContainer) {
  latestBlogsContainer.innerHTML = BLOGS.slice(0, 3).map(renderBlogCard).join('');
}
if (blogsContainer) {
  blogsContainer.innerHTML = BLOGS.map(renderBlogCard).join('');
}

// Render Blog Detail
function renderBlogDetail() {
  const blog = BLOGS.find(b => b.id === selectedBlogId);
  if (!blog) return;

  const contentHtml = blog.content || blog.excerpt;

  blogDetailContainer.innerHTML = `
    <div class="bg-bakinar-blue text-white py-16 lg:py-24 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex items-center gap-2 text-blue-200 text-sm mb-6 font-medium">
          <button onclick="navigateTo('home')" class="hover:text-white transition-colors">Ana Səhifə</button>
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
          <button onclick="navigateTo('blogs')" class="hover:text-white transition-colors">Bloqlar</button>
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
          <span class="text-white truncate" title="${blog.title}">${blog.title}</span>
        </div>
        <h1 class="text-3xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">${blog.title}</h1>
        <div class="flex items-center gap-4 text-blue-200 text-sm">
          <div class="flex items-center gap-2">
            <i data-lucide="calendar" class="w-4 h-4"></i>
            ${blog.date}
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-white">
            ${blog.category}
          </div>
        </div>
      </div>
    </div>
    
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12">
        ${blog.image ? `
        <div class="rounded-xl overflow-hidden mb-10 h-64 sm:h-80 lg:h-96 relative">
          <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover" />
        </div>
        ` : ''}
        <div class="text-slate-700 text-lg leading-relaxed [&>p]:mb-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-8 [&>h2]:text-bakinar-blue [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-4 [&>h3]:mt-6 [&>h3]:text-bakinar-blue [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-6 [&>li]:mb-2 [&>strong]:text-slate-900 [&>a]:text-bakinar-red [&>a]:underline hover:[&>a]:text-bakinar-red/80">
          ${contentHtml}
        </div>
      </div>
    </div>
  `;
  
  // Re-initialize lucide icons inside newly added HTML
  lucide.createIcons();
}

// Call createIcons after dynamic elements if needed
lucide.createIcons();

// Initialize Swiper
const swiper = new Swiper('.heroSwiper', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

window.showLegalModal = (type) => {
  const modal = document.getElementById('legal-modal');
  const title = document.getElementById('legal-modal-title');
  const content = document.getElementById('legal-modal-content');
  
  if (type === 'privacy') {
    title.innerText = 'Məxfilik Siyasəti';
    content.innerHTML = `
      <h4 class="text-lg font-bold text-slate-800 mb-2">1. Ümumi müddəalar</h4>
      <p class="mb-6">Bu məxfilik siyasəti Bakinar Konsaltinq tərəfindən istifadəçilərin şəxsi məlumatlarının necə toplandığını, istifadə edildiyini və qorunduğunu müəyyən edir.</p>
      <h4 class="text-lg font-bold text-slate-800 mb-2">2. Toplanan məlumatlar</h4>
      <p class="mb-6">Biz yalnız sizin öz istəyinizlə təqdim etdiyiniz ad, əlaqə nömrəsi, və e-poçt kimi məlumatları toplayırıq.</p>
      <h4 class="text-lg font-bold text-slate-800 mb-2">3. Məlumatların istifadəsi</h4>
      <p class="mb-6">Toplanmış məlumatlar sizinlə əlaqə saxlamaq və xidmətlərimiz barədə məlumat vermək məqsədilə istifadə olunur.</p>
      <h4 class="text-lg font-bold text-slate-800 mb-2">4. Məlumatların qorunması</h4>
      <p class="mb-0">Şəxsi məlumatlarınız üçüncü tərəflərlə paylaşılmır və təhlükəsiz serverlərdə qorunur.</p>
    `;
  } else if (type === 'terms') {
    title.innerText = 'İstifadə Şərtləri';
    content.innerHTML = `
      <h4 class="text-lg font-bold text-slate-800 mb-2">1. Qaydaların qəbulu</h4>
      <p class="mb-6">Saytımıza daxil olmaqla, bu istifadə şərtlərini qəbul etmiş olursunuz.</p>
      <h4 class="text-lg font-bold text-slate-800 mb-2">2. Xidmətlərdən istifadə</h4>
      <p class="mb-6">Saytda təqdim olunan məlumatlar yalnız məlumatlandırma xarakteri daşıyır. Dəqiq hüquqi və ya maliyyə məsləhəti üçün mütəxəssislərimizlə əlaqə saxlayın.</p>
      <h4 class="text-lg font-bold text-slate-800 mb-2">3. İntellektual mülkiyyət</h4>
      <p class="mb-6">Saytda olan bütün materiallar Bakinar Konsaltinq-ə məxsusdur və icazəsiz istifadəsi qadağandır.</p>
      <h4 class="text-lg font-bold text-slate-800 mb-2">4. Məsuliyyətin məhdudlaşdırılması</h4>
      <p class="mb-0">Saytın istifadəsi nəticəsində yaranan hər hansı birbaşa və ya dolayısı zərərlərə görə şirkət məsuliyyət daşımır.</p>
    `;
  }
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.children[0].classList.remove('scale-95');
    modal.children[0].classList.add('scale-100');
  }, 10);
};

window.closeLegalModal = () => {
  const modal = document.getElementById('legal-modal');
  modal.classList.add('opacity-0');
  modal.children[0].classList.remove('scale-100');
  modal.children[0].classList.add('scale-95');
  setTimeout(() => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }, 300);
};
