/**
 * ============================================================
 * AHD DISTRIBUIDORA — main.js
 * Lógica general: Hero carousel, header scroll, WhatsApp btn,
 * scroll reveal, mobile nav.
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {

  // ─── HEADER SCROLL ──────────────────────────────────────────
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    });
  }

  // ─── MOBILE NAVIGATION ──────────────────────────────────────
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileNav.classList.toggle("open");
      document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // ─── HERO CAROUSEL ──────────────────────────────────────────
  const heroSlidesWrapper = document.querySelector(".hero-slides");
  const heroSlides        = document.querySelectorAll(".hero-slide");
  const heroDots          = document.querySelectorAll(".hero-dot");
  const heroPrev          = document.querySelector(".hero-arrow-prev");
  const heroNext          = document.querySelector(".hero-arrow-next");

  let currentSlide = 0;
  let heroTimer = null;
  const HERO_INTERVAL = 5000;

  function goToSlide(idx) {
    if (!heroSlidesWrapper || heroSlides.length === 0) return;

    // Wrap around
    if (idx < 0) idx = heroSlides.length - 1;
    if (idx >= heroSlides.length) idx = 0;

    // Remove active from previous
    heroSlides[currentSlide].classList.remove("active");
    if (heroDots[currentSlide]) heroDots[currentSlide].classList.remove("active");

    currentSlide = idx;

    // Apply transform
    heroSlidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Set active on current
    heroSlides[currentSlide].classList.add("active");
    if (heroDots[currentSlide]) heroDots[currentSlide].classList.add("active");
  }

  function startHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => goToSlide(currentSlide + 1), HERO_INTERVAL);
  }

  // Initialise
  if (heroSlides.length > 0) {
    heroSlides[0].classList.add("active");
    if (heroDots[0]) heroDots[0].classList.add("active");
    startHeroTimer();
  }

  heroPrev?.addEventListener("click", () => { goToSlide(currentSlide - 1); startHeroTimer(); });
  heroNext?.addEventListener("click", () => { goToSlide(currentSlide + 1); startHeroTimer(); });

  heroDots.forEach((dot, idx) => {
    dot.addEventListener("click", () => { goToSlide(idx); startHeroTimer(); });
  });

  // Swipe support for hero
  if (heroSlidesWrapper) {
    let touchStartX = 0;
    heroSlidesWrapper.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    heroSlidesWrapper.addEventListener("touchend", e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
        startHeroTimer();
      }
    }, { passive: true });
  }

  // ─── WHATSAPP FLOATING BUTTON ────────────────────────────────
  const waBtn  = document.querySelector(".whatsapp-btn");
  const footer = document.querySelector(".site-footer");

  if (waBtn && footer) {
    // Use IntersectionObserver to hide the button when footer is visible
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          waBtn.classList.toggle("hidden", entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(footer);
  }

  // ─── SCROLL REVEAL ──────────────────────────────────────────
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length > 0) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(el => revealObserver.observe(el));
  }

  // ─── CONTACT FORM ───────────────────────────────────────────
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector(".form-submit");
      const original = btn.textContent;
      btn.textContent = "✓ ¡Mensaje enviado!";
      btn.style.background = "linear-gradient(135deg, #1A9999, #16817a)";
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = "";
        contactForm.reset();
      }, 3000);
    });
  }

  // ─── ACTIVE NAV LINK ────────────────────────────────────────
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".header-nav a, .mobile-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

});
