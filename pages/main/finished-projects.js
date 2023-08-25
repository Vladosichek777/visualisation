function searchTags() {
  const projectsItem = document.querySelectorAll(".projects__item");
  const tagBtn = document.querySelectorAll(".button--tags");
  const arrayTargetTags = [];
  const buttonClearAllTag = document.querySelector("[data-clear]");

  function searchPossibleImages() {
    //If arrayTargetTags doesn't include any tags
    if (arrayTargetTags.length === 0) {
      for (let image of projectsItem) {
        image.querySelector(".projects__image").classList.remove("projects__image--active");
      }
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
        console.log(arrayTargetTags);
      } else {
        arrayTargetTags.push(currentTag);
      }
      searchPossibleImages();
    });
  }
  function clearTagAndImage() {
    arrayTargetTags.splice(0, arrayTargetTags.length);
    tagBtn.forEach((button) => {
      button.classList.remove("button--tags-active");
    });
    for (let image of projectsItem) {
      image.querySelector(".projects__image").classList.remove("projects__image--active");
    }
  }

  tagBtn.forEach((buttonTag) => {
    workWithArrayTag(buttonTag);
  });
  buttonClearAllTag.addEventListener("click", () => {
    clearTagAndImage();
  });
}
searchTags();

export default searchTags;
