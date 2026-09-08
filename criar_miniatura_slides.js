function criar_miniatura() {
  const canvas = document.getElementById("slide-canvas");
  const thumbnail = document.querySelector("#slide-selected .slide-thumbnail");

  // Clona pra não mexer no slide real que está sendo editado
  const clone = canvas.cloneNode(true);

  // Remove IDs e contenteditable duplicados (evita conflito com o slide real)
  clone.removeAttribute("id");
  clone.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
  clone
    .querySelectorAll("[contenteditable]")
    .forEach((el) => el.removeAttribute("contenteditable"));

  // Escala proporcional: clona no tamanho real e encolhe visualmente
  const escala = thumbnail.clientWidth / canvas.clientWidth;
  clone.style.position = "absolute";
  clone.style.top = "0";
  clone.style.left = "0";
  clone.style.width = canvas.clientWidth + "px";
  clone.style.height = canvas.clientHeight + "px";
  clone.style.transform = `scale(${escala})`;
  clone.style.transformOrigin = "top left";

  clone.children[clone.children.length-1].remove();

  thumbnail.innerHTML = "";
  thumbnail.appendChild(clone);
}
