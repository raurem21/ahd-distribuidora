/**
 * ============================================================
 * AHD DISTRIBUIDORA — productos.js
 * Lógica: Renderizar grid de productos, filtros, modal con
 * carrusel de imágenes y especificaciones.
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {

  // ─── REFERENCIAS DOM ────────────────────────────────────────
  const grid        = document.getElementById("products-grid");
  const countEl     = document.getElementById("products-count");
  const filterBtns  = document.querySelectorAll(".filter-btn");
  const modalOverlay = document.getElementById("product-modal");
  const modalClose  = document.getElementById("modal-close");

  if (!grid) return; // salir si no estamos en la página de productos

  let activeFilter = "todos";

  // ─── RENDERIZAR GRID ────────────────────────────────────────
  function renderGrid(filter = "todos") {
    const filtered = filter === "todos"
      ? productos
      : productos.filter(p => {
          if (filter === "hombre")  return p.genero === "Hombre";
          if (filter === "mujer")   return p.genero === "Mujer";
          if (filter === "unisex")  return p.genero === "Unisex";
          if (filter === "ninos")   return p.genero === "Niño";
          if (filter === "acetato") return p.material.toLowerCase() === "acetato";
          if (filter === "metal")   return ["metal", "titanio"].includes(p.material.toLowerCase());
          if (filter === "tr90")    return p.material.toUpperCase() === "TR-90";
          return true;
        });

    if (countEl) countEl.textContent = `${filtered.length} modelos`;

    grid.innerHTML = filtered.map((p, i) => `
      <div class="product-card reveal" style="animation-delay: ${(i % 6) * 0.06}s"
           data-id="${p.id}" role="button" tabindex="0"
           aria-label="Ver detalles de ${p.modelo}">
        <div class="product-card-image">
          <img src="${p.imagen1}" alt="Armazón ${p.modelo}" loading="lazy"
               onerror="this.src='images/productos/placeholder_acetato.jpg'">
          <span class="product-badge ${p.disponible ? 'badge-available' : 'badge-unavailable'}">
            ${p.disponible ? 'Disponible' : 'Agotado'}
          </span>
          <div class="product-card-overlay">
            <span>👁 Ver detalles</span>
          </div>
        </div>
        <div class="product-card-body">
          <div class="product-modelo">${p.modelo}</div>
          <div class="product-name">${p.tipo}</div>
          <div class="product-meta">
            <span class="product-tag">${p.material}</span>
            <span class="product-tag">${p.color}</span>
            <span class="product-tag">${p.genero}</span>
          </div>
        </div>
      </div>
    `).join("");

    // Añadir eventos click a las cards
    grid.querySelectorAll(".product-card").forEach(card => {
      card.addEventListener("click", () => openModal(parseInt(card.dataset.id)));
      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") openModal(parseInt(card.dataset.id));
      });
    });

    // Volver a activar scroll reveal
    grid.querySelectorAll(".reveal").forEach(el => {
      const revealObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.10 }
      );
      revealObserver.observe(el);
    });
  }

  // ─── FILTROS ────────────────────────────────────────────────
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      renderGrid(activeFilter);
    });
  });

  // ─── MODAL ──────────────────────────────────────────────────
  let modalCarouselIdx = 0;

  function openModal(productId) {
    const p = productos.find(pr => pr.id === productId);
    if (!p || !modalOverlay) return;

    modalCarouselIdx = 0;

    // Imagen carrusel
    const slides = modalOverlay.querySelector(".modal-slides");
    if (slides) {
      slides.innerHTML = `
        <div class="modal-slide">
          <img src="${p.imagen1}" alt="${p.modelo} - imagen 1"
               onerror="this.src='images/productos/placeholder_acetato.jpg'">
        </div>
        <div class="modal-slide">
          <img src="${p.imagen2}" alt="${p.modelo} - imagen 2"
               onerror="this.src='images/productos/placeholder_acetato.jpg'">
        </div>
      `;
      slides.style.transform = "translateX(0)";
    }

    // Thumbnails
    const thumbsEl = modalOverlay.querySelector(".modal-thumbnails");
    if (thumbsEl) {
      thumbsEl.innerHTML = `
        <div class="modal-thumb active" data-thumb="0">
          <img src="${p.imagen1}" alt="thumb 1" onerror="this.src='images/productos/placeholder_acetato.jpg'">
        </div>
        <div class="modal-thumb" data-thumb="1">
          <img src="${p.imagen2}" alt="thumb 2" onerror="this.src='images/productos/placeholder_acetato.jpg'">
        </div>
      `;
      thumbsEl.querySelectorAll(".modal-thumb").forEach(thumb => {
        thumb.addEventListener("click", () => {
          const idx = parseInt(thumb.dataset.thumb);
          goModalSlide(idx);
        });
      });
    }

    // Sidebar info
    const sidebar = modalOverlay.querySelector(".modal-sidebar");
    if (sidebar) {
      sidebar.innerHTML = `
        <div class="modal-header">
          <div class="modal-modelo">${p.modelo}</div>
          <div class="modal-nombre">${p.tipo}</div>
          <div class="modal-tipo">${p.material} · ${p.color}</div>
          <span class="modal-status ${p.disponible ? 'disponible' : 'agotado'}">
            <span class="status-dot"></span>
            ${p.disponible ? 'Disponible' : 'Agotado'}
          </span>
        </div>

        <div class="modal-description">${p.descripcion}</div>

        <div>
          <div class="modal-specs-title">Especificaciones</div>
          <div class="modal-specs-grid">
            <div class="spec-row">
              <div class="spec-label">Modelo</div>
              <div class="spec-value">${p.modelo}</div>
            </div>
            <div class="spec-row">
              <div class="spec-label">Material</div>
              <div class="spec-value">${p.material}</div>
            </div>
            <div class="spec-row">
              <div class="spec-label">Color</div>
              <div class="spec-value">${p.color}</div>
            </div>
            <div class="spec-row">
              <div class="spec-label">Género</div>
              <div class="spec-value">${p.genero}</div>
            </div>
            <div class="spec-row">
              <div class="spec-label">Medidas</div>
              <div class="spec-value">${p.medidas} mm</div>
            </div>
            <div class="spec-row">
              <div class="spec-label">Ref. interna</div>
              <div class="spec-value">${p.slug}</div>
            </div>
          </div>
        </div>

        <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage + ' Modelo: ' + p.modelo)}"
           target="_blank" rel="noopener noreferrer" class="modal-whatsapp-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Consultar por WhatsApp
        </a>
      `;
    }

    // Abrir modal
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";

    // Arrows del modal carousel
    const prevBtn = modalOverlay.querySelector(".modal-carousel-prev");
    const nextBtn = modalOverlay.querySelector(".modal-carousel-next");
    if (prevBtn) prevBtn.onclick = () => goModalSlide(modalCarouselIdx - 1);
    if (nextBtn) nextBtn.onclick = () => goModalSlide(modalCarouselIdx + 1);
  }

  function goModalSlide(idx) {
    const totalSlides = 2;
    if (idx < 0) idx = totalSlides - 1;
    if (idx >= totalSlides) idx = 0;

    modalCarouselIdx = idx;

    const slides = modalOverlay?.querySelector(".modal-slides");
    if (slides) slides.style.transform = `translateX(-${idx * 100}%)`;

    const thumbs = modalOverlay?.querySelectorAll(".modal-thumb");
    thumbs?.forEach((t, i) => t.classList.toggle("active", i === idx));
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  // Cerrar modal con botón X
  modalClose?.addEventListener("click", closeModal);

  // Cerrar modal al hacer clic fuera
  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Cerrar modal con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // ─── RENDERIZADO INICIAL ─────────────────────────────────────
  renderGrid();

});
