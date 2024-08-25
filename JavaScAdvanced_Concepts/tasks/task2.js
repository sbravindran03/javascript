// Display Data: Once the data is fetched, display it on the webpage by updating the DOM.
const rsv=document.getElementById('dat-ele');
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>(response.json))
.then(data=>{
    data.forEach(post =>{
        const postelement=document.createElement('div');
        postelement.textContent=`${post.title}:${post.body}`
        rsv.appendchild(postelement);
    });
    
})
.catch(error=>console.error(error));