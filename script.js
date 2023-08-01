const hamburger = document.getElementById("hamburger");
const menu = document.querySelector("#menu");
const hLink = document.querySelector("#hLink");
const faSolid = document.querySelector(".fa-solid");
const togglebtn = document.getElementById("togglebtn");
const card_1_front = document.getElementById("card_1_front");
const card_1_back = document.getElementById("card_1_back");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

hLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    faSolid.classList.toggle("fa-xmark");
  });
});

togglebtn.addEventListener("change", () => {
  card_1_front.classList.toggle("-rotate-y-180");
  card_1_back.classList.toggle("rotate-y-180");
});
