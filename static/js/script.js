let currentLang = "en";
let projectsExpanded = false;

function switchLang(lang) {
  currentLang = lang;
  document
    .querySelectorAll(".lang-btn")
    .forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
  const themeBtn = document.querySelector(".theme-btn");

  if (document.body.classList.contains("light-theme")) {
    themeBtn.textContent = "🌙";
  } else {
    themeBtn.textContent = "☀";
  }
}

function toggleProjects() {
  const hiddenCards = document.querySelectorAll(".project-card.hidden");
  const btn = document.querySelector(".view-more-btn");

  if (!projectsExpanded) {
    hiddenCards.forEach(card => card.classList.remove("hidden"));
    btn.textContent = currentLang === "en" ? "VIEW LESS" : "VOIR MOINS";
    projectsExpanded = true;
  } else {
    hiddenCards.forEach(card => card.classList.add("hidden"));
    btn.textContent = currentLang === "en" ? "VIEW MORE" : "VOIR PLUS";
    projectsExpanded = false;
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  }
}

function downloadCV(event) {
  event.preventDefault();
  alert(
    currentLang === "en"
      ? "CV download feature coming soon!"
      : "Téléchargement du CV bientôt disponible !"
  );
}

window.addEventListener("scroll", () => {
  const btn = document.querySelector(".scroll-to-top");
  if (window.pageYOffset > 500) {
    btn.classList.add("visible");
  } else {
    btn.classList.remove("visible");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Gestion des liens d'ancrage (uniquement ceux qui commencent par #)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (href && href !== "#") {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
