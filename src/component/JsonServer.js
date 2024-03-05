import { useEffect} from 'react'
import {useState}  from 'react'
import React from 'react'
import  axios from 'axios'
function JsonServer() {
    const[data,setData] =  useState(null)
    const [loading,setLoding] = useState(true)
    const [error,seterror]   = useState(null)

      
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
             setData(res.data);
             setLoding(false);
          })
          .catch(error =>  {
               seterror(error);
               setLoding(false); 
         });
    },[]);

         if(loading) return <p>Loading....</p>
         if(error) return <p>Error...{error.meassge}</p>
       
    return(

      //displaying part 
         <div className='container' >
            <table className='table border mt-5  table-sm '>
                 <thead>
                    <tr>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Actions</th>
                    </tr>
                 </thead>
                 <tbody>
                     {
                        data.map((d,i)=>{
                           return <tr key={i}  >
                                     <td>{d.id}</td>
                                     <td>{d.name}</td>
                                     <td>{d.email}</td>
                                     <td></td>
                           </tr>
                     })}
                 </tbody>
            </table>
         </div> 
    )
}
export default  JsonServer;