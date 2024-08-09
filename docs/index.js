const addBtn = document.querySelector("#addBtn");
const allBtn = document.querySelector("#all");

const myLibrary = [];

myLibrary.forEach((book) => {
  addElement(book.title, book.author, book.pages, book.read);
});

// const titles = myLibrary.map(Book => Book.title);

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

function addElement(sTitle, sAuthor, sPages, sRead) {
  myLibrary.push(new Book(sTitle, sAuthor, sPages, sRead));
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
  const buttonClasses = [
    "custom-button",
    "place-self-end",
    "bg-red-300",
    "flex",
    "justify-center",
    "items-center",
    "w-10",
    "h-10",
  ];
  addManyClasses(divButton, buttonClasses);
  divButton.addEventListener("click", () => {
    let index = myLibrary.findIndex(
      (book) => book.title == divButton.parentNode.firstChild.textContent,
    );
    if (index > -1) {
      myLibrary.splice(index, 1);
    }
    console.log(myLibrary);
    divButton.parentNode.remove();
  });
  const divChildren = [divTitle, divAuthor, divPages, divStatus, divButton];

  // adding text to elements
  divTitle.textContent = sTitle;
  divAuthor.innerHTML =
    "Author: <span class='font-normal'>" + sAuthor + "</span>";
  divPages.innerHTML = "Pages: <span class='font-normal'>" + sPages + "</span>";
  divStatus.innerHTML =
    "Status: <span class='font-normal'>" + sRead + "</span>";
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

// addBtn.addEventListener("click", () => {
//   const title = document.querySelector("#title").value;
//   const author = document.querySelector("#author").value;
//   const pages = document.querySelector("#pages").value;
//   const read = document.querySelector("#read").checked;
//   addElement(title, author, pages, read);
// });
// allBtn.addEventListener("click", listAll);
//
addElement("The Hobbit", "J.R.R. Tolkien", 310, "not read");
addElement("1984", "George Orwell", 328, "read");
addElement("Test Book", "Author Test", 123, "read");
addElement("To Kill a Mockingbird", "Harper Lee", 336, "read");
addElement("The Great Gatsby", "F. Scott Fitzgerald", 180, "read");
addElement("Pride and Prejudice", "Jane Austen", 279, "read");
addElement("The Catcher in the Rye", "J.D. Salinger", 224, "read");
addElement("Brave New World", "Aldous Huxley", 288, "read");
addElement("The Lord of the Rings", "J.R.R. Tolkien", 1178, "read");
addElement("Moby-Dick", "Herman Melville", 720, "read");
addElement(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  223,
  "read",
);
console.log(myLibrary);
