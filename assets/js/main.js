const PROJECT_ORDER = ['appcontabilidad', 'alda', 'tiendafacil', 'armadorpc'];

const PROJECTS = {
  appcontabilidad: {
    category: { es: 'Gestión Comercial', en: 'Business Management' },
    title: { es: 'App Contabilidad', en: 'Accounting App' },
    badges: [
      { label: 'Next.js', color: 'primary' },
      { label: 'Supabase', color: 'secondary' }
    ],
    accessNote: {
      es: 'La aplicación en producción requiere iniciar sesión para proteger los datos comerciales. Podés recorrer todas las vistas en la galería inferior.',
      en: 'The live production app requires sign-in to protect business records. You can inspect the main views in the gallery below.'
    },
    description: {
      es: 'App Contabilidad es una solución integral diseñada para facilitar la gestión contable de pequeños negocios. La aplicación proporciona una interfaz moderna e intuitiva que permite a los empresarios administrar sus operaciones financieras de manera eficiente.',
      en: 'App Contabilidad is a comprehensive solution designed to facilitate accounting management for small businesses. The application provides a modern and intuitive interface that allows entrepreneurs to manage their financial operations efficiently.'
    },
    problems: [
      {
        es: 'Elimina la necesidad de sistemas complejos y costosos de contabilidad para pequeños negocios',
        en: 'Eliminates the need for complex and expensive accounting systems for small businesses'
      },
      {
        es: 'Proporciona un dashboard centralizado para monitorear todas las operaciones en tiempo real',
        en: 'Provides a centralized dashboard to monitor all operations in real-time'
      },
      {
        es: 'Facilita la gestión de inventario y registro de ventas de forma rápida y práctica',
        en: 'Facilitates inventory management and sales record keeping quickly and conveniently'
      },
      {
        es: 'Ahorra tiempo que antes se invertía en procesos manuales y propensos a errores',
        en: 'Saves time previously spent on manual and error-prone processes'
      }
    ],
    gallery: [
      {
        src: 'assets/Apps/app-contabilidad-dashboard.webp',
        alt: { es: 'Dashboard principal', en: 'Main Dashboard' }
      },
      {
        src: 'assets/Apps/app-contabilidad-products.webp',
        alt: { es: 'Gestión de Productos', en: 'Product Management' }
      },
      {
        src: 'assets/Apps/app-contabilidad-venta.webp',
        alt: { es: 'Registro de Ventas', en: 'Sales Records' },
        fit: 'contain'
      }
    ],
    techFeatures: [
      { label: { es: 'Framework', en: 'Framework' }, value: 'Next.js 14', color: 'primary' },
      { label: { es: 'Base de Datos', en: 'Database' }, value: 'Supabase', color: 'secondary' },
      { label: { es: 'Estilos', en: 'Styling' }, value: 'Tailwind CSS', color: 'primary' },
      { label: { es: 'Autenticación', en: 'Authentication' }, value: 'Supabase Auth', color: 'secondary' },
      { label: { es: 'Hosting', en: 'Hosting' }, value: 'Vercel', color: 'primary' },
      {
        label: { es: 'Estado', en: 'Status' },
        value: { es: 'En Producción', en: 'In Production' },
        color: 'secondary'
      }
    ],
    liveUrl: 'https://app-contabilidad-de-nogecio.vercel.app/login',
    githubUrl: null
  },
  alda: {
    category: { es: 'E-Commerce', en: 'E-Commerce' },
    title: { es: 'ALDA · Tienda Online', en: 'ALDA · E-Commerce Store' },
    badges: [
      { label: 'Next.js', color: 'primary' },
      { label: 'Supabase', color: 'secondary' },
      { label: 'TypeScript', color: 'primary' }
    ],
    description: {
      es: 'Tienda online de objetos artesanales de autor, mates, librería y bazar desarrollada con Next.js 16 (App Router) y Supabase. Combina catálogo filtrable, variantes con grabado personalizado, seguimiento de pedidos, panel de administración con RPCs atómicas y coordinación de pagos por WhatsApp.',
      en: 'Full-featured e-commerce store for artisanal mate gear, stationery, and home goods built with Next.js 16 (App Router) and Supabase. Features a filterable catalog, custom engraving variants, order tracking, an admin panel powered by atomic RPCs, and WhatsApp checkout coordination.'
    },
    problems: [
      {
        es: 'Unifica las ventas online con retiro gratuito en local y seguimiento de pedidos sin pagar comisiones por venta',
        en: 'Unifies online sales with free in-store pickup and self-service order tracking without sales commissions'
      },
      {
        es: 'Calcula automáticamente precios diferenciados por medio de pago: 10% OFF en efectivo, transferencia/débito y 3 cuotas fijas con tarjeta',
        en: 'Automatically calculates tiered Argentine payment pricing: 10% cash discount, transfer/debit, and 3 fixed credit installments'
      },
      {
        es: 'Gestiona stock transaccional, variantes de producto, grabado opcional en virola y recálculo de totales en servidor mediante PostgreSQL y RPCs',
        en: 'Enforces transactional stock control, product variants, optional engraving add-ons, and server-side total recalculation via PostgreSQL RPCs'
      },
      {
        es: 'Centraliza el checkout por WhatsApp junto con un panel administrativo protegido por roles y políticas RLS',
        en: 'Streamlines WhatsApp checkout alongside a role-protected admin dashboard backed by Supabase Row-Level Security'
      }
    ],
    gallery: [
      {
        src: 'assets/Apps/alda-home.webp',
        alt: { es: 'ALDA - Página principal', en: 'ALDA - Storefront Home' }
      },
      {
        src: 'assets/Apps/alda-catalogo.webp',
        alt: { es: 'ALDA - Catálogo filtrable', en: 'ALDA - Filterable Catalog' }
      },
      {
        src: 'assets/Apps/alda-producto.webp',
        alt: { es: 'ALDA - Detalle de producto y medios de pago', en: 'ALDA - Product Detail & Payment Tiers' }
      }
    ],
    techFeatures: [
      { label: { es: 'Framework', en: 'Framework' }, value: 'Next.js 16', color: 'primary' },
      { label: { es: 'Base de Datos', en: 'Database' }, value: 'Supabase (PostgreSQL + RLS)', color: 'secondary' },
      { label: { es: 'Estilos', en: 'Styling' }, value: 'Tailwind CSS v4', color: 'primary' },
      { label: { es: 'Estado y Validación', en: 'State & Validation' }, value: 'Zustand & Zod', color: 'secondary' },
      { label: { es: 'Hosting', en: 'Hosting' }, value: 'Vercel', color: 'primary' },
      {
        label: { es: 'Estado', en: 'Status' },
        value: { es: 'En Producción', en: 'In Production' },
        color: 'secondary'
      }
    ],
    liveUrl: 'https://alda-bay.vercel.app/',
    githubUrl: null
  },
  tiendafacil: {
    category: { es: 'SaaS Multi-Tenant', en: 'Multi-Tenant SaaS' },
    title: { es: 'Tienda Fácil · Armador de Tiendas', en: 'Tienda Fácil · Online Store Builder' },
    badges: [
      { label: 'Next.js', color: 'primary' },
      { label: 'Supabase', color: 'secondary' },
      { label: 'SaaS', color: 'primary' }
    ],
    description: {
      es: 'Plataforma SaaS multi-tenant para que comercios armen su tienda online en minutos sin conocimientos técnicos ni comisiones por venta. Incluye editor visual de plantillas, gestión de múltiples tiendas bajo una cuenta y checkout directo a WhatsApp.',
      en: 'Multi-tenant SaaS platform enabling businesses to launch their online store in minutes with zero coding or transaction fees. Includes an interactive template previewer, multi-store management under one account, and structured WhatsApp checkout.'
    },
    problems: [
      {
        es: 'Permite lanzar tiendas online completas en minutos con 0% de comisiones por venta y prueba gratuita por tienda',
        en: 'Lets merchants launch complete online stores in minutes with 0% sales commissions and a free per-store trial'
      },
      {
        es: 'Reemplaza los mensajes desordenados de WhatsApp con un carrito estructurado que envía el pedido listo con variantes, descuentos y entrega',
        en: 'Replaces messy back-and-forth WhatsApp DMs with a structured cart sending ready-to-confirm orders with variants, discounts, and delivery info'
      },
      {
        es: 'Aísla catálogo, pedidos y clientes de cada comercio en una arquitectura multi-tenant protegida con PostgreSQL RLS',
        en: 'Strictly isolates each store’s catalog, orders, and customers inside a multi-tenant PostgreSQL architecture secured with RLS'
      },
      {
        es: 'Incluye plantillas personalizables (Clásica, Moderna, Minimal), descuentos por volumen, cupones, kit promocional QR y facturación electrónica ARCA',
        en: 'Includes customizable templates (Clásica, Moderna, Minimal), volume discounts, coupons, QR promo kit, and ARCA electronic invoicing'
      }
    ],
    gallery: [
      {
        src: 'assets/Apps/tienda-facil-hero.webp',
        alt: { es: 'Tienda Fácil - Landing SaaS', en: 'Tienda Fácil - SaaS Landing' }
      },
      {
        src: 'assets/Apps/tienda-facil-plantillas.webp',
        alt: { es: 'Tienda Fácil - Selector interactivo de plantillas', en: 'Tienda Fácil - Interactive Template Previewer' }
      },
      {
        src: 'assets/Apps/tienda-facil-storefront.webp',
        alt: { es: 'Tienda Fácil - Tienda generada con plantilla Moderna', en: 'Tienda Fácil - Modern Storefront Template' }
      }
    ],
    techFeatures: [
      { label: { es: 'Framework', en: 'Framework' }, value: 'Next.js 16', color: 'primary' },
      { label: { es: 'Arquitectura', en: 'Architecture' }, value: 'SaaS Multi-Tenant', color: 'secondary' },
      { label: { es: 'Base de Datos', en: 'Database' }, value: 'Supabase (PostgreSQL + RLS)', color: 'primary' },
      { label: { es: 'UI y Estilos', en: 'UI & Styling' }, value: 'Tailwind CSS v4 & Radix UI', color: 'secondary' },
      { label: { es: 'Hosting', en: 'Hosting' }, value: 'Vercel', color: 'primary' },
      {
        label: { es: 'Estado', en: 'Status' },
        value: { es: 'En Producción', en: 'In Production' },
        color: 'secondary'
      }
    ],
    liveUrl: 'https://tienda-facil-alpha.vercel.app/',
    githubUrl: null
  },
  armadorpc: {
    category: { es: 'Herramienta Interactiva', en: 'Interactive Web Tool' },
    title: { es: 'Armador de PC', en: 'PC Builder & Optimizer' },
    badges: [
      { label: 'React', color: 'primary' },
      { label: 'TypeScript', color: 'secondary' },
      { label: 'Vite', color: 'primary' }
    ],
    description: {
      es: 'Configurador interactivo de PCs 100% frontend con más de 1.200 componentes y precios actualizados automáticamente. Valida compatibilidad física y energética en tiempo real, sugiere builds según presupuesto y uso mediante beam search y serializa la build completa en la URL.',
      en: '100% client-side interactive PC configurator featuring 1,200+ components and automated weekly price updates. Validates physical and power compatibility in real time, generates budget-optimized builds using beam search, and serializes full builds into shareable URLs.'
    },
    problems: [
      {
        es: 'Aplica más de 12 reglas cruzadas de compatibilidad en tiempo real (socket, DDR4/DDR5, consumo vs. fuente, TDP de cooler, largo de GPU y gabinete)',
        en: 'Enforces 12+ cross-component compatibility rules in real time (socket, DDR4/DDR5, wattage vs. PSU, cooler TDP, GPU clearance, and case form factor)'
      },
      {
        es: 'Resuelve qué comprar según presupuesto y uso con un optimizador in-browser basado en beam search que propone 3 builds compatibles',
        en: 'Solves what to buy for any budget and workload with an in-browser beam-search optimizer generating 3 compatible build proposals'
      },
      {
        es: 'Permite fijar piezas que el usuario ya posee y optimizar el resto del presupuesto alrededor de ellas, además de ofrecer 12 presets por gama',
        en: 'Allows locking existing parts while optimizing remaining components around them, alongside 12 curated tier presets'
      },
      {
        es: 'Serializa la build completa en la URL en base64url sin necesidad de backend, con exportación a JSON, texto e imagen PNG y tests con Vitest',
        en: 'Serializes the complete build into a stateless base64url link with JSON, plain-text, and PNG export plus Vitest test coverage'
      }
    ],
    gallery: [
      {
        src: 'assets/Apps/armador-pc-builder.webp',
        alt: { es: 'Armador de PC - Configurador y telemetría', en: 'Armador de PC - Configurator & Telemetry' }
      },
      {
        src: 'assets/Apps/armador-pc-optimizador.webp',
        alt: { es: 'Armador de PC - Propuestas por presupuesto', en: 'Armador de PC - Budget Optimizer Proposals' }
      },
      {
        src: 'assets/Apps/armador-pc-presets.webp',
        alt: { es: 'Armador de PC - Presets por gama', en: 'Armador de PC - Curated Tier Presets' }
      }
    ],
    techFeatures: [
      { label: { es: 'Framework', en: 'Framework' }, value: 'React 19 & Vite', color: 'primary' },
      { label: { es: 'Lenguaje', en: 'Language' }, value: 'TypeScript', color: 'secondary' },
      { label: { es: 'Estilos', en: 'Styling' }, value: 'Tailwind CSS v4', color: 'primary' },
      {
        label: { es: 'Motor', en: 'Engine' },
        value: { es: 'Beam Search & Compatibilidad', en: 'Beam Search & Compat Engine' },
        color: 'secondary'
      },
      { label: { es: 'Automatización', en: 'Automation' }, value: 'GitHub Actions + Vitest', color: 'primary' },
      { label: { es: 'Hosting', en: 'Hosting' }, value: 'Vercel', color: 'secondary' }
    ],
    liveUrl: 'https://armador-de-pc.vercel.app/?b=eyJ2IjoxLCJiIjoyNTAwMDAwLCJzIjp7ImNwdSI6WyJjZy0yMTE4MiJdLCJjb29sZXIiOlsiYW50ZWMtYTM1Il0sIm1vdGhlcmJvYXJkIjpbIm1zaS1iNTUwbS1hLXBybyJdLCJyYW0iOlsiZGRyNC0zMi0zMjAwLWtpdCJdLCJncHUiOlsiYXJjLWI1ODAiXSwic3RvcmFnZSI6WyJudm1lLTF0YiJdLCJwc3UiOlsiYXNyb2NrLTc1MC1nb2xkIl0sImNhc2UiOlsiYXN1cy1hMjEiXX19',
    githubUrl: 'https://github.com/alobarros8/armador-de-pc'
  }
};

