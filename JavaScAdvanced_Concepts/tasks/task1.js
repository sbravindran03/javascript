// Fetch Data: Use the Fetch API to retrieve data from a public API like https://jsonplaceholder.typicode.com/posts or any other API of your choice.
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>(response.json)) // Convert the response to JSON
.then(data=>(console.log(data))) //// Handle the JSON data
.catch(error=>(console.error("error",error))) // Handle any errors