async function example() {
    const response=await axios.post("https://jsonplaceholder.typicode.com/posts/1",{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    })
    const data=await response.json();
    console.log(data.title);
    
}
example()
//fetch returns a promise
//await response.json(); why await for this line even if response.json is sync? // it returns a promise 
//difference betweeen GET and fetch wrt client and server side? refer notes