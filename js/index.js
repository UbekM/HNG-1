/** @format */

const time = document.getElementById("time");
const day = document.getElementById("day");
const year = document.getElementById("year");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const nav2 = document.getElementById("nav2");
const modal = document.getElementById("modal");
const navLinks = document.querySelectorAll(".navLinks");

setInterval(() => {
  time.innerHTML = new Date().toLocaleTimeString();
}, 1000);

setInterval(() => {
  day.innerHTML = new Date().toLocaleDateString("en-US", { weekday: "long" });
}, 1000);

setInterval(() => {
  year.innerHTML = new Date().getFullYear();
}, 1000);

hamburger.addEventListener("click", () => {
  nav2.style.display = "block";
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

const closeMenu = () => {
  nav2.style.display = "none";
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

close.addEventListener("click", closeMenu);
modal.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
