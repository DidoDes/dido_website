const translations = {
  en: {
    name: "Andre Ostheimer",
    intro: "Motion designer and creative technologist working with branding, motion systems, interactive visuals and real-time graphics.",
    projects: "Selected Work",
    p1: "Interactive Motion System",
    experience: "Focus",
    f1: "Motion Design & Branding",
    f2: "Real-Time Visuals",
    f3: "Creative Coding",
    contact: "Contact"
  },

  pt: {
    name: "Andre Ostheimer",
    intro: "Motion designer e tecnólogo criativo trabalhando com branding, motion systems, visuais interativos e gráficos em tempo real.",
    projects: "Trabalhos Selecionados",
    p1: "Sistema de Motion Interativo",
    experience: "Foco",
    f1: "Motion Design & Branding",
    f2: "Visuais em Tempo Real",
    f3: "Creative Coding",
    contact: "Contato"
  }
};

const buttons = document.querySelectorAll(".lang-switch button");
const elements = document.querySelectorAll("[data-i18n]");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    elements.forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = translations[lang][key];
    });
  });
});
