function setLesson(videoId, title, desc, link, clickedButton) {
  document.getElementById("mainVideo").src = "https://www.youtube.com/embed/" + videoId;
  document.getElementById("videoTitle").textContent = title;
  document.getElementById("videoDesc").textContent = desc;
  document.getElementById("videoLink").href = link;

  const buttons = document.querySelectorAll(".lesson-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  if (clickedButton) clickedButton.classList.add("active");
}

function checkQuiz(formId, resultId, finishId, answers) {
  const form = document.getElementById(formId);
  const result = document.getElementById(resultId);
  const finish = document.getElementById(finishId);

  let score = 0;

  answers.forEach((correct, index) => {
    const selected = form.querySelector(`input[name="q${index + 1}"]:checked`);
    if (selected && selected.value === correct) score++;
  });

  result.innerHTML = `Нәтиже: ${score} / ${answers.length}`;

  if (score === answers.length) {
    finish.classList.add("show");
    result.innerHTML += "<br>Жарайсыз! Барлық жауап дұрыс 🎉";
  } else {
    finish.classList.remove("show");
    result.innerHTML += "<br>Тағы қайталап көріңіз.";
  }
}
