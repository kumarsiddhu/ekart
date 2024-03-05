import axios from "axios";

const url ="https://jsonplaceholder.typicode.com/posts/";
//   reading the data from API
export async function getData(){
    return await axios.get(url);
}