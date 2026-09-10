rangy.init();

// Cria "aplicadores" de classe/tag reutilizáveis, com toggle automático
const boldApplier = rangy.createCssClassApplier("bold", {
  elementTagName: "b",
  normalize: true
});

const italicApplier = rangy.createCssClassApplier("italic", {
  elementTagName: "i",
  normalize: true
});

const underlineApplier = rangy.createCssClassApplier("underline", {
  elementTagName: "u",
  normalize: true
});

const h1Applier = rangy.createCssClassApplier("h1", {
  elementTagName: "h1",
  normalize: true
});

const h2Applier = rangy.createCssClassApplier("h2", {
  elementTagName: "h2",
  normalize: true
});

const h3Applier = rangy.createCssClassApplier("h3", {
  elementTagName: "h3",
  normalize: true
});

const h4Applier = rangy.createCssClassApplier("h4", {
  elementTagName: "h4",
  normalize: true
});

const h5Applier = rangy.createCssClassApplier("h5", {
  elementTagName: "h5",
  normalize: true
});

const h6Applier = rangy.createCssClassApplier("h6", {
  elementTagName: "h6",
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
  } else if (tipo==="fontFamily") {
    // change_font_family();
  } else if (tipo==="fontSize") {
    switch (valor) {
      case "h1": h1Applier.toggleSelection(); break;
      case "h2": h2Applier.toggleSelection(); break;
      case "h3": h3Applier.toggleSelection(); break;
      case "h4": h4Applier.toggleSelection(); break;
      case "h5": h5Applier.toggleSelection(); break;
      case "h6": h6Applier.toggleSelection(); break;
    }
  }
}