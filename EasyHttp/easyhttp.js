function easyHttp() {
  this.http = new XMLHttpRequest()
}

// make an http get request
easyHttp.prototype.get = function(url, callback) {
  this.http.open("GET", url, true)
  const httpRef = this.http
  //   on http load
  this.http.onload = function() {
    if (httpRef.status === 200) {
      callback(null, httpRef.responseText)
    } else {
      callback("Error: " + httpRef.status)
    }
  }

  this.http.send()
}

// make an http post request
easyHttp.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true)
  this.http.setRequestHeader("content-type", "application/json")
  const httpRef = this.http
  //   on http load
  this.http.onload = function() {
    callback(null, httpRef.responseText)
  }
  this.http.send(JSON.stringify(data))
}
// make an http put request
easyHttp.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true)
  this.http.setRequestHeader("content-type", "application/json")
  const httpRef = this.http
  //   on http load
  this.http.onload = function() {
    callback(null, httpRef.responseText)
  }
  this.http.send(JSON.stringify(data))
}

// make an http delete request
easyHttp.prototype.delete = function(url, callback) {
  this.http.open("delete", url, true)
  const httpRef = this.http
  //   on http load
  this.http.onload = function() {
    if (httpRef.status === 200) {
      callback(null, "post deleted")
    } else {
      callback("Error: " + httpRef.status)
    }
  }

  this.http.send()
}
