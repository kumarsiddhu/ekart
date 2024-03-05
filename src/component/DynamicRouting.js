import React from 'react'
import   {BrowserRouter as Router,Link , Route } from 'react-router-dom'
function DynamicRouting(){

     let users=[
        {name:'anil',id:1},
        {name:'kumar',id:2},
        {name:'sunil',id:3},
        {name:'ram',id:4},
        {name:'rahul',id:5},
     ]
    return(
        <div  className='App1'>
             <Router>
             <h2>Hi , Welcome to dynamic Routing</h2>
             {
                 users.map((item)=>
                 <div><Link to={"/user/"+item.id}>{item.name}</Link></div>)
             }
             </Router>
        </div>
    );
};

export default DynamicRouting;