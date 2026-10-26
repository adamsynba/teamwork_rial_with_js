// Task 3: filter sport cards while typing
var searchInput = document.getElementById('sportSearch');
var cards = document.querySelectorAll('.sport-card');
var searchCount = document.getElementById('searchCount');
var noResults = document.getElementById('noResults');

function filterCards() {
  var query = searchInput.value.trim().toLowerCase();
  var visible = 0;

  cards.forEach(function (card) {
    var title = card.querySelector('span').textContent.toLowerCase();

    if (title.includes(query)) {
      card.hidden = false;
      visible++;
    } else {
      card.hidden = true;
    }
  });

  searchCount.textContent = 'Showing ' + visible + ' of ' + cards.length + ' activities';
  noResults.hidden = visible !== 0;
}

searchInput.addEventListener('input', filterCards);
