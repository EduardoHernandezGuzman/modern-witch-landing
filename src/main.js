document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const darkModeButton = document.getElementById("dark-mode-button");
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const yearSpan = document.getElementById("current-year");
  const bottomNavLinks = document.querySelectorAll("[data-nav-link]");
  const sections = document.querySelectorAll("section[id]");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  if (darkModeButton) {
    darkModeButton.addEventListener("click", () => {
      body.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        body.classList.contains("dark") ? "dark" : "light"
      );
    });
  }

  const setActiveNavLink = () => {
    let currentId = "inicio";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      if (window.scrollY >= sectionTop) {
        currentId = section.id;
      }
    });

    bottomNavLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  };

  setActiveNavLink();
  window.addEventListener("scroll", setActiveNavLink);

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      formStatus.className = "status-message";

      if (!name || !email || !message) {
        formStatus.textContent = "Por favor, completa todos los campos.";
        formStatus.classList.add("error");
        return;
      }

      const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!emailIsValid) {
        formStatus.textContent = "Introduce un email válido.";
        formStatus.classList.add("error");
        return;
      }

      formStatus.textContent =
        "Tu mensaje se ha validado correctamente. Más adelante podrás conectarlo con Formspree, Netlify Forms o tu backend.";
      formStatus.classList.add("success");

      contactForm.reset();
    });
  }
});