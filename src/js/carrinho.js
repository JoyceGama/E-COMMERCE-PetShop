const cart = {
  produtos: [],
};

function valorTotal() {
  const somaTotal = cart.produtos.reduce(
    (total, preco) => total + preco.preco,
    0
  );

  return somaTotal;
}
