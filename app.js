// Library Array
let library = [];

// Book Class
class Book {
    constructor() {
        this.name = name;
        this.author = author;
        this.isRead = function () {
        };
    }

    addBookToLibrary() {

    }

    readOrNotRead() {

    }

    bookReadCounter() {

    }

    pagesReadCounter() {

    }

    deleteBook() {
        alert("Are you sure you want to delete this book?")
    }
}

// Selector
const addBook = document.querySelector(".add-book-btn");
const addBookPopUp = document.querySelector(".add-book-pop-up");
const readStatus = document.querySelector("click-read");
const removeBook = document.querySelector(".delete")

// Listeners
removeBook.addEventListener("click", deleteBook())