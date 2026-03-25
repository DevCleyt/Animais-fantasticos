export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAtual = dataAgora.getHours();

  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const semanaAberto = diasSemana.includes(diaAgora);

  const horarioAberto =
    horarioAtual >= horarioSemana[0] && horarioAtual < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
