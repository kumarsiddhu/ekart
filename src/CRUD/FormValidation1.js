import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Validation from './Validation';

function FormValidation1(){
  const[errors,setErrors]=useState({})
    const [values,setValues]=useState({
        name:'',
        email:'',
        password:''
    })
    function handleInput (event){
      const newobj = { ...values, [event.target.name]: event.target.value };
      setValues(newobj);
    };
    
   
    function handleValidation(event){
    event.preventDefault();
    setErrors(Validation(values))
    }
  return (
    <div className='formValidation '>
      <form className='fromForValidation' onSubmit={handleValidation}>
        <h2>Login Form</h2>
      <div className="mb-3">
    <label htmlFor="nameInputName" className="form-label"><strong>User Name</strong></label>
    <input type="text" name="name" className="form-control" id="nameInputName" aria-describedby="nameHelp" onChange={handleInput}/>
    {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"><strong>Email address</strong></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInput}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label"><strong>Password
        </strong></label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleInput}/>
    {errors.password && <p style={{color:'red'}}>{errors.password}</p>}

  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  );
}

export default FormValidation1;