const SECTION_IDS = ['home', 'projects', 'stack', 'about', 'contact'];
const EMAIL_ADDRESS = 'alobarros8@gmail.com';
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgwrdep';

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let currentLanguage = localStorage.getItem('language') === 'en' ? 'en' : 'es';
let activeProjectId = null;
let activeGalleryIndex = 0;
let lastProjectTrigger = null;
let lastLightboxTrigger = null;
let projectModalTimer = null;
let fullscreenModalTimer = null;
let feedbackTimer = null;
let copyEmailTimer = null;
let isMobileMenuOpen = false;

// DOM references
const languageButtons = document.querySelectorAll('.language-btn');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link[data-section]');

const projectModal = document.getElementById('projectModal');
const projectModalContent = document.getElementById('projectModalContent');
const closeProjectModalBtn = document.getElementById('closeProjectModalBtn');
const prevProjectBtn = document.getElementById('prevProjectBtn');
const nextProjectBtn = document.getElementById('nextProjectBtn');

const fullscreenModal = document.getElementById('fullscreenImageModal');
const fullscreenImg = document.getElementById('fullscreenImage');
const fullscreenCaption = document.getElementById('fullscreenCaption');
const fullscreenCounter = document.getElementById('fullscreenCounter');
const closeFullscreenBtn = document.getElementById('closeFullscreenBtn');
const fullscreenPrevBtn = document.getElementById('fullscreenPrevBtn');
const fullscreenNextBtn = document.getElementById('fullscreenNextBtn');

