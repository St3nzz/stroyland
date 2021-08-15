input = document.getElementById("header__input");
input.onfocus = () => {
    input.classList.add('active');
}
input.onblur = () => {
    input.classList.remove('active');
}