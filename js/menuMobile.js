export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="suave"] .btn-mobile');
  const menuList = document.querySelector('[data-menu="suave"] ul');

  if (menuButton && menuList) {
    function toggleMenu(event) {
      event.preventDefault();
      const menu = menuButton.closest(".menu");
      menu.classList.toggle("ativo");

      const isExpanded = menu.classList.contains("ativo");
      menuButton.setAttribute("aria-expanded", isExpanded);
      menuButton.setAttribute(
        "aria-label",
        isExpanded ? "Fechar Menu" : "Abrir Menu",
      );
    }

    menuButton.addEventListener("click", toggleMenu);

    // Fechar menu ao clicar em um link
    const menuLinks = menuList.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const menu = menuButton.closest(".menu");
        menu.classList.remove("ativo");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir Menu");
      });
    });

    // Fechar menu ao clicar fora (opcional, mas útil)
    document.addEventListener("click", (event) => {
      const menu = menuButton.closest(".menu");
      if (!menu.contains(event.target) && menu.classList.contains("ativo")) {
        menu.classList.remove("ativo");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir Menu");
      }
    });
  }
}
