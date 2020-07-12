// listen for submit
document.querySelector("#loan-form").addEventListener("submit", function(e) {
  e.preventDefault()
  //   hide results
  document.querySelector("#results").style.display = "none"
  //   show loader
  document.querySelector("#loading").style.display = "block"
  setTimeout(calcResults, 2000)
})

function calcResults(e) {
  const amount = document.querySelector("#amount")
  const interest = document.querySelector("#interest")
  const years = document.querySelector("#years")
  const monthlyPayment = document.querySelector("#monthly-payment")
  const totalPayment = document.querySelector("#total-payment")
  const totalInterest = document.querySelector("#total-interest")

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value) / 100 / 12
  const calculatedPayments = parseFloat(years.value) * 12

  //   compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments)
  const monthly = (principal * x * calculatedInterest) / (x - 1)
  if (isFinite(monthly)) {
    monthlyPayment.appendChild(document.createTextNode(monthly.toFixed(2)))
    totalPayment.appendChild(
      document.createTextNode((monthly * calculatedPayments).toFixed(2))
    )
    totalInterest.appendChild(
      document.createTextNode(
        (monthly * calculatedPayments - principal).toFixed(2)
      )
    )
    //   hide results
    document.querySelector("#results").style.display = "block"
  } else {
    showError("Please check your numbers")
  }
  //   hide loader
  document.querySelector("#loading").style.display = "none"
}

function showError(error) {
  const card = document.querySelector(".card")
  const heading = document.querySelector(".heading")

  // create a div
  const errorDiv = document.createElement("div")
  //   add class
  errorDiv.className = "red-text text-darken-2 red lighten-3 center-align alert"
  // create text node
  errorDiv.appendChild(document.createTextNode(error))
  //   insert above heading
  card.insertBefore(errorDiv, heading)

  //   clear error after 3sec
  setTimeout(clearError, 3000)
}

function clearError() {
  document.querySelector(".alert").remove()
}
