rangy.init();

// Cria "aplicadores" de classe/tag reutilizáveis, com toggle automático
const boldApplier = rangy.createCssClassApplier("negrito", {
  elementTagName: "b",
  normalize: true
});

const italicApplier = rangy.createCssClassApplier("italico", {
  elementTagName: "i",
  normalize: true
});

const underlineApplier = rangy.createCssClassApplier("sublinhado", {
  elementTagName: "u",
  normalize: true
});

function estilizar_texto(tipo, valor) {
  const selection = rangy.getSelection();
  if (selection.isCollapsed) return;

  if (valor === "bold") {
    boldApplier.toggleSelection();
  } else if (valor === "italic") {
    italicApplier.toggleSelection();
  } else if (valor === "underline") {
    underlineApplier.toggleSelection();
  } else if (tipo === "fontColor") {
    const colorApplier = rangy.createCssClassApplier("cor-custom-" + valor.replace("#", ""), {
      elementTagName: "span",
      elementProperties: { style: { color: valor } }
    });
    colorApplier.toggleSelection();
  }
}