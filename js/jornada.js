/* ==========================================================================
   JORNADA DA LIBERTAÇÃO EMOCIONAL - INTERACTION SCRIPTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all accordions
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherHeader = otherItem.querySelector('.faq-header');
        if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
      });
      
      // Toggle current accordion if it was not active
      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 2. Presentation Video Modal Popup
  const videoModal = document.querySelector('.video-modal-overlay');
  const videoCloseBtn = document.querySelector('.video-modal-close');
  const videoTriggers = document.querySelectorAll('.js-video-trigger');
  const iframeContainer = document.querySelector('.video-wrapper-16x9');

  const videoEmbedUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

  function openVideoModal() {
    if (videoModal && iframeContainer) {
      iframeContainer.innerHTML = `<iframe src="${videoEmbedUrl}" title="Vídeo de Apresentação" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeVideoModal() {
    if (videoModal && iframeContainer) {
      videoModal.classList.remove('active');
      iframeContainer.innerHTML = '';
      document.body.style.overflow = '';
    }
  }

  videoTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openVideoModal();
    });
  });

  if (videoCloseBtn) {
    videoCloseBtn.addEventListener('click', closeVideoModal);
  }

  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        closeVideoModal();
      }
    });
  }

  // Keyboard Escape to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
      closeVideoModal();
    }
  });

  // 3. Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
