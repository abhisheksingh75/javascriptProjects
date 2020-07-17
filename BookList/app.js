// book constructor
function Book(title, author, isbn) {
  this.title = title
  this.author = author
  this.isbn = isbn
}

// ui constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
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

UI.prototype.deleteBook = function(target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove()
  }
}

UI.prototype.clearFields = function() {
  document.querySelector("#title").value = ""
  document.querySelector("#author").value = ""
  document.querySelector("#isbn").value = ""
}

UI.prototype.showAlert = function(msg, type) {
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
  ui.showAlert("Book removed", "success")
  document.documentElement.scrollTop = 0
})
