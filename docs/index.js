const addBtn = document.querySelector("#addBtn");
const allBtn = document.querySelector("#all");

const myLibrary = [];

function listAll() {
  myLibrary.forEach((book) => console.log(book.title));
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return(title + " by " + author + ", " + pages + ", " + read);
  }
}

// elements from html


function addBookToLibrary(sTitle, sAuthor, sPages, sRead) {
  myLibrary.push(new Book(sTitle, sAuthor, sPages, sRead));
}

addBtn.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  addBookToLibrary(title, author, pages, read);
});
allBtn.addEventListener("click", listAll);

// test
// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not');
// console.log(theHobbit.info());