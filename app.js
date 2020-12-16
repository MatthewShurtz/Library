import { Book } from "classes.js";
// Array for books
let mattsLibrary = [];

// Selectors
let addBookBtn = document.getElementById("add-book-btn");
let titleList = document.getElementById("titles");
let authorList = document.getElementById("authors");
let pagesList = document.getElementById("pages");

// Function to add books on the UI
function addBook() {
  let userTitle = document.getElementById("title").value;  
  let userAuthor = document.getElementById("author").value;  
  let userPages = document.getElementById("page-number").value;  
  let newTitleLi = document.createElement("li");
  let newAuthorLi = document.createElement("li");
  let newPagesLi = document.createElement("li");
  let userBook = new Book(userTitle, userAuthor, userPages);
  userBook.push(mattsLibrary);
  console.log(mattsLibrary); 

} 