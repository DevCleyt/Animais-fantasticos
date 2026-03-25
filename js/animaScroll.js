export default function animaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight * 0.6;

    if (sectionTop < windowHeight) {
      section.classList.add("ativo");
    }
    else if(section.classList.contains("ativo")){
      section.classList.remove('ativo')
    }
  });
  window.addEventListener("scroll", animaScroll);
}

