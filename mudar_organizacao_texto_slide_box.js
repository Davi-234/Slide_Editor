const btns_align = Array.from(document.getElementsByClassName("btn-align"));

btns_align.forEach(btn_align => {
    btn_align.addEventListener('click', function(event) {
        const botao = event.currentTarget;
        mudar_btn_align_selecionado(botao);
        mudar_align(botao.dataset.align);
    });    
});

function mudar_align(align){
    const elemento = document.querySelector(
        "#selected-element .slide-content"
    );
    if (elemento == null) return;
    elemento.classList.remove(
        "left",
        "center",
        "right",
        "justify"
    );
    elemento.classList.add(align);
}

// Lógica para permitir apenas um botão align selecionado
function mudar_btn_align_selecionado(btn_align) {
    if (btn_align.classList.contains("format-active"))
        return;

    const selecionado = document.querySelector(
        ".btn-align.format-active"
    );

    if (selecionado != null)
        selecionado.classList.remove("format-active");

    btn_align.classList.add("format-active");
}