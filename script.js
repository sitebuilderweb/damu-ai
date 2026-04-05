function checkQuiz(formId, resultId, finishId, answers) {
  const form = document.getElementById(formId);
  const result = document.getElementById(resultId);
  const finishBox = document.getElementById(finishId);

  let score = 0;
  let total = answers.length;

  answers.forEach((correct, index) => {
    const selected = form.querySelector(`input[name="q${index + 1}"]:checked`);
    if (selected && selected.value === correct) {
      score++;
    }
  });

  result.innerHTML = `Нәтиже: ${score} / ${total}`;

  if (score === total) {
    finishBox.classList.add("show");
    result.innerHTML += "<br>Жарайсыз! Барлық жауап дұрыс 🎉";
  } else {
    finishBox.classList.remove("show");
    result.innerHTML += "<br>Тағы бір рет байқап көріңіз.";
  }
}
