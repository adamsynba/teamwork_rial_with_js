// Task 4: favourites list (add / remove)
var favForm = document.getElementById('favForm');
var favInput = document.getElementById('favInput');
var favList = document.getElementById('favList');
var favCount = document.getElementById('favCount');
var favError = document.getElementById('favError');

function updateCount() {
  favCount.textContent = favList.children.length;
}

favForm.addEventListener('submit', function (event) {
  event.preventDefault(); // no page reload

  var text = favInput.value.trim();

  if (text === '') {
    favError.textContent = 'Please type something before adding.';
    return;
  }
  favError.textContent = '';

  var li = document.createElement('li');

  var span = document.createElement('span');
  span.textContent = text;

  var removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.className = 'remove-btn';
  removeBtn.textContent = 'Remove';
  removeBtn.setAttribute('aria-label', 'Remove ' + text);
  removeBtn.addEventListener('click', function () {
    li.remove();
    updateCount();
  });

  li.append(span, removeBtn);
  favList.append(li);

  favInput.value = '';
  favInput.focus();
  updateCount();
});

updateCount();
