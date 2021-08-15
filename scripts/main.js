input = document.getElementById("header__input");
input.onfocus = () => {
    input.classList.add('active');
}
input.onblur = () => {
    input.classList.remove('active');
}

top__mail = document.getElementById('top__mail');
document.documentElement.clientWidth <= 974 ? top__mail.style.display = "none" : top__mail.style.display = "block";
window.addEventListener('resize',function(){    
    document.documentElement.clientWidth <= 974 ? top__mail.style.display = "none" : top__mail.style.display = "block";
});