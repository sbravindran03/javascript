async function fetchdata(){
    try{
        const repsonse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data=await repsonse.json();
        console.log(data);


    }
    catch(error){
        console.log("error:",error);

    }
}
fetchdata();