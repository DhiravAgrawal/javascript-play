let a = 10;
let b = 20;

let result = a + b;
async function getData(){
    let resultFromServer = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    console.log( resultFromServer.json());
}
getData();
console.log(result);
console.log("Done dana done");
