import React from 'react';

function Card(props) {
    return (
           <div  className='container' >

                 <div className='car' >
                 <h1> card component</h1>
                 <h1> Dummy Card</h1>
                 <h1>{props.title}</h1>
                </div>    
        </div>
    )
}

export default Card;