//scrollUp
window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    const scrollUp = document.querySelector('.scrollUp');
    if (scrollY > window.innerHeight) {
        scrollUp.classList.add('scrollUp--active');
    } else {
        scrollUp.classList.remove('scrollUp--active');
    }
    scrollUp.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});