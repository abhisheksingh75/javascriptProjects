// add event listeners
document.querySelector("#name").addEventListener("keyup", validateName)
document.querySelector("#zipcode").addEventListener("keyup", validateZip)
document.querySelector("#email").addEventListener("keyup", validateEmail)
document.querySelector("#phone").addEventListener("keyup", validatePhone)

function validateName() {
  const name = document.querySelector("#name")
  const re = /^[a-zA-Z]{2,10}$/
  if (!re.test(name.value)) {
    name.classList.add("is-invalid")
  } else {
    name.classList.remove("is-invalid")
  }
}

function validateZip() {
  const zipcode = document.querySelector("#zipcode")
  const re = /^[0-9]{5}(-[0-9]{4})?$/
  if (!re.test(zipcode.value)) {
    zipcode.classList.add("is-invalid")
  } else {
    zipcode.classList.remove("is-invalid")
  }
}

function validateEmail() {
  const email = document.querySelector("#email")
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]+)$/
  if (!re.test(email.value)) {
    email.classList.add("is-invalid")
  } else {
    email.classList.remove("is-invalid")
  }
}
function validatePhone() {
  const phone = document.querySelector("#phone")
  const re = /^\(?\d{3}\)?[\-\.\ ]?\d{3}[\-\.\ ]?\d{4}$/
  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid")
  } else {
    phone.classList.remove("is-invalid")
  }
}
