const catalogProduct = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogProduct.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderMovies() {
  exibirTodos();
  const produtosMovies = Array.from(
    catalogProduct.getElementsByClassName("movies")
  );

  for (const produto of produtosMovies) {
    produto.classList.add("hidden");
  }
}

function esconderAnimation() {
  exibirTodos();
  const produtosAnimation = Array.from(
    catalogProduct.getElementsByClassName("animation")
  );

  for (const produto of produtosAnimation) {
    produto.classList.add("hidden");
  }
}

export function inicializarfiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-movies")
    .addEventListener("click", esconderAnimation);
  document
    .getElementById("exibir-animation")
    .addEventListener("click", esconderMovies);
}
