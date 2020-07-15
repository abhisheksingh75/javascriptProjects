class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

class UI {
  addBookToList(book) {
    const list = document.querySelector("#book-list")
    //   table row
    const row = document.createElement("tr")
    //   insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`

    list.appendChild(row)
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove()
    }
  }
  clearFields() {
    document.querySelector("#title").value = ""
    document.querySelector("#author").value = ""
    document.querySelector("#isbn").value = ""
  }
  showAlert(msg, type) {
    //create element
    const msgEle = document.createElement("div")
    //   add className
    msgEle.className = `${type} alert`
    //   add text
    msgEle.appendChild(document.createTextNode(msg))
    //   get parent
    const container = document.querySelector(".container")
    const form = document.querySelector("#book-form")
    container.insertBefore(msgEle, form)

    //   timeout after three seconds
    setTimeout(function() {
      document.querySelector(".alert").remove()
    }, 3000)
  }
}

class Store {
  static getBooks() {
    let books
    if (localStorage.getItem("books") === null) {
      books = []
    } else {
      books = JSON.parse(localStorage.getItem("books"))
    }
    return books
  }

  static displayBooks() {
    const books = Store.getBooks()
    const ui = new UI()
    books.forEach((book) => {
      ui.addBookToList(book)
    })
  }

  static addBook(book) {
    const books = Store.getBooks()
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
  }

  static removeBook(isbn) {
    const books = Store.getBooks()
    books.forEach((book, idx) => {
      if (book.isbn === isbn) {
        books.splice(idx, 1)
      }
    })
    localStorage.setItem("books", JSON.stringify(books))
  }
}

// event listener
document.querySelector("#book-form").addEventListener("submit", function(e) {
  e.preventDefault()
  // get form value
  const title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value

  const book = new Book(title, author, isbn)

  //   Instantiate UI
  const ui = new UI()

  //   validate
  if (title === "" || author === "" || isbn === "") {
    //   error alert
    ui.showAlert("Data field is empty", "error")
    return
  }

  //   add book to list
  ui.addBookToList(book)
  //   add to local storage
  Store.addBook(book)
  // show success alert
  ui.showAlert("Book Added successfull", "success")
  //   clear fields
  ui.clearFields()
})

document.querySelector("#book-list").addEventListener("click", function(e) {
  e.preventDefault()

  //   Instantiate UI
  const ui = new UI()
  ui.deleteBook(e.target)
  //   remove element from localstorage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
  ui.showAlert("Book removed", "success")
  document.documentElement.scrollTop = 0
})

document.addEventListener("DOMContentLoaded", Store.displayBooks)