const copyEmailBtn = document.getElementById('copy-email-btn');
const copyEmailIcon = document.getElementById('copy-email-icon');
const copyEmailText = document.getElementById('copy-email-text');

const contactForm = document.getElementById('contact-form');
const contactFeedback = document.getElementById('contact-feedback');
const contactSubmit = document.getElementById('contact-submit');
const contactSubmitText = document.getElementById('contact-submit-text');
const contactSubmitIcon = document.getElementById('contact-submit-icon');

function resolveLocalizedText(value, lang) {
  return typeof value === 'string' ? value : value[lang];
}

function getFocusableElements(container) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter(el => el.offsetParent !== null || el === document.activeElement);
}

function syncBodyScrollLock() {
  const projectOpen = projectModal && !projectModal.classList.contains('hidden');
  const fullscreenOpen = fullscreenModal && !fullscreenModal.classList.contains('hidden');
  document.body.style.overflow = projectOpen || fullscreenOpen ? 'hidden' : '';
}

// Theme management
function isDarkMode() {
  return document.documentElement.classList.contains('dark');
}

function syncThemeButton() {
  if (!themeToggleBtn || !themeIcon) return;
  const dark = isDarkMode();
  themeIcon.textContent = dark ? 'light_mode' : 'dark_mode';
  themeToggleBtn.setAttribute('aria-pressed', String(dark));

  const label = dark
    ? currentLanguage === 'es'
      ? 'Cambiar a modo claro'
      : 'Switch to light mode'
    : currentLanguage === 'es'
      ? 'Cambiar a modo oscuro'
      : 'Switch to dark mode';
  themeToggleBtn.setAttribute('aria-label', label);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const nextDark = !isDarkMode();
    document.documentElement.classList.toggle('dark', nextDark);
    try {
      localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    } catch (e) {}
    syncThemeButton();
  });
}

