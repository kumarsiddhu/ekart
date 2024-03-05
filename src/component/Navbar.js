import React from 'react';
import {Link}  from 'react-router-dom';

function Navbar() {
    return (
        <nav>
             <nav>
                 <ul>
                     <Link  to='/' >Home</Link> 
                     <Link  to='/about' >About</Link> 
                      <Link  to='/product' >Product</Link>  
                 </ul>
             </nav>
        </nav>
    );
}; 

export default Navbar;


