// MOBILE NAV TOGGLE
const header = document.getElementById("site-header");
const navToggle = document.querySelector(".nav-toggle");

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
}

// NEWS SLIDER (HOME)
const newsItems = document.querySelectorAll(".news-item");
const dots = document.querySelectorAll(".dot");
let currentNews = 0;

function showNews(index) {
  if (!newsItems.length) return;
  newsItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  currentNews = index;
}

if (newsItems.length && dots.length) {
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = Number(dot.dataset.index);
      showNews(idx);
    });
  });

  setInterval(() => {
    const next = (currentNews + 1) % newsItems.length;
    showNews(next);
  }, 6000);
}

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const name = contactForm.elements["name"].value.trim();
    const email = contactForm.elements["email"].value.trim();
    const message = contactForm.elements["message"].value.trim();

    if (!name || !email || !message) {
      alert("Please fill out your name, email, and message before submitting.");
      e.preventDefault();
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    } else {
      alert("Thank you! This is a sample form — you can customize what happens after submit.");
    }
  });
}

// SCROLL TO TOP
const scrollBtn = document.getElementById("scrollup");
if (scrollBtn) {
  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// SCROLL ANIMATIONS
const animatedSections = document.querySelectorAll(".animate-on-scroll");

if ("IntersectionObserver" in window && animatedSections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedSections.forEach((el) => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('cos-courses-modal');
  var openBtn = document.getElementById('cos-courses-btn');
  var navBtn  = document.getElementById('cos-courses-nav'); // optional if you added it
  var closeBtn = modal.querySelector('.cos-modal-close');
  var backdrop = modal.querySelector('.cos-modal-backdrop');

  function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.add('open');
  }

  function closeModal() {
    modal.classList.remove('open');
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (navBtn)  navBtn.addEventListener('click', openModal);

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Close on ESC key
  document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});

