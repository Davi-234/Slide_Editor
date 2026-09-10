const font_family = document.getElementById("fontFamily");
const dropdown_itens_fontFamily = Array.from(document.querySelectorAll("#font-select .dropdown .dropdown-menu .dropdown-item"))

dropdown_itens_fontFamily.forEach(item => {
    item.addEventListener('click', function(){
        font_family.innerHTML = this.innerHTML;
        estilizar_texto('fontFamily', this.innerHTML)
    });
});