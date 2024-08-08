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
    return title + " by " + author + ", " + pages + ", " + read;
  };
}

// elements from html

function addBookToLibrary(sTitle, sAuthor, sPages, sRead) {
  myLibrary.push(new Book(sTitle, sAuthor, sPages, sRead));
}

function addElement(sTitle, sAuthor, sPages, sRead) {
  const main = document.querySelector("#main");
  const div = document.createElement("div");
  const divClasses = [
    "element",
    "border-2",
    "rounded",
    "p-6",
    "flex",
    "flex-col",
    "border-black",
    "justify-center",
    "h-60",
    "w-72",
  ];
  addManyClasses(div, divClasses);
  const divTitle = document.createElement("h2");
  const titleClasses = [
    "font-bold",
    "pb-3",
    "text-xl",
    "text-wrap",
    "basis-1/4",
  ];
  addManyClasses(divTitle, titleClasses);
  const divAuthor = document.createElement("p");
  const divPages = document.createElement("p");
  const divStatus = document.createElement("p");
  const semibold = [divAuthor, divPages, divStatus];
  semibold.forEach((tag) => {
    tag.classList.add("font-semibold");
  });

  const divButton = document.createElement("button");
  const buttonClasses = ['custom-button','place-self-end', 'bg-red-300', 'flex', 'justify-center', 'items-center', 'w-10', 'h-10'];
  addManyClasses(divButton, buttonClasses);
  divButton.addEventListener('click', () => {
    console.log("eoeo");
    //TODO:
    //div deleting + you have to delete from the array on top
  })
  const divChildren = [divTitle, divAuthor, divPages, divStatus, divButton];
  
  // adding text to elements
  divTitle.textContent = sTitle;
  divAuthor.innerHTML = "Author: <span class='font-normal'>"+sAuthor+"</span>";
  divPages.innerHTML = "Pages: <span class='font-normal'>"+sPages+"</span>";
  divStatus.innerHTML = "Status: <span class='font-normal'>"+sRead+"</span>";
  divButton.textContent = "D";
  divChildren.forEach((child) => {
    div.appendChild(child);
  });

  main.appendChild(div);
  
  
}

function addManyClasses(tag, list) {
  list.forEach((element) => {
    tag.classList.add(element);
  });
}

addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");
addElement("text", "autor 123", "300", "not");

// addBtn.addEventListener("click", () => {
//   const title = document.querySelector("#title").value;
//   const author = document.querySelector("#author").value;
//   const pages = document.querySelector("#pages").value;
//   const read = document.querySelector("#read").checked;
//   addBookToLibrary(title, author, pages, read);
// });
// allBtn.addEventListener("click", listAll);

// test
// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not');
// console.log(theHobbit.info());

