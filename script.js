// script.js
var correctCount = 0;
var incorrectCount = 0;

function showAnswer(radio, correctAnswer) {
  var parentDiv = radio.parentNode.parentNode;
  var answerDiv = parentDiv.querySelector('.ans');
  answerDiv.style.display = 'block';

  if (radio.value === correctAnswer) {
    answerDiv.classList.add('correct');
    correctCount++;
    document.getElementById('correctCount').textContent = correctCount;
  } else {
    answerDiv.classList.add('incorrect');
    incorrectCount++;
    document.getElementById('incorrectCount').textContent = incorrectCount;
  }

  var radioButtons = parentDiv.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].disabled = true;
  }
}