import axios from "axios";

// interface 
interface Post {
    userId: number; 
    title: string; 
    body: string; 
}

const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url).then((response) => {
    const post = response.data as Post;

    const userId = post.userId
    const title = post.title 
    const body = post.body 

    console.log(userId, title, body) 
})


// classes 
class Phone {} 
let phone = new Phone(); 

// object  
let product: {name: string; price: number} = {
    name: 'pen', 
    price: 15 
}