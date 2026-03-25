export default function initAccordion() {
  const accordionList = document.querySelectorAll("[data-anime='acordion'] dt");

  if (accordionList.length) {
    accordionList.forEach((item) => {
      item.addEventListener("click", function () {
        this.classList.toggle("ativo");
        this.nextElementSibling.classList.toggle("ativo");
      });
    });
  }
}
