import  React, { useState } from 'react'
import axios from 'axios'


function Axioslist() {
      const [data, setData] = useState([]);

     async function getData() {
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
         console.log(response);
      }
}

export default Axioslist