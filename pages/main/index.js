import createHelperText from "./helper-text.js";
import initializeNestedLists from "./nested-list.js";
import initialSlider from "./slider.js";
import iniziateShowPopUp from "./pop-up.js";
import searchTags from "./finished-projects.js";

//Slider
const buttonNext = document.querySelector(".progress-line__arrow-next");
const buttonPrev = document.querySelector(".progress-line__arrow-prev");
const arrImagesSlider = document.querySelectorAll(`.slider__item[data-slider='intro']`);
initialSlider(arrImagesSlider, buttonNext, buttonPrev);

//Slider proposition
const arrImagesProposition1 = document.querySelectorAll(`.slider__item[data-slider='proposition1']`);
const arrImagesProposition2 = document.querySelectorAll(`.slider__item[data-slider='proposition2']`);
const arrImagesProposition3 = document.querySelectorAll(`.slider__item[data-slider='proposition3']`);
const arrImagesProposition4 = document.querySelectorAll(`.slider__item[data-slider='proposition4']`);
initialSlider(arrImagesProposition1);
initialSlider(arrImagesProposition2);
initialSlider(arrImagesProposition3);
initialSlider(arrImagesProposition4);

//CREATE HELPER TEXT FOR BLOCK SPAN and gadgets
const textsBlockSpan = {
  sales50: "Размер скидки зависит от объема проекта и устанавливается индивидуально при расчете коммерческого предложения",
  salesForFuture: "На второй и последующие заказы вы получите дополнительную скидку 5%.",
  time: "Срок исполнения зависит от сложности задачи, размера проекта и рассчитывается индивидуально",
  lorem: "some text",
};
createHelperText("text", "block-span--window", textsBlockSpan);

// animation-number
const animationNumberSection = document.querySelector(".animation-number");
const animationLine = document.querySelector(".info-interactive__line");
const runNumber = document.querySelector(".number");

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((line) => {
      if (line.isIntersecting) {
        animationLine.style.width = 45 + "px";
        let i = 0;
        function runIteration() {
          if (i <= 20) {
            runNumber.innerHTML = i;
            i++;
            setTimeout(runIteration, 45);
          }
        }
        runIteration();
        observer.unobserve(line.target);
      }
    });
  },
  { rootMargin: "0px 0px -200px 0px" }
);

observer.observe(animationNumberSection);
observer.observe(runNumber);

// initializeNestedLists
initializeNestedLists(".nested-lists-questions__item[data-top]", ".nested-lists-answers-item[data-bottom='answer2']", ".dropdown-answer[data-drop='top']");
// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP

iniziateShowPopUp();

//FINISHED-PROJECTS//FINISHED-PROJECTS//FINISHED-PROJECTS//FINISHED-PROJECTS//FINISHED-PROJECTS//FINISHED-PROJECTS//FINISHED-PROJECTS//FINISHED-PROJECTS//FINISHED-PROJECTS

// open tags button for mobile version
document.querySelector("[data-open]").addEventListener("click", () => {
  document.querySelector("[data-open]").classList.toggle("tags__btn--arrow-active");
  document.querySelector(".tags-array").classList.toggle("tags-array--active");
});
