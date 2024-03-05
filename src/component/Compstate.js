import React, { useState } from 'react'

function Compstate() {
    const[data,setData] = useState([
    { id : 1,
      name:'naveen'
    },
    { id : 2,
     name:'kumar'
    }
   ])

    
    return(
      <div>
          <h1>Learning Variation of states</h1>
          <ul>
              {data.map((ele)=>(
                 <li key={ele.id} > {ele.name} </li>
              ))}
          </ul>
      </div>  
    );   
};

export default Compstate;