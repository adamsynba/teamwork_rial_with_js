// Registration form — Bootstrap validation, password match check, reset
(function () {
  'use strict';
  var form = document.getElementById('registerForm');
  var pw = document.getElementById('password');
  var cpw = document.getElementById('confirmPassword');
  var confirmInvalid = document.getElementById('confirmInvalid');
  var success = document.getElementById('registerSuccess');
  // Preselect plan coming from the Prices page (register.html?plan=year)
  var planSel = document.getElementById('plan');
  var wanted = new URLSearchParams(location.search).get('plan');
  if (wanted && planSel.querySelector('option[value="' + wanted + '"]')) planSel.value = wanted;
  var controls = form.querySelectorAll('.form-control, .form-select');

  // HTML5 cannot compare two fields, so we set a custom validity message.
  function checkMatch() {
    if (cpw.value !== '' && cpw.value !== pw.value) {
      cpw.setCustomValidity('Passwords do not match');
      confirmInvalid.textContent = 'Passwords do not match.';
    } else {
      cpw.setCustomValidity(''); // clears the error once corrected
      confirmInvalid.textContent = cpw.validity.valueMissing
        ? 'Please confirm your password.'
        : 'Password must be at least 8 characters.';
    }
  }

  function mark(field) {
    field.classList.toggle('is-valid', field.checkValidity());
    field.classList.toggle('is-invalid', !field.checkValidity());
  }

  controls.forEach(function (f) {
    var evt = f.tagName === 'SELECT' ? 'change' : 'input';
    f.addEventListener('blur', function () { if (f === cpw) checkMatch(); mark(f); });
    f.addEventListener(evt, function () {
      if (f === pw || f === cpw) {
        checkMatch();
        if (cpw.classList.contains('is-valid') || cpw.classList.contains('is-invalid')) mark(cpw);
      }
      if (f.tagName === 'SELECT' || f.classList.contains('is-valid') || f.classList.contains('is-invalid')) mark(f);
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    success.classList.add('d-none');
    checkMatch();
    controls.forEach(mark);
    if (form.checkValidity()) {
      success.classList.remove('d-none');
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      var first = form.querySelector(':invalid');
      if (first) first.focus();
    }
  });

  form.addEventListener('reset', function () {
    cpw.setCustomValidity('');
    controls.forEach(function (f) { f.classList.remove('is-valid', 'is-invalid'); });
    success.classList.add('d-none');
  });
})();
