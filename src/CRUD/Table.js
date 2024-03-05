import React from 'react';
const Table = (props) => {
  return (
    <table className='table m-3'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.product.map((data)=>
        
        (
        <tr key={data.id} >
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td>{data.categery}</td>
            <div className='actions'>
            <button className='btn btn-primary' onClick={()=>{props.edit(data)}}>Edit</button>
            <button className='btn btn-danger' onClick={()=>{props.delete(data.id)}}>Delete</button>
          </div>
        </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
