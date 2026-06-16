(function () {
  const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/k.s.ford/",
    facebook: "https://www.facebook.com/KeithSalterFordAuthor/",
    // TODO: Verify Threads URL before final client delivery.
    threads: "https://www.threads.net/@k.s.ford",
    email: null
  };

  const ABOUT_CAROUSEL_SLIDES = [
    {
      label: "FEATURED ESSAY",
      title: "Behind The Woman Who Loves",
      description: "Discover the real-life inspirations behind my latest thriller, from the abandoned manor houses of Kent to the journals of forgotten Victorian detectives.",
      image: "/assets/ks-ford/promo/woman-who-loves-letter-revelation-reckoning.png"
    },
    {
      label: "CRAFT",
      title: "Every Betrayal Leaves a Mark",
      description: "How physical locations in my books act as living characters with their own motivations.",
      image: "/assets/ks-ford/promo/woman-who-loves-betrayal-leaves-a-mark.png"
    },
    {
      label: "LITERARY",
      title: "A Poisoned Cup, A Silent Goodbye",
      description: "The subtle art of the literary twist and why the ending you expect is rarely the one you get.",
      image: "/assets/ks-ford/promo/woman-who-loves-poisoned-cup-silent-goodbye.png"
    }
  ];

  let modal;
  let lastFocusedElement;

  function normalisePath(path) {
    if (!path) return "/";
    const withoutHash = path.split("#")[0] || "/";
    return withoutHash.endsWith("/") ? withoutHash : `${withoutHash}/`;
  }

  function createBookModal() {
    const wrapper = document.createElement("div");
    wrapper.className = "ks-book-modal";
    wrapper.setAttribute("role", "dialog");
    wrapper.setAttribute("aria-modal", "true");
    wrapper.setAttribute("aria-labelledby", "ks-book-modal-title");
    wrapper.hidden = true;
    wrapper.innerHTML = `
      <div class="ks-book-modal__backdrop" data-modal-close></div>
      <div class="ks-book-modal__panel" role="document">
        <button class="ks-book-modal__close" type="button" data-modal-close aria-label="Close book preview">
          <span class="material-symbols-outlined" aria-hidden="true">close</span>
        </button>
        <div class="ks-book-modal__content">
          <div class="ks-book-modal__cover-wrap">
            <img class="ks-book-modal__cover" alt="" data-modal-cover>
          </div>
          <div>
            <span class="ks-book-modal__eyebrow" data-modal-tag></span>
            <h2 class="ks-book-modal__title" id="ks-book-modal-title" data-modal-title></h2>
            <p class="ks-book-modal__description" data-modal-description></p>
            <div class="ks-book-modal__links" data-modal-links></div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(wrapper);
    return wrapper;
  }

  function getModal() {
    if (!modal) modal = createBookModal();
    return modal;
  }

  function closeBookModal() {
    if (!modal || modal.hidden) return;
    modal.classList.remove("is-visible");
    document.body.classList.remove("ks-modal-open");
    window.setTimeout(() => {
      modal.hidden = true;
      if (lastFocusedElement && document.contains(lastFocusedElement)) {
        lastFocusedElement.focus();
      }
    }, 180);
  }

  function openBookModal(bookId, trigger) {
    const books = window.KSFordBooks || {};
    const book = books[bookId];
    if (!book) return;

    const activeModal = getModal();
    const triggerImage = trigger ? trigger.querySelector("img") : null;
    const image = book.image || (triggerImage ? triggerImage.src : "");

    activeModal.querySelector("[data-modal-cover]").src = image;
    activeModal.querySelector("[data-modal-cover]").alt = `${book.title} cover`;
    activeModal.querySelector("[data-modal-tag]").textContent = book.tag || "";
    activeModal.querySelector("[data-modal-title]").textContent = book.title;
    activeModal.querySelector("[data-modal-description]").textContent = book.description || "";

    const links = activeModal.querySelector("[data-modal-links]");
    links.innerHTML = "";
    (book.links || []).forEach((link) => {
      if (!link.url) return;
      const anchor = document.createElement("a");
      anchor.className = "ks-book-modal__link book-link-pill";
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noopener";
      anchor.textContent = link.label;
      links.appendChild(anchor);
    });

    lastFocusedElement = document.activeElement;
    activeModal.hidden = false;
    document.body.classList.add("ks-modal-open");
    window.requestAnimationFrame(() => {
      activeModal.classList.add("is-visible");
      const closeButton = activeModal.querySelector("[data-modal-close]");
      if (closeButton) closeButton.focus();
    });
  }

  function wireBookTriggers() {
    document.querySelectorAll("[data-book-id]").forEach((trigger) => {
      const isNativeInteractive = trigger.matches("a, button");
      if (!isNativeInteractive) {
        trigger.setAttribute("role", "button");
        trigger.setAttribute("tabindex", "0");
      }
      if (!trigger.getAttribute("aria-label")) {
        const book = (window.KSFordBooks || {})[trigger.dataset.bookId];
        if (book) trigger.setAttribute("aria-label", `Preview ${book.title}`);
      }
    });

    document.addEventListener("click", (event) => {
      const safePlaceholder = event.target.closest("[data-safe-placeholder]");
      if (safePlaceholder) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      const trigger = event.target.closest("[data-book-id]");
      if (!trigger) return;

      const nestedControl = event.target.closest("a, button");
      if (nestedControl && nestedControl !== trigger && !nestedControl.hasAttribute("data-book-id")) {
        return;
      }

      event.preventDefault();
      openBookModal(trigger.dataset.bookId, trigger);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeBookModal();

      const trigger = event.target.closest("[data-book-id]");
      if (!trigger || trigger.matches("a, button")) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openBookModal(trigger.dataset.bookId, trigger);
      }
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-modal-close]")) closeBookModal();
    });
  }

  function wireSocialLinks() {
    document.querySelectorAll("[data-social-link]").forEach((link) => {
      const key = link.dataset.socialLink;
      const url = SOCIAL_LINKS[key];
      if (url) {
        link.href = url;
        link.removeAttribute("aria-disabled");
        link.removeAttribute("data-safe-placeholder");
        if (!url.startsWith("mailto:")) {
          link.target = "_blank";
          link.rel = "noopener";
        }
        return;
      }

      link.href = "#";
      link.setAttribute("aria-disabled", "true");
      link.setAttribute("data-safe-placeholder", "");
      link.title = "TODO: add confirmed contact link";
    });
  }

  function wireMobileMenu() {
    const navShell = document.querySelector("header.fixed, nav.fixed");
    if (!navShell) return;

    const desktopLinks = Array.from(navShell.querySelectorAll(".hidden.md\\:flex a"));
    const toggle = navShell.querySelector(".md\\:hidden");
    if (!desktopLinks.length || !toggle) return;

    const menu = document.createElement("div");
    menu.className = "ks-mobile-menu md:hidden";
    menu.hidden = true;
    menu.innerHTML = `<div class="ks-mobile-menu__inner"></div>`;

    const currentPath = normalisePath(window.location.pathname);
    const menuInner = menu.querySelector(".ks-mobile-menu__inner");
    desktopLinks.forEach((link) => {
      const clone = link.cloneNode(true);
      const clonePath = normalisePath(new URL(clone.href, window.location.href).pathname);
      if (clonePath === currentPath) clone.setAttribute("aria-current", "page");
      menuInner.appendChild(clone);
    });

    navShell.insertAdjacentElement("afterend", menu);
    toggle.setAttribute("role", "button");
    toggle.setAttribute("tabindex", "0");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");

    const setOpen = (isOpen) => {
      menu.hidden = !isOpen;
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    };

    const toggleMenu = () => setOpen(menu.hidden);
    toggle.addEventListener("click", toggleMenu);
    toggle.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu();
      }
      if (event.key === "Escape") setOpen(false);
    });
    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });
  }

  function wireAboutCarousel() {
    const carousel = document.querySelector("[data-about-carousel]");
    if (!carousel) return;

    const image = carousel.querySelector("[data-carousel-image]");
    const label = carousel.querySelector("[data-carousel-label]");
    const title = carousel.querySelector("[data-carousel-title]");
    const description = carousel.querySelector("[data-carousel-description]");
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    if (!image || !label || !title || !description || !prev || !next) return;

    let index = 0;
    const render = () => {
      const slide = ABOUT_CAROUSEL_SLIDES[index];
      image.src = slide.image;
      image.alt = slide.title;
      label.textContent = slide.label;
      title.textContent = slide.title;
      description.textContent = slide.description;
    };

    prev.addEventListener("click", () => {
      index = (index - 1 + ABOUT_CAROUSEL_SLIDES.length) % ABOUT_CAROUSEL_SLIDES.length;
      render();
    });
    next.addEventListener("click", () => {
      index = (index + 1) % ABOUT_CAROUSEL_SLIDES.length;
      render();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    wireBookTriggers();
    wireSocialLinks();
    wireMobileMenu();
    wireAboutCarousel();
  });
})();
