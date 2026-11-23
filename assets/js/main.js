const PROJECTS = {
  appcontabilidad: {
    title: { es: 'App Contabilidad', en: 'Accounting App' },
    badges: [
      { label: 'Next.js', color: 'primary' },
      { label: 'Supabase', color: 'secondary' }
    ],
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
        src: 'assets/Apps/AppContabilidad%20dashboard.png',
        alt: { es: 'Dashboard', en: 'Dashboard' }
      },
      {
        src: 'assets/Apps/AppContabilidadProducts.png',
        alt: { es: 'Gestión de Productos', en: 'Product Management' }
      },
      {
        src: 'assets/Apps/AppContabilidadVenta.png',
        alt: { es: 'Registro de Ventas', en: 'Sales Records' }
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
        src: 'assets/Apps/AldaHome.png',
        alt: { es: 'ALDA - Página principal', en: 'ALDA - Storefront Home' }
      },
      {
        src: 'assets/Apps/AldaCatalogo.png',
        alt: { es: 'ALDA - Catálogo filtrable', en: 'ALDA - Filterable Catalog' }
      },
      {
        src: 'assets/Apps/AldaProducto.png',
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
        src: 'assets/Apps/TiendaFacilHero.png',
        alt: { es: 'Tienda Fácil - Landing SaaS', en: 'Tienda Fácil - SaaS Landing' }
      },
      {
        src: 'assets/Apps/TiendaFacilPlantillas.png',
        alt: { es: 'Tienda Fácil - Selector interactivo de plantillas', en: 'Tienda Fácil - Interactive Template Previewer' }
      },
      {
        src: 'assets/Apps/TiendaFacilStorefront.png',
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
        src: 'assets/Apps/ArmadorPCBuilder.png',
        alt: { es: 'Armador de PC - Configurador y telemetría', en: 'Armador de PC - Configurator & Telemetry' }
      },
      {
        src: 'assets/Apps/ArmadorPCOptimizador.png',
        alt: { es: 'Armador de PC - Propuestas por presupuesto', en: 'Armador de PC - Budget Optimizer Proposals' }
      },
      {
        src: 'assets/Apps/ArmadorPCPresets.png',
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

// Language switcher functionality
const languageButtons = document.querySelectorAll('.language-btn');
let currentLanguage = localStorage.getItem('language') || 'es';
let activeProjectId = null;

// Set initial language
initializeLanguage();

function initializeLanguage() {
  document.documentElement.lang = currentLanguage;
  updateButtonStates();
  switchLanguage(currentLanguage);
}

function updateButtonStates() {
  languageButtons.forEach(btn => {
    if (btn.dataset.lang === currentLanguage) {
      btn.classList.add('active', 'bg-primary', 'text-white');
      btn.classList.remove('text-slate-600', 'dark:text-slate-400');
    } else {
      btn.classList.remove('active', 'bg-primary', 'text-white');
      btn.classList.add('text-slate-600', 'dark:text-slate-400');
    }
  });
}

function switchLanguage(lang) {
  // Handle all elements with data-es and data-en attributes
  const elements = document.querySelectorAll('[data-es][data-en]');
  elements.forEach(element => {
    const text = lang === 'es' ? element.dataset.es : element.dataset.en;

    // Check if element has child elements (like spans inside)
    if (element.children.length > 0) {
      // For elements with children (mixed content), update each child
      const children = element.querySelectorAll('[data-es][data-en]');
      // Don't update this element's text if it has children with data attributes
      if (children.length > 0) {
        // Let the children handle their own translation
        return;
      }
    }

    // For simple text elements or leaf nodes
    element.textContent = text;
  });

  // Update title
  const titleEs = 'Portafolio Full Stack Developer Innovador';
  const titleEn = 'Innovative Full Stack Developer Portfolio';
  document.title = lang === 'es' ? titleEs : titleEn;

  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updateButtonStates();

  if (activeProjectId) {
    renderProjectModal(activeProjectId);
  }
}

languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;
    switchLanguage(lang);
  });
});

