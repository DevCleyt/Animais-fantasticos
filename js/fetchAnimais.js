export default function initFetchAnimais() {}

const url = "./animaisApi.json";
async function fetchAnimais() {
  const numerosAnimais = document.querySelector(".numeros-grid");
  try {
    const responseAnimais = await fetch(url);
    if (!responseAnimais.ok) {
      throw new Error("Erro ao buscar dados");
    }
    const dadosAnimais = await responseAnimais.json();
    dadosAnimais.map((animal) => {
      const divAnimal = document.createElement("div");
      divAnimal.classList.add("numero-animal");
      divAnimal.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>
`;
      numerosAnimais.appendChild(divAnimal);
    });
  } catch (erro) {
    console.log("Erro");
  }
}
fetchAnimais();
