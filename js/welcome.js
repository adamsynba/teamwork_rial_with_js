// Task 0: personalised welcome message
var nameInput = document.getElementById('nameInput');
var welcomeBtn = document.getElementById('welcomeBtn');
var message = document.querySelector('#welcomeMessage');

welcomeBtn.addEventListener('click', function () {
  var name = nameInput.value.trim();

  if (name === '') {
    message.textContent = 'Please enter your name first.';
    message.classList.add('error');
  } else {
    message.textContent = 'Welcome to Healthy, ' + name + '! Pick your first activity.';
    message.classList.remove('error');
  }
});

// Enter key in the input does the same as the button
nameInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    welcomeBtn.click();
  }
});