function resolveLocalizedText(value, lang) {
  return typeof value === 'string' ? value : value[lang];
}

function createActionLink(href, labelText, iconName, isPrimary) {
  const link = document.createElement('a');
  link.href = href;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = isPrimary
    ? 'flex-1 px-8 py-4 bg-primary hover:bg-cyan-500 text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 glow-hover flex items-center justify-center gap-2'
    : 'flex-1 px-8 py-4 border-2 border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary font-bold rounded-xl transition-all flex items-center justify-center gap-2';

  const labelSpan = document.createElement('span');
  labelSpan.textContent = labelText;

  const iconSpan = document.createElement('span');
  iconSpan.className = 'material-icons text-sm';
  iconSpan.textContent = iconName;

  link.append(labelSpan, iconSpan);
  return link;
}

function renderProjectModal(projectId) {
  const project = PROJECTS[projectId];
  if (!project) return;

  const lang = currentLanguage === 'en' ? 'en' : 'es';

  const titleEl = document.getElementById('modalProjectTitle');
  const badgesEl = document.getElementById('modalProjectBadges');
  const descriptionEl = document.getElementById('modalProjectDescription');
  const problemsEl = document.getElementById('modalProjectProblems');
  const galleryEl = document.getElementById('modalProjectGallery');
  const techEl = document.getElementById('modalProjectTech');
  const actionsEl = document.getElementById('modalProjectActions');

  if (titleEl) {
    titleEl.textContent = project.title[lang];
  }

  if (badgesEl) {
    badgesEl.replaceChildren();
    project.badges.forEach(badge => {
      const span = document.createElement('span');
      const colorClass = badge.color === 'secondary' ? 'text-secondary' : 'text-primary';
      span.className = `text-xs font-bold uppercase tracking-widest ${colorClass}`;
      span.textContent = badge.label;
      badgesEl.appendChild(span);
    });
  }

  if (descriptionEl) {
    descriptionEl.textContent = project.description[lang];
  }

  if (problemsEl) {
    problemsEl.replaceChildren();
    project.problems.forEach(problem => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-3';

      const icon = document.createElement('span');
      icon.className = 'material-icons text-primary flex-shrink-0 mt-1';
      icon.textContent = 'check_circle';

      const text = document.createElement('span');
      text.textContent = problem[lang];

      li.append(icon, text);
      problemsEl.appendChild(li);
    });
  }

  if (galleryEl) {
    galleryEl.replaceChildren();
    project.gallery.forEach(item => {
      const card = document.createElement('div');
      card.className = 'group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all cursor-pointer';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt[lang];
      img.className = 'w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300';

      const overlay = document.createElement('div');
      overlay.className = 'pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100';

      const zoomIcon = document.createElement('span');
      zoomIcon.className = 'material-icons text-white text-3xl';
      zoomIcon.textContent = 'zoom_in';

      overlay.appendChild(zoomIcon);
      card.append(img, overlay);
      card.addEventListener('click', () => toggleFullscreenImage(img));
      galleryEl.appendChild(card);
    });
  }

  if (techEl) {
    techEl.replaceChildren();
    project.techFeatures.forEach(feature => {
      const tile = document.createElement('div');
      tile.className = 'p-4 bg-slate-50 dark:bg-slate-800 rounded-xl';

      const label = document.createElement('span');
      const colorClass = feature.color === 'secondary' ? 'text-secondary' : 'text-primary';
      label.className = `text-xs ${colorClass} font-bold uppercase tracking-widest`;
      label.textContent = resolveLocalizedText(feature.label, lang);

      const value = document.createElement('p');
      value.className = 'font-bold mt-2';
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

// Project Modal Functions
function openProjectModal(projectId) {
  if (!PROJECTS[projectId]) return;
  activeProjectId = projectId;
  renderProjectModal(projectId);

  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('projectModalContent');
  if (modalContent) {
    modalContent.scrollTop = 0;
  }
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal(event) {
  // Only close if clicking on the background, not the modal content
  if (event && event.target.id !== 'projectModal') {
    return;
  }
  const modal = document.getElementById('projectModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  activeProjectId = null;
  document.body.style.overflow = 'auto';
}

// Fullscreen Image Functions
function toggleFullscreenImage(imgElement) {
  const modal = document.getElementById('fullscreenImageModal');
  const fullscreenImg = document.getElementById('fullscreenImage');
  fullscreenImg.src = imgElement.src;
  fullscreenImg.alt = imgElement.alt || 'Fullscreen';
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeFullscreenImage(event) {
  // Only close if clicking on the background
  if (event && event.target.id !== 'fullscreenImageModal') {
    return;
  }
  const modal = document.getElementById('fullscreenImageModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  const projectModal = document.getElementById('projectModal');
  if (!projectModal || projectModal.classList.contains('hidden')) {
    document.body.style.overflow = 'auto';
  }
}

// Contact form: support Formspree (recommended) with mailto fallback
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgwrdep'; // keep existing endpoint

const contactForm = document.getElementById('contact-form');
const contactFeedback = document.getElementById('contact-feedback');
const contactSubmit = document.getElementById('contact-submit');

function showContactMessage(message, isError = false) {
  if (contactFeedback) {
    contactFeedback.textContent = message;
    contactFeedback.classList.remove('text-green-600', 'text-red-600');
    contactFeedback.classList.add(isError ? 'text-red-600' : 'text-green-600');
    setTimeout(() => { if (contactFeedback) contactFeedback.textContent = ''; }, 5000);
  } else {
    alert(message);
  }
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const rawName = document.getElementById('contact-name')?.value.trim() || '';
    const rawEmail = document.getElementById('contact-email')?.value.trim() || '';
    const rawMessage = document.getElementById('contact-message')?.value.trim() || '';

    const subject = currentLanguage === 'es' ? 'Contacto desde Portafolio' : 'Contact from Portfolio';
    const nameLabel = currentLanguage === 'es' ? 'Nombre' : 'Name';
    const emailLabel = currentLanguage === 'es' ? 'Correo' : 'Email';
    const messageLabel = currentLanguage === 'es' ? 'Mensaje' : 'Message';

    // If the user replaced the placeholder FORMSPREE_ENDPOINT, use it
    if (FORMSPREE_ENDPOINT && !FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      const formData = new FormData();
      formData.append('name', rawName);
      formData.append('email', rawEmail);
      formData.append('message', rawMessage);
      formData.append('_subject', subject);

      try {
        contactSubmit.disabled = true;
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        contactSubmit.disabled = false;
        if (res.ok) {
          showContactMessage(currentLanguage === 'es' ? 'Mensaje enviado correctamente.' : 'Message sent successfully.');
          contactForm.reset();
        } else {
          showContactMessage(currentLanguage === 'es' ? 'Error al enviar. Intenta nuevamente.' : 'Error sending message. Please try again.', true);
        }
      } catch (err) {
        contactSubmit.disabled = false;
        showContactMessage(currentLanguage === 'es' ? 'Error de red. Revisa tu conexión.' : 'Network error. Check your connection.', true);
      }
      return;
    }

    // Fallback: open user's email client
    const body = `${nameLabel}: ${rawName}\n${emailLabel}: ${rawEmail}\n\n${messageLabel}:\n${rawMessage}`;
    const mailto = `mailto:alobarros8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}

// Keyboard support for modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const fullscreenModal = document.getElementById('fullscreenImageModal');
    const projectModal = document.getElementById('projectModal');
    if (fullscreenModal && !fullscreenModal.classList.contains('hidden')) {
      closeFullscreenImage();
    } else if (projectModal && !projectModal.classList.contains('hidden')) {
      closeProjectModal();
    }
  }
});
