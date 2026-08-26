/* ==========================================================================
   JORNADA DA LIBERTAÇÃO EMOCIONAL - INTERACTION SCRIPTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all accordions
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });
      
      // Toggle current accordion if it was not active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 2. Carousel Scroll Right Button
  const carousel = document.querySelector('.modules-carousel');
  const scrollRightBtn = document.querySelector('.carousel-scroll-btn');
  
  if (carousel && scrollRightBtn) {
    scrollRightBtn.addEventListener('click', () => {
      carousel.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    });
  }

  // 3. Presentation Video Modal Popup
  const videoModal = document.querySelector('.video-modal-overlay');
  const videoCloseBtn = document.querySelector('.video-modal-close');
  const videoTriggers = document.querySelectorAll('.js-video-trigger');
  const iframeContainer = document.querySelector('.video-wrapper-16x9');

  const videoEmbedUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'; // Placeholder or custom presentation video URL

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
    trigger.addEventListener('click', openVideoModal);
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
});
