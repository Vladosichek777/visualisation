function iniziateShowPopUp() {
  const spanPopUp = document.querySelectorAll(".dropdown-answer-complex__pop-up");

  function showPopUp(popUp, popUpBack) {
    popUpBack.classList.add("pop-up-wrap--active");
    popUp.hidden = "";
    document.body.classList.add("hidden");
  }
  function closePopUp(popUp, popUpBack) {
    popUp.querySelector(".pop-up__close").addEventListener("click", () => {
      popUpBack.classList.remove("pop-up-wrap--active");
      popUp.hidden = true;
      document.body.classList.remove("hidden");
    });
  }

  spanPopUp.forEach((span) => {
    span.addEventListener("click", function () {
      const popUpBack = document.querySelector(".pop-up-wrap");
      const arrPopUp = document.querySelectorAll(".pop-up__close-wrap");
      for (let popUp of arrPopUp) {
        if (span.dataset.pop === popUp.dataset.pop) {
          showPopUp(popUp, popUpBack);
          closePopUp(popUp, popUpBack);
        }
      }
    });
  });
}

export default iniziateShowPopUp;
