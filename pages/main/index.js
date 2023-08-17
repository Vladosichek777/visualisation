import createHelperText from "./helper-text.js";

//CREATE HELPER TEXT FOR BLOCK SPAN
let textsBlockSpan = {
  sales50: "Размер скидки зависит от объема проекта и устанавливается индивидуально при расчете коммерческого предложения",
  salesForFuture: "На второй и последующие заказы вы получите дополнительную скидку 5%.",
  time: "Срок исполнения зависит от сложности задачи, размера проекта и рассчитывается индивидуально",
  lorem: "some text",
};
createHelperText("text", "block-span--window", textsBlockSpan);
// animation-number
const animationNumberSection = document.querySelector(".animation-number");
const animationLine = document.querySelector(".info-interactive__line");
let runNumber = document.querySelector(".number");

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

//nested-list

const nestedListQuestions = document.querySelectorAll(".nested-lists-questions__item");
const nestedListAnswersBlock = document.querySelectorAll(".nested-lists-answers-item");
const dropDownAnswers = document.querySelectorAll(".dropdown-answer");

nestedListQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("nested-lists-questions__item--active")) {
      return;
    } else {
      nestedListQuestions.forEach((question) => {
        question.classList.remove("nested-lists-questions__item--active");
      });
      nestedListAnswersBlock.forEach((answersBlock) => {
        answersBlock.classList.add("nested-lists-answers-item--hidden");
        if (item.dataset.group === answersBlock.dataset.group) {
          answersBlock.classList.remove("nested-lists-answers-item--hidden");
        }
      });
      item.classList.add("nested-lists-questions__item--active");
    }
  });
});
dropDownAnswers.forEach((answer) => {
  answer.addEventListener("click", function () {
    if (!this.classList.contains("dropdown-answer--hidden")) {
      return;
    } else {
      dropDownAnswers.forEach((answer2) => {
        answer2.classList.add("dropdown-answer--hidden");
        answer2.classList.remove("dropdown-answer--title-active");
      });
      this.classList.remove("dropdown-answer--hidden");
      this.classList.add("dropdown-answer--title-active");
    }
  });
});

// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP// POP-UP

const spanPopUp = document.querySelectorAll(".dropdown-answer-complex__pop-up");
spanPopUp.forEach((span) => {
  span.addEventListener("click", function () {
    const popUpBack = document.querySelector(".pop-up-wrap");
    const arrPopUp = document.querySelectorAll(".pop-up__close-wrap");
    for (let popUp of arrPopUp) {
      if (span.dataset.pop === popUp.dataset.pop) {
        popUpBack.classList.add("pop-up-wrap--active");
        popUp.hidden = "";

        popUp.querySelector(".pop-up__close").addEventListener("click", () => {
          popUpBack.classList.remove("pop-up-wrap--active");
          popUp.hidden = true;
        });
      }
    }
  });
});
