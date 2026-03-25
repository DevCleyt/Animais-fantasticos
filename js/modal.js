export default function initModal() {
  const abrirModal = document.querySelector("#abrir");
  const btnFechar = document.querySelector(".fechar");
  const modal = document.querySelector(".modal-container");
  const btnInput = document.querySelector("#btnInput");

  if (!abrirModal || !btnFechar || !modal) return;

  function abrir(e) {
    e.preventDefault(); // impede o scroll da âncora
    modal.classList.add("ativo");
    document.body.classList.add("modal-aberto");

    btnInput.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }

  function fechar() {
    modal.classList.remove("ativo");
    document.body.classList.remove("modal-aberto");
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      fechar();
    }
  });
  abrirModal.addEventListener("click", abrir);
  btnFechar.addEventListener("click", fechar);
}
