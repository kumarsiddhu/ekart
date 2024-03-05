import React , {useState} from 'react';

const NewTodoList = () => {
const[task,setTask]=useState();
const[todos,setTodos]=useState([])


const handleInput=(e)=>{
   setTask(e.target.value);
}      


const handleSubmit=(e)=>{
e.preventDefault();
console.log(task);
// const  taskentry={id:todos.length === 0 ? 1 :todos[todos.length-1]+1,taskname:task,completed:false}
const newToods =[...todos,task ]
setTodos(newToods);
setTask("")
}

const deleteHandler = (indexVal) => {
    console.log(indexVal);
    const newTodo = todos.filter((todo,index) => index!==indexVal);
    setTodos(newTodo)
} 



return(
    <div>
    <center>
    <f  onSubmit= {handleSubmit} >
    <h1> To do List </h1>
    <input type="text" name="task" id="task" value={task}  placeholder='enter your name'  onChange ={handleInput}/>
    <button type="submit" >Add</button>
    </f  orm>
    <Todolist 
    todolist={todos} 
    deleteHandler={deleteHandler}
    />
    </center>
    </div>    
);

}

const Todolist = (props) =>
{
    const{todolist,deleteHandler} = props

return (
       <div>
            {todolist.map((todo,index)=>
                <div key={index} >
                    <h5>  {todo} <button onClick={()=>deleteHandler(index)}>Delete</button></h5>
                </div>)}
       </div> 
);
};
export default NewTodoList;
