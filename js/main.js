const menuLink = document.querySelectorAll(".menu__link");
const activeCheckbox = document.getElementById("active");
const menuBtn = document.querySelector(".menu__btn");
const headerNav = document.querySelector(".header__nav");
console.log(menuBtn);

activeCheckbox.onclick = function () {
  if (activeCheckbox.checked) {
    headerNav.style.right = "0";
    menuBtn.style.position = "fixed";
  } else {
    headerNav.style.right = "-100%";
    menuBtn.style.position = "absolute";
  }
};

for (link of menuLink) {
  link.onclick = function () {
    if (activeCheckbox.checked) {
      headerNav.style.right = "-100%";
      activeCheckbox.checked = false;
    }
  };
}
