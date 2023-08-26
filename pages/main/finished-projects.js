function searchTags() {
  const projectsItem = document.querySelectorAll(".projects__item");
  const tagBtn = document.querySelectorAll(".button--tags");
  const arrayTargetTags = [];
  const buttonClearAllTag = document.querySelectorAll("[data-clear]");

  function searchPossibleImages() {
    //If arrayTargetTags doesn't include any tags
    if (arrayTargetTags.length === 0) {
      clearImageClass();
      return;
    }
    projectsItem.forEach((image) => {
      for (let tag of arrayTargetTags) {
        if (!image.dataset.tag.includes(tag)) {
          image.querySelector(".projects__image").classList.remove("projects__image--active");
          return;
        }
      }
      image.querySelector(".projects__image").classList.add("projects__image--active");
    });
  }

  function workWithArrayTag(button) {
    button.addEventListener("click", () => {
      button.classList.toggle("button--tags-active");
      let currentTag = button.dataset.tag;

      if (arrayTargetTags.includes(currentTag)) {
        let positionDoubleTag = arrayTargetTags.indexOf(currentTag);
        arrayTargetTags.splice(positionDoubleTag, 1);
      } else {
        arrayTargetTags.push(currentTag);
      }
      searchPossibleImages();
    });
  }

  function clearTagAndImage() {
    arrayTargetTags.length = 0;
    tagBtn.forEach((button) => {
      button.classList.remove("button--tags-active");
    });
    clearImageClass();
  }

  function clearImageClass() {
    for (let image of projectsItem) {
      image.querySelector(".projects__image").classList.remove("projects__image--active");
    }
  }

  tagBtn.forEach((button) => {
    workWithArrayTag(button);
  });
  buttonClearAllTag.forEach((button) => {
    button.addEventListener("click", () => {
      clearTagAndImage();
    });
  });
}
searchTags();

export default searchTags;
