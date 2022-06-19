//navlink indicator i scroll to section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        let navId = document.querySelector
        (`.menu__link[href= '#${section.id}']`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navId.classList.add('menu__link--active');
        } else {
            navId.classList.remove('menu__link--active');
        }
        navId.addEventListener('click', (e) => {
            e.preventDefault();
            const headerMenu = document.querySelector('.menu__body');
            const body = document.querySelector('body');
            headerMenu.classList.toggle('show');
            body.style.overflowY = "scroll";
            let href = e.target.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = document.querySelector('.header')
            .offsetHeight - 10;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});