if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    let saved = null;
    try {
      saved = localStorage.getItem('theme');
    } catch (err) {}
    if (!saved) {
      document.documentElement.classList.toggle('dark', e.matches);
      syncThemeButton();
    }
  });
}

// Mobile menu
function setMobileMenuOpen(open) {
  isMobileMenuOpen = Boolean(open);
  if (!mobileMenu || !mobileMenuToggle || !mobileMenuIcon) return;

  mobileMenu.classList.toggle('hidden', !isMobileMenuOpen);
  mobileMenuToggle.setAttribute('aria-expanded', String(isMobileMenuOpen));
  mobileMenuIcon.textContent = isMobileMenuOpen ? 'close' : 'menu';

  const label = isMobileMenuOpen
    ? currentLanguage === 'es'
      ? 'Cerrar menú de navegación'
      : 'Close navigation menu'
    : currentLanguage === 'es'
      ? 'Abrir menú de navegación'
      : 'Open navigation menu';
  mobileMenuToggle.setAttribute('aria-label', label);
}

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  });
}

if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMobileMenuOpen(false));
  });
}

document.addEventListener('click', (e) => {
  if (!isMobileMenuOpen) return;
  const headerNav = document.querySelector('header nav');
  if (headerNav && !headerNav.contains(e.target)) {
    setMobileMenuOpen(false);
  }
});

