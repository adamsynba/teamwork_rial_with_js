// Contact form — Bootstrap validation + live feedback
(function () {
  'use strict';
  var form = document.getElementById('contactForm');
  var msg = document.getElementById('contactMessage');
  var counter = document.getElementById('messageCount');
  var invalidMsg = document.getElementById('messageInvalid');
  var success = document.getElementById('contactSuccess');
  var nameInput = document.getElementById('contactName');
  var fields = form.querySelectorAll('input, textarea');

  // minlength counts spaces, so "          " would pass. Reject whitespace-only input via JS.
  function checkBlank(field, min) {
    var tooShort = field.value.length > 0 && field.value.trim().length < min;
    field.setCustomValidity(tooShort ? 'Please enter real text, not only spaces.' : '');
  }

  // Show a precise message for the textarea depending on the real value.
  function updateMessageText() {
    counter.textContent = msg.value.length + ' / 500';
    if (msg.validity.valueMissing) invalidMsg.textContent = 'Please write a message.';
    else if (msg.value.trim().length < 10 && msg.value.length >= 10) invalidMsg.textContent = 'Please write real text, not only spaces.';
    else invalidMsg.textContent = 'Your message is too short (' + msg.value.length + '/10 characters minimum).';
  }

  // Live feedback: after a field has been touched, colour it by its real validity.
  function mark(field) {
    if (field === nameInput) checkBlank(nameInput, 2);
    if (field === msg) checkBlank(msg, 10);
    field.classList.toggle('is-valid', field.checkValidity());
    field.classList.toggle('is-invalid', !field.checkValidity());
  }
  fields.forEach(function (f) {
    f.addEventListener('blur', function () { mark(f); });
    f.addEventListener('input', function () {
      if (f === msg) updateMessageText();
      if (f.classList.contains('is-valid') || f.classList.contains('is-invalid')) mark(f);
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    success.classList.add('d-none');
    fields.forEach(mark);
    updateMessageText();
    if (form.checkValidity()) {
      success.classList.remove('d-none');
    } else {
      event.stopPropagation();
      var first = form.querySelector(':invalid');
      if (first) first.focus();
    }
  });

  form.addEventListener('reset', function () {
    fields.forEach(function (f) { f.setCustomValidity(''); f.classList.remove('is-valid', 'is-invalid'); });
    success.classList.add('d-none');
    counter.textContent = '0 / 500';
  });
})();
