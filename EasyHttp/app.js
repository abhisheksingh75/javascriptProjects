const http = new easyHttp()

// // Get Post
// http.get("https://jsonplaceholder.typicode.com/todos/1", function(err, res) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(res)
//   }
// })

// create data
const data = {
  title: "custom post",
  body: "This is a custom post",
}

// // create post
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   err,
//   res
// ) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(res)
//   }
// })

// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
//   err,
//   res
// ) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("result:", res)
//   }
// })

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, res) {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
  }
})
