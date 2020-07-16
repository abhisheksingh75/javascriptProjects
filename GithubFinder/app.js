const github = new GitHub()
// serach input
const searchUser = document.querySelector("#searchUser")

// search input event listener
searchUser.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
        UI.showAlert("user not Foundx", "alert alert-danger")
      } else {
        // show profile
        UI.showProfile(data.profile)
        UI.showRepos(data.repos)
      }
    })
  } else {
    // clear profile
    UI.clearProfile()
  }
})
