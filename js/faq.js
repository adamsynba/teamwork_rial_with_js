// Task 2: FAQ show / hide
var questions = document.querySelectorAll('.faq-question');

questions.forEach(function (button) {
  button.addEventListener('click', function () {
    var answer = document.getElementById(button.getAttribute('aria-controls'));

    answer.hidden = !answer.hidden;
    button.setAttribute('aria-expanded', String(!answer.hidden));
  });
});
