//nested-list
function initializeNestedLists(questions, answersBlock, dropDownAnswer) {
  const nestedListQuestions = document.querySelectorAll(questions);
  const nestedListAnswersBlock = document.querySelectorAll(answersBlock);
  const dropDownAnswers = document.querySelectorAll(dropDownAnswer);

  function showAnswerBlock(question) {
    nestedListAnswersBlock.forEach((answersBlock) => {
      answersBlock.classList.add("nested-lists-answers-item--hidden");
      if (question.dataset.group === answersBlock.dataset.group) {
        answersBlock.classList.remove("nested-lists-answers-item--hidden");
      }
    });
  }
  function activateQuestion(question) {
    nestedListQuestions.forEach((question) => {
      question.classList.remove("nested-lists-questions__item--active");
    });
    question.classList.add("nested-lists-questions__item--active");
  }
  function hideAllAnswerBlock() {
    dropDownAnswers.forEach((answer2) => {
      answer2.classList.add("dropdown-answer--hidden");
      answer2.classList.remove("dropdown-answer--title-active");
    });
  }
  function showInnerAnswerBlock(answerBlock) {
    answerBlock.classList.remove("dropdown-answer--hidden");
    answerBlock.classList.add("dropdown-answer--title-active");
  }

  nestedListQuestions.forEach((item) => {
    item.addEventListener("click", function () {
      if (!item.classList.contains("nested-lists-questions__item--active")) {
        activateQuestion(item);
        showAnswerBlock(item);
      }
    });
  });

  dropDownAnswers.forEach((answer) => {
    answer.addEventListener("click", function () {
      if (this.classList.contains("dropdown-answer--hidden")) {
        hideAllAnswerBlock();
        showInnerAnswerBlock(answer);
      }
    });
  });
}

export default initializeNestedLists;
