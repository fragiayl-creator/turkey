/**
 * Turkey in Disguise - Vanilla JavaScript
 * Mobile-First Landing Page for Free Printable Coloring Pages
 */

(function () {
  'use strict';

  // Primary download tracking link specified by user
  const DOWNLOAD_URL = 'https://trkoffer.net/fl/3prd1';
  const ZIP_FALLBACK = 'downloads/turkey-in-disguise-all.zip';

  // State
  let activeFilter = 'all';
  let currentCardIndex = 0;
  let visibleCards = [];

  // DOM Elements
  const galleryGrid = document.getElementById('gallery-grid');
  const cards = Array.from(document.querySelectorAll('.disguise-card'));
  const filterChips = Array.from(document.querySelectorAll('.filter-chip'));
  
  // Lightbox Elements
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxDownloadLink = document.getElementById('lightbox-download-link');
  const lightboxPinterestBtn = document.getElementById('lightbox-pinterest-btn');

  // FAQ Elements
  const faqQuestions = Array.from(document.querySelectorAll('.faq-question'));

  // Newsletter Elements
  const newsletterForm = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email-input');
  const formFeedback = document.getElementById('form-feedback');

  // Download Trigger Buttons
  const downloadTriggers = Array.from(document.querySelectorAll('.download-trigger'));

  /* ==========================================================================
     1. Initialize & Filter System
     ========================================================================== */
  function updateVisibleCards() {
    visibleCards = cards.filter(card => {
      if (activeFilter === 'all') return true;
      return card.dataset.category === activeFilter;
    });
  }

  function applyFilter(category) {
    activeFilter = category;
    
    // Update chip buttons active states
    filterChips.forEach(chip => {
      const isSelected = chip.dataset.filter === category;
      chip.classList.toggle('active', isSelected);
      chip.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    // Animate & toggle cards
    cards.forEach(card => {
      const match = category === 'all' || card.dataset.category === category;
      if (match) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        card.style.display = 'none';
      }
    });

    updateVisibleCards();
  }

  // Filter click events
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      applyFilter(chip.dataset.filter);
    });
  });

  /* ==========================================================================
     2. Lightbox Modal Functionality
     ========================================================================== */
  function openLightbox(cardElement) {
    updateVisibleCards();
    currentCardIndex = visibleCards.indexOf(cardElement);
    if (currentCardIndex === -1) currentCardIndex = 0;

    renderLightboxContent();
    lightboxModal.classList.add('is-open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent background scrolling

    lightboxClose.focus();
  }

  function closeLightbox() {
    lightboxModal.classList.remove('is-open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderLightboxContent() {
    const card = visibleCards[currentCardIndex];
    if (!card) return;

    const imgEl = card.querySelector('.card-img');
    const titleEl = card.querySelector('.card-title');
    const catEl = card.querySelector('.card-category');
    const descEl = card.querySelector('.card-desc');
    const id = card.dataset.id;

    const imgSrc = imgEl.getAttribute('src');
    const title = titleEl ? titleEl.textContent : 'Turkey Disguise';
    const category = catEl ? catEl.textContent : 'Coloring Page';
    const desc = descEl ? descEl.textContent : '';

    lightboxImg.src = imgSrc;
    lightboxImg.alt = imgEl.alt;
    lightboxTitle.textContent = title;
    lightboxCategory.textContent = category;
    lightboxDesc.textContent = desc;
    lightboxCounter.textContent = `Design ${currentCardIndex + 1} of ${visibleCards.length}`;

    // Update Download Link
    lightboxDownloadLink.href = DOWNLOAD_URL;
    lightboxDownloadLink.setAttribute('data-card-id', id);

    // Update Pinterest Link with absolute media path
    const pageUrl = encodeURIComponent(window.location.href || DOWNLOAD_URL);
    const mediaUrl = encodeURIComponent(new URL(imgSrc, window.location.href).href);
    const pinDesc = encodeURIComponent(`Free Printable Coloring Page: Turkey Disguised as a ${title}! Fun Thanksgiving kids craft.`);
    lightboxPinterestBtn.href = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(DOWNLOAD_URL)}&media=${mediaUrl}&description=${pinDesc}`;
  }

  function nextLightbox() {
    if (visibleCards.length <= 1) return;
    currentCardIndex = (currentCardIndex + 1) % visibleCards.length;
    renderLightboxContent();
  }

  function prevLightbox() {
    if (visibleCards.length <= 1) return;
    currentCardIndex = (currentCardIndex - 1 + visibleCards.length) % visibleCards.length;
    renderLightboxContent();
  }

  // Card click triggers
  cards.forEach(card => {
    const zoomOverlay = card.querySelector('.card-zoom-overlay');
    const cardImg = card.querySelector('.card-img');

    if (zoomOverlay) {
      zoomOverlay.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(card);
      });
    }

    if (cardImg) {
      cardImg.addEventListener('click', (e) => {
        // Only trigger if not clicking Pinterest button
        if (!e.target.closest('.btn-pinterest-card')) {
          openLightbox(card);
        }
      });
    }
  });

  // Lightbox controls
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextLightbox();
    } else if (e.key === 'ArrowLeft') {
      prevLightbox();
    }
  });

  /* ==========================================================================
     3. FAQ Accordion Toggle
     ========================================================================== */
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const targetId = btn.getAttribute('aria-controls');
      const answer = document.getElementById(targetId);

      // Close other accordion items for clean accordion UX
      faqQuestions.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherId = otherBtn.getAttribute('aria-controls');
          const otherAns = document.getElementById(otherId);
          if (otherAns) otherAns.hidden = true;
        }
      });

      // Toggle current
      btn.setAttribute('aria-expanded', !expanded);
      if (answer) {
        answer.hidden = expanded;
      }
    });
  });

  /* ==========================================================================
     4. Optional Email Capture
     ========================================================================== */
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();

      if (!email || !email.includes('@')) {
        formFeedback.textContent = 'Please enter a valid email address.';
        formFeedback.className = 'form-feedback error';
        return;
      }

      // Friendly UI feedback (non-blocking)
      formFeedback.textContent = '🎉 You are all set! Welcome to our monthly free printables club.';
      formFeedback.className = 'form-feedback success';
      emailInput.value = '';

      // Re-enable after delay
      setTimeout(() => {
        formFeedback.textContent = '';
      }, 7000);
    });
  }

  /* ==========================================================================
     5. Download Clicks & Analytics Hook
     ========================================================================== */
  downloadTriggers.forEach(btn => {
    btn.addEventListener('click', function (e) {
      // Ensure target link opens smoothly
      const downloadType = this.dataset.downloadType || 'single';
      const pdf = this.dataset.pdf || '';
      
      // Console log or future custom analytics event hook
      if (window.console && console.log) {
        console.log(`[Download Event] type: ${downloadType}, target: ${DOWNLOAD_URL}, file: ${pdf}`);
      }
    });
  });

  /* ==========================================================================
     6. Dynamic Pinterest Share Button URLs
     ========================================================================== */
  function updatePinterestShareLinks() {
    const currentOrigin = window.location.origin;
    cards.forEach(card => {
      const pinBtn = card.querySelector('.btn-pinterest-card');
      const img = card.querySelector('.card-img');
      const title = card.querySelector('.card-title');
      if (pinBtn && img && title) {
        const fullImgUrl = img.src.startsWith('http') ? img.src : `${currentOrigin}/${img.getAttribute('src')}`;
        const pinUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(DOWNLOAD_URL)}&media=${encodeURIComponent(fullImgUrl)}&description=${encodeURIComponent('Free Printable Turkey in Disguise Coloring Page: ' + title.textContent + ' Turkey! Download free PDF.')}`;
        pinBtn.href = pinUrl;
      }
    });
  }

  // Initial setup
  updateVisibleCards();
  updatePinterestShareLinks();

})();
