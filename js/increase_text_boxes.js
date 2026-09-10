const size_select = document.getElementById("sizeButton");
const dropdown_itens = Array.from(document.querySelectorAll("#size-select .dropdown .dropdown-menu .dropdown-item"))

dropdown_itens.forEach(item => {
    item.addEventListener('click', function(){
        size_select.innerHTML = this.innerHTML;
        estilizar_texto('fontSize', this.innerHTML)
    });
});