const root = document.querySelector("#root");
const arrows = document.querySelectorAll(".arrow");

const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
let i = 0;

root.style.background = `url(./images/${images[0]})`;
root.style.borderRadius = ".8rem";
root.style.transition = "ease .4s";

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id == "left") {
      i--;
      if (i < 0) {
        i = images.length - 1;
      }
      root.style.background = `url(./images/${images[i]})`;
    }
    if (e.target.id == "right") {
      i++;
      if (i > images.length - 1) {
        i = 0;
      }
      root.style.background = `url(./images/${images[i]})`;
    }
  });
});
