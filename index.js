const menuBar = document.querySelector(".hamburger");
const menuList = document.querySelector(".navBar nav");
const menuItems = document.querySelectorAll(".navBar nav ul li a");

const topBtn = document.querySelector("#scroll-top");

let menuOpen = false;

menuBar.addEventListener("click", () => {
  if (menuOpen === false) {
    menuList.style.display = "block";
    menuOpen = true;
  } else if (menuOpen === true) {
    menuList.style.display = "none";
    menuOpen = false;
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuOpen === true) {
      menuList.style.display = "none";
      menuOpen = false;
    }
  });
});

window.addEventListener("scroll", () => {
  if(window.scrollY > 300) {
    topBtn.style.display = "block"
  } else {
    topBtn.style.display = "none"
  }
})

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  })
})