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
    div.style.top = e.pageY + 30 + "px";
    div.style.left = e.pageX + 30 + "px";
  });
}

const sliderLine = document.querySelector(".slider-line");
let sliderMarginLeft = sliderLine.getBoundingClientRect().left;
const arrImages = Array.from(sliderLine.children);
const progressArrowNext = document.querySelector(".progress-line__arrow-next");
const progressArrowPrev = document.querySelector(".progress-line__arrow-prev");

for (let i = 0; i < arrImages.length; i++) {
  arrImages[i].id = i;
}

let position = 0;
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
      console.log(currentIdImage);
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
      console.log(currentIdImage);
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
      setTimeout(() => {
        isClickPending = false;
      }, 300);
    }
  });
}


