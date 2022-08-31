let elOpenNavBarBtn = document.querySelector(".js-open-navbar");
let elNavBar = document.querySelector(".site-header__nav");

elOpenNavBarBtn.addEventListener("click", function(){
    elOpenNavBarBtn.closest(".site-body").classList.toggle("navbar-open");
});