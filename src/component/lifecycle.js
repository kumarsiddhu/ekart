import React, { Component } from 'react'



 class Lifecycle extends Component {
  state={
    data:[]
  }
    constructor(){
        console.log("inside the constructor")
        super()
        this.state={
            name:"arthy"
        }
    }
  //   static getDerivedStateFromProps(props){
    
  //     return{
  //         name:'nadhiya'
  //     }
  // }
    static getDerivedStateFromProps(props,state){
        console.log("inside the getDerivedStateFromProps")
        console.log('state is:',state)
        return{
            name:'nadhiya',
            title:"title"
        }
    }
   
   async componentDidMount(){
            const res=await fetch('https://jsonplaceholder.typicode.com/posts/')
            const data=await res.json()
            console.log(data)
            this.setState({data : data.splice(0,10)})
            
    }
    
  render() {
    // console.log("inside the render")
    const {data} =this.state;
    return (
      <div>
        <h1>Mounting phase</h1>
        <p>my name is:{this.state.name}</p>
        <p>my name is:{this.props.title}</p>
        <ul>
                 {data.map((item)=>{
                     return <li key={item.id} >{item.body}</li>
                 })}
             </ul>
      </div>
    )
  }
}
export default Lifecycle;