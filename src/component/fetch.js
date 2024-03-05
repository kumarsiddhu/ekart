import React, { Component } from 'react'

class Fetchapi extends Component {
    state={
        data:[]
    }
   async componentDidMount(){
        // console.log("componenetdidmount")
        // fetch('https://fakestoreapi.com/products/1')
        //     .then(res=>res.json())
        //     .then((data)=>console.log(data))
            // .then(dataList=>{
                // this.setState({data:dataList})
            // })
            try{
                const res=await fetch('https://jsonplaceholder.typicode.com/posts/')
                const data=await res.json()
                console.log(data)
                 this.setState({data : data.splice(0,10)})
            }
            catch(error){
                console.log(error)

            }
    }
  render() {
          
    console.log('render method called')
    const {data} =this.state;
    return(
        <div>
             <ul>
                 {data.map((item)=>{
                     return <li key={item.id} >{item.body}</li>
                 })}
             </ul>  
        </div>
    )
     
  }
}
export default Fetchapi;