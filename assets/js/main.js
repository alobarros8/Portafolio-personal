// Language switcher functionality
const languageButtons = document.querySelectorAll('.language-btn');
let currentLanguage = localStorage.getItem('language') || 'es';

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
}

languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.dataset.lang;
    switchLanguage(lang);
  });
});

// Project Modal Functions
function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
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
  document.body.style.overflow = 'auto';
}

// Fullscreen Image Functions
function toggleFullscreenImage(imgElement) {
  const modal = document.getElementById('fullscreenImageModal');
  const fullscreenImg = document.getElementById('fullscreenImage');
  fullscreenImg.src = imgElement.src;
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
  document.body.style.overflow = 'auto';
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
    closeProjectModal();
    closeFullscreenImage();
  }
});
