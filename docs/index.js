const addBtn = document.querySelector("#addBtn");
const allBtn = document.querySelector("#all");

const myLibrary = [];

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

// classes in arrays

const divClasses = [
  "element",
  "border-2",
  "rounded",
  "p-6",
  "flex",
  "flex-col",
  "border-black",
  "justify-center",
  "h-64",
  "w-72",
];
const titleClasses = ["font-bold", "pb-3", "text-xl", "text-wrap", "basis-1/4"];
const readClasses = [
  "flex",
  "justify-center",
  "items-center",
  "w-10",
  "h-10",
  "bg-green-400",
  "custom-button",
];
const buttonClasses = [
  "custom-button",
  "place-self-end",
  "bg-red-400",
  "flex",
  "justify-center",
  "items-center",
  "w-10",
  "h-10",
];
const btnsParentClasses = ["flex", "justify-between", "pt-2"];
// elements from html

function addElement(sTitle, sAuthor, sPages, sRead) {
  myLibrary.push(new Book(sTitle, sAuthor, sPages, sRead));
  const main = document.querySelector("#main");
  const div = document.createElement("div");
  const divTitle = document.createElement("h2");
  const divAuthor = document.createElement("p");
  const divPages = document.createElement("p");
  const divStatus = document.createElement("p");
  const semibold = [divAuthor, divPages, divStatus];
  const btnsParent = document.createElement("div");
  const readButton = document.createElement("button");
  const divButton = document.createElement("button");
  addManyClasses(div, divClasses);
  addManyClasses(divTitle, titleClasses);
  addManyClasses(btnsParent, btnsParentClasses);
  addManyClasses(readButton, readClasses);
  if (sRead == "not read") {
    readButton.classList.toggle("bg-red-500");
    readButton.classList.toggle("bg-green-400");
  }
  addManyClasses(divButton, buttonClasses);
  semibold.forEach((tag) => {
    tag.classList.add("font-semibold");
  });

  const divChildren = [divTitle, divAuthor, divPages, divStatus, btnsParent];
  divChildren.forEach((child) => {
    div.appendChild(child);
  });
  btnsParent.appendChild(readButton);
  btnsParent.appendChild(divButton);
  // buttons functions
  divButton.addEventListener("click", () => {
    let index = myLibrary.findIndex(
      (book) => book.title == div.firstChild.textContent,
    );
    if (index > -1) {
      myLibrary.splice(index, 1);
    }
    divButton.parentNode.parentNode.remove();
  });
  readButton.addEventListener("click", () => {
    if (div.children[3].textContent == "Status: read") {
      readButton.classList.toggle("bg-red-500");
      readButton.classList.toggle("bg-green-400");
      divStatus.innerHTML = "Status: <span class='font-normal'>not read</span>";
    } else {
      readButton.classList.toggle("bg-red-500");
      readButton.classList.toggle("bg-green-400");
      divStatus.innerHTML = "Status: <span class='font-normal'>read</span>";
    }
  });

  // adding text to elements
  divTitle.textContent = sTitle;
  divAuthor.innerHTML =
    "Author: <span class='font-normal'>" + sAuthor + "</span>";
  divPages.innerHTML = "Pages: <span class='font-normal'>" + sPages + "</span>";
  divStatus.innerHTML =
    "Status: <span class='font-normal'>" + sRead + "</span>";
  readButton.textContent = "R";
  divButton.textContent = "D";

  main.appendChild(div);
}

function addManyClasses(tag, list) {
  list.forEach((element) => {
    tag.classList.add(element);
  });
}

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

const addMenu = document.querySelector("#addMenu");
const addBookBtn = document.querySelector("#addBookBtn");
const main = document.querySelector("#main");
const addP = document.querySelector("#addP");
addBookBtn.addEventListener("click", () => {
  addMenu.classList.toggle("hidden");
  addMenu.classList.toggle("flex");
  main.classList.toggle("blur");
  addP.classList.toggle("rotate-45");
});

addBtn.addEventListener("click", () => {
  addMenu.classList.toggle("hidden");
  addMenu.classList.toggle("flex");
  main.classList.toggle("blur");
  addP.classList.toggle("rotate-45");

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let readValue;
  if (read == true) {
    readValue = "read";
  } else {
    readValue = "not read";
  }
  addElement(title, author, pages, readValue);
  const form = document.querySelector("#addForm");
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);
  form.reset();
});

// searching

const search = document.querySelector("#search");
search.addEventListener("input", () => {
  const searched = search.value;
  const divs = document.querySelectorAll(".element");
  divs.forEach((card) => {
    if (card.firstChild.textContent.toLowerCase().includes(searched)) {
      card.classList.add("flex");
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
      card.classList.remove("flex");
    }
  });
});
