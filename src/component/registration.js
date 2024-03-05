// import React from 'react'

// function Emo() {
//     const[name,setName] = useState('')
//     const[data,setData] = useState([
//         { id : 1,
//           name:'naveen'
//         },
//         { id : 2,
//          name:'kumar'
//         }
//        ])
//     const handleInputChange=(e)=>{
//          setName(e.target.value)
//     }
//     const  handleSubmit=(e)=>{
//          setData([...data,{
//             id:data.lenght,
//             name:name
//          }])
//     }
//     return (
//          <>
//          <form onSubmit={handleSubmit}>
//               <input type ='text'
//               placeholder= 'type here'
//               value={name}
//               onchange={handleInputChange}/>   
//               <button type='submit'>Submit</button>    
//          </form>
//          </>   
//     );
// };
// export default Emo;