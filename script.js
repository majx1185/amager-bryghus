//function toggleMenu() {
//    let erSkjult =
//        document.querySelector(".navbar-toggler").classList.toggle("change");
//
//
//}

//function changeFunction(x) {
//    x.classList.toggle("change");
//}

$(document).ready(function () {
    $('.nav-button').click(function () {
        $('body').toggleClass('nav-open');
    });
});
