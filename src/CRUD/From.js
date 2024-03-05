import React, { useState } from 'react';

const From = (props) => {
  const [product,setProducts]=useState(props.data)   
  let changeFormData=(event)=>{
    const {name,value} = event.target;
    setProducts({...product,[name]:value})
  }
  return (
    <div className='form-overlay'>
      <form>
        <div className='form-group'>
          <label>Name:</label>
          <input  className='form-control mt-2' value={product.name} type='text' name='name' placeholder='Enter product Name' onChange={changeFormData}/>
        </div>
        <div className='form-group'>
          <label>Price:</label>
          <input className='form-control mt-2'value={product.price} type='number' name='price' placeholder='Enter Price' onChange={changeFormData}/>
        </div>
        <div className='form-group'>
          <label>Categery:</label>
          <select className='form-control mt-2' value={product.categery} name='categery'onChange={changeFormData}>
            <option value='-1'></option>
            <option value='mobiles'>Mobiles</option>
            <option value='laptops'>Laptops</option>
            <option value='tv'>TV's</option>
           </select>   
        </div>
        <button className='btn btn-primary float-end' onClick={(e)=>{e.preventDefault(); props.add(product)}}>Send</button>
        <button className='btn btn-danger float-end 'onClick={(e)=>{e.preventDefault()
           props.close()} }>Cancel</button>

      </form>
    </div>
  );
}

export default From;

