export const catalog = [
  {
    id: "1",
    nome: "Brooklyn 99",
    marca: "GeekAnonynous",
    preco: 150,
    nomeArquivoImagem: "99.png",
    animation: false,
  },
  {
    id: "2",
    nome: "Escobar",
    marca: "GeekAnonynous",
    preco: 70,
    nomeArquivoImagem: "Escobar.png",
    animation: false,
  },
  {
    id: "3",
    nome: "Goodfather",
    marca: "GeekAnonynous",
    preco: 100,
    nomeArquivoImagem: "Goodfather.png",
    animation: false,
  },
  {
    id: "4",
    nome: "Goodfellas",
    marca: "GeekAnonynous",
    preco: 90,
    nomeArquivoImagem: "Goodfellas.png",
    animation: false,
  },
  {
    id: "5",
    nome: "Mr Pickles",
    marca: "GeekAnonynous",
    preco: 120,
    nomeArquivoImagem: "Mr-Pickles.png",
    animation: true,
  },
  {
    id: "6",
    nome: "Rick and Morty",
    marca: "GeekAnonynous",
    preco: 150,
    nomeArquivoImagem: "Rick-Morty.png",
    animation: true,
  },
  {
    id: "7",
    nome: "Sons Of Anarchy",
    marca: "GeekAnonynous",
    preco: 115,
    nomeArquivoImagem: "Sons-Of-Anarchy.png",
    animation: false,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalog.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `
  <img src="./assets/img/${produto.nomeArquivoImagem}" alt="${produto.nome}" class="h-24 rounded-lg" />
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900">${produto.nome}</p>
    <p class="text-slate-900">Tamanho: 60cm</p>
    <p class="text-green-700">$${produto.preco}</p>
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
    <p id="quantidade-${produto.id}" class="ml-2">${quantidadeProduto}</p>
  </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