// Internationalization
function updateLanguageButtons() {
  languageButtons.forEach(btn => {
    const isActive = btn.dataset.lang === currentLanguage;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

function switchLanguage(lang) {
  currentLanguage = lang === 'en' ? 'en' : 'es';
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll('[data-es][data-en]').forEach(element => {
    if (element.querySelector('[data-es][data-en]')) {
      return;
    }
    const text = currentLanguage === 'es' ? element.dataset.es : element.dataset.en;
    element.textContent = text;
  });

  document.querySelectorAll('[data-placeholder-es][data-placeholder-en]').forEach(element => {
    element.placeholder =
      currentLanguage === 'es' ? element.dataset.placeholderEs : element.dataset.placeholderEn;
  });

  document.querySelectorAll('[data-aria-es][data-aria-en]').forEach(element => {
    element.setAttribute(
      'aria-label',
      currentLanguage === 'es' ? element.dataset.ariaEs : element.dataset.ariaEn
    );
  });

  document.title =
    currentLanguage === 'es'
      ? 'Alejandro Barros · Desarrollador Full Stack'
      : 'Alejandro Barros · Full Stack Developer';

  try {
    localStorage.setItem('language', currentLanguage);
  } catch (e) {}

  updateLanguageButtons();
  syncThemeButton();
  setMobileMenuOpen(isMobileMenuOpen);

  if (activeProjectId) {
    renderProjectModal(activeProjectId);
  }
  if (fullscreenModal && !fullscreenModal.classList.contains('hidden')) {
    renderFullscreenImage();
  }
}

languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    switchLanguage(button.dataset.lang);
  });
});

// ScrollSpy & Reveal on Scroll
function setActiveNavSection(sectionId) {
  navLinks.forEach(link => {
    const matches = link.dataset.section === sectionId;
    link.classList.toggle('active', matches);
    if (matches) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function initScrollSpy() {
  const sections = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);
  if (!sections.length) return;

  if (typeof IntersectionObserver !== 'undefined') {
    const visibleRatios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = null;
        let bestRatio = 0;
        SECTION_IDS.forEach(id => {
          const ratio = visibleRatios.get(id) || 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          setActiveNavSection(bestId);
        }
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0, 0.15, 0.35, 0.6]
      }
    );

    sections.forEach(sec => observer.observe(sec));
  }

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY < 100) {
        setActiveNavSection('home');
      } else if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 40
      ) {
        setActiveNavSection('contact');
      }
    },
    { passive: true }
  );

  setActiveNavSection('home');
}

function initScrollReveal() {
  const revealItems = document.querySelectorAll('.reveal');
  if (!revealItems.length) return;

  if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
    revealItems.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealItems.forEach(el => observer.observe(el));
}

// Project Modal & Gallery
function createActionLink(href, labelText, iconName, isPrimary) {
  const link = document.createElement('a');
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = isPrimary
    ? 'flex-1 px-6 py-3.5 bg-cyan-700 hover:bg-cyan-800 text-white dark:bg-cyan-400 dark:hover:bg-cyan-300 dark:text-slate-950 font-bold rounded-xl transition-all transform hover:-translate-y-0.5 glow-hover flex items-center justify-center gap-2'
    : 'flex-1 px-6 py-3.5 border-2 border-slate-300 dark:border-slate-700 hover:border-cyan-700 dark:hover:border-cyan-400 text-slate-800 dark:text-slate-100 font-bold rounded-xl transition-all flex items-center justify-center gap-2';

  const labelSpan = document.createElement('span');
  labelSpan.textContent = labelText;

  const iconSpan = document.createElement('span');
  iconSpan.className = 'material-icons text-base';
  iconSpan.setAttribute('aria-hidden', 'true');
  iconSpan.textContent = iconName;

  link.append(labelSpan, iconSpan);
  return link;
}

