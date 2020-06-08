$(function () {
    $(".map_svg").hide();
    map();


})

function map() {
    $("svg").css("visibility", "visible");
    console.log("map")
    var pathEls = document.getElementsByClassName('map');
    for (var i = 0; i < pathEls.length; i++) {
        var pathEl = pathEls[i];
        var offset = anime.setDashoffset(pathEl);
        pathEl.setAttribute('stroke-dashoffset', offset);
        anime({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: anime.random(1000, 2500),
            delay: anime.random(0, 2000),
            // loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine',
            autoplay: true
        });
    }
    // name();
}

setTimeout(function name() {
    console.log("name")
    $(".name").css("visibility", "visible");
    var pathEls = document.getElementsByClassName('name');
    for (var i = 0; i < pathEls.length; i++) {
        var pathEl = pathEls[i];
        var offset = anime.setDashoffset(pathEl);
        pathEl.setAttribute('stroke-dashoffset', offset);
        anime({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: anime.random(9000, 10000),
            delay: anime.random(0, 1000),
            // loop: true,
            // direction: 'alternate',
            easing: 'easeInOutSine',
            autoplay: true
        });
    }
}, 4000)

setTimeout(function show_nav() {
    console.log("show nav")
    $("#fixed-position-on-page").fadeIn("slow");
}, 7000)