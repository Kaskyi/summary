function parallax() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    var contx = document.getElementsByClassName("parallax-container");
    var x = document.getElementsByClassName("parallax");
    var i;
    for (i = 0; i < x.length; i++) {
        var container_height = 600;
        var parallax_dist = x[i].style.height - container_height;
        var top = contx[i].offsetTop + 600;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (container_height + windowHeight);

        var parallax = Math.round((parallax_dist * percentScrolled));
        var bottom = top + container_height;

        if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
            x[i].style.transform = "translate3D(0px," + parallax + "px, 0)";
        }
    }
}
