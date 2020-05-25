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

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

//var prevScrollpos = window.pageYOffset;
//window.onscroll = function () {
//    var currentScrollPos = window.pageYOffset;
//    if (prevScrollpos > currentScrollPos) {
//        document.getElementById("navbar-menu").style.top = "0";
//    } else {
//        document.getElementById("navbar-menu").style.top = "-80px";
//    }
//    prevScrollpos = currentScrollPos;
//}


//let feed = [];
//
//document.addEventListener("DOMContentLoaded", start);
//
//function start() {
//    getJson();
//}
//
//async function getJson() {
//    let url =
//        "http://majroslyng.dk/kea/eksamen4/wordpress/wp-json/wp/v2/posts"
//    let jsonData = await fetch(url);
//    feed = await jsonData.json();
//    visFeed();
//}
//
//function visFeed() {
//    let temp = document.querySelector("template");
//    let dest = document.querySelector(".beerscontainer")
//
//    feed.forEach(onepost => {
//        console.log(onepost);
//
//        let klon = temp.cloneNode(true).content;
//        klon.querySelector("img").src = onepost.guid;
//
//        klon.querySelector("a").href = "eachpic.html?slug=" + onepost.slug;
//        dest.appendChild(klon);
//    });
//}
