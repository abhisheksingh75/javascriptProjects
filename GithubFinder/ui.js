class UI {
  constructor() {
    this.profile = document.querySelector("#profile")
  }
  //   show profile
  static showProfile = (user) => {
    profile.innerHTML = `<div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="" class="img-fluid mb-3 mr-3" />
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
                <div class="mb-3">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                </div>
                <br/>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>  `
  }

  //   clear profile
  static clearProfile() {
    profile.innerHTML = ""
  }

  static showAlert(msg, alertType) {
    UI.clearAlert()
    //   create div
    const div = document.createElement("div")
    // add classes
    div.className = alertType
    // add text
    div.appendChild(document.createTextNode(msg))
    // get parent
    const container = document.querySelector(".searchContainer")
    // get the searchBox
    const search = document.querySelector(".search")
    // insert alert
    container.insertBefore(div, search)
    setTimeout(() => {
      UI.clearAlert()
    }, 3000)
  }

  static clearAlert() {
    const currentAlert = document.querySelector(".alert")
    if (currentAlert) {
      currentAlert.remove()
    }
  }
  static showRepos(repos) {
    let output = ""
    repos.forEach((repo) => {
      output += `<div class="card card-body border border-dark mb-2 ">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">
                    ${repo.name}
                    </a>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-primary">
                    Stars: ${repo.stargazers_count}
                    </span>
                    <span class="badge badge-secondary">
                    watchers: ${repo.watchers_count}
                    </span>
                    <span class="badge badge-success">Fork : ${repo.forks_count}</span>
                </div>
            </div>
        </div>`
    })
    // output the repostory
    document.querySelector("#repos").innerHTML = output
  }
}
