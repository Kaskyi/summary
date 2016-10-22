function navigation() {
    var prevScrollPos = 0;

    function navScroll() {
        var navObj = document.getElementById("nav");
        var navUp = document.getElementsByClassName("nav-up");
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (prevScrollPos > scrolled) {
            for (var i = 0; i < navUp.length; i++) {
                if (navUp[i].className.indexOf("show") === -1) {
                    navUp[i].className += " show";
                }
            }
        }
        if (scrolled <= 60) {
            navObj.className = navObj.className.replace(" style-rainbow", "");
            navObj.className = navObj.className.replace(" fixed", "");
            for (var i = 0; i < navUp.length; i++) {
                navUp[i].className = navUp[i].className.replace(" show", "");
            }
        } else if (scrolled > 60 && prevScrollPos > scrolled) {
            if (navObj.className) {
                if (navObj.className.indexOf("style-rainbow") === -1) {
                    navObj.className += " style-rainbow";
                }
                if (navObj.className.indexOf("fixed") === -1) {
                    navObj.className += " fixed";
                }
            } else {
                navObj.className = " style-rainbow fixed";
            }
        } else {
            if (navObj.className) {
                navObj.className = navObj.className.replace(" style-rainbow", "");
                navObj.className = navObj.className.replace(" fixed", "");
                for (var i = 0; i < navUp.length; i++) {
                    navUp[i].className = navUp[i].className.replace(" show", "");
                }
            }
        }
        prevScrollPos = scrolled;
    }

    return navScroll;
}

function mobileNavAdapter() {
    function mobileView() {
        var navBarMenu = document.getElementsByClassName("navbar-menu");
        var collapsed = document.getElementsByClassName("collapsed");
        if (navBarMenu[0].className.indexOf("hide") === -1) {
            navBarMenu[0].className = navBarMenu[0].className.replace(" show", "");
            navBarMenu[0].className += " hide";
            collapsed[0].className += " active";
        } else if (navBarMenu[0].className.indexOf("show") === -1) {
            navBarMenu[0].className = navBarMenu[0].className.replace(" hide", "");
            navBarMenu[0].className += " show";
            collapsed[0].className = collapsed[0].className.replace(" active", "");
        }


    }
    return mobileView;
}
