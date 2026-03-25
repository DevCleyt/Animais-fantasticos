const url = "https://blockchain.info/ticker";

export default async function initBitcoin() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados");
    }

    const dados = await response.json();

    const dadosCompra = {
      compra: dados.BRL.buy.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"}
    )};

    const btcPreco = document.querySelector(".btc-preco");

    Object.entries(dadosCompra).forEach(([, valor]) => {
      btcPreco.textContent = `R$ ${valor}`;
    });

  } catch (erro) {
    console.log(erro);
  }
}