const sliderWrapper = document.querySelector(".slider");
const sliderLine = document.querySelector(".slider-line");
const progressArrowNext = document.querySelector(".progress-line__arrow-next");
const progressArrowPrev = document.querySelector(".progress-line__arrow-prev");

let coordsSliderX = sliderLine.getBoundingClientRect().left;
for (let i = 0; i < Array.from(sliderLine.children).length; i++) {
  let element = Array.from(sliderLine.children)[i];
  element.setAttribute("id", i);
}
