document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-menu");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      nav.classList.remove("active");
    }
  });

  /* REVEAL ANIMATION */

  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {

    reveals.forEach((element) => {

      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }

    });

  }

  window.addEventListener("scroll", revealOnScroll);

  /* ejecutar una vez al cargar la página */
  revealOnScroll();

  /* FORMULARIO ADOPTA */

  const form = document.getElementById("adoptForm");
  const success = document.getElementById("formSuccess");

  if (form) {

    form.addEventListener("submit", function(e) {

      e.preventDefault();

      if (success) {
        success.style.display = "block";
      }

      form.reset();

    });

  }

  /* FORMULARIO CONTACTO */

  const contactForm = document.getElementById("contactForm");
  const contactSuccess = document.getElementById("contactSuccess");

  if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

      e.preventDefault();

      if (contactSuccess) {
        contactSuccess.style.display = "block";
      }

      contactForm.reset();

    });

  }

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }

  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  }); 
});

/* footer year */

document.getElementById("year").textContent = new Date().getFullYear();