export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((numero) => {
      const total = +numero.textContent;
      const incremento = total / 100;

      let start = 0;
      const timer = setInterval(() => {
        start = Math.floor(start + incremento);
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 50 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const oberserTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  observer.observe(oberserTarget, { attributes: true });
}
