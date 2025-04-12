
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    const fifthBook = json[4];
    renderBooks([fifthBook])

    const totalPages = countPages(json);
    renderTotalPages(totalPages)
  });
  fetch("https://anapioficeandfire.com/api/characters/1031")
  .then((resp) => resp.json())
  .then((json) => {
    const characterName = json.name;
    renderName(characterName)
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function renderName(name) {
  const main = document.querySelector('main');
  const h2 = document.createElement('h2');
  h2.innerHTML = name;
  main.appendChild(h2);
}

function countPages(books) {
  return books.reduce((total, book) => {
    return total + book.numberOfPages;
  }, 0);
}

function renderTotalPages(totalPages) {
  const main = document.querySelector('main');
  const h2 = document.createElement('h2');
  h2.innerHTML = `Total page count: ${totalPages}`;
  main.appendChild(h2);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

