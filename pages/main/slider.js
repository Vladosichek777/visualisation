function initialSlider(buttonNext, buttonPrev, arrImagesSlider) {
  let currentIndex = 0;
  let isEnable = true;

  function clearClassNext(prevIndex, currentIndex) {
    const onAnimationEnd = () => {
      arrImagesSlider[prevIndex].classList.remove("to-left", "active");
      arrImagesSlider[currentIndex].classList.remove("from-right");
      arrImagesSlider[currentIndex].removeEventListener("animationend", onAnimationEnd);
      isEnable = true;
    };
    arrImagesSlider[currentIndex].addEventListener("animationend", onAnimationEnd);
  }

  function clearClassPrev(currentIndex, prevIndex) {
    const clear = () => {
      arrImagesSlider[currentIndex].classList.remove("from-left");
      arrImagesSlider[prevIndex].classList.remove("to-right", "active");
      arrImagesSlider[currentIndex].removeEventListener("animationend", clear);
      isEnable = true;
    };
    arrImagesSlider[currentIndex].addEventListener("animationend", clear);
  }

  function showNextImage() {
    arrImagesSlider[currentIndex].classList.add("to-left");
    if (currentIndex === arrImagesSlider.length - 1) {
      currentIndex = -1;
    }
    arrImagesSlider[currentIndex + 1].classList.add("from-right", "active");
    currentIndex++;
    let prevIndex = currentIndex === 0 ? arrImagesSlider.length - 1 : currentIndex - 1;
    clearClassNext(prevIndex, currentIndex);
  }

  function showPrevImage() {
    arrImagesSlider[currentIndex].classList.add("to-right");
    if (currentIndex === 0) {
      currentIndex = arrImagesSlider.length;
    }
    arrImagesSlider[currentIndex - 1].classList.add("from-left", "active");
    currentIndex--;
    let prevIndex = currentIndex === arrImagesSlider.length - 1 ? 0 : currentIndex + 1;
    clearClassPrev(currentIndex, prevIndex);
  }

  buttonNext.addEventListener("click", () => {
    if (isEnable) {
      isEnable = false;
      showNextImage();
    }
  });

  buttonPrev.addEventListener("click", () => {
    if (isEnable) {
      isEnable = false;
      showPrevImage();
    }
  });

  function touchChangeImage(arrImagesSlider) {
    const maxTimeTouch = 1000;
    const minDistanceTouchX = 100;
    const maxDifferenceDistanceY = 400;

    let startX;
    let finishX;
    let diffDistanceX;
    let startY;
    let finishY;
    let diffDistanceY;

    let startDate;
    let finishDate;
    let diffDate;

    arrImagesSlider.forEach((image) => {
      image.addEventListener("pointerdown", (e) => {
        if (isEnable) {
          isEnable = false;
          e.preventDefault();
          startX = e.pageX;
          startY = e.pageY;
          startDate = new Date();
        }
      });
      image.addEventListener("pointerup", (e) => {
        isEnable = false;
        finishX = e.pageX;
        finishY = e.pageY;
        diffDistanceY = Math.abs(startY - finishY);
        finishDate = new Date();
        diffDistanceX = startX - finishX;
        diffDate = finishDate - startDate;

        if (
          diffDistanceX > 0 &&
          diffDistanceX >= minDistanceTouchX &&
          diffDistanceY <= maxDifferenceDistanceY &&
          diffDate <= maxTimeTouch
        ) {
          showNextImage();
        }

        if (
          diffDistanceX < 0 &&
          Math.abs(diffDistanceX) >= minDistanceTouchX &&
          diffDistanceY <= maxDifferenceDistanceY &&
          diffDate <= maxTimeTouch
        ) {
          showPrevImage();
        }
      });
    });
  }
  touchChangeImage(arrImagesSlider);
}

export default initialSlider;
