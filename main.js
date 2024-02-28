// const nomeProduto = "Brooklyn 99";
// const marca = "GeekAnonynous";
// const preco = 70;
// const nomeArquivoImagem = "99.png";

import { inicializarfiltros } from "./src/filtrosCatalog";
import { renderizarCatalogo } from "./src/cartaoProduto";
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  renderizarProdutosCarrinho,
} from "./src/menuCarrinho";

renderizarCatalogo();
renderizarProdutosCarrinho();
inicializarCarrinho();
atualizarPrecoCarrinho();
inicializarfiltros();
