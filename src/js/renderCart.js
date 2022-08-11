function onClick(id) {
  const docH3 = document.getElementById("textoDoCarrinho");
  const docP = document.getElementById("textoAdicionar");

  const get = document.getElementById("ulCarrinho");
  const li = document.createElement("li");
  li.classList.add("li0");
  li.id = id;
  get.appendChild(li);

  const container = document.createElement("div");
  container.classList.add("li0Container");
  li.appendChild(container);

  const img = document.createElement("img");
  img.src = `./src/img/pet/${carItens[id].img}`;
  img.classList.add("img0");
  li.appendChild(img);

  const h2 = document.createElement("h2");
  h2.innerText = carItens[id].titulo;
  h2.classList.add("h20");
  container.appendChild(h2);

  const span = document.createElement("span");
  span.innerText = "R$ " + carItens[id].preco.toFixed(2);
  span.classList.add("span0");
  container.appendChild(span);

  const remove = document.createElement("span");
  remove.innerText = carItens[id].botao;
  remove.className = "remove";

  remove.addEventListener("click", (e) => {
    img.parentElement.remove();
    remove.parentElement.remove();

    if (document.querySelector(".li0") == null) {
      docH3.style.display = "block";
      docP.style.display = "block";
    }
    const spanQuantidade = document.getElementById("contadorQuantidade");
    const spanPreco = document.getElementById("contadorPreco");
    let idProduto = e.target;

    if (e.target.tagName === "SPAN") {
      let click = idProduto.id;
      const prodEscolhido = cart.produtos.findIndex((prod) => prod.id == click);
      cart.produtos.splice(prodEscolhido, 1);
      spanQuantidade.innerText = cart.produtos.length;
      spanPreco.innerText = "R$: " + valorTotal().toFixed(2);
    }
  });

  container.appendChild(remove);

  if (document.querySelector(".li0") !== null) {
    docH3.style.display = "none";
    docP.style.display = "none";
  }
}
