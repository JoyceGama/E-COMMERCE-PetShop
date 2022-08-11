function filterProducts(e) {
  const event = e.target;
  const array = [];

  if (event.dataset.tag === "Todos") {
    createVitrine(vitrineItems);
  } else {
    for (let i = 0; i < vitrineItems.length; i++) {
      if (vitrineItems[i].produto.indexOf(event.dataset.tag) !== -1) {
        array.push(vitrineItems[i]);
      }
    }
    createVitrine(array);
  }
}

function findItens() {
  const inputValue = document.getElementById("textoDoInput");
  const newData = [];

  for (let i = 0; i < vitrineItems.length; i++) {
    if (
      vitrineItems[i].produto.indexOf(inputValue.value) !== -1 ||
      vitrineItems[i].filter.indexOf(inputValue.value) !== -1
    ) {
      newData.push(vitrineItems[i]);
    } else if (inputValue.value === "todos" || inputValue.value === "Todos") {
      newData.push(vitrineItems[i]);
    }
  }
  createVitrine(newData);
}

let buttonInput = document.getElementById("botaoPesquisar");
buttonInput.addEventListener("click", findItens);

let buttonFind1 = document.getElementById("bt_1");
buttonFind1.addEventListener("click", filterProducts);
let buttonFind2 = document.getElementById("bt_2");
buttonFind2.addEventListener("click", filterProducts);
let buttonFind3 = document.getElementById("bt_3");
buttonFind3.addEventListener("click", filterProducts);
let buttonFind4 = document.getElementById("bt_4");
buttonFind4.addEventListener("click", filterProducts);
