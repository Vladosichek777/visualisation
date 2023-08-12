let textsBlockSpan = {
  sales50:
    "Размер скидки зависит от объема проекта и устанавливается индивидуально при расчете коммерческого предложения",
  salesForFuture: "На второй и последующие заказы вы получите дополнительную скидку 5%.",
  time: "Срок исполнения зависит от сложности задачи, размера проекта и рассчитывается индивидуально",
};
const blockSpan = document.querySelectorAll("[data-text]");
let div = document.createElement("div");
document.body.append(div);
div.classList.add("block-span--window");
for (let block of blockSpan) {
  block.addEventListener("mouseover", (e) => {
    for (let key in textsBlockSpan) {
      if (key === block.dataset.text) {
        div.innerHTML = textsBlockSpan[key];
      }
    }
    div.style.display = "block";
  });
  block.addEventListener("mouseout", (e) => {
    div.style.display = "none";
  });
  block.addEventListener("mousemove", (e) => {
    if (e.pageX + div.offsetWidth > document.body.offsetWidth) {
      div.style.top = e.pageY + 30 + "px";
      div.style.left = e.pageX - div.offsetWidth - 30 + "px";
    } else {
      div.style.top = e.pageY + 30 + "px";
      div.style.left = e.pageX + 30 + "px";
    }
  });
}

const sliderLine = document.querySelector(".slider-line");
let sliderMarginLeft = sliderLine.getBoundingClientRect().left;
// const arrImages = Array.from(sliderLine.children);
const arrImages = document.querySelectorAll(".slider-line > picture > img");
const progressArrowNext = document.querySelector(".progress-line__arrow-next");
const progressArrowPrev = document.querySelector(".progress-line__arrow-prev");
let progressLine = document.querySelector(".progress-line__mouse");

for (let i = 0; i < arrImages.length; i++) {
  arrImages[i].id = i;
}

let position = 0;
let percentPositionFromWidth = 0;
let currentIdImage;
let coordsNextImage;
for (let image of arrImages) {
  if (image.getBoundingClientRect().left - sliderMarginLeft === 0) {
    currentIdImage = +image.id;
  }
}
let isClickPending = false;
progressArrowNext.addEventListener("click", () => {
  if (isClickPending) {
    return;
  } else {
    isClickPending = true;
    if (currentIdImage >= arrImages.length - 1) {
      isClickPending = false;
      return;
    } else {
      coordsNextImage =
        document.getElementById(currentIdImage + 1).getBoundingClientRect().left - sliderMarginLeft;
      position -= coordsNextImage;
      sliderLine.style.left = position + "px";
      ++currentIdImage;
      updatePercentPosition();
    }
    setTimeout(() => {
      isClickPending = false;
    }, 600);
  }
});

progressArrowPrev.addEventListener("click", () => {
  if (isClickPending) {
    return;
  } else {
    isClickPending = true;
    if (currentIdImage === 0) {
      isClickPending = false;
      return;
    } else {
      position += coordsNextImage;
      sliderLine.style.left = position + "px";
      --currentIdImage;
      updatePercentPosition();
    }

    setTimeout(() => {
      isClickPending = false;
    }, 600);
  }
});

for (let image of arrImages) {
  image.addEventListener("click", () => {
    if (isClickPending) {
      return;
    } else {
      isClickPending = true;
      coordsNextImage = Math.round(image.getBoundingClientRect().left - sliderMarginLeft);
      position -= coordsNextImage;
      sliderLine.style.left = position + "px";
      ++currentIdImage;
      updatePercentPosition();
      setTimeout(() => {
        isClickPending = false;
      }, 300);
    }
  });
}

// progress-line mouse
function updatePercentPosition() {
  percentPositionFromWidth = Math.round((-position / sliderLine.offsetWidth) * 100);
  progressLine.style.left = percentPositionFromWidth + "%";
}

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
  answer.addEventListener("click", () => {
    if (!answer.classList.contains("dropdown-answer--hidden")) {
      return;
    } else {
      dropDownAnswers.forEach((answer2) => {
        answer2.classList.add("dropdown-answer--hidden");
        answer2.classList.remove("dropdown-answer--title-active");
      });
      answer.classList.remove("dropdown-answer--hidden");
      answer.classList.add("dropdown-answer--title-active");
    }
  });
});


