async function loadEditableContent() {
  try {
    const response = await fetch(`content.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;

    const content = await response.json();

    Object.entries(content).forEach(([key, value]) => {
      document.querySelectorAll(`[data-i18n="${key}"]`).forEach((element) => {
        element.textContent = value;
      });

      document.querySelectorAll(`[data-i18n-html="${key}"]`).forEach((element) => {
        element.innerHTML = value;
      });
    });
  } catch (error) {
    console.warn("content.json was not loaded; using the text inside index.html.", error);
  }
}

loadEditableContent();
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const languageToggle = document.querySelector(".lang-toggle");

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    document.querySelectorAll(".lang-option").forEach((item) => {
      item.classList.toggle("is-active");
    });
  });
}