function renderProjectModal(projectId) {
  const project = PROJECTS[projectId];
  if (!project) return;

  const lang = currentLanguage;

  const categoryEl = document.getElementById('modalProjectCategory');
  const titleEl = document.getElementById('modalProjectTitle');
  const badgesEl = document.getElementById('modalProjectBadges');
  const noteBoxEl = document.getElementById('modalProjectNote');
  const noteTextEl = document.getElementById('modalProjectNoteText');
  const descriptionEl = document.getElementById('modalProjectDescription');
  const problemsEl = document.getElementById('modalProjectProblems');
  const galleryEl = document.getElementById('modalProjectGallery');
  const techEl = document.getElementById('modalProjectTech');
  const actionsEl = document.getElementById('modalProjectActions');

  if (categoryEl) {
    categoryEl.textContent = resolveLocalizedText(project.category, lang);
  }

  if (titleEl) {
    titleEl.textContent = resolveLocalizedText(project.title, lang);
  }

  if (badgesEl) {
    badgesEl.replaceChildren();
    project.badges.forEach(badge => {
      const span = document.createElement('span');
      span.className =
        badge.color === 'secondary'
          ? 'px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-400'
          : 'px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400';
      span.textContent = badge.label;
      badgesEl.appendChild(span);
    });
  }

  if (noteBoxEl && noteTextEl) {
    if (project.accessNote) {
      noteTextEl.textContent = resolveLocalizedText(project.accessNote, lang);
      noteBoxEl.classList.remove('hidden');
    } else {
      noteTextEl.textContent = '';
      noteBoxEl.classList.add('hidden');
    }
  }

  if (descriptionEl) {
    descriptionEl.textContent = resolveLocalizedText(project.description, lang);
  }

  if (problemsEl) {
    problemsEl.replaceChildren();
    project.problems.forEach(problem => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-3';

      const icon = document.createElement('span');
      icon.className = 'material-icons text-cyan-700 dark:text-cyan-400 shrink-0 mt-0.5 text-xl';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = 'check_circle';

      const text = document.createElement('span');
      text.textContent = resolveLocalizedText(problem, lang);

      li.append(icon, text);
      problemsEl.appendChild(li);
    });
  }

  if (galleryEl) {
    galleryEl.replaceChildren();
    project.gallery.forEach((item, index) => {
      const figure = document.createElement('figure');
      figure.className =
        'group flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 hover:shadow-lg transition-all';

      const button = document.createElement('button');
      button.type = 'button';
      const altText = resolveLocalizedText(item.alt, lang);
      button.setAttribute(
        'aria-label',
        lang === 'es' ? `Ampliar imagen: ${altText}` : `Expand image: ${altText}`
      );
      button.className =
        'relative w-full h-52 overflow-hidden bg-slate-200 dark:bg-slate-950 cursor-pointer focus:outline-none';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = altText;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.className =
        item.fit === 'contain'
          ? 'w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300'
          : 'w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300';

      const overlay = document.createElement('div');
      overlay.className =
        'pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100';

      const zoomIcon = document.createElement('span');
      zoomIcon.className = 'material-icons text-white text-3xl';
      zoomIcon.setAttribute('aria-hidden', 'true');
      zoomIcon.textContent = 'zoom_in';

      overlay.appendChild(zoomIcon);
      button.append(img, overlay);
      button.addEventListener('click', () => openFullscreenImage(index, button));

      const caption = document.createElement('figcaption');
      caption.className =
        'px-3.5 py-2.5 text-xs font-medium text-slate-600 dark:text-slate-300 border-t border-slate-200/80 dark:border-slate-800';
      caption.textContent = altText;

      figure.append(button, caption);
      galleryEl.appendChild(figure);
    });
  }

  if (techEl) {
    techEl.replaceChildren();
    project.techFeatures.forEach(feature => {
      const tile = document.createElement('div');
      tile.className =
        'p-4 bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/70 rounded-2xl';

      const label = document.createElement('span');
      label.className =
        feature.color === 'secondary'
          ? 'text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-400'
          : 'text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400';
      label.textContent = resolveLocalizedText(feature.label, lang);

      const value = document.createElement('p');
      value.className = 'font-bold text-slate-900 dark:text-white mt-1.5 text-sm sm:text-base';
      value.textContent = resolveLocalizedText(feature.value, lang);

      tile.append(label, value);
      techEl.appendChild(tile);
    });
  }

  if (actionsEl) {
    actionsEl.replaceChildren();
    const liveLabel = lang === 'es' ? 'Ver Aplicación en Vivo' : 'View Live Application';
    actionsEl.appendChild(createActionLink(project.liveUrl, liveLabel, 'open_in_new', true));

    if (project.githubUrl) {
      const githubLabel = lang === 'es' ? 'Ver en GitHub' : 'View on GitHub';
      actionsEl.appendChild(createActionLink(project.githubUrl, githubLabel, 'code', false));
    }
  }
}

function openProjectModal(projectId, triggerEl = null) {
  if (!PROJECTS[projectId] || !projectModal) return;

  clearTimeout(projectModalTimer);
  lastProjectTrigger = triggerEl || document.activeElement;
  activeProjectId = projectId;
  renderProjectModal(projectId);

  if (projectModalContent) {
    projectModalContent.scrollTop = 0;
  }

  projectModal.classList.remove('hidden');
  projectModal.classList.add('flex');
  projectModal.setAttribute('aria-hidden', 'false');
  syncBodyScrollLock();

  if (prefersReducedMotion()) {
    projectModal.classList.add('is-open');
  } else {
    requestAnimationFrame(() => {
      projectModal.classList.add('is-open');
    });
  }

  if (closeProjectModalBtn) {
    closeProjectModalBtn.focus({ preventScroll: true });
  }
}

function closeProjectModal() {
  if (!projectModal || projectModal.classList.contains('hidden')) return;

  projectModal.classList.remove('is-open');
  projectModal.setAttribute('aria-hidden', 'true');

  const finishClose = () => {
    projectModal.classList.add('hidden');
    projectModal.classList.remove('flex');
    activeProjectId = null;
    syncBodyScrollLock();
    if (lastProjectTrigger && typeof lastProjectTrigger.focus === 'function') {
      lastProjectTrigger.focus({ preventScroll: true });
    }
    lastProjectTrigger = null;
  };

  if (prefersReducedMotion()) {
    finishClose();
  } else {
    clearTimeout(projectModalTimer);
    projectModalTimer = setTimeout(finishClose, 220);
  }
}

