let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author; 
  this.pages = pages; 
  this.isRead = isRead; 
}

Book.prototype.isReadToggle = function() {
  this.isRead = !this.isRead;
}

function addBookToLibrary(bookObj) {
  myLibrary.push(bookObj)
}

addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true))
addBookToLibrary(new Book('The Great Gatsby', 'F.Scott Fitzgerald', 180, false))
addBookToLibrary(new Book('Pride and Prejudice', 'Jane Austen', 279, false))
addBookToLibrary(new Book('Brave New World', 'Aldous Huxley', 268, false))
addBookToLibrary(new Book('Atomic Habits', 'James Clear', 320, false))
addBookToLibrary(new Book('To Kill a Mockingbird', 'Harper Lee', 281, true))
addBookToLibrary(new Book('Fahrenheit 451', 'Ray Bradbury', 159, false))
addBookToLibrary(new Book('Animal Farm', 'George Orwell', 141, false))

 console.log(myLibrary)

function displayBooks(myLibrary) {

  const mainCont = document.querySelector(".main-cont");
  mainCont.innerHTML = "";
  
  myLibrary.forEach((book, index) => {
    const bookCont = document.createElement("div");
    mainCont.appendChild(bookCont);
    bookCont.className = "book-cont";

    const title = document.createElement("div");
    const title1 = document.createElement("p");
    title1.textContent = "TITLE:"
    title1.className = "title1";
    bookCont.appendChild(title1);
    title.textContent = `"${book.title}"`;
    bookCont.appendChild(title);

    const author = document.createElement("div");
    const author1 = document.createElement("p");
    author1.textContent = "AUTHOR:";
    author1.className = "author1";
    bookCont.appendChild(author1)
    author.textContent = `"${book.author}"`;
    bookCont.appendChild(author);

    const pages = document.createElement("div");
    const pages1 = document.createElement("p");
    pages1.textContent = "PAGES:";
    pages1.className = "pages1";
    bookCont.appendChild(pages1);
    pages.textContent = `${book.pages}`;
    bookCont.appendChild(pages);

    const isRead = document.createElement("div");
    isRead.textContent = book.isRead == 1 ? "Read" : "Not read";
    bookCont.appendChild(isRead);
    isRead.className = book.isRead == 1 ? "read" : "notread";
    isRead.setAttribute("data-index", `${index}`);

    const remove = document.createElement("div");
    remove.className = "fa-solid fa-trash-can remove"
    bookCont.appendChild(remove)
    remove.setAttribute("data-index", `${index}`);
    
  });
}

displayBooks(myLibrary)

document.querySelector(".main-cont").addEventListener("click", (e)=> {
   if(e.target.classList.contains("read") || e.target.classList.contains("notread")) {
    const index = e.target.getAttribute("data-index");
    myLibrary[index].isReadToggle();
    displayBooks(myLibrary);
   }
});

document.querySelector(".main-cont").addEventListener("click",(e) => {
  if (e.target.classList.contains("remove")) {
    const index = e.target.getAttribute("data-index");
    myLibrary.splice(index, 1);
    displayBooks(myLibrary)
  }
});

const addBtn = document.querySelector(".addIcon");
const overlayForm = document.querySelector(".overlay-form-cont");
const overlay = document.querySelector(".overlay");

addBtn.addEventListener("click", ()=> {
  overlayForm.style.display = "flex";
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
  overlayForm.style.display = "none";
  overlay.style.display = "none";
});

document.querySelector(".overlay-form-cont").addEventListener("submit", function (e){
  e.preventDefault();


const title = document.querySelector(".title").value;
const author = document.querySelector(".author").value;
const pages = document.querySelector(".pages").value;
const isRead = document.querySelector("#is-read").checked;

const newBook = new Book(title, author, pages, isRead);

addBookToLibrary(newBook);

overlayForm.style.display = "none";
overlay.style.display = "none";

displayBooks(myLibrary);

});