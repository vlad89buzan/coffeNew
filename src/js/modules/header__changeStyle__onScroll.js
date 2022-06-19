//header__style__on__scroll
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  const header = document.querySelector(".header");
  if (scrollY > 5) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
});
