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

  // 4. Modal Handling (Appointment, Video, Interactive Details & Privacy)
  const appointmentModal = document.getElementById('appointmentModal');
  const videoModal = document.getElementById('videoModal');
  const detailModal = document.getElementById('detailModal');
  const privacyModal = document.getElementById('privacyModal');
  const openAppointmentBtns = document.querySelectorAll('.js-open-appointment');
  const openVideoBtns = document.querySelectorAll('.js-open-video');
  const openDetailBtns = document.querySelectorAll('.js-open-detail-modal');
  const closeModalBtns = document.querySelectorAll('.js-close-modal');

  // Interactive details data store
  const detailDataStore = {
    dependencia: {
      category: "ATENDIMENTO CLÍNICO",
      title: "Tratamento da Dependência Emocional",
      icon: "fa-link-slash",
      desc: "O acompanhamento foca na libertação de apegos ansiosos e na recuperação da sua autonomia afetiva. Através de um processo analítico e acolhedor, investigamos as causas inconscientes do medo da solidão e da necessidade constante de aprovação alheia.",
      items: [
        "Identificação e desconstrução de padrões de apego nocivos",
        "Fortalecimento da autoestima e do valor próprio",
        "Desenvolvimento de autonomia para tomada de decisões sem culpa",
        "Imposição de limites saudáveis nas relações interpessoais"
      ]
    },
    abusivas: {
      category: "ATENDIMENTO CLÍNICO",
      title: "Superação de Relações Abusivas",
      icon: "fa-shield-heart",
      desc: "Apoio clínico especializado para reconhecer dinâmicas de manipulação psicológica (gaslighting), dependência tóxica e controle velado. Um espaço seguro para resgatar sua dignidade, romper o ciclo de sofrimento e reconstruir sua identidade.",
      items: [
        "Clareza para identificar sinais sutis de manipulação e controle",
        "Processamento da dor emocional e libertação da culpa injustificada",
        "Estratégias para corte seguro de vínculos tóxicos",
        "Reconstrução da autoconfiança e segurança pessoal"
      ]
    },
    psicanalise: {
      category: "ATENDIMENTO CLÍNICO",
      title: "Psicanálise Clínica & Saúde Mental",
      icon: "fa-brain",
      desc: "Uma escuta analítica profunda voltada para a investigação dos conteúdos inconscientes que se manifestam na forma de angústias, ansiedade generalizada, travamentos na vida pessoal e repetição de traumas passados.",
      items: [
        "Compreensão das origens inconscientes dos sintomas e sofrimentos",
        "Elaboração de lutos, perdas e feridas emocionais não resolvidas",
        "Manejo da ansiedade e estados constantes de alerta",
        "Desenvolvimento de uma relação mais harmoniosa e verdadeira consigo"
      ]
    },
    constelacao: {
      category: "ABORDAGEM INTEGRATIVA",
      title: "Constelação Familiar & Visão Sistêmica",
      icon: "fa-diagram-project",
      desc: "Abordagens integrativas e sistêmicas que auxiliam na identificação de lealdades invisíveis à história familiar e na liberação de traumas corporais retidos no sistema nervoso através da respiração consciente.",
      items: [
        "Identificação de repetições de padrões transgeracionais",
        "Ressignificação e reposicionamento no sistema familiar",
        "Liberação de bloqueios emocionais acumulados no corpo",
        "Restabelecimento do fluxo de energia vital e paz interna"
      ]
    },
    traumas: {
      category: "ABORDAGEM INTEGRATIVA",
      title: "Renascimento & Liberação de Traumas",
      icon: "fa-wind",
      desc: "Ressignificação profunda de marcas do passado integrando viés psicanalítico, visão sistêmica e técnicas de respiração consciente para libertação de memórias traumáticas retidas no corpo.",
      items: [
        "Desativação de gatilhos emocionais recorrentes no corpo",
        "Técnicas de respiração consciente (Rebirthing)",
        "Integração de experiências dolorosas com novo significado",
        "Recuperação da paz de espírito e sensação de segurança interna"
      ]
    },
    autonomia: {
      category: "PILAR TERAPÊUTICO",
      title: "Autoestima, Valor Próprio & Limites",
      icon: "fa-hand-holding-heart",
      desc: "Desenvolvimento do fortalecimento interno para libertar-se de dependências dolorosas e assumir o protagonismo da própria história.",
      items: [
        "Aprender a sustentar decisões sem dependência da validação alheia",
        "Construção de uma base emocional sólida e resiliente",
        "Desenvolvimento do autoamor e respeito às próprias necessidades"
      ]
    }
  };

  openAppointmentBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (detailModal) detailModal.classList.remove('active');
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

  openDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const detailId = btn.dataset.detailId;
      const data = detailDataStore[detailId];

      if (data && detailModal) {
        const categoryEl = document.getElementById('detailModalCategory');
        const titleEl = document.getElementById('detailModalTitle');
        const iconEl = document.getElementById('detailModalIcon');
        const descEl = document.getElementById('detailModalDesc');
        const listEl = document.getElementById('detailModalList');

        if (categoryEl) categoryEl.textContent = data.category;
        if (titleEl) titleEl.textContent = data.title;
        if (iconEl) iconEl.innerHTML = `<i class="fas ${data.icon}"></i>`;
        if (descEl) descEl.textContent = data.desc;

        if (listEl) {
          listEl.innerHTML = data.items
            .map(item => `<li><i class="fas fa-check"></i> <span>${item}</span></li>`)
            .join('');
        }

        detailModal.classList.add('active');
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (appointmentModal) appointmentModal.classList.remove('active');
      if (videoModal) videoModal.classList.remove('active');
      if (detailModal) detailModal.classList.remove('active');
      if (privacyModal) privacyModal.classList.remove('active');
    });
  });

  // Close modals on clicking backdrop
  [appointmentModal, videoModal, detailModal, privacyModal].forEach(modal => {
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
      const whatsappUrl = `https://wa.me/553388215629?text=${encodedMsg}`;
      window.open(whatsappUrl, '_blank');

      appointmentModal.classList.remove('active');
      appointmentForm.reset();
    });
  }

  // 6. Clinic Treatments Infinite Seamless Carousel Logic
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselPrev = document.getElementById('carouselPrev');
  const carouselNext = document.getElementById('carouselNext');
  const carouselDots = document.getElementById('carouselDots');

  if (carouselTrack) {
    const originalSlides = Array.from(carouselTrack.children);
    const numOriginals = originalSlides.length;

    // Clone all original slides and append them for seamless forward looping
    originalSlides.forEach(slide => {
      const clone = slide.cloneNode(true);
      carouselTrack.appendChild(clone);
    });

    const allSlides = Array.from(carouselTrack.children);
    let currentIndex = 0;
    let isTransitioning = false;

    // Create dots for original slides only
    const createDots = () => {
      if (!carouselDots) return;
      carouselDots.innerHTML = '';
      for (let i = 0; i < numOriginals; i++) {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
          if (isTransitioning) return;
          moveToSlide(i);
        });
        carouselDots.appendChild(dot);
      }
    };

    const updateActiveDot = () => {
      if (!carouselDots) return;
      const dots = Array.from(carouselDots.children);
      const activeIndex = currentIndex % numOriginals;
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    };

    const setTrackPosition = (index, animated = true) => {
      if (!allSlides[0]) return;
      const slideWidth = allSlides[0].getBoundingClientRect().width;
      const gap = parseFloat(window.getComputedStyle(carouselTrack).columnGap) || 0;
      const moveAmount = (slideWidth + gap) * index;

      if (animated) {
        carouselTrack.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)';
        isTransitioning = true;
      } else {
        carouselTrack.style.transition = 'none';
        isTransitioning = false;
      }

      carouselTrack.style.transform = `translateX(-${moveAmount}px)`;
      updateActiveDot();
    };

    const moveToSlide = (index) => {
      currentIndex = index;
      setTrackPosition(currentIndex, true);
    };

    // When forward transition completes, seamlessly snap to equivalent position in first set
    carouselTrack.addEventListener('transitionend', () => {
      isTransitioning = false;
      if (currentIndex >= numOriginals) {
        currentIndex = currentIndex % numOriginals;
        setTrackPosition(currentIndex, false);
      }
    });

    const nextSlide = () => {
      if (isTransitioning) return;
      currentIndex++;
      setTrackPosition(currentIndex, true);
    };

    const prevSlide = () => {
      if (isTransitioning) return;
      if (currentIndex === 0) {
        currentIndex = numOriginals;
        setTrackPosition(currentIndex, false);
        void carouselTrack.offsetHeight;
      }
      currentIndex--;
      setTrackPosition(currentIndex, true);
    };

    if (carouselNext) {
      carouselNext.addEventListener('click', nextSlide);
    }

    if (carouselPrev) {
      carouselPrev.addEventListener('click', prevSlide);
    }

    window.addEventListener('resize', () => {
      setTrackPosition(currentIndex, false);
    });

    createDots();
    setTrackPosition(0, false);

    // Auto-advance carousel continuously forward without rewinding
    let autoSlideTimer = setInterval(nextSlide, 4000);

    const carouselWrapper = document.querySelector('.carousel-wrapper');
    if (carouselWrapper) {
      carouselWrapper.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
      carouselWrapper.addEventListener('mouseleave', () => {
        clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(nextSlide, 4000);
      });
    }

    // Touch Swipe Support for Mobile Devices
    let touchStartX = 0;
    let touchEndX = 0;

    carouselTrack.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchEndX = touchStartX;
        clearInterval(autoSlideTimer);
      }
    }, { passive: true });

    carouselTrack.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        touchEndX = e.touches[0].clientX;
      }
    }, { passive: true });

    carouselTrack.addEventListener('touchend', () => {
      const swipeDistance = touchStartX - touchEndX;
      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      clearInterval(autoSlideTimer);
      autoSlideTimer = setInterval(nextSlide, 4000);
    });

    // Attach click listeners to all slides (including cloned ones) for details popup
    const bindModalClicks = () => {
      const openDetailBtns = carouselTrack.querySelectorAll('.js-open-detail-modal');
      openDetailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const detailId = btn.dataset.detailId;
          const data = detailDataStore[detailId];

          if (data && detailModal) {
            const categoryEl = document.getElementById('detailModalCategory');
            const titleEl = document.getElementById('detailModalTitle');
            const iconEl = document.getElementById('detailModalIcon');
            const descEl = document.getElementById('detailModalDesc');
            const listEl = document.getElementById('detailModalList');

            if (categoryEl) categoryEl.textContent = data.category;
            if (titleEl) titleEl.textContent = data.title;
            if (iconEl) iconEl.innerHTML = `<i class="fas ${data.icon}"></i>`;
            if (descEl) descEl.textContent = data.desc;

            if (listEl) {
              listEl.innerHTML = data.items
                .map(item => `<li><i class="fas fa-check"></i> <span>${item}</span></li>`)
                .join('');
            }

            detailModal.classList.add('active');
          }
        });
      });
    };

    bindModalClicks();
  }

  // 6. Demonstrative Google Reviews Carousel
  const googleReviewsViewport = document.getElementById('googleReviewsViewport');
  const googleReviewsTrack = document.getElementById('googleReviewsTrack');
  const googleReviewPrev = document.getElementById('googleReviewPrev');
  const googleReviewNext = document.getElementById('googleReviewNext');
  const googleReviewDots = document.getElementById('googleReviewDots');

  if (googleReviewsViewport && googleReviewsTrack && googleReviewPrev && googleReviewNext && googleReviewDots) {
    const reviewCards = Array.from(googleReviewsTrack.querySelectorAll('.google-review-card'));
    const reviewShell = googleReviewsViewport.closest('.google-reviews-glass');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reviewIndex = 0;
    let reviewTimer = null;
    let reviewResizeTimer = null;

    const visibleReviews = () => {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 900) return 2;
      return 3;
    };

    const maxReviewIndex = () => Math.max(0, reviewCards.length - visibleReviews());

    const updateReviewCards = () => {
      const visibleCount = visibleReviews();
      reviewCards.forEach((card, index) => {
        const isVisible = index >= reviewIndex && index < reviewIndex + visibleCount;
        card.setAttribute('aria-hidden', String(!isVisible));
      });

      Array.from(googleReviewDots.children).forEach((dot, index) => {
        dot.classList.toggle('active', index === reviewIndex);
        dot.setAttribute('aria-current', index === reviewIndex ? 'true' : 'false');
      });
    };

    const goToReview = (index, animated = true) => {
      const maxIndex = maxReviewIndex();
      reviewIndex = Math.min(Math.max(index, 0), maxIndex);
      const targetCard = reviewCards[reviewIndex];
      if (!targetCard) return;

      googleReviewsViewport.scrollTo({
        left: targetCard.offsetLeft - googleReviewsTrack.offsetLeft,
        behavior: animated && !reduceMotion.matches ? 'smooth' : 'auto'
      });
      updateReviewCards();
    };

    const createReviewDots = () => {
      googleReviewDots.innerHTML = '';
      for (let index = 0; index <= maxReviewIndex(); index++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Mostrar grupo de avaliações ${index + 1}`);
        dot.addEventListener('click', () => goToReview(index));
        googleReviewDots.appendChild(dot);
      }
      updateReviewCards();
    };

    const nextReview = () => {
      goToReview(reviewIndex >= maxReviewIndex() ? 0 : reviewIndex + 1);
    };

    const previousReview = () => {
      goToReview(reviewIndex <= 0 ? maxReviewIndex() : reviewIndex - 1);
    };

    const stopReviewTimer = () => {
      if (reviewTimer) window.clearInterval(reviewTimer);
      reviewTimer = null;
    };

    const startReviewTimer = () => {
      stopReviewTimer();
      if (maxReviewIndex() > 0) {
        reviewTimer = window.setInterval(nextReview, 3500);
      }
    };

    googleReviewPrev.addEventListener('click', previousReview);
    googleReviewNext.addEventListener('click', nextReview);

    if (reviewShell) {
      reviewShell.addEventListener('mouseenter', stopReviewTimer);
      reviewShell.addEventListener('mouseleave', startReviewTimer);
      reviewShell.addEventListener('focusin', stopReviewTimer);
      reviewShell.addEventListener('focusout', (event) => {
        if (!reviewShell.contains(event.relatedTarget)) startReviewTimer();
      });
    }

    window.addEventListener('resize', () => {
      window.clearTimeout(reviewResizeTimer);
      reviewResizeTimer = window.setTimeout(() => {
        reviewIndex = Math.min(reviewIndex, maxReviewIndex());
        createReviewDots();
        goToReview(reviewIndex, false);
        startReviewTimer();
      }, 120);
    });

    createReviewDots();
    goToReview(0, false);
    startReviewTimer();
  }

  // ==========================================================================
  // FAST COURSE TRANSITION REFRESH/LOADING SCREEN
  // ==========================================================================
  const transitionOverlay = document.getElementById('courseTransitionOverlay');
  const transitionProgressBar = document.getElementById('transitionProgressBar');
  const transitionTimerCount = document.getElementById('transitionTimerCount');
  const transitionStatusText = document.getElementById('transitionStatusText');

  const courseLinks = document.querySelectorAll('a[href*="pages/index.html"]');

  courseLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetUrl = link.getAttribute('href');

      if (!transitionOverlay) {
        window.location.href = targetUrl;
        return;
      }

      // Show Transition Overlay
      transitionOverlay.classList.add('active');
      transitionOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      const totalTimeMs = 1200;
      const intervalMs = 20;
      let elapsedTimeMs = 0;

      const statusMessages = [
        "Preparando a sua experiência de transformação...",
        "Entrando na Jornada da Libertação..."
      ];

      if (transitionTimerCount) transitionTimerCount.textContent = '1';
      if (transitionStatusText) transitionStatusText.textContent = statusMessages[0];

      const progressInterval = setInterval(() => {
        elapsedTimeMs += intervalMs;
        const percentage = Math.min(100, (elapsedTimeMs / totalTimeMs) * 100);
        
        if (transitionProgressBar) {
          transitionProgressBar.style.width = percentage.toFixed(1) + '%';
        }

        if (elapsedTimeMs >= 600 && transitionStatusText) {
          transitionStatusText.textContent = statusMessages[1];
        }

        if (elapsedTimeMs >= totalTimeMs) {
          clearInterval(progressInterval);
          window.location.href = targetUrl;
        }
      }, intervalMs);
    });
  });

  // 10. Cookie Consent Banner & Privacy Policy Trigger
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAcceptBtn = document.getElementById('cookieAcceptBtn');
  const cookiePolicyBtn = document.getElementById('cookiePolicyBtn');
  const COOKIE_CONSENT_KEY = 'raquel_vieira_cookie_consent';

  if (cookieBanner) {
    const isConsentGiven = localStorage.getItem(COOKIE_CONSENT_KEY);

    // If not accepted yet, reveal the banner smoothly after 600ms
    if (!isConsentGiven) {
      setTimeout(() => {
        cookieBanner.classList.add('active');
      }, 600);
    }

    if (cookieAcceptBtn) {
      cookieAcceptBtn.addEventListener('click', () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
        cookieBanner.classList.remove('active');
      });
    }

    if (cookiePolicyBtn && privacyModal) {
      cookiePolicyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.add('active');
      });
    }
  }
});


