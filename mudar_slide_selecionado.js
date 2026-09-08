let slides = Array.from(document.getElementsByClassName("slide-box"));

slides.forEach((slide) => {
  slide.addEventListener("click", function () {
    remover_selecao_elemento_atual();

    slide.id = "selected-element";
    slide.children[0].setAttribute("contenteditable", "true");

    atualizar_moveable();
  });
});

document.getElementById('slide-canvas').addEventListener("click", function (event) {
    if (event.target !== event.currentTarget) return;

    remover_selecao_elemento_atual()
    desabilitar_moveable();
});

function remover_selecao_elemento_atual() {
  let elemento = document.getElementById("selected-element");

  if (elemento === null) return;

  elemento.removeAttribute("id");
  elemento.children[0].removeAttribute("contenteditable");
}