function stepProjectModal(delta) {
  if (!activeProjectId) return;
  const idx = PROJECT_ORDER.indexOf(activeProjectId);
  if (idx === -1) return;

  const nextIdx = (idx + delta + PROJECT_ORDER.length) % PROJECT_ORDER.length;
  activeProjectId = PROJECT_ORDER[nextIdx];
  renderProjectModal(activeProjectId);

  if (projectModalContent) {
    projectModalContent.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });
  }
}

// Event delegation for opening project modal
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-open-project]');
  if (!trigger) return;
  const projectId = trigger.dataset.openProject;
  openProjectModal(projectId, trigger);
});

if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });
}

if (closeProjectModalBtn) {
  closeProjectModalBtn.addEventListener('click', closeProjectModal);
}
if (prevProjectBtn) {
  prevProjectBtn.addEventListener('click', () => stepProjectModal(-1));
}
if (nextProjectBtn) {
  nextProjectBtn.addEventListener('click', () => stepProjectModal(1));
}

// Fullscreen Lightbox
function renderFullscreenImage() {
  if (!activeProjectId || !PROJECTS[activeProjectId] || !fullscreenImg) return;
  const gallery = PROJECTS[activeProjectId].gallery;
  if (!gallery.length) return;

  const safeIndex = ((activeGalleryIndex % gallery.length) + gallery.length) % gallery.length;
  activeGalleryIndex = safeIndex;

  const item = gallery[safeIndex];
  const captionText = resolveLocalizedText(item.alt, currentLanguage);

  fullscreenImg.src = item.src;
  fullscreenImg.alt = captionText;

  if (fullscreenCaption) {
    fullscreenCaption.textContent = captionText;
  }
  if (fullscreenCounter) {
    fullscreenCounter.textContent = `${safeIndex + 1} / ${gallery.length}`;
  }

  const single = gallery.length <= 1;
  if (fullscreenPrevBtn) {
    fullscreenPrevBtn.classList.toggle('hidden', single);
  }
  if (fullscreenNextBtn) {
    fullscreenNextBtn.classList.toggle('hidden', single);
  }
}

function openFullscreenImage(index, triggerEl = null) {
  if (!fullscreenModal || !activeProjectId) return;

  clearTimeout(fullscreenModalTimer);
  lastLightboxTrigger = triggerEl || document.activeElement;
  activeGalleryIndex = index;
  renderFullscreenImage();

  fullscreenModal.classList.remove('hidden');
  fullscreenModal.classList.add('flex');
  fullscreenModal.setAttribute('aria-hidden', 'false');
  syncBodyScrollLock();

  if (prefersReducedMotion()) {
    fullscreenModal.classList.add('is-open');
  } else {
    requestAnimationFrame(() => {
      fullscreenModal.classList.add('is-open');
    });
  }

  if (closeFullscreenBtn) {
    closeFullscreenBtn.focus({ preventScroll: true });
  }
}

function closeFullscreenImage() {
  if (!fullscreenModal || fullscreenModal.classList.contains('hidden')) return;

  fullscreenModal.classList.remove('is-open');
  fullscreenModal.setAttribute('aria-hidden', 'true');

  const finishClose = () => {
    fullscreenModal.classList.add('hidden');
    fullscreenModal.classList.remove('flex');
    syncBodyScrollLock();
    if (lastLightboxTrigger && typeof lastLightboxTrigger.focus === 'function') {
      lastLightboxTrigger.focus({ preventScroll: true });
    }
    lastLightboxTrigger = null;
  };

  if (prefersReducedMotion()) {
    finishClose();
  } else {
    clearTimeout(fullscreenModalTimer);
    fullscreenModalTimer = setTimeout(finishClose, 220);
  }
}

function stepFullscreenImage(delta) {
  if (!activeProjectId || !PROJECTS[activeProjectId]) return;
  const total = PROJECTS[activeProjectId].gallery.length;
  if (total <= 1) return;
  activeGalleryIndex = (activeGalleryIndex + delta + total) % total;
  renderFullscreenImage();
}

if (fullscreenModal) {
  fullscreenModal.addEventListener('click', (e) => {
    if (e.target === fullscreenModal) {
      closeFullscreenImage();
    }
  });
}
if (closeFullscreenBtn) {
  closeFullscreenBtn.addEventListener('click', closeFullscreenImage);
}
if (fullscreenPrevBtn) {
  fullscreenPrevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    stepFullscreenImage(-1);
  });
}
if (fullscreenNextBtn) {
  fullscreenNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    stepFullscreenImage(1);
  });
}

