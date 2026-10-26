// Task 1: light / dark theme
var themeBtn = document.getElementById('themeToggle');

function updateThemeButton() {
  if (document.body.classList.contains('dark-theme')) {
    themeBtn.textContent = 'Switch to light theme';
  } else {
    themeBtn.textContent = 'Switch to dark theme';
  }
}

// remember the choice between pages
try {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }
} catch (e) {}

themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  try {
    var isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  } catch (e) {}
  updateThemeButton();
});

updateThemeButton();
