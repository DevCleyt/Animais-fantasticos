const url = "https://blockchain.info/ticker";

export default async function initBitcoin() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados");
    }

    const dados = await response.json();

    const valorOriginal = dados.BRL.buy;

    
    const valorDoacao = valorOriginal / 10000;

    const valorFormatado = valorDoacao.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    const btcPreco = document.querySelector(".btc-preco");

    btcPreco.textContent = valorFormatado;

  } catch (erro) {
    console.log(erro);
  }
}