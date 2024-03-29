function createHelperText(targetAttrbute, classStyleWindow, storageTexts) {
  const targetBlock = document.querySelectorAll(`[data-${targetAttrbute}]`);
  const helperBlock = document.createElement("div");
  document.body.append(helperBlock);
  helperBlock.classList.add(`${classStyleWindow}`);

  for (let block of targetBlock) {
    block.addEventListener("mouseover", () => {
      for (let key in storageTexts) {
        if (key === block.dataset[targetAttrbute]) {
          helperBlock.innerHTML = storageTexts[key];
        }
      }
      helperBlock.style.display = "block";
    });

    block.addEventListener("mouseout", () => {
      helperBlock.style.display = "none";
    });

    block.addEventListener("mousemove", (e) => {
      if (e.pageX + helperBlock.offsetWidth > document.body.offsetWidth) {
        helperBlock.style.top = e.pageY + 30 + "px";
        helperBlock.style.left = e.pageX - helperBlock.offsetWidth - 30 + "px";
      } else {
        helperBlock.style.top = e.pageY + 30 + "px";
        helperBlock.style.left = e.pageX + 30 + "px";
      }
    });
  }
}

export default createHelperText;
