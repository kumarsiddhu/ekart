import React , { useEffect, useState} from 'react';

function  Counter() {
    const[count , setCount] = useState(0);
    useEffect(() =>{
       console.log("Welcome to javascript")
    },[])
    return (
         <div>
            <p>you clicked {count} times </p>
            <button onClick= {() => setCount(count+1)}>
            clickme</button>
         </div>
    );
}

export default Counter; 
