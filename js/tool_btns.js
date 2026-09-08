Array.from(document.getElementsByClassName("tool-button")).forEach((btn) => {
  btn.addEventListener("click", function () {
    estilizar_texto(
      this.getAttribute("data-function"),
      this.getAttribute("data-value"),
    );
  });
});