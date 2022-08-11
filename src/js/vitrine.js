function createVitrine(products) {
  const vitrineList = document.getElementById("vitrine");
  vitrineList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const li = document.createElement("li");
    li.className = "cards";

    const img = document.createElement("img");
    img.src = `./src/img/pet/${products[i].img}`;
    img.className = "fotos";

    const spanProduto = document.createElement("span");
    spanProduto.innerText = products[i].produto;
    spanProduto.className = "tipoProduto";

    const h2 = document.createElement("h2");
    h2.innerText = products[i].titulo;

    const p = document.createElement("span");
    p.innerText = products[i].descricao;
    p.className = "descricao";

    const spanPreco = document.createElement("span");
    spanPreco.innerText = "R$ " + products[i].preco.toFixed(2);
    spanPreco.className = "preco";

    const spanSelecionar = document.createElement("span");
    spanSelecionar.innerText = products[i].selecionar;
    spanSelecionar.className = "adicionarNoCarrinho";
    spanSelecionar.id = i;
    spanSelecionar.addEventListener("click", (e) => {
      onClick(spanSelecionar.id);
      const spanQuantidade = document.getElementById("contadorQuantidade");
      const spanPreco = document.getElementById("contadorPreco");
      const idProduto = e.target.id;

      if (e.target.tagName === "SPAN") {
        const prodEscolhido = vitrineItems.find((prod) => prod.id == idProduto);
        cart.produtos.push(prodEscolhido);
        spanQuantidade.innerText = cart.produtos.length;
        spanPreco.innerText = "R$: " + valorTotal().toFixed(2);
      }
    });

    li.appendChild(img);
    li.appendChild(spanProduto);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(spanPreco);
    li.appendChild(spanSelecionar);

    vitrineList.appendChild(li);
  }
}
createVitrine(vitrineItems);
