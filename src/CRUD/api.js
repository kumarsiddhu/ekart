// Axios is a popular JavaScript library for making HTTP 
// requests from a web browser or a Node. js server.
// It performs various operations,
// such as retrieving and sending data and handling responses.


import axios from "axios";

const url=" http://localhost:3000/product"
 
export async function getData(){
 return await axios.get(url)
}
export async function deleteData(id){
    return await axios.delete(`${url}/${id}`)
   }
   export async function postData(data){
    return await axios.post(url,data,{
        headers:{
            'Content-Type':'application/json'
        }
    })
}
    export async function putData(id,data){
        return await axios.put(url +"/"+ id,data,{
            headers:{
                'Content-Type':'application/json'
            }
        })
   }
