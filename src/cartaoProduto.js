import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalog } from "./utilidades";

export function renderizarCatalogo() {
  for (const productCatalog of catalog) {
    const cardProduct = `  <div class="border-solid shadow-xl shadow-slate-400 rounded-lg w-48 m-2 flex flex-col p-2 gap-px justify-between group ${
      productCatalog.animation ? "animation" : "movies"
    }" id="card-produto-${productCatalog.id}">
      <img src="assets/img/${productCatalog.nomeArquivoImagem}" alt="imagens"
      class="group-hover:scale-110 duration-300 rounded-lg"
      />
      <p class="text-sm">${productCatalog.marca}</p>
      <p class=" text-sm">${productCatalog.nome}</p>
      <p class=" text-sm">$${productCatalog.preco}</p>
      <button id="adicionar-${
        productCatalog.id
      }" class="bg-slate-950 hover:bg-slate-700 text-slate-200 "><i class="fa-solid fa-cart-plus"></i></button>
      </div>`;

    document.getElementById("container-produto").innerHTML += cardProduct;
  }

  for (const productCatalog of catalog) {
    document
      .getElementById(`adicionar-${productCatalog.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(productCatalog.id));
  }
}
