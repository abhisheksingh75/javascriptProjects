class GitHub {
  constructor() {
    this.clientId = "405cb81647346dabea54"
    this.secretId = "baee5082df5733b42621616dcd68a85573ad39d5"
    this.repos_count = 5
    this.repos_sort = "created: asc"
  }

  async getUser(user) {
    const profileReponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.secretId}`
    )
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.clientId}&client_secret=${this.secretId}`
    )
    const profileData = await profileReponse.json()
    const repoData = await repoResponse.json()

    return {
      profile: profileData,
      repos: repoData,
    }
  }
}