// Keyboard navigation & focus trap
document.addEventListener('keydown', (e) => {
  const fullscreenOpen = fullscreenModal && !fullscreenModal.classList.contains('hidden');
  const projectOpen = projectModal && !projectModal.classList.contains('hidden');

  if (e.key === 'Escape') {
    if (fullscreenOpen) {
      closeFullscreenImage();
    } else if (projectOpen) {
      closeProjectModal();
    } else if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
      if (mobileMenuToggle) mobileMenuToggle.focus();
    }
    return;
  }

  if (fullscreenOpen) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stepFullscreenImage(-1);
      return;
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      stepFullscreenImage(1);
      return;
    }
  }

  if (e.key === 'Tab' && (fullscreenOpen || projectOpen)) {
    const activeContainer = fullscreenOpen ? fullscreenModal : projectModalContent;
    const focusables = getFocusableElements(activeContainer);
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

// Copy email button
async function copyEmailToClipboard() {
  let copied = false;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      copied = true;
    } catch (e) {}
  }

  if (!copied) {
    try {
      const temp = document.createElement('textarea');
      temp.value = EMAIL_ADDRESS;
      temp.setAttribute('readonly', '');
      temp.style.position = 'fixed';
      temp.style.opacity = '0';
      document.body.appendChild(temp);
      temp.select();
      copied = document.execCommand('copy');
      document.body.removeChild(temp);
    } catch (e) {}
  }

  if (copied && copyEmailText && copyEmailIcon) {
    clearTimeout(copyEmailTimer);
    copyEmailIcon.textContent = 'check';
    copyEmailText.textContent = currentLanguage === 'es' ? '¡Copiado!' : 'Copied!';

    copyEmailTimer = setTimeout(() => {
      copyEmailIcon.textContent = 'content_copy';
      copyEmailText.textContent = currentLanguage === 'es' ? 'Copiar email' : 'Copy email';
    }, 2500);
  }
}

if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', copyEmailToClipboard);
}

// Contact form validation & submission
function showContactMessage(message, isError = false) {
  if (!contactFeedback) return;
  clearTimeout(feedbackTimer);
  contactFeedback.textContent = message;
  contactFeedback.className = isError
    ? 'text-sm font-medium text-rose-700 dark:text-rose-400'
    : 'text-sm font-medium text-emerald-700 dark:text-emerald-400';

  feedbackTimer = setTimeout(() => {
    contactFeedback.textContent = '';
  }, 6000);
}

function setContactLoading(isLoading) {
  if (!contactSubmit || !contactSubmitText || !contactSubmitIcon) return;
  contactSubmit.disabled = isLoading;

  if (isLoading) {
    contactSubmitText.textContent = currentLanguage === 'es' ? 'Enviando...' : 'Sending...';
    contactSubmitIcon.textContent = 'hourglass_top';
  } else {
    contactSubmitText.textContent = currentLanguage === 'es' ? 'Enviar Mensaje' : 'Send Message';
    contactSubmitIcon.textContent = 'send';
  }
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    const rawName = nameInput ? nameInput.value.trim() : '';
    const rawEmail = emailInput ? emailInput.value.trim() : '';
    const rawMessage = messageInput ? messageInput.value.trim() : '';

    if (!rawName) {
      showContactMessage(
        currentLanguage === 'es' ? 'Por favor ingresá tu nombre.' : 'Please enter your name.',
        true
      );
      if (nameInput) nameInput.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(rawEmail)) {
      showContactMessage(
        currentLanguage === 'es'
          ? 'Por favor ingresá un correo electrónico válido.'
          : 'Please enter a valid email address.',
        true
      );
      if (emailInput) emailInput.focus();
      return;
    }

    if (rawMessage.length < 10) {
      showContactMessage(
        currentLanguage === 'es'
          ? 'Por favor escribí un mensaje de al menos 10 caracteres.'
          : 'Please write a message of at least 10 characters.',
        true
      );
      if (messageInput) messageInput.focus();
      return;
    }

    const subject = currentLanguage === 'es' ? 'Contacto desde Portafolio' : 'Contact from Portfolio';
    const nameLabel = currentLanguage === 'es' ? 'Nombre' : 'Name';
    const emailLabel = currentLanguage === 'es' ? 'Correo' : 'Email';
    const messageLabel = currentLanguage === 'es' ? 'Mensaje' : 'Message';

    if (FORMSPREE_ENDPOINT && !FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      const formData = new FormData();
      formData.append('name', rawName);
      formData.append('email', rawEmail);
      formData.append('message', rawMessage);
      formData.append('_subject', subject);

      try {
        setContactLoading(true);
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });
        setContactLoading(false);

        if (res.ok) {
          showContactMessage(
            currentLanguage === 'es'
              ? '¡Mensaje enviado correctamente! Te responderé pronto.'
              : 'Message sent successfully! I will get back to you soon.'
          );
          contactForm.reset();
        } else {
          showContactMessage(
            currentLanguage === 'es'
              ? 'Error al enviar el mensaje. Intenta nuevamente.'
              : 'Error sending message. Please try again.',
            true
          );
        }
      } catch (err) {
        setContactLoading(false);
        showContactMessage(
          currentLanguage === 'es'
            ? 'Error de red. Revisá tu conexión e intentá de nuevo.'
            : 'Network error. Please check your connection and try again.',
          true
        );
      }
      return;
    }

    const body = `${nameLabel}: ${rawName}\n${emailLabel}: ${rawEmail}\n\n${messageLabel}:\n${rawMessage}`;
    const mailto = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}

// Initialize app
switchLanguage(currentLanguage);
syncThemeButton();
initScrollSpy();
initScrollReveal();
