/* ==========================================================================
   Raquel Vieira - Psicanálise & Acolhimento
   Main JavaScript Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header scroll state
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });

    // Close menu when clicking nav links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }

  // 2.b Smooth Centered Scroll for Navigation Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();

        const headerHeight = 85;
        const windowHeight = window.innerHeight;
        const sectionRect = targetSection.getBoundingClientRect();
        const sectionTop = sectionRect.top + window.pageYOffset;
        const sectionHeight = targetSection.offsetHeight;

        let targetScrollY;

        // Se a seção for menor que a altura visível da tela, centraliza perfeitamente no meio da tela
        if (sectionHeight < windowHeight - headerHeight) {
          targetScrollY = sectionTop - ((windowHeight - sectionHeight) / 2);
        } else {
          // Caso seja maior, alinha o topo logo abaixo do cabeçalho fixo com uma margem de respiro
          targetScrollY = sectionTop - headerHeight - 20;
        }

        if (targetScrollY < 0) targetScrollY = 0;

        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth'
        });
      }
    });
  });

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other accordion items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. Modal Handling (Appointment & Video)
  const appointmentModal = document.getElementById('appointmentModal');
  const videoModal = document.getElementById('videoModal');
  const openAppointmentBtns = document.querySelectorAll('.js-open-appointment');
  const openVideoBtns = document.querySelectorAll('.js-open-video');
  const closeModalBtns = document.querySelectorAll('.js-close-modal');

  openAppointmentBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (appointmentModal) appointmentModal.classList.add('active');
    });
  });

  openVideoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoTitle = btn.dataset.videoTitle || 'Apresentação Raquel Vieira';
      const modalTitleEl = videoModal ? videoModal.querySelector('.modal-title') : null;
      if (modalTitleEl) modalTitleEl.textContent = videoTitle;
      if (videoModal) videoModal.classList.add('active');
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (appointmentModal) appointmentModal.classList.remove('active');
      if (videoModal) videoModal.classList.remove('active');
    });
  });

  // Close modals on clicking backdrop
  [appointmentModal, videoModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    }
  });

  // 5. Appointment Form Submission
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('fieldName').value.trim();
      const phone = document.getElementById('fieldPhone').value.trim();
      const message = document.getElementById('fieldMessage').value.trim();

      const textMessage = `Olá, Dra. Raquel! Meu nome é ${name}. Gostaria de agendar uma consulta. ${message}`;
      const encodedMsg = encodeURIComponent(textMessage);
      
      // WhatsApp link trigger
      const whatsappUrl = `https://wa.me/5511999999999?text=${encodedMsg}`;
      window.open(whatsappUrl, '_blank');
      
      appointmentModal.classList.remove('active');
      appointmentForm.reset();
    });
  }
});
