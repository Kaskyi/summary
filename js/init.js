var navScroll = navigation();
var parallaxScroll = parallax;
var mobileView = mobileNavAdapter();
window.onscroll = function() {
    navScroll();
    parallaxScroll();
};
