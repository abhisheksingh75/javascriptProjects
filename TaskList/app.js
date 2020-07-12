const form = document.querySelector("#task-form")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")
const filter = document.querySelector("#filter")
const taskInput = document.querySelector("#task")

// load all event listerns
loadEventListeneres()

// load
function loadEventListeneres() {
  // add task event
  document.addEventListener("DOMContentLoaded", getTasks)
  form.addEventListener("submit", addTask)
  taskList.addEventListener("click", removeTask)
  clearBtn.addEventListener("click", clearTasks)
  filter.addEventListener("keyup", filterTask)
}

function getTasks() {
  let tasks = []
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }

  tasks.forEach(function(task) {
    //   create li element
    const li = document.createElement("li")
    //   add class
    li.className = "collection-item"
    //   create text node and append to li
    li.appendChild(document.createTextNode(task))

    //creat new link element
    const link = document.createElement("a")
    //add class
    link.className = "delete-item secondary-content"
    //   add icon html
    link.innerHTML = '<i class="fa fa-times"></i>'
    li.appendChild(link)

    taskList.appendChild(li)
  })
}

function addTask(e) {
  e.preventDefault()
  if (taskInput.value === "") {
    alert("Add a Task")
    return
  }
  //   create li element
  const li = document.createElement("li")
  //   add class
  li.className = "collection-item"
  //   create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value))

  //creat new link element
  const link = document.createElement("a")
  //add class
  link.className = "delete-item secondary-content"
  //   add icon html
  link.innerHTML = '<i class="fa fa-times"></i>'
  li.appendChild(link)

  storeTaskToLocalStorage(taskInput.value)

  //clear the input
  taskInput.value = ""
  taskList.appendChild(li)
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove()

      //remove task from ls
      removeTaskfromLS(e.target.parentElement.parentElement)
    }
  }
}

function removeTaskfromLS(taskItem) {
  let tasks = []
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  })
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

// clear task
function clearTasks(e) {
  e.preventDefault()
  taskList.innerHTML = ""
  // faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }

  clearLocalStorage()
}

function clearLocalStorage() {
  localStorage.removeItem("tasks")
}

function filterTask(e) {
  const text = e.target.value.toLowerCase()
  console.log(text)
  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block"
    } else {
      task.style.display = "None"
    }
  })
}

function storeTaskToLocalStorage(task) {
  let tasks = []
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }

  tasks.push(task)
  localStorage.setItem("tasks", JSON.stringify(tasks))
}
