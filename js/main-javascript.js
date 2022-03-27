// smooth scroll top button

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
    });
}

// showing and hiding top-scroll button

window.onscroll = function() {
    let scrollLimit = 200;
    if (window.scrollY >= scrollLimit) {
        document.querySelector('.to-top').classList.add("to-top-visible");
    } else {
        document.querySelector('.to-top').classList.remove("to-top-visible");
    }